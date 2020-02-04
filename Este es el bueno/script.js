/*

function volver() {
	var aleatorio = Math.round(Math.random()*10);
	alert(aleatorio)
	return(aleatorio);

}

function saudar() {

	var secreto = volver();
	var numerito = document.getElementById("minumerito").value;


	//for (var i=1; i<= 3; i++) {
		var minumero;
		minumero = parseInt(numerito);

		if (minumero == secreto){
			document.getElementById("parrafada").innerHTML = "HAS GANADO";
			document.getElementById("parrafada").style.color =  "green";
		}
		if (minumero > secreto) {
			document.getElementById("parrafada").innerHTML = "EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
			document.getElementById("parrafada").style.color =  "pink";
		}
		if (minumero < secreto) {
			document.getElementById("parrafada").innerHTML =EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" ;
			document.getElementById("parrafada").style.color =  "pink";
		}


	//}

	
}

*/

var max = 100; 
var min = 1; 
var numerom = Math.random()*(max-min) + min; 
numerom = parseInt(numerom); 
//while(true){
	function saudar(){
		var usuario = document.getElementById("minumerito").value;
		

		if(usuario == numerom){ 
			document.getElementById("parrafada").innerHTML = "HAS GANADO";
			document.getElementById("parrafada").style.color =  "green";
			
		}
		else if(usuario == 0){
			
		}
		else if(usuario < numerom){
			document.getElementById("parrafada").innerHTML ="EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" ; 
			document.getElementById("parrafada").style.color =  "pink";

		}
		else if(usuario > numerom){
			document.getElementById("parrafada").innerHTML = "EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
			document.getElementById("parrafada").style.color =  "pink";
			
			
		}
	}
	function normas(){
		document.getElementById("parrafada").innerHTML = "El juego consiste en poner un numero del 1 al 100,<br> una vez lo pones le das a enviar, y te dira si acertaste, <br> te pasaste o o te quedaste corto  si quieres volver a empezar dale a F5.  ";
		document.getElementById("parrafada").style.color =  "blue";
	}