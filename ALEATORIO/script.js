

function volver() {
	var aleatorio = Math.round(Math.random()*10);
	return(aleatorio);

}

function saudar() {

	var secreto = volver();
	var numerito = document.getElementById("minumerito").value;


	//for (var i=1; i<= 3; i++) {
		var minumero;
		minumero = parseInt(numerito);

		if (minumero == secreto){
			document.getElementById("parrafada").innerHTML = "Acertaste el número ";
			document.getElementById("parrafada").style.color =  "green";
		}
		if (minumero > secreto) {
			document.getElementById("parrafada").innerHTML = "Te pasaste ";
			document.getElementById("parrafada").style.color =  "pink";
		}
		if (minumero < secreto) {
			document.getElementById("parrafada").innerHTML = "Muy poco ";
			document.getElementById("parrafada").style.color =  "pink";
		}


	//}

	
}

function normas(){
	document.getElementById("parrafada").innerHTML = "El juego consiste en poner un numero del 1 al 10,<br> una vez lo pones le das a enviar hasta que aciertes el número,<br> quien acierte le debe un caramelo a todos. ";
	document.getElementById("parrafada").style.color =  "blue";
}