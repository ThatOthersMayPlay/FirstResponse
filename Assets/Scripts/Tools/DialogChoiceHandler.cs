using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class DialogChoiceHandler : MonoBehaviour
{
    [SerializeField] private int choiceIndex;
    [SerializeField] private DialogManager dialogManager;
    
    public void SetChoiceIndex(int index)
    {
        choiceIndex = index;
    }
    
    public void OnChoiceClicked()
    {
        if (dialogManager != null)
        {
            dialogManager.MakeChoice(choiceIndex);
            Debug.Log($"[UI-Event] Button clicked: Choice_{choiceIndex}");
        }
        else
        {
            Debug.LogError("DialogManager nicht zugewiesen!");
        }
    }
    
    void Start()
    {
        // DialogManager automatisch finden, falls nicht zugewiesen
        if (dialogManager == null)
        {
            dialogManager = FindFirstObjectByType<DialogManager>();
        }
    }
}
