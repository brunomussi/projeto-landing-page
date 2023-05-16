var leo = window.document.getElementById("leo")
var sam = window.document.getElementById("sam")
var bru = window.document.getElementById("bru")
var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")
function swapRight() {
    leo.style ="display:none"
    bru.style ="display:flex"
    setaEsquerda.style ="display:flex"
    setaDireita.style ="display:none"
}
function swapLeft() {
    leo.style ="display:flex"
    bru.style ="display:none"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"
}