const tempoDeAtualizacao = 1000;
let produçãoTotal = 0;
const mostrarProduçãoS = document.querySelector(".gerandoPorSegundo");

const atualizarProdução = () => {
    produçãoTotal = 0; // Reinicie a produção total antes de recalcular
    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        let valorPorSegundo = upgrade.produçãoPorSegundo * upgrade.quantidade;
        produçãoTotal += valorPorSegundo;
    }
}

const intervaloDeAtualização = setInterval(() => {
    atualizarProdução();
    dinheiro += produçãoTotal; // Atualize o dinheiro com base na produção total
    mostrarProduçãoS.innerHTML = produçãoTotal.toFixed(1); // Atualize a exibição da produção por segundo
    mostrarDinheiro.innerHTML = formatarNumero(dinheiro, 2); // Atualize o valor do dinheiro com formatação
}, tempoDeAtualizacao);



mostrarProduçãoS.innerHTML = produçãoTotal.toFixed(1); // Exibir a produção por segundo estática inicial


const progressoAtual = {
    get dinheiro() {
        return dinheiro;
    },
    get upgrades() {
        return upgrades;
    }
};


function salvarProgressoAutomaticamente(progresso) {
    localStorage.setItem('progressoJogo', JSON.stringify(progresso));
    console.log('Progresso salvo:', progresso);
}

const INTERVALO_SALVAMENTO = 60000; // Tempo em milissegundos (60 segundos)

setInterval(() => {
    
    salvarProgressoAutomaticamente(progressoAtual);
    
}, INTERVALO_SALVAMENTO);

function carregarProgressoSalvo() {
    const progressoSalvo = localStorage.getItem('progressoJogo');
    if (progressoSalvo) {
        try {
            return JSON.parse(progressoSalvo);
        } catch (error) {
            console.error('Erro ao fazer o parse do progresso salvo:', error);
            return null;
        }
    }
    return null;
}


