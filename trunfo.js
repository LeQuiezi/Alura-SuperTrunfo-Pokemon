var carta1 = {
    nome: "Bulbasauro",
    atributos: {
        imagem:"https://oanoe.com/wp-content/uploads/2021/09/198512341_184738870323344_495395960275737035_n.jpg",
        Força: 10.000,
        Ataque: 7.000,
        Defesa: 9.000,
        Agilidade: 50,
    }
}
var carta2 = {
    nome: "Pikachu",
    atributos: {
        Imagem: "https://oanoe.com/wp-content/uploads/2021/09/241020280_257299426091496_7412507489213354806_n.jpg",
        Força: 20.000,
        Ataque: 9.000,
        Defesa: 8.000,
        Agilidade: 40,
    }
}
var carta3 = {
    nome: "Squirtle",
    atributos: {
        Imagem: "https://i.pinimg.com/originals/d5/93/66/d59366f31e8bacf5103186ebfb4e581c.jpg",
        Força: 20.000,
        Ataque: 8.000,
        Defesa: 10.000,
        Agilidade: 40,
    }
}
var carta4 = {
    nome: "Charmander",
    atributos: {
        imagem:"https://i.pinimg.com/originals/d5/93/66/d59366f31e8bacf5103186ebfb4e581c.jpg",
        Força: 25.000,
        Ataque: 5.000,
        Defesa: 7.000,
        Agilidade: 35,
    }
}
var carta5 = {
    nome: "Mew",
    atributos: {
        Imagem: "https://compass-media.vogue.it/photos/612fc3100cfb5b1681ff1928/master/pass/Mew%20-%20Don't%20Ever%20Let%20It%20Go.jpg",
        Força: 50.000,
        Ataque: 7.000,
        Defesa: 5.000,
        Agilidade: 15,
    }
}

//LISTA EM ARRAY COM AS CARTAS
var deckCartas = [carta1, carta2, carta3, carta4, carta5]

// DEIXAMOS ASSIM PQ PODE ASSUMIR DIVERSOS VALORES.
var cartaMaquina
var cartaJogador

// FUNÇÃO DE SORTEIO DE 
function sortearCarta() {

    // SORTEIO DA CARTA DA MÁQUINA
    let numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = deckCartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    // SORTEIO DA CARTA DO JOGADOR
    let numeroCartaJogador = parseInt(Math.random() * 5);
     
    // EVITANDO REPETIÇÃO
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = deckCartas[numeroCartaJogador];
    console.log(cartaJogador);

    // FUNCIONALIDADE DO BOTÃO: AO CLICARMOS EM SORTEAR, O MESMO FICARÁ DESABILITADO ENQUANTO QUE O JOGAR VAI SER HABILITADO.
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    //PARA EXIBIR AS OPÇÕES NO CONSOLE
    exibirOpcoes();
}

    // EXIBINDO OS ATRIBUTOS NA TELA
    function exibirOpcoes() {
        var opcoes = document.getElementById("opcoes");

        for (var mostrarAtributos in cartaJogador.atributos) {
            console.log(mostrarAtributos);
        }
    }

