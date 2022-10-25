

let edad = document.getElementById("edad");

let boton = document.getElementById("procesar");

boton.addEventListener("click", activar);

function activar(){

    let x = edad.value;
    alert("esto escribiste " + x);
   
};
