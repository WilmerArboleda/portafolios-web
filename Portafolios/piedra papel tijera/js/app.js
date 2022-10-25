
async function nombre(){
    let nombre = await swal("Escribe tu Nombre Para Jugar Piedra Papel o Tigetas:", {
        content: "input",
      })
      //console.log(nombre)
      
    //let nombre = prompt("Escribe tu nombre para comenzar a jugar piedra papel o tigetas");
    if(nombre === ""){
        nombre = "Sin nombre";
    }
    usuario.innerHTML ="Elección "+ nombre;

}
nombre();


const piedra = "rock";
const papel = "paper";
const tigera = "scissors";

const enpate = 0;
const ganaste = 1;
const perdiste = 2;



const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTigera = document.getElementById("tigeras");
const resultadoTexto = document.getElementById("definicion")
const usuarioimg = document.getElementById("usuario-img");
const maquinaimg = document.getElementById("maquina-img");




botonPiedra.addEventListener("click", ()=>{
play(piedra);
});
botonPapel.addEventListener("click", ()=>{
play(papel);
});
botonTigera.addEventListener("click", ()=>{ 
 play(tigera);
});

function play(usuarioOpcion){

usuarioimg.src = "img/"+usuarioOpcion+".svg";

resultadoTexto.innerHTML = "Maquina Pensando";

const interval = setInterval(function(){
  const maquinaOpcion = calcMaquiOpcion();
  maquinaimg.src = "img/"+maquinaOpcion+".svg";

},200);

setTimeout(function(){

    clearInterval(interval);

    const maquinaOpcion = calcMaquiOpcion();
    const result = calcResultado(usuarioOpcion, maquinaOpcion);
   
    maquinaimg.src = "img/"+maquinaOpcion+".svg";

    switch(result){
        case enpate:
            resultadoTexto.innerHTML = `Resultado <mark>Empate</mark>`;
            break;
        case ganaste:
            resultadoTexto.innerHTML = `Resultado <mark>Ganaste</mark>`;
            break;
         case perdiste:
             resultadoTexto.innerHTML = `Resultado <mark>Perdiste</mark>`;
             break;
    }

 }, 2000);
}

function calcMaquiOpcion(){
   const number = Math.floor(Math.random() * 3)
   switch (number){
       case 0:
           return piedra;
       case 1:
           return papel;
       case 2:
           return tigera;
   }

}

function calcResultado(usuarioOpcion, maquinaOpcion){
    if(usuarioOpcion === maquinaOpcion){
        return enpate;
    
    }else if(usuarioOpcion === piedra){
        if(maquinaOpcion === papel) return perdiste;
        if(maquinaOpcion === tigera) return ganaste;

    }else if(usuarioOpcion === papel){
        if(maquinaOpcion === tigera) return perdiste;
        if(maquinaOpcion === piedra) return ganaste;

    }else if(usuarioOpcion === tigera){
        if(maquinaOpcion === piedra) return perdiste;
        if(maquinaOpcion === papel) return ganaste;
    }
}