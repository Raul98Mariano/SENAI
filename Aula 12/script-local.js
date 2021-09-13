//armazenar informação temporariamente
localStorage.setItem("name", "Raul");

//recuperar informação
let nome = localStorage.getItem("name");
console.log(nome);

let data = {
    id: 53,
    nome: "Beltrano Perdido"
}

//De obj JSON para String
console.log(JSON.stringify(data));

//De String para obj JSON
console.log(JSON.parse(`{"nome": "Ciclano", "idade":18}`));



localStorage.setItem("info", JSON.stringify(data));

let dataUser = JSON.parse(localStorage.getItem("info"));

console.log(dataUser);


//Zerar as informações
localStorage.clear();

//Remove um item
localStorage.removeItem("info");

console.log(localStorage.getItem("teste"));

if(localStorage.getItem("data") === null){
    //Não autorizado
}