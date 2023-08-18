const verificarAtualizaçãoDeRank = (upgradeSelecionado) =>{

    if (!upgradeSelecionado.upE && upgradeSelecionado.quantidade >= 10) {
        upgradeSelecionado.nome = trocarUltimaPalavra(upgradeSelecionado.nome, "E");
        multiplicadorDoClick *= 2
        upgradeSelecionado.bonusPorClick *= 2;
        upgradeSelecionado.produçãoPorSegundo *= 2
        upgradeSelecionado.upE = true
        console.log("UPGRADE EVOLUIU PARA E!")
        
        
    } else if (!upgradeSelecionado.upD && upgradeSelecionado.quantidade >= 50) {
        upgradeSelecionado.nome = trocarUltimaPalavra(upgradeSelecionado.nome, "D");
        multiplicadorDoClick *= 2.5
        upgradeSelecionado.bonusPorClick *= 2.5;
        upgradeSelecionado.produçãoPorSegundo *= 2.5;
        upgradeSelecionado.upD = true
        console.log("UPGRADE EVOLUIU PARA D!")
        
    } else if (!upgradeSelecionado.upC && upgradeSelecionado.quantidade >= 100) {
        upgradeSelecionado.nome = trocarUltimaPalavra(upgradeSelecionado.nome, "C");
        multiplicadorDoClick *= 3
        upgradeSelecionado.bonusPorClick *= 3;
        upgradeSelecionado.produçãoPorSegundo *= 3;
        upgradeSelecionado.upC = true
        console.log("UPGRADE EVOLUIU PARA C!")
        
    }
}

const trocarUltimaPalavra = (frase, novaUltimaPalavra) => {
    const palavras = frase.split(' ');
    if (palavras.length > 0) {
        palavras[palavras.length - 1] = novaUltimaPalavra;
        return palavras.join(' ');
    }
    return frase;
}


