using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using TMPro;

public class ButtonHoverFeedback : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] private Color normalColor = Color.white;
    [SerializeField] private Color hoverColor = Color.yellow;
    [SerializeField] private float scaleFactor = 1.1f;
    
    private Button button;
    private TextMeshProUGUI buttonText;
    private Vector3 originalScale;
    
    void Start()
    {
        button = GetComponent<Button>();
        buttonText = GetComponentInChildren<TextMeshProUGUI>();
        originalScale = transform.localScale;
        
        if (buttonText != null)
        {
            buttonText.color = normalColor;
        }
    }
    
    public void OnPointerEnter(PointerEventData eventData)
    {
        if (buttonText != null)
        {
            buttonText.color = hoverColor;
        }
        transform.localScale = originalScale * scaleFactor;
        Debug.Log("[UI-Event] Button hover entered");
    }
    
    public void OnPointerExit(PointerEventData eventData)
    {
        if (buttonText != null)
        {
            buttonText.color = normalColor;
        }
        transform.localScale = originalScale;
        Debug.Log("[UI-Event] Button hover exited");
    }
}
