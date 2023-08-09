using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Xbuy : MonoBehaviour
{
    public UpgraderManager upgrader;

    public List<TextMeshProUGUI> PriceProduction = new List<TextMeshProUGUI>();
    public TextMeshProUGUI XbuyTxt;
    public int XbuyQuantity;

    public void BuyQuantity(int button)// muda de acordo com o botão apertado de quanto o jogador quer comprar e já simula o novo preço
    {
        if(button == 1)
        {
            XbuyQuantity = 1;
        }

        else if(button == 10)
        {
            XbuyQuantity = 10;
        }

        else if(button == 50)
        {
            XbuyQuantity = 50;
        }

        else if(button == 100)
        {
            XbuyQuantity = 100;
        }

        else if(button == 1000)
        {
            XbuyQuantity = 1000;
        }

            //simula preço de compra de acordo com quantidade de compra XbuyQuantity
            for(int number = 0; number < upgrader.upgradesList[upgrader.Tier].Count; ++number)//vai trocando os upgrades para a simulação
            {
                upgrader.upgradesList[upgrader.Tier][number].priceSimulation = upgrader.upgradesList[upgrader.Tier][number].Price;

                if(XbuyQuantity != 1)
                {
                    for (int purchase = 1; purchase <= XbuyQuantity; purchase++)//multiplica o preço para a simulação  de acordo com a inflação de cada diferente upgrade
                    {
                        upgrader.upgradesList[upgrader.Tier][number].priceSimulation = Mathf.Floor(((float)upgrader.upgradesList[upgrader.Tier][number].priceSimulation * (float)upgrader.upgradesList[upgrader.Tier][number].Inflation));
                    }
                }

                PriceProduction[number].text=AbbreviateNumber(number, upgrader.upgradesList[upgrader.Tier][number].priceSimulation);//Price Simulation Text

            }

    }


    void Start()
    {
        for(int number = 0; number < upgrader.upgradesList[upgrader.Tier].Count; ++number)
        {   //chama o abreviador no inicio para acertar numeros nos textos
            PriceProduction[number].text=AbbreviateNumber(number, upgrader.upgradesList[upgrader.Tier][number].priceSimulation);
        }
        
        XbuyQuantity = 1;//diz que a quantidade de compra inicial é 1

    }



    private string AbbreviateNumber(int number, double price)
    {
        // Função auxiliar para formatar um número em formato abreviado (1k, 1M, 1B, etc.)
        string[] suffixes = { "K", "M", "G", "T", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ", "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BY", "BZ" };
        int index = 0;
        int num = 15;

        while (price >= 1000.0 && index < suffixes.Length - 1)
        {
            price /= 1000.0f;
            index++;
            if (index > 4)
            {
                num++;
            }
        }
        if ((index - 1) < 0)
        {   //número até 999
            return @$"Price: ${price}
$ {upgrader.upgradesList[upgrader.Tier][number].ProductionPerSecond}/s
Quantity: {upgrader.upgradesList[upgrader.Tier][number].Quantity}";
        }
        
        else if( index >= 0 && index < 4)
        {   //número até 999T
            return @$"Price: ${Mathf.Floor((float)price)} {suffixes[index - 1]}
$ {upgrader.upgradesList[upgrader.Tier][number].ProductionPerSecond}/s
Quantity: {upgrader.upgradesList[upgrader.Tier][number].Quantity}";
        }

        else
        {   //Número após 999T virando e15
            return @$"Price: ${Mathf.Floor((float)price)} e{num}
$ {upgrader.upgradesList[upgrader.Tier][number].ProductionPerSecond}/s
Quantity: {upgrader.upgradesList[upgrader.Tier][number].Quantity}";
        }

    }

}
