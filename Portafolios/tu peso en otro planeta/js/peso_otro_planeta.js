let g_tierra = 9.8;

let g_marte = 3.7;

let g_jupiter = 24.7;


let nombre = document.getElementById("correos");

let peso_normal = document.getElementById("claves");

let planeta_marte = document.getElementById("marte"); 

let planeta_jupiter = document.getElementById("jupiter"); 

let mostrar_peso = document.getElementById("mostrar");


planeta_marte.addEventListener("click", () => {

    let nomb = nombre.value

    let peso_final= peso_normal.value * g_marte / g_tierra;

    peso_final = parseInt(peso_final);

    mostrar_peso.innerHTML =`Tu Peso en Marte ${nomb} Es: <mark>${peso_final}</mark>KG` ;
 //"tu peso en Marte " + nomb + " es: " + peso_final
})

planeta_jupiter.addEventListener("click", () => {

   

    let nomb = nombre.value

    let peso_final= peso_normal.value * g_jupiter / g_tierra;

    peso_final = parseInt(peso_final);

    mostrar_peso.innerHTML = `Tu Peso En Jupiter ${nomb} Es: <mark>${peso_final}</mark>KG` ;


});


