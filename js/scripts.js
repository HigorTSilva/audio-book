const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");
const audioCapitulo = document.getElementById("audio-capitulo");

const numeroCapitulos = 10; //const se for algo constante para sempre ou let se for mudar no meio do processo.
let audioTocando = false;
let capituloAtual = 1;

function tocarFaixa (){
    botaoPlayPause.classList.remove("fa-play");
    botaoPlayPause.classList.add("fa-stop");
    audioCapitulo.play();
    audioTocando = true;
}

function pausarFaixa(){
    botaoPlayPause.classList.add("fa-play");
    botaoPlayPause.classList.remove("fa-stop");
    audioCapitulo.pause();
    audioTocando = false;
}

function tocarOuPausar(){
    if (audioTocando === true){
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function proximaFaixa(){
    if (capituloAtual < numeroCapitulos){
        capituloAtual += 1;
    } else {
        capituloAtual = 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
    tocarFaixa();
}

function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual -= 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
audioCapitulo.addEventListener("ended", proximoCapitulo);