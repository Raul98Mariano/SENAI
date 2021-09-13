var body = document.querySelector("body");
function loadData(e){
    //console.log("Arquivo carregado!");
   //console.log(e);

   let file = e.files[0];

   let fr = new FileReader();

   fr.onload = () => {
        //console.log(fr.result);

        let data = JSON.parse(fr.result);
        //console.log(JSON.parse(data));
        // console.log(data.nome);

        generateHTML(data);
   };

   fr.readAsText(file);
}

function generateHTML(data){

    for(let i=0; i<data.length; i++){

    let a = document.createElement("div");

    let image = document.createElement("img");
    image.src = data[i].foto;

    let nome = document.createElement("h2");
    nome.innerHTML = data[i].nome;

    let ano = document.createElement("h5");
    ano.innerHTML = data[i].ano;

    let genero = document.createElement("h5");
    genero.innerHTML = data[i].genero;
   

    a.appendChild(image);
    a.appendChild(nome);
    a.appendChild(genero);
    a.appendChild(ano);


    body.appendChild(a);

    }
}