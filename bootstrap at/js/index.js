var nome = "Suzana Godois";
var cargo = "Auxiliar Administrativo";

var nomehtml = document.getElementById("nome-no-html")
var cargohtml = document.getElementById("cargo-no-html")
var texto1 = document.getElementById("texto-1")
var texto2 = document.getElementById("texto-2")

function colocarNomeNoHtml(nome){
    nomehtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargohtml.innerHTML = cargo;
}

function clickNoProjetos(){
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log(" clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);