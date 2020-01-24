/*
var numerito;
numerito = 0;
while (numerito <=10){
	document.write(numerito + ' ->');
	numerito++;
}

document.write("Chao");
*/

/*
var numerito;
numerito = 0;
while (numerito >=-10){
	document.write(numerito + ' ->');
	numerito--;
}
*/

/*
document.write('<h3> ☞ Preparar bocata </h3>');
var comida;
comida = 'Pan con:';
while (comida != 'nada') {
	document.write(comida + ' ');
	comida  = prompt('Que vos apetece comer con pan?');
}

*/

/*
var conto = "Quieres que te cuente el cuento de la buena pipa?"
var resposta;
resposta = true;
while (resposta == true) {
	document.write( conto );
	resposta  = confirm(conto);
}
*/

function e2y(v1){
	return(precio*122.49);
}

function y2e(v1){
	return(precio/122.49);
}

document.write("Producto" + "-----" + "Euros" + "-----" + "Yens" + "<br>" + "<hr>");

var productonuevo = "Tienes otro producto?  ";
var resposta;
resposta = true;
while (resposta == true) {
	var producto;
	producto = prompt("Cual es el producto?   ");
	var precio;
	precio = prompt("Cantas cuesta el producto?   ");
	var moneda;
	moneda = prompt("Que moneda es? euros o yens  ");
	var numero;
	numero = parseFloat(precio);


	if (moneda == "euros") {
		var ee = e2y(numero);
		var eesin = Math.round(ee * 100) / 100;
		document.write(producto + "-----" + numero + "€" + "-----" + eesin + "¥" + "<br>");
	}else{
		var yy = y2e(numero);
		var yysin = Math.round(yy * 100) / 100;
		document.write(producto + "-----" + yysin + "€" + "-----" + numero + "¥" + "<br>");
	}
	resposta  = confirm(productonuevo);
}

/*

	if (moneda == "euros") {
		var ee = e2y(numero);
		document.write(producto + "-----" + numero + "€" + "-----" + ee + "¥" + "<br>");
	}else{
		var yy = y2e(numero);
		document.write(producto + "-----" + numero + "¥" + "-----" + yy + "€" + "<br>");
	}
	resposta  = confirm(productonuevo);
}

/*var euros;
euros = (precio/122.49);
alert(euros);

var yens;
yens = (precio*122.49);
alert(yens);
*/