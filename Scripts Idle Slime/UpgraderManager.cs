using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class Slime //class pai
{
    public string Name;
    public double Price;
    public double priceSimulation;
    public int Quantity;
    public double Buff;
    public double ProductionPerSecond;
    public double baseProductionPerSecond = 500f;

    public float Inflation;
}

public class NatureSlime : Slime{}//class filha que herda de pai
public class EarthSlime : Slime{}//class filha que herda de pai

public class UpgraderManager : MonoBehaviour
{
    public List<List<Slime>> upgradesList = new List<List<Slime>>();// criando Lista que vai conter as duas listas abaixo
    
    //criando lista de objetos da class filha
    public List<Slime> natureSlime = new List<Slime>();
    public List<Slime> earthSlime = new List<Slime>();


    public void Start()
    {
        NatureSlime HerbF = new NatureSlime // criando objeto da class NatureSlime que herda da Class Slime
        {
            Name = "Herb F",
            Price = 100, // preço base que será alterado de acordo com as compras
            priceSimulation = 100,// Será usado para simular os preços na outra script
            Quantity = 0,
            Buff = 1,// para dar buff de acordo com a quantidade de compra será melhorado futuramente
            ProductionPerSecond = 1,//valor de produção que será alterado conforme for comprando
            baseProductionPerSecond = 1,//necessário para não ocorrer erro de calculo nos buffs e após prestigio
            Inflation = 1.07f//inflação para aumento de preço

        };
        natureSlime.Add(HerbF);


        NatureSlime PotionF = new NatureSlime
        {
            Name = "Potion F",
            Price = 500f,
            priceSimulation = 500f,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 15f,
            baseProductionPerSecond = 15f,
            Inflation = 1.07f

        };
        natureSlime.Add(PotionF);


        NatureSlime HerbE = new NatureSlime
        {
            Name = "Herb E",
            Price = 2500f,
            priceSimulation = 2500f,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 25f,
            baseProductionPerSecond = 25f,
            Inflation = 1.07f

        };
        natureSlime.Add(HerbE);


        NatureSlime PotionE = new NatureSlime
        {
            Name = "Potion E",
            Price = 7500,
            priceSimulation = 7500,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 50,
            baseProductionPerSecond = 50,
            Inflation = 1.07f

        };
        natureSlime.Add(PotionE);


        NatureSlime HerbD= new NatureSlime
        {
            Name = "Herb D",
            Price = 12000f,
            priceSimulation = 12000f,
            Quantity = 0,
            Buff = 1,
            ProductionPerSecond = 100f,
            baseProductionPerSecond = 100f,
            Inflation = 1.07f

        };
        natureSlime.Add(HerbD);
        

        NatureSlime PotionD = new NatureSlime
        {
            Name = "Potion D",
            Price = 20000f,
            priceSimulation = 20000f,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 500f,
            baseProductionPerSecond = 500f,
            Inflation = 1.07f

        };
        natureSlime.Add(PotionD);
        
        
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
        EarthSlime CopperChunk = new EarthSlime
        {
            Name = "CopperChunk",
            Price = 35000,
            priceSimulation = 35000,
            Quantity = 0,
            Buff = 1,
            ProductionPerSecond = 800,
            baseProductionPerSecond = 800,
            Inflation = 1.07f

        };
        earthSlime.Add(CopperChunk);


        EarthSlime AluminumChunk = new EarthSlime
        {
            Name = "AluminumChunk",
            Price = 50000,
            priceSimulation = 50000,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 1200,
            baseProductionPerSecond = 1200,
            Inflation = 1.07f

        };
        earthSlime.Add(AluminumChunk);


        EarthSlime IronChunk = new EarthSlime
        {
            Name = "IronChunk",
            Price = 125000,
            priceSimulation = 125000,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 2500,
            baseProductionPerSecond = 2500,
            Inflation = 1.07f

        };
        earthSlime.Add(IronChunk);


        EarthSlime GoldChunk = new EarthSlime
        {
            Name = "GoldChunk",
            Price = 200000,
            priceSimulation = 200000,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 3200,
            baseProductionPerSecond = 3200,
            Inflation = 1.07f

        };
        earthSlime.Add(GoldChunk);


        EarthSlime Ruby = new EarthSlime
        {
            Name = "Ruby",
            Price = 500000,
            priceSimulation = 500000,
            Quantity = 0,
            Buff = 1,
            ProductionPerSecond = 5000,
            baseProductionPerSecond = 5000,
            Inflation = 1.07f

        };
        earthSlime.Add(Ruby);
        

        EarthSlime Adamantium = new EarthSlime
        {
            Name = "Adamantium",
            Price = 1000000,
            priceSimulation = 1000000,
            Quantity = 0,
            Buff = 1f,
            ProductionPerSecond = 10000,
            baseProductionPerSecond = 10000,
            Inflation = 1.07f

        };
        earthSlime.Add(Adamantium);


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        
        Tier = 0;//iniciar o tier correto que no caso seria a primeira tela de upgrade com os NatureSlimes

        // adicionando as listas de objetos a lista de listas de upgrades
        upgradesList.Add(natureSlime);
        upgradesList.Add(earthSlime);
    }


    public GameController gameController;
    public Xbuy xbuy;
    public int Tier;

    public void Type(int type)//função criada para alterar o Tier/tipo de upgrade de slime de acordo com botão
    {
        Tier = type;
        xbuy.BuyQuantity(xbuy.XbuyQuantity);//chama a função para alterar os preços quando o player trocar o tipo de upgrade de slimes
    }

    public void BuyUpgrades(int button)//função chamada para comprar upgrade de acordo com botão clicado
    {

        if (gameController.Money >= upgradesList[Tier][button].priceSimulation)//verifica se o player pode comprar o upgrade que foi clicado
        {
            //gameController
            gameController.Money -= upgradesList[Tier][button].priceSimulation;//retira dinheiro do player de acordo com preço
            
            //Upgrade
            upgradesList[Tier][button].Quantity += xbuy.XbuyQuantity;// aumenta quantidade da compra especifica de acordo com escolha de quantos quiz comprar
            UpdateBuff(Tier, button);//verifica se pode aumentar buff
            upgradesList[Tier][button].ProductionPerSecond = upgradesList[Tier][button].baseProductionPerSecond * upgradesList[Tier][button].Buff;//aumenta a produção por segundo de acordo com o buff
            upgradesList[Tier][button].Price = Mathf.Floor((float)upgradesList[Tier][button].priceSimulation * (float)upgradesList[Tier][button].Inflation);//aumenta o preço do upgrade
            
            xbuy.BuyQuantity(xbuy.XbuyQuantity);// atualiza os novos preços

            UpdateMoneyPerSecond();
        } 
        
        else ////////////////////
        {

        }
         
    }

    private void UpdateMoneyPerSecond()
    {
        gameController.MoneyPerSecond = 0.0;// zera o dinheiro por segundo

        for (int type = 0; type < upgradesList.Count; ++type)//atualiza o novo dinheiro por segundo de acordo com cada upgrade comprado
        {
            for(int number = 0; number < upgradesList[type].Count; ++number)
            {
                gameController.MoneyPerSecond += upgradesList[type][number].ProductionPerSecond * upgradesList[type][number].Quantity;
                number ++;
                gameController.MoneyPerSecondTxt.text = $"$ {gameController.MoneyPerSecond}/s";
            }
        }

    }

    private void UpdateBuff(int Type, int button)//será alterado para uma curva melhor de buff, no momento duplica a produção por segunda a cada dez compras, tá muito OP
    {
        upgradesList[Type][button].Buff = Mathf.Pow(2, upgradesList[Type][button].Quantity / 10);
    }

}