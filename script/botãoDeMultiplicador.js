const botãoDeMultiplicador = document.querySelectorAll(".compraMultiplicador");

let soma = 0
const termos = upgrades.map(upgrade =>upgrade.preçoDeCompra);

const calcularValorAumentadoDpsCompra = (upgrade, vezes) => {
    let valor = upgrade.preçoDeCompra;
    let valorTotal = 0;
    for (let i = 0; i < vezes; i++) {
        valorTotal += valor;
        valor *= 1.05;
    }
    return {valorFinal: formatarNumero(Math.ceil(valor *100)/100,2), somaAumentos : formatarNumero(Math.ceil(valorTotal *100)/100,2)};
    
};





console.log(termos)
const mostarValor = (upgrade,valor)=>{
    
        const { valorFinal, somaAumentos} =calcularValorAumentadoDpsCompra(upgrade,valor);
        
        valorASerPago = somaAumentos
        novoValorUpgrade = valorFinal

        return {valorFinal, somaAumentos}
   
}

function atualizarValoresDosUpgrades() {
    upgrades.forEach((upgrade, index) => {
        const valores = calcularValorAumentadoDpsCompra(upgrade, multiplicadorDeCompra);
        valorDoUpgrade[index].innerHTML = valores.somaAumentos;
    });
}

const pressionarBotão = (evento)=>{
    const botão = evento.target;
    botão.classList.toggle("pressionado");
    const multiplicador = parseInt(botão.getAttribute("data-multiplicador"))
    
    
    // mostarValor(multiplicador);
    
    botãoDeMultiplicador.forEach(outroBotão =>{
        if(outroBotão !==botão){
            outroBotão.classList.remove("pressionado");
        }
    });
    multiplicadorDeCompra = multiplicador;
    atualizarValoresDosUpgrades();
    
    
    
};



botãoDeMultiplicador.forEach(botão =>{
    botão.addEventListener("click", pressionarBotão)
})
