var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:55px"
    setaDireita.style = "display:none"
}
function RolarParaEsquerda(){
    Samantha.style = "display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
}