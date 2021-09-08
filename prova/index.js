var btn = document.querySelector('button.botao');
    btn.addEventListener("click", criarQuadrado);

    function criarQuadrado() {
      var nDiv = document.createElement('div');
      nDiv.style.backgroundColor = '#ff0000';
      nDiv.style.width = '250px';
      nDiv.style.height = '30px';
      nDiv.style.marginTop = '10px';
      document.querySelector('.container').appendChild(nDiv);
    }

    //pegar o elemento escrito no input e colocar dentro da 'div' ao clicar no "+"(usar getElementById)


