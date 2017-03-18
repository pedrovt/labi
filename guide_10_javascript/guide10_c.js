var op = "+";

//Seleciona a operação
function operacao() {
  var elemento = event.target;
  var elementoSeleccionado = elemento.options[elemento.selectedIndex];
  op = elementoSeleccionado.value;
  document.getElementById("op-view").innerHTML=op;
  //Debug
  console.log("Operação: "+op);
}

//Calcula o resultado da operação
function calcular(){
  //Operandos
  var x = document.getElementById ("op1");
  var num1= parseFloat(x.value);
  var y = document.getElementById ("op2");
  var num2= parseFloat(y.value);

  //Debug
  console.log(num1);
  console.log(num2);

  //Executa a operação
  switch(op) {
    case "+":
      var z=num1+num2;
      break;
    case "-":
      var z=num1-num2;
      break;
    case "*":
      var z=num1*num2;
      break;
    case "/":
      var z=num1/num2;
      break;
  }

  //Passa o valor para a caixa de texto
  document.getElementById('res').value=z;

  //Debug
  console.log("Resultado: ");
  console.log(z);
}
window.onload = calcular;

//Exercício 10.17
function mover(elemento){
  var e = document.getElementById(elemento);
  e.style.position = "absolute";
  e.style.top = (Math.random() * window.innerHeight)+"px";
  e.style.left = (Math.random() * window.innerWidth)+"px";
}

//10.5 Temporizadores
var temp = null;
//Activada com clique esquerdo do rato
function diminuirVertical(elemento){
  if(temp == null){
    var elemento = event.target;
    temp = setInterval("diminuirVertical("+elemento.id+")",10);
  }
  var altura = parseInt(elemento.height) - 10 ;
  elemento.style.height = altura+"px";
  if(altura == 0){
    window.clearInterval(temporizador);
    temp = null;
  }
}
