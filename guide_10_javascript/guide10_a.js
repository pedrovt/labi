//10.3 Sintaxe Básica
var s = "3";
var space=" ";
var t = "Hello";

var x;
x = 9;
y= 35;

console.log("x="+x);
console.log(x+2);
console.log("s+space+t="+s+space+t);
console.log("y="+y);
document.write(y);

//Ciclo de repetição
for(var i=0;i<16;i++){
  document.write(i-2);
  document.write("<br />");
}
document.write("Teste");
document.write("<br />");

for(var j=0;j<16;j++){
  document.write("Batman");
  document.write("<br />");
}

//Funções
function imprimir(message, x){
  if (x==0) {
    console.log(message);
  }
  if (x==1) {
    document.write("<br />");
    document.write(message);
  }
}

function soma(x,y) {
  return x+y;
}

function diferenca(x,y) {
  return x-y;
}

function produto(x,y) {
  return x*y;
}

function quociente(x,y) {
  return x/y;
}

var resultado= [
  soma(3,4),
  diferenca(3,4),
  produto(3,4),
  quociente(3,4),
];

document.write("<br />");
for (var j=0; j<4; j++) {
  imprimir(resultado[j],0);
  imprimir(resultado[j],1);
}
