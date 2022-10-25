// iniciar variables
let targetasDestapadas = 0;
let targeta1 = null;
let targeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 30;
let tiempoInicial = 30;
let tiempoRegresivo = null;
let reiniciarJuego = document.getElementById("reiniciar");

// esto se agrego despues para reiniciar el juego

reiniciarJuego.addEventListener("click", reiniciar);

function reiniciar(){
    location.reload();
}



// Apuntando al html
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

// funciones
function contarTiempo(){
    tiempoRegresivo = setInterval(()=>{
        tiempo -- ;
        mostrarTiempo.innerHTML = `Tiempo: ${tiempo} segundos`;
        if(tiempo == 0){
            clearInterval(tiempoRegresivo);
            bloquearTargetasPorTiempo();
        }
    },1000);
}

function bloquearTargetasPorTiempo(){
    for(let i = 0; i <= 15; i++){
        let targetaBloqueada = document.getElementById(i);
        targetaBloqueada.innerHTML = numeros[i];
        targetaBloqueada.disabled = true;
    }
}

// funcion principal
function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }


    targetasDestapadas++;

    if(targetasDestapadas == 1){
        //mostrar primer numero
        targeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        targeta1.innerHTML = primerResultado;

        // Deshabilitar primer boton
        targeta1.disabled = true;
    }else if(targetasDestapadas == 2){
        //mostrar segundo numero
        targeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        targeta2.innerHTML = segundoResultado;
        // deshabilitar segundo boton
        targeta2.disabled = true;

        // Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            // Poner en cero contador targetas destapadas
            targetasDestapadas = 0;

            // Incrementar Aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱`;
                mostrarTiempo.innerHTML = `🎉 Solo Tardaste: ${tiempoInicial - tiempo} Segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👍 😮‍💨`;
            }



        }else{
            //mostrar por un momento valores y volver a ocultar
            setTimeout(()=>{
                targeta1.innerHTML = " ";
                targeta2.innerHTML = " ";
                targeta1.disabled = false;
                targeta2.disabled = false;
                targetasDestapadas = 0;
            },500);
        }
    }
}