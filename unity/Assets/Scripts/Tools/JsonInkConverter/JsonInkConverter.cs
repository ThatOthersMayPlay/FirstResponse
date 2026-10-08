using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections.Generic;
using System.Text;

public class JsonInkConverter : EditorWindow
{
    private string jsonFilePath = "";
    private string inkFilePath = "";
    private StoryData storyData;
    private ValidationResult validationResult;

    [MenuItem("Tools/Json → Ink Converter")]
    public static void ShowWindow()
    {
        GetWindow<JsonInkConverter>("Json → Ink Converter");
    }

    void OnGUI()
    {
        GUILayout.Label("JSON → Ink Converter", EditorStyles.boldLabel);
        GUILayout.Space(8);

        GUILayout.Label("JSON File");
        jsonFilePath = EditorGUILayout.TextField(jsonFilePath);
        if (GUILayout.Button("Browse JSON"))
            jsonFilePath = EditorUtility.OpenFilePanel("Select JSON", "", "json");

        GUILayout.Space(6);

        GUILayout.Label("Ink Output File");
        inkFilePath = EditorGUILayout.TextField(inkFilePath);
        if (GUILayout.Button("Save Ink File"))
            inkFilePath = EditorUtility.SaveFilePanel("Save Ink", "", "Story", "ink");

        GUILayout.Space(12);

        GUILayout.BeginHorizontal();
        if (GUILayout.Button("Validate JSON", GUILayout.Height(30)))
            ValidateJsonFile();

        if (GUILayout.Button("Convert → Ink", GUILayout.Height(30)))
            ConvertJsonToInk();
        GUILayout.EndHorizontal();

        GUILayout.Space(10);

        DrawValidationResults();
    }

    // ─────────────────────────────────────────────────────────────
    // VALIDATION
    // ─────────────────────────────────────────────────────────────

    void ValidateJsonFile()
    {
        validationResult = new ValidationResult();

        if (!File.Exists(jsonFilePath))
        {
            validationResult.AddError("JSON file not found");
            return;
        }

        try
        {
            var json = File.ReadAllText(jsonFilePath, Encoding.UTF8);
            storyData = JsonUtility.FromJson<StoryData>(json);

            if (storyData == null)
            {
                validationResult.AddError("JSON could not be parsed by JsonUtility");
                return;
            }

            ValidateStoryStructure(storyData);
        }
        catch (System.Exception e)
        {
            validationResult.AddError($"Exception: {e.Message}");
        }
    }

    void ValidateStoryStructure(StoryData data)
    {
        if (data.variables == null)
            validationResult.AddError("Missing 'variables' object");

        if (data.knots == null || data.knots.Count == 0)
        {
            validationResult.AddError("No knots defined");
            return;
        }

        var knotIds = new HashSet<string>();

        for (int k = 0; k < data.knots.Count; k++)
        {
            var knot = data.knots[k];

            if (string.IsNullOrWhiteSpace(knot.id))
                validationResult.AddError($"Knot #{k} has empty id");

            if (!knotIds.Add(knot.id))
                validationResult.AddError($"Duplicate knot id '{knot.id}'");

            if (knot.choices == null)
                continue;

            for (int c = 0; c < knot.choices.Count; c++)
            {
                var choice = knot.choices[c];

                if (choice.effects == null)
                    continue;

                for (int e = 0; e < choice.effects.Count; e++)
                {
                    ValidateEffect(
                        choice.effects[e],
                        knot.id,
                        choice.text,
                        k, c, e
                    );
                }
            }
        }
    }

    void ValidateEffect(
        StoryEffect effect,
        string knotId,
        string choiceText,
        int k, int c, int e)
    {
        if (effect == null)
        {
            AddEffectError("Effect is null");
            return;
        }

        bool hasRaw = !string.IsNullOrWhiteSpace(effect.raw);
        bool hasAssign = effect.assign != null &&
                         (!string.IsNullOrWhiteSpace(effect.assign.variable) ||
                          !string.IsNullOrWhiteSpace(effect.assign.value));
        bool hasFunction = effect.function != null &&
                           (!string.IsNullOrWhiteSpace(effect.function.name) ||
                            (effect.function.parameters != null && effect.function.parameters.Length > 0));

        int defined =
            (hasRaw ? 1 : 0) +
            (hasAssign ? 1 : 0) +
            (hasFunction ? 1 : 0);

        if (defined == 0)
        {
            AddEffectError("Effect must define exactly one of: raw | assign | function");
            return;
        }

        if (defined > 1)
        {
            AddEffectError("Effect defines multiple types (only one allowed)");
            return;
        }

        if (hasAssign)
        {
            if (string.IsNullOrWhiteSpace(effect.assign.variable) ||
                string.IsNullOrWhiteSpace(effect.assign.value))
            {
                AddEffectError("Assignment requires 'variable' and 'value'");
            }
        }

        if (hasFunction)
        {
            if (string.IsNullOrWhiteSpace(effect.function.name))
                AddEffectError("Function requires 'name'");
        }

        void AddEffectError(string msg)
        {
            validationResult.AddError(
                $"{msg}\n" +
                $"Knot: {knotId}, Choice: '{choiceText}'\n" +
                $"JSON Path: knots[{k}].choices[{c}].effects[{e}]"
            );
        }
    }

    // ─────────────────────────────────────────────────────────────
    // CONVERSION
    // ─────────────────────────────────────────────────────────────

    void ConvertJsonToInk()
    {
        if (validationResult == null || !validationResult.IsValid)
        {
            ValidateJsonFile();
            if (!validationResult.IsValid)
            {
                EditorUtility.DisplayDialog(
                    "Invalid JSON",
                    "Fix validation errors before converting.",
                    "OK"
                );
                return;
            }
        }

        var ink = GenerateInk();
        File.WriteAllText(inkFilePath, ink, Encoding.UTF8);
        AssetDatabase.Refresh();
    }

    string GenerateInk()
    {
        var sb = new StringBuilder();

        sb.AppendLine("// Generated by JsonInkConverter\n");

        sb.AppendLine($"VAR stefania_trust = {storyData.variables.stefania_trust}");
        sb.AppendLine($"VAR player_perspective = \"{storyData.variables.player_perspective}\"");
        sb.AppendLine("\n-> intro\n");

        foreach (var knot in storyData.knots)
        {
            sb.AppendLine($"=== {knot.id}");

            if (knot.lines != null)
            {
                foreach (var line in knot.lines)
                    sb.AppendLine(line);
            }

            sb.AppendLine();

            if (knot.choices == null || knot.choices.Count == 0)
            {
                sb.AppendLine("-> DONE\n");
                continue;
            }

            foreach (var choice in knot.choices)
                WriteChoice(sb, choice);

            sb.AppendLine();
        }

        return sb.ToString();
    }

    void WriteChoice(StringBuilder sb, StoryChoice choice)
    {
        sb.AppendLine($"+ {choice.text} -> {choice.target}");

        if (choice.effects == null)
            return;

        foreach (var effect in choice.effects)
            WriteInkEffect(sb, effect);
    }

    void WriteInkEffect(StringBuilder sb, StoryEffect effect)
    {
        if (!string.IsNullOrWhiteSpace(effect.raw))
        {
            sb.AppendLine($"    ~ {effect.raw}");
        }
        else if (effect.assign != null)
        {
            sb.AppendLine(
                $"    ~ {effect.assign.variable} = \"{effect.assign.value}\""
            );
        }
        else if (effect.function != null)
        {
            sb.AppendLine(
                $"    ~ {effect.function.name}({string.Join(", ", effect.function.parameters)})"
            );
        }
    }

    // ─────────────────────────────────────────────────────────────
    // UI
    // ─────────────────────────────────────────────────────────────

    void DrawValidationResults()
    {
        if (validationResult == null)
            return;

        GUILayout.Space(10);
        GUILayout.Label("Validation", EditorStyles.boldLabel);

        if (validationResult.IsValid)
        {
            GUILayout.Label("✅ JSON is valid", EditorStyles.helpBox);
            return;
        }

        GUILayout.Label("❌ Errors", EditorStyles.helpBox);

        foreach (var error in validationResult.Errors)
        {
            GUILayout.Label(error, EditorStyles.wordWrappedLabel);

            GUILayout.BeginHorizontal();

            if (GUILayout.Button("Copy Error", GUILayout.Width(90)))
                GUIUtility.systemCopyBuffer = error;

            if (GUILayout.Button("Copy JSON Path", GUILayout.Width(110)))
            {
                var idx = error.IndexOf("JSON Path:");
                if (idx >= 0)
                    GUIUtility.systemCopyBuffer = error.Substring(idx + 10).Trim();
            }

            GUILayout.EndHorizontal();

            GUILayout.Space(6);
        }
    }
}

// ─────────────────────────────────────────────────────────────
// DATA MODELS
// ─────────────────────────────────────────────────────────────

[System.Serializable]
public class StoryData
{
    public StoryVariables variables;
    public List<StoryKnot> knots;
}

[System.Serializable]
public class StoryVariables
{
    public int stefania_trust;
    public string player_perspective;
}

[System.Serializable]
public class StoryKnot
{
    public string id;
    public List<string> lines;
    public List<StoryChoice> choices;
}

[System.Serializable]
public class StoryChoice
{
    public string text;
    public string target;
    public List<StoryEffect> effects;
}

[System.Serializable]
public class StoryEffect
{
    public string raw;
    public EffectAssignment assign;
    public EffectFunction function;
}

[System.Serializable]
public class EffectAssignment
{
    public string variable;
    public string value;
}

[System.Serializable]
public class EffectFunction
{
    public string name;
    public string[] parameters;
}

// ─────────────────────────────────────────────────────────────
// VALIDATION RESULT
// ─────────────────────────────────────────────────────────────

public class ValidationResult
{
    public List<string> Errors = new List<string>();
    public bool IsValid => Errors.Count == 0;

    public void AddError(string error) => Errors.Add(error);
}