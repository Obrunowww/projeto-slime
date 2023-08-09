using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class GameController : MonoBehaviour
{  

    public double Money;
    public double Buff;
    public double MoneyPerSecond;

    public TextMeshProUGUI MoneyPerSecondTxt;
    public TextMeshProUGUI MoneyTxt;

    // Start is called before the first frame update
    void Start()
    {
        Money = 100000;
        Buff = 0f;
        MoneyPerSecond = 0f;
        
        // Chama o método AddMoneyPerSecond() a cada 1 segundo (intervalo de 1 segundo)
        InvokeRepeating("AddMoneyPerSecond", 1.0f, 1.0f);
    }

    // Update is called once per frame
    void Update()
    {
        if (Money < 0f)
        {
            Money = 0f;
        }
    }

    private void AddMoneyPerSecond()
    {
        Money += MoneyPerSecond * 1.0f; // 1.0f é o intervalo entre as chamadas, pode ser ajustado conforme necessário
        if(MoneyPerSecond >= 1000)
        {
            MoneyPerSecondTxt.text = AbbreviateNumber(MoneyPerSecond);
        } else{
            MoneyPerSecondTxt.text = $"$ {MoneyPerSecond}/s";
        }


        if(Money >= 1000)
        {
            MoneyTxt.text = AbbreviateNumber(Money);
        } else{
            MoneyTxt.text = $"$ {Money:F1}";
        }
    }


    public string AbbreviateNumber(double number)// ainda tenho que atualizar esse abreviate para e15
    {
        // Função auxiliar para formatar um número em formato abreviado (1k, 1M, 1B, etc.)
        string[] suffixes = { "K", "M", "B", "T", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ", "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ" };
        int index = 0;
        int num = 15;

        while (number >= 1000.0f && index < suffixes.Length - 1)
        {
            number /= 1000.0f;
            index++;
            if(index > 5)
            {
                num++;
            }
        }

        if(index < 5)
        {
            return $"{number:F1} {suffixes[index -1]}";
        } else {
            return $"{number:F1} e{num}";
        }
    }
}