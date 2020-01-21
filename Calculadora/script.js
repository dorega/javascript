/*
	Tarefa 5
	Nome do ficheiro: script.js
		Usado: alert(), if y else 

		Si hace calor pues me baño en la piscina
		if .......... else .....................

*/

/*function calculadora(operacion){

if(operacion == "+") {
	document.write("numerouno" + "+" + "numerodos" + "=" "<br/>");
	document.write(numerouno + numerodos);
} else {
	if(operacion == "-") {
		document.write("numerouno" + "-" + "numerodos" + "=" "<br/>");
		document.write(numerouno - numerodos);
	}else{
		document.write("numerouno" + "*" + "numerodos" + "=" "<br/>");
		document.write(numerouno * numerodos);
		}
	}
}




var qoperacion = prompt("Que operación quieres? + - *");


var numero1 = prompt("Primer número");
numerouno = parseFloat(numero1);

var numero2 = prompt("Primer número");
numerodos = parseFloat(numero2);

calculadora(qoperacion);

*/
function calculadora(operacion){
	if(operacion == "+") {
		document.write(numerouno + "+" + numerodos + "=" + " " + (numerouno+numerodos) + "<br>")
	}else{
		if (operacion == "-") {
			document.write(numerouno + "-" + numerodos + "=" + " " + (numerouno-numerodos) + "<br>")
		}else{
			document.write(numerouno + "x" + numerodos + "=" + " " + (numerouno*numerodos) + "<br>")
		}
	}
}
for (var i = 1; i <=3 ;i++) {
	
var signo = prompt("Que operacion quieres? + - x");

var numero1 = prompt("Primer numero");
numerouno = parseFloat(numero1)

var numero2 = prompt("Segundo numero");
numerodos = parseFloat(numero2)

calculadora(signo);
}



