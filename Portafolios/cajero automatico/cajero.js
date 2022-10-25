
let b_100 = document.getElementById("b_100");
let b_50 = document.getElementById("b_50");
let b_20 = document.getElementById("b_20");
let b_10 = document.getElementById("b_10");
let boton = document.getElementById("boton");

let dinero_cargado = document.getElementById("dinero_cargado");

function cargar_dinero(ev)
{
    ev.preventDefault();
    dinero_cargado.innerHTML = "Llenaste el cajero con $" + ((100000 * b_100.value) + (50000 * b_50.value) + (20000 * b_20.value) + (10000 * b_10.value));
    
}

boton.addEventListener("click", cargar_dinero );

class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregardinero()
{
    let din = document.getElementById("dinero");
    dinero = parseInt(din.value);
    for(let bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new Billete(bi.valor, papeles));
            dinero = dinero -(bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "NO HAY ESTA CANTIDAD DE DINERO DISPONIBLE";   
    }
    else
    {
        for(let ent of entregado)
        {
            if(ent.cantidad > 0)
            {
                resultado.innerHTML =  resultado.innerHTML + ent.cantidad + "billetes de $" + ent.valor + "<br/>";

            }
        }
    }

    
}
let caja = [];
let entregado = [];
caja.push(new Billete(100000, b_100));
caja.push(new Billete(50000, b_50));
caja.push(new Billete(20000, b_20));
caja.push(new Billete(10000, b_10));

let dinero = 0;
let div = 0;
let papeles = 0;

let resultado = document.getElementById("resultado");
let b = document.getElementById("extraer");
b.addEventListener("click", entregardinero )