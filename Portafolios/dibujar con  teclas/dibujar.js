let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarteclado);

let cuadrito = document.getElementById("area_de_dibujo");

let papel = cuadrito.getContext("2d");

let x = 150;

let y = 150;

dibujarLineas("red", x-1, y-1, x+1, y+1, papel);

function dibujarLineas(color,xinicial, yinicial, xfinal, yfinal, lienzo){

 lienzo.beginPath();
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 4;
 lienzo.moveTo(xinicial, yinicial);
 lienzo.lineTo(xfinal, yfinal);
 lienzo.stroke();
 lienzo.closePath();

}

function dibujarteclado(evento){

    let movimiento = 10;

    let colorcito = "blue";

    if(evento.keyCode == teclas.UP){

        dibujarLineas(colorcito, x, y, x, y - movimiento, papel);

        y = y - movimiento;
    }

    if(evento.keyCode == teclas.DOWN){
        
        dibujarLineas(colorcito, x, y, x, y + movimiento, papel);

        y = y + movimiento;
    }

    if(evento.keyCode == teclas.LEFT){
        
        dibujarLineas(colorcito, x, y, x - movimiento, y, papel);

        x = x - movimiento;
    }

    if(evento.keyCode == teclas.RIGHT){
        
        dibujarLineas(colorcito, x, y, x + movimiento, y, papel);

        x = x + movimiento;
    }

}