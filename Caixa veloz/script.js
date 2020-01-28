/*
	Tarefa 5
	Nome do ficheiro: script.js
		Usado: alert(), if y else 

		Si hace calor pues me baño en la piscina
		if .......... else .....................

*/

var producto1 = prompt("Precio primer producto");
precio1 = parseFloat(producto1);
document.write("Producto 1" + "-------" + precio1 + "€" + "<br/>");
var producto2 = prompt("Precio segundo producto");
precio2 = parseFloat(producto2);
document.write("Producto 2" + "-------" + precio2 + "€" + "<br/>");
var producto3 = prompt("Precio tercer producto");
precio3 = parseFloat(producto3);
document.write("Producto 3" + "-------" + precio3 + "€" + "<br/>");
total = (precio1+precio2+precio3);
var totalredondo = Math.round(total * 100) / 100;
document.write("<hr/>" + "Total compra=" + totalredondo + "€");