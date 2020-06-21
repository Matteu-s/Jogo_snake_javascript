let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //trata o arquivo como 2d
let box = 32;

//funcao que desenha e define canvas
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retangulo do game

}

criarBG();