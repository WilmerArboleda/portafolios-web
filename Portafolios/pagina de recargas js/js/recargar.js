

  
  function iniciar(){

    let tipo = prompt("Que deseas recargar..." + "\n" + "1 movil" + "\n" + "2 tv");
    if(tipo === "1"){
      let movil = "movil";
    }else if(tipo ==="2"){
      let movil = "TV";
    }else {
    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");
  
  }
  var operador = prompt("Elige el operador ...." + "\n" + "  1. claro  " + "\n" + "  2. movistar " + "\n" + "  3. tigo");
  if(operador ==="1"){
    empresa = "claro";
  }else if(operador === "2"){
      empresa = "movistar";
  }else if(operador === "3"){
        empresa = "tigo";
  }else {
    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");
    
  }
  
  let dinero = parseInt( prompt("valor a recargar"));

  if(dinero === Number){
    confirm("Datos de tu recarga "+ movil +" "+ empresa +" "+ dinero + " comfirmas la recarga");
 
    alert("Felicidades tu transaccion a sido exitosa ...  gracias por preferinos");
  
 }
}