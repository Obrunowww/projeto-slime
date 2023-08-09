const listaDeUpgrade = document.querySelectorAll(".up");
const nomeDoUpgrade = document.querySelectorAll('.localDoNome')
const valorDoUpgrade = document.querySelectorAll(".valorDoUpgrade")
const quantidadeDoUpgrade = document.querySelectorAll(".quantidadeDeUpgrades")

let upgrades =[
    {
        nomeUpgrade: "upgrade 1",
        nome: "Herb F",
        preçoDeCompra : 100,
        bonusPorClick: 1,
        quantidade: 0,
        produçãoPorSegundo:0,

    },
    {
        nomeUpgrade: "upgrade 2",
        nome: "Heal Potion F",
        preçoDeCompra : 500,
        produçãoPorSegundo : 0.1,
        bonusPorClick: 0,
        quantidade: 0,
    },
    {
        nomeUpgrade: 'upgrade 3',
        nome: "Magical Flower F",
        preçoDeCompra : 2500,
        produçãoPorSegundo : 1,
        bonusPorClick: 0,
        quantidade: 0,

    },
    {
        nomeUpgrade: "upgrade 4",
        nome : "Mixed Potion F",
        preçoDeCompra : 7500,
        produçãoPorSegundo: 5,
        bonusPorClick: 0,
        quantidade: 0,
    },
    {
        nomeUpgrade: "upgrade 5",
        nome: "Mana Potion F",
        preçoDeCompra : 12000,
        produçãoPorSegundo: 10, 
        bonusPorClick: 0,
        quantidade: 0,
    }

];

const localizarUpgrade = (numeroDoUpgrade) =>{
    if(nomeDoUpgrade =>0 && nomeDoUpgrade <upgrades.length){
        return upgrades[numeroDoUpgrade];
    }else{
        console.log("upgrade inválido");
        return null;
    }
   

}

const desenharUpgrade = () =>{
   
    localizarParametros(nomeDoUpgrade, "nome");
    localizarParametros(valorDoUpgrade, "preçoDeCompra");
    localizarParametros(quantidadeDoUpgrade, "quantidade")
}

const localizarParametros = (local, objeto) =>{
    local.forEach((indeciLocal, localDoUpgrade)=>{
        indeciLocal.innerHTML = upgrades[localDoUpgrade][objeto]
    })
}


function formatarNumero(numero, casasDecimais) {
    const potencia = Math.pow(10, casasDecimais);
    return Math.round(numero * potencia) / potencia;
}

const verificarCompra = (upgradeSelecionado) =>{

    if(upgradeSelecionado.preçoDeCompra <= dinheiro){
        dinheiro = dinheiro - upgradeSelecionado.preçoDeCompra;
        multiplicadorDoClick = multiplicadorDoClick + upgradeSelecionado.bonusPorClick;
        mostrarDinheiro.innerHTML = dinheiro;
        upgradeSelecionado.quantidade = upgradeSelecionado.quantidade +1;
        upgradeSelecionado.preçoDeCompra = upgradeSelecionado.preçoDeCompra * 1.05
        upgradeSelecionado.preçoDeCompra = formatarNumero(upgradeSelecionado.preçoDeCompra, 2);
        
        
        console.log(`Upgrade comprado: ${upgradeSelecionado.nome}`);
        console.log(`Novo multiplicador de clique: ${multiplicadorDoClick}`);
        desenharUpgrade();
        
    }else{
        console.log(`Quantia de dinheiro insuficiente para efetuar a compra, valor é de ${upgradeSelecionado.preçoDeCompra} e você tem ${dinheiro}.`)
    }
    
}






const comprarUpgrade = (numeroDoUpgrade) =>{
    const upgradeSelecionado = localizarUpgrade(numeroDoUpgrade);
    if (upgradeSelecionado) {
        verificarCompra(upgradeSelecionado);
        
    }
    
}


listaDeUpgrade.forEach((upgrade, numeroDoUpgrade) =>{
    upgrade.addEventListener("click", ()=> comprarUpgrade(numeroDoUpgrade))
});

desenharUpgrade();

