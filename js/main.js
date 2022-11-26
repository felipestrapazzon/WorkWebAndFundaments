








//LETRA PARA BINÁRIO

function convert() {
    var input = document.getElementById("ti1").value;
    var output = document.getElementById("ti2");  
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
  }













//DECIMAL PARA OCTAL

  function convertDecimalOctal() {
    var input = parseInt(document.getElementById("tii1").value);
    var output = document.getElementById("tii2");  
    output.value = "";
    output.value += input.toString(8) + "";
  }

  //DECIMAL PARA BINARIO

  function convertDecimalBinario() {
    var input = parseInt(document.getElementById("tiii1").value);
    var output = document.getElementById("tiii2");  
    output.value = "";
    output.value += input.toString(2) + "";
  }












  //BINARIO PARA DECIMAL


  function convertBinarioDecimal() {

    var nmrbinary = document.getElementById("ty1").value;
    var output = document.getElementById("ty2");
    output.value = "";
    
    ty2.value = parseInt(nmrbinary,2) + " (dec)"
  }


  //OCTAL PARA DECIMAL 
  
  function convertOctalDecimal() {

    var nmroctal = document.getElementById("tyy1").value;
    var output = document.getElementById("tyy2");
    output.value = "";
    
    tyy2.value = parseInt(nmroctal,8) + " (dec)"
  }
















//FONTES + & -
  
function fontmais() {
    document.body.style.fontSize = '28px'
    document.getElementById("botaob").style.fontSize = "28px"
    document.getElementById("botaobb").style.fontSize = "28px"
    document.getElementById("botao").style.fontSize = "28px"
    document.getElementById("ti1").style.fontSize = "22px"
    document.getElementById("ti2").style.fontSize = "22px"
}

function fontmenos() {
    document.body.style.fontSize = '16px'
    document.getElementById("botaob").style.fontSize = "16px"
    document.getElementById("botaobb").style.fontSize = "16px"
    document.getElementById("botao").style.fontSize = "16px"
    document.getElementById("ti1").style.fontSize = "13px"
    document.getElementById("ti2").style.fontSize = "13px"
}
    
















//QUIZ

function correct () {

    document.getElementById("bntcorrect").style.color = "#0741E3"
    document.getElementById("bntcorrect").style.backgroundColor = "#A0E6E8"
    document.getElementById("bntcorrect").style.border = "#50B6FF"
}

function incorrect () {

    document.getElementById("bnt").style.color = "red"
    document.getElementById("bnt").style.backgroundColor = "#FFB1B5"
    document.getElementById("bnt").style.border = "#FFB1B5"
}
 
function incorrect2() {

    document.getElementById("bnt2").style.color = "red"
    document.getElementById("bnt2").style.backgroundColor = "#FFB1B5"
    document.getElementById("bnt2").style.border = "#FFB1B5"
}

function incorrect3() {

    document.getElementById("bnt3").style.color = "red"
    document.getElementById("bnt3").style.backgroundColor = "#FFB1B5"
    document.getElementById("bnt3").style.border = "#FFB1B5"
}


  
  


















