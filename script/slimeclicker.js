const slime = document.querySelector(".slime");
const mostrarDinheiro = document.querySelector("[data-valor]")
let dinheiro = 0;
let multiplicadorDoClick = 1;






const slimeClick = () =>{
    dinheiro = dinheiro + multiplicadorDoClick;
    mostrarDinheiro.innerHTML = dinheiro
    mostrarDinheiro.innerHTML = formatarNumero(mostrarDinheiro.innerHTML, 2);
}



slime.addEventListener("click", slimeClick);


const iniciarJogo = () =>{
    dinheiro = 0;
    multiplicadorDoClick = 1;
    upgrades = [
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
    desenharUpgrade();
    
    
}



