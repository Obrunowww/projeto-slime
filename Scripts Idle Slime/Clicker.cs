using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Clicker : MonoBehaviour

{
    [SerializeField] private GameController Click;
    private Collider2D touchZoneCollider;

    private void Start()
    {
        touchZoneCollider = GetComponent<Collider2D>();
    }

    private void Update()// será adicionado um botão de upgrade para aumentar o ganho por toques na tela futuramente
    {
        // Verifica se há toques na tela (incluindo o mouse)
        if (Input.touchCount > 0)
        {
            // Percorre todos os toques ativos
            for (int i = 0; i < Input.touchCount; i++)
            {
                // Obtém as informações sobre o toque atual
                Touch touch = Input.GetTouch(i);

                // Verifica se o toque está na fase "Began" (quando o toque é inicializado)
                if (touch.phase == TouchPhase.Began)
                {
                    // Converte a posição do toque da tela para o espaço do mundo do jogo
                    Vector3 touchPosition = Camera.main.ScreenToWorldPoint(touch.position);

                    // Verifica se o toque colidiu com o Collider2D da zona de toque
                    if (touchZoneCollider.OverlapPoint(touchPosition))
                    {
                        Click.Money += 1;
                        if(Click.Money >= 1000)
                        {
                            Click.MoneyTxt.text = Click.AbbreviateNumber(Click.Money);
                        } else{
                            Click.MoneyTxt.text = $"$ {Click.Money:F1}";
                        }
                    }
                }
            }
        }
    }
}
