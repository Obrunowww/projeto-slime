const listaDeUpgrade = document.querySelectorAll(".up");
const nomeDoUpgrade = document.querySelectorAll('.localDoNome')
const valorDoUpgrade = document.querySelectorAll(".valorDoUpgrade")
const quantidadeDoUpgrade = document.querySelectorAll(".quantidadeDeUpgrades")


let multiplicadorDeCompra = 1
let novoValorUpgrade = 1
let valorASerPago = 1
let upgrades = [
    {
        nomeUpgrade: "upgrade 1",
        nome: "Herb F",
        preçoDeCompra: 100,
        bonusPorClick: 0.1,
        quantidade: 0,
        produçãoPorSegundo: 0,
        imagemDoUpgrade:"",
        

    },
    {
        nomeUpgrade: "upgrade 2",
        nome: "Heal Potion F",
        preçoDeCompra: 500,
        produçãoPorSegundo: 1,
        bonusPorClick: 0,
        quantidade: 0,
        imagemDoUpgrade:"",
      

    },
    {
        nomeUpgrade: 'upgrade 3',
        nome: "Magical Flower F",
        preçoDeCompra: 2500,
        produçãoPorSegundo: 5,
        bonusPorClick: 0,
        quantidade: 0,
        imagemDoUpgrade:"",
        
        

    },
    {
        nomeUpgrade: "upgrade 4",
        nome: "Mixed Potion F",
        preçoDeCompra: 7500,
        produçãoPorSegundo: 10,
        bonusPorClick: 0,
        quantidade: 0,
        imagemDoUpgrade:"",
       
        
    },
    {
        nomeUpgrade: "upgrade 5",
        nome: "Mana Potion F",
        preçoDeCompra: 12000,
        produçãoPorSegundo: 50,
        bonusPorClick: 0,
        quantidade: 0,
        imagemDoUpgrade:"",
       
        
    }

];

const localizarUpgrade = (numeroDoUpgrade) => {
    if (nomeDoUpgrade => 0 && nomeDoUpgrade < upgrades.length) {
        return upgrades[numeroDoUpgrade];
    } else {
        console.log("upgrade inválido");
        return null;
    }


}

const desenharUpgrade = () => {

    localizarParametros(nomeDoUpgrade, "nome");
    localizarParametros(valorDoUpgrade, "preçoDeCompra");
    localizarParametros(quantidadeDoUpgrade, "quantidade")
}

const localizarParametros = (local, objeto) => {
    local.forEach((indeciLocal, localDoUpgrade) => {
        indeciLocal.innerHTML = upgrades[localDoUpgrade][objeto]
    })
}


function formatarNumero(numero, casasDecimais) {
    const potencia = Math.pow(10, casasDecimais);
    return Math.round(numero * potencia) / potencia;
}

const verificarCompra = (upgradeSelecionado) => {


        if (multiplicadorDeCompra ==1 && valorASerPago <= dinheiro ) {
            
            dinheiro = dinheiro - valorASerPago;
            multiplicadorDoClick = multiplicadorDoClick + upgradeSelecionado.bonusPorClick;
            mostrarDinheiro.innerHTML = dinheiro;
            upgradeSelecionado.quantidade = upgradeSelecionado.quantidade + 1;
            verificarAtualizaçãoDeRank(upgradeSelecionado);
            upgradeSelecionado.preçoDeCompra = upgradeSelecionado.preçoDeCompra * 1.05
            upgradeSelecionado.preçoDeCompra = formatarNumero(upgradeSelecionado.preçoDeCompra, 2);


            console.log(`Upgrade comprado: ${upgradeSelecionado.nome}`);
            console.log(`Novo multiplicador de clique: ${multiplicadorDoClick}`);

            mostrarDinheiro.innerHTML = formatarNumero(dinheiro, 2);
            desenharUpgrade();
            atualizarValoresDosUpgrades();
        
            

        }else if (multiplicadorDeCompra ===10 && valorASerPago <= dinheiro) {
            dinheiro = dinheiro - valorASerPago;
            multiplicadorDoClick = multiplicadorDoClick + (upgradeSelecionado.bonusPorClick * 10);
            mostrarDinheiro.innerHTML = dinheiro;
            upgradeSelecionado.quantidade = upgradeSelecionado.quantidade + 10;
            verificarAtualizaçãoDeRank(upgradeSelecionado);
            upgradeSelecionado.preçoDeCompra = novoValorUpgrade
            upgradeSelecionado.preçoDeCompra = formatarNumero(upgradeSelecionado.preçoDeCompra, 2);


            console.log(`Upgrade comprado: ${upgradeSelecionado.nome}`);
            console.log(`a quantidade de upgrade comprada foi de ${multiplicadorDeCompra}`)
            console.log(`Novo multiplicador de clique: ${multiplicadorDoClick}`);

            mostrarDinheiro.innerHTML = formatarNumero(dinheiro, 2);
            desenharUpgrade();
            atualizarValoresDosUpgrades();
        
            
        }else if(multiplicadorDeCompra ===100 && valorASerPago <= dinheiro){
            dinheiro = dinheiro - valorASerPago;
            multiplicadorDoClick = multiplicadorDoClick + (upgradeSelecionado.bonusPorClick * 100);
            mostrarDinheiro.innerHTML = dinheiro;
            upgradeSelecionado.quantidade = upgradeSelecionado.quantidade + 100;
            verificarAtualizaçãoDeRank(upgradeSelecionado);
            upgradeSelecionado.preçoDeCompra = novoValorUpgrade
            upgradeSelecionado.preçoDeCompra = formatarNumero(upgradeSelecionado.preçoDeCompra, 2);


            console.log(`Upgrade comprado: ${upgradeSelecionado.nome}`);
            console.log(`a quantidade de upgrade comprada foi de ${multiplicadorDeCompra}`)
            console.log(`Novo multiplicador de clique: ${multiplicadorDoClick}`);

            mostrarDinheiro.innerHTML = formatarNumero(dinheiro, 2);
            desenharUpgrade();
            atualizarValoresDosUpgrades();
        }
         else {
            console.log(`Quantia de dinheiro insuficiente para efetuar a compra, valor é de ${valorASerPago} e você tem ${dinheiro}.`)
        }
    
}






const comprarUpgrade = (numeroDoUpgrade) => {
    const upgradeSelecionado = localizarUpgrade(numeroDoUpgrade);
    if (upgradeSelecionado) {
        mostarValor(upgradeSelecionado,multiplicadorDeCompra);
        
        console.log(`Agora o valor Do Upgrade Vai ser ${novoValorUpgrade}`);
        console.log(`O valor a ser pago é de ${valorASerPago}`)
        salvarProgressoAutomaticamente(progressoAtual);
        verificarCompra(upgradeSelecionado);

        
        
    }

}


listaDeUpgrade.forEach((upgrade, numeroDoUpgrade) => {
    upgrade.addEventListener("click", () => comprarUpgrade(numeroDoUpgrade))
});


window.onload = function() {
    const progressoCarregado = carregarProgressoSalvo();
    console.log('Progresso carregado:', progressoCarregado);

    if (progressoCarregado) {
        dinheiro = progressoCarregado.dinheiro;
        upgrades = progressoCarregado.upgrades;
        desenharUpgrade();
    } else {
        iniciarJogo();
    }
};
