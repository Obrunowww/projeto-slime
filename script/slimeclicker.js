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



