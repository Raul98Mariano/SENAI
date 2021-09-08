var count = 0;


function jogar(button) {
    if (count % 2 == 0) {
        console.log("Par");
        button.innerHTML = "X";
        
    } else {
        console.log("Impar");
        button.innerHTML = "O";
    }
    button.removeAttribute("onclick");
    count++;
}

var botao = document.getElementById("fodase")

function zerar(){
    count = 0;
}
