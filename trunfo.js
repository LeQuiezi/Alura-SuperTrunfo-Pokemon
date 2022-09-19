var carta1 = {
    nome: "Bulbasauro",
    imagem:"https://oanoe.com/wp-content/uploads/2021/09/198512341_184738870323344_495395960275737035_n.jpg",
    atributos: {
        Força: 10.000,
        Ataque: 7.000,
        Defesa: 9.000,
    }
}
var carta2 = {
    nome: "Pikachu",
    imagem: "https://oanoe.com/wp-content/uploads/2021/09/241020280_257299426091496_7412507489213354806_n.jpg",
    atributos: {
        Força: 20.000,
        Ataque: 9.000,
        Defesa: 8.000,
    }
}
var carta3 = {
    nome: "Squirtle",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/035/000/691/large/gal-yosef-final.jpg?1613832843",
    atributos: {
        Força: 20.000,
        Ataque: 8.000,
        Defesa: 10.000,
    }
}
var carta4 = {
    nome: "Charmander",
    imagem:"https://i.pinimg.com/originals/d5/93/66/d59366f31e8bacf5103186ebfb4e581c.jpg",
    atributos: {
        Força: 25.000,
        Ataque: 5.000,
        Defesa: 7.000,
    }
}
var carta5 = {
    nome: "Mew",
    imagem: "https://cdna.artstation.com/p/assets/images/images/039/525/296/20210713050302/smaller_square/gal-yosef-01.jpg?1626170582",
    atributos: {
        Força: 50.000,
        Ataque: 7.000,
        Defesa: 5.000,
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
   
    exibirCartaJogador();
}
     

    //SELECIONAR O ATRIBUTO
    function obtemAtributoSelecionado() {
        var radioAtributoSelecionado = document.getElementsByName("mostrarAtributos");

        for (var i = 0; i < radioAtributoSelecionado.length; i++) {
            if (radioAtributoSelecionado[i].checked == true) {
                return radioAtributoSelecionado[i].value;
            }
        }
    }

    //ESSA FUNÇÃO É O QUE VAI COMPARAR PARA TER O JOGO.
    function jogar() {
        var atributoSelecionado = obtemAtributoSelecionado();
        var divResultado = document.getElementById("resultado");

        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) 
        { 
            htmlResultado = "<p class='resultado-final'>Venceu!</p>"
        } 
        else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) 
        { 
            htmlResultado = "<p class='resultado-final'>Perdeu</p>"
        } 
        else 
        {
            htmlResultado = "<p class='resultado-final'>Empatou</p>"
        } 
        divResultado.innerHTML = htmlResultado;

        document.getElementById("btnJogar").disabled = true;

        exibirCartaMaquina();
    }
    //EXIBINDO AS CARTAS DO JOGADOR
    function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // ou divCartaJogador.style.backgroundImage = "$url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    // EXIBINDO OS ATRIBUTOS NA TELA
    for (var mostrarAtributos in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='mostrarAtributos' value='" + mostrarAtributos + "'>" + mostrarAtributos + " " + cartaJogador.atributos[mostrarAtributos] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}  

//EXIBINDO CARTA MÁQUINA
    function exibirCartaMaquina() {
        var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var mostrarAtributos in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='mostrarAtributos' value='" + mostrarAtributos + "'>" + mostrarAtributos + " " + cartaMaquina.atributos[mostrarAtributos] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
    }
        
 