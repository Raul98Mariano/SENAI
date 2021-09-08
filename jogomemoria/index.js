//Array ou Vetor com todas as imagens das frentes
var acertos = 0;
var erros = 0;
var tentativas = 0;

var frentes = [
    "background-image: url('./assets/boston.jpg');",
    "background-image: url('./assets/boston.jpg');",
    "background-image: url('./assets/bulls.jpg');",
    "background-image: url('./assets/bulls.jpg');",
    "background-image: url('./assets/warriors.jpg');",
    "background-image: url('./assets/warriors.jpg');",
    "background-image: url('./assets/lakers.jpg');",
    "background-image: url('./assets/lakers.jpg');"
]

frentes = shuffleArray(frentes)//Embaralha o array

var cardObj = {
    "bt1": [document.getElementById("bt1"), frentes[0], false],
    "bt2": [document.getElementById("bt2"), frentes[1], false],
    "bt3": [document.getElementById("bt3"), frentes[2], false],
    "bt4": [document.getElementById("bt4"), frentes[3], false],
    "bt5": [document.getElementById("bt5"), frentes[4], false],
    "bt6": [document.getElementById("bt6"), frentes[5], false],
    "bt7": [document.getElementById("bt7"), frentes[6], false],
    "bt8": [document.getElementById("bt8"), frentes[7], false],
	"bt9": [document.getElementById("bt8"), frentes[8], false]
}
const verso = "background-image: url('./assets/nba.jpg');"
var ultima = ""

function virarCarta(e) {
    if (cardObj[e.id][2]) {
        e.setAttribute("style", verso)
        cardObj[e.id][2] = false
    } else {
        e.setAttribute("style", cardObj[e.id][1])
        cardObj[e.id][2] = true
    }
}

function virarTodas() {
    for (i = 1; i <= 8; i++)
        virarCarta(cardObj["bt" + i][0])
}

function jogar(e) {
    if (ultima === "") {
        virarCarta(e)
        e.removeAttribute("onclick")
        ultima = e.id
    } else {
        virarCarta(e)
        
        if (cardObj[e.id][1] == cardObj[ultima][1]) {
            console.log("Acertou")
            acertos++;
            e.removeAttribute("onclick")
            ultima = ""
        } else {
            console.log("Errou! Aguarde!")
            erros++;
            espere()
            setTimeout(() => {
                virarCarta(e)
                virarCarta(cardObj[ultima][0])
                ultima = ""
                deVoltaAoJogo() 
            }
                , 1000)
            
            cardObj[ultima][0].setAttribute("onclick", "jogar(this)")
        }
        tentativas++;
        console.log("Tentativas = "+tentativas)
        console.log("Acertos = "+acertos)
        console.log("Erros = "+erros)
    }
}

function espere() {
    for (i = 1; i <= 8; i++)
        cardObj["bt" + i][0].removeAttribute("onclick")
}

function deVoltaAoJogo() {
    for (i = 1; i <= 8; i++)
        if (!cardObj["bt" + i][2])
            cardObj["bt" + i][0].setAttribute("onclick", "jogar(this)")
}

// Função para embaralhar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

/*
//Exemplo de função para criar um botão
function criarBotao(){
    let bt = document.createElement("button")
    bt.setAttribute("click","virarCarta(this)")
    bt.innerHTML = "Sou um botão criado"
    let local = document.getElementById("teste")
    local.appendChild(bt)
}
*/