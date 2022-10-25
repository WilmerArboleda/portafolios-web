function reiniciar(){
    location.reload();
}
var bandera = false;   //indica si el juego inicio
var turno = 0;         // determina el turno
var tab = new Array(); // arreglo de botones

window.onload = function(){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click",comenzar);

}

function comenzar(){
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");

    if(jugador1.value==""){
        swal({
            title: "ALTO!",
            text: "Falta el Nombre del Jugador1!",
            icon: "error",
            button: "OK!",
          });
        //alert("Falta el Nombre del Jugador1");
        jugador1.focus();
    }else{
        if(jugador2.value==""){
            swal({
                title: "ALTO!",
                text: "Falta el Nombre del Jugador2!",
                icon: "error",
                button: "OK!",
              });
            //alert("Falta el Nombre del Jugador2");
            jugador2.focus();
        }else{
            tab[0]= document.getElementById("b0");
            tab[1]= document.getElementById("b1");
            tab[2]= document.getElementById("b2");
            tab[3]= document.getElementById("b3");
            tab[4]= document.getElementById("b4");   
            tab[5]= document.getElementById("b5");
            tab[6]= document.getElementById("b6");
            tab[7]= document.getElementById("b7");
            tab[8]= document.getElementById("b8");

            for(var i=0; i<9; i++){
                tab[i].className = "botonInicial";
                tab[i].value = "i"
            }
            turno = 1;
            document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " + jugador1.value;

        }
    }

}
function colocar(boton){
    if(bandera === true ){
        if(turno === 1 && boton.value=="i"){
        turno = 2;
        document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " +jugador2.value;
        boton.value = "x";
        boton.className="botonJugador1";
    }else{
        if(turno == 2 && boton.value=="i"){
            turno = 1;
            document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " +jugador1.value;
            boton.value = "o";
            boton.className="botonJugador2"; 
        }
    }

    }
   
    revisar();
}
function revisar(){
    if((tab[0].value== "x" && tab[1].value== "x" && tab[2].value== "x")
    || (tab[3].value== "x" && tab[4].value== "x" && tab[5].value== "x")
    || (tab[6].value== "x" && tab[7].value== "x" && tab[8].value== "x")
    || (tab[0].value== "x" && tab[3].value== "x" && tab[6].value== "x")
    || (tab[1].value== "x" && tab[4].value== "x" && tab[7].value== "x")
    || (tab[2].value== "x" && tab[5].value== "x" && tab[8].value== "x")
    || (tab[0].value== "x" && tab[4].value== "x" && tab[8].value== "x")
    || (tab[2].value== "x" && tab[4].value== "x" && tab[6].value== "x")
    ){
        swal({
            title: "Felicidades!",
            text: "Ganaste Jugador "+ jugador1.value,
            icon: "success",
            button: "OK!",
          });
       // alert("Felicidades Ganaste Jugador "+ jugador1.value);
        bandera = false;
        document.getElementById("turnoJugador").innerHTML = "Ganador Jugador " +jugador1.value +"🎉🎉";
    }

    if((tab[0].value== "o" && tab[1].value== "o" && tab[2].value== "o")
    || (tab[3].value== "o" && tab[4].value== "o" && tab[5].value== "o")
    || (tab[6].value== "o" && tab[7].value== "o" && tab[8].value== "o")
    || (tab[0].value== "o" && tab[3].value== "o" && tab[6].value== "o")
    || (tab[1].value== "o" && tab[4].value== "o" && tab[7].value== "o")
    || (tab[2].value== "o" && tab[5].value== "o" && tab[8].value== "o")
    || (tab[0].value== "o" && tab[4].value== "o" && tab[8].value== "o")
    || (tab[2].value== "o" && tab[4].value== "o" && tab[6].value== "o")
    ){
        swal({
            title: "Felicidades!",
            text: "Ganaste Jugador "+ jugador2.value,
            icon: "success",
            button: "OK!",
          });
        //alert("Felicidades Ganaste Jugador "+ jugador2.value);
        bandera = false;
        document.getElementById("turnoJugador").innerHTML = "Ganador Jugador " +jugador2.value + "🎉🎉";


    }
    
   
}
