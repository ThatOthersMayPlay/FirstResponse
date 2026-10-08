using UnityEngine;
using Ink.Runtime;
using TMPro;

public class DialogManager : MonoBehaviour
{
    [SerializeField] private TextAsset inkFile;
    [SerializeField] private TextMeshProUGUI dialogText;
    [SerializeField] private GameObject[] choiceButtons;
    
    private Story story;
    
    void Start()
    {
        LoadStory();
        Debug.Log("Sprint 1: Entscheidungsverwaltung initialisiert");
    }
    
    void LoadStory()
    {
        if (inkFile != null)
        {
            story = new Story(inkFile.text);
            
            // Error Handler für Ink-Runtime Errors
            story.onError += (errorMessage, errorType) => {
                Debug.LogError($"[Ink Error] {errorType}: {errorMessage}");
            };
            
            Debug.Log("Ink-Story geladen: " + inkFile.name);
            
            // Story-Struktur debuggen
            Debug.Log($"[Dialog] Story canContinue: {story.canContinue}");
            Debug.Log($"[Dialog] Story currentChoices: {story.currentChoices.Count}");
            
            // Story zum Choice-Punkt bewegen
            if (story.canContinue)
            {
                story.Continue(); // Zum ersten Text
                Debug.Log($"[Dialog] After first continue - CurrentText: '{story.currentText}'");
                Debug.Log($"[Dialog] Choices count: {story.currentChoices.Count}");
                
                // Zweiter Versuch: Nochmal Continue um zu Choices zu gelangen
                if (story.currentChoices.Count == 0 && story.canContinue)
                {
                    story.Continue();
                    Debug.Log($"[Dialog] After second continue - CurrentText: '{story.currentText}'");
                    Debug.Log($"[Dialog] Choices count: {story.currentChoices.Count}");
                }
            }
            
            RefreshView();
        }
        else
        {
            Debug.LogError("Ink-File nicht zugewiesen!");
        }
    }
    
    void RefreshView()
    {
        if (story != null)
        {
            Debug.Log($"[Dialog] RefreshView called - CurrentText: '{story.currentText}'");
            Debug.Log($"[Dialog] Choices count: {story.currentChoices.Count}");
            
            // Text anzeigen
            if (dialogText != null)
            {
                dialogText.text = story.currentText;
                Debug.Log($"[Dialog] Text set: '{dialogText.text}'");
            }
            else
            {
                Debug.LogError("[Dialog] DialogText is null!");
            }
            
            // Choices anzeigen
            for (int i = 0; i < choiceButtons.Length; i++)
            {
                if (i < story.currentChoices.Count)
                {
                    choiceButtons[i].SetActive(true);
                    Debug.Log($"[Dialog] Button {i} activated - Choice: '{story.currentChoices[i].text}'");
                    
                    var choiceText = choiceButtons[i].GetComponentInChildren<TextMeshProUGUI>();
                    if (choiceText != null)
                    {
                        choiceText.text = story.currentChoices[i].text;
                        Debug.Log($"[Dialog] Button {i} text set: '{choiceText.text}'");
                    }
                    else
                    {
                        Debug.LogError($"[Dialog] Button {i} has no TextMeshProUGUI component!");
                    }
                    
                    var choiceHandler = choiceButtons[i].GetComponent<DialogChoiceHandler>();
                    if (choiceHandler != null)
                    {
                        choiceHandler.SetChoiceIndex(i);
                        Debug.Log($"[Dialog] Button {i} choice index set: {i}");
                    }
                    else
                    {
                        Debug.LogError($"[Dialog] Button {i} has no DialogChoiceHandler component!");
                    }
                }
                else
                {
                    choiceButtons[i].SetActive(false);
                    Debug.Log($"[Dialog] Button {i} deactivated");
                }
            }
        }
        else
        {
            Debug.LogError("[Dialog] Story is null!");
        }
    }
    
    public void MakeChoice(int choiceIndex)
    {
        if (story != null && story.currentChoices.Count > choiceIndex)
        {
            var choiceText = story.currentChoices[choiceIndex].text;
            story.ChooseChoiceIndex(choiceIndex);
            story.Continue();
            
            // Debug.Log für Story-State-Änderungen
            Debug.Log($"[Decision] Choice: {choiceText}");
            UpdateStoryStates();
            RefreshView();
        }
    }
    
    void UpdateStoryStates()
    {
        if (story != null)
        {
            // Story-States auslesen und protokollieren
            var stefaniaTrust = story.variablesState["stefania_trust"];
            var playerPerspective = story.variablesState["player_perspective"];
            
            Debug.Log($"[Story-State] stefania_trust: {stefaniaTrust}");
            Debug.Log($"[Story-State] player_perspective: {playerPerspective}");
            Debug.Log($"[Story-State] Time: {System.DateTime.Now:HH:mm:ss.fff}");
        }
    }
}
