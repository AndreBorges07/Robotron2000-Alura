
const controle = document.querySelectorAll("[data-controle]"); //agora pesquisa por um outro elemento, o "data-atributo" que criei, ele busca por esse nome.
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
        "bracos": {
            "forca": 29,
            "poder": 35,
            "energia": -15,
            "velocidade": -3
        },
    
        "blindagem": {
            "forca": 41,
            "poder": 20,
            "energia": 0,
            "velocidade": -10
        },
        "nucleos":{
            "forca": 0,
            "poder": 7,
            "energia": 80,
            "velocidade": -20
        },
        "pernas":{
            "forca": 27,
            "poder": 21,
            "energia": -20,
            "velocidade": 70
        },
        "foguetes":{
            "forca": 0,
            "poder": 35,
            "energia": 0,
            "velocidade": -2
        }
    }


// "Data-attributes" são utilizados para guardar valores em elementos HTML. Deixar esse atributo mais uando for não visível. O prefixo "data-"" não é obrigatório para definir um data-attribute

//const controle = document.querySelectorAll(".controle-ajuste") // aqui é um Array com todos os controles ajustes

//".textContent" - É um modo de olhar o texto que está dentro de uma tag. 

// ".value" - É usado quando queremos ver do input

//"splice()" - Serve para remover itens de um array || 
// splice(1,2) ---> o 1 posição do item a ser removido, o 2 será quantos itens serão removidos a partir de sua posição.

//"parentNode" - É uma forma de conferir qual é a classe pai de alguma parte do HTMl

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
      atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle);
    })
  })
  
  function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
  
    if(operacao == "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if(operacao == "+") {
        peca.value = parseInt(peca.value) + 1;
    }
  }
  
  function atualizaEstatistica(peca, operacao) {
    if(operacao === "+") {
      estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
      })
    } else {
      estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
      })
    }
  }
 




let fundo = document.querySelector(".fundo") //puxar o fundo da tela
 
let caixa = document.querySelector(".box"); // caixa das Estatisticas
let caixa2 = document.querySelectorAll('.box')[1]; //Caixa do equipamento

//Os controladores

let cont = document.querySelectorAll(".controle")[0]; 
let cont1 = document.querySelectorAll(".controle")[1];
let cont2 = document.querySelectorAll(".controle")[2];
let cont3 = document.querySelectorAll(".controle")[3];
let cont4 = document.querySelectorAll(".controle")[4];


 function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";


    //trocar a foto do fundo de acordo com a cor clicada
    fundo.classList.remove("fundo-azul", "fundo-amarelo", "fundo-branco", "fundo-preto", "fundo-rosa" );
    fundo.classList.add("fundo-"+cor);

    //trocar a cor do Box de acordo com a cor clicada
    caixa.classList.remove("box-azul", "box-amarelo", "box-branco", "box-preto", "box-rosa" );
    caixa2.classList.remove("box-azul", "box-amarelo", "box-branco", "box-preto", "box-rosa");

    caixa.classList.add("box-"+cor);
    caixa2.classList.add("box-"+cor);
   
    //trocar a cor dos contadores de acordo com a cor clicada
    cont.classList.remove("controle-azul", "controle-amarelo", "controle-branco", "controle-preto", "controle-rosa", "controle-vermelho" );
    cont1.classList.remove("controle-azul", "controle-amarelo", "controle-branco", "controle-preto", "controle-rosa", "controle-vermelho" );
    cont2.classList.remove("controle-azul", "controle-amarelo", "controle-branco", "controle-preto", "controle-rosa", "controle-vermelho" );
    cont3.classList.remove("controle-azul", "controle-amarelo", "controle-branco", "controle-preto", "controle-rosa", "controle-vermelho" );
    cont4.classList.remove("controle-azul", "controle-amarelo", "controle-branco", "controle-preto", "controle-rosa", "controle-vermelho" );

    cont.classList.add("controle-"+cor);
    cont1.classList.add("controle-"+cor);
    cont2.classList.add("controle-"+cor);
    cont3.classList.add("controle-"+cor);
    cont4.classList.add("controle-"+cor);

 }

