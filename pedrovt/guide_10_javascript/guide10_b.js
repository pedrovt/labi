//10.4 Interacção com o DOM
var z;

function calcular(){
  var x = document.getElementById( "op1" );
  var y = document.getElementById( "op2" );

  //Debug
  console.log("x="+parseFloat(x.value) );
  console.log("y="+parseFloat(y.value) );

  //Executa a operação
  z=parseFloat(x.value)+parseFloat(y.value);

  //Debug
  console.log("x+y="+z );

  //Devolve o resultado à caixa de texto
  document.getElementById('res').value=z;
}

//Eventos
window.onload = calcular;
