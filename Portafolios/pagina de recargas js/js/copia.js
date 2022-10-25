function iniciar(){

    var tipo = prompt("Que deseas recargar..." + "\n" + "1 movil" + "\n" + "2 tv");
   
  if(tipo ==="1" ){

   var movil = "movil";

  
   var operador = prompt("Elige el operador ...." + "\n" + "  1. claro  " + "\n" + "  2. movistar " + "\n" + "  3. tigo");

    if(operador ==="1"){
 
       empresa = "claro";
   }else {
    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

  }
  
 
   if(operador =="2" && operador || null){
 
       empresa = "movistar";
 
   }else {
    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

  }
 
   if(operador =="3" && operador || null){
 
         empresa = "tigo";
 
   }else {
    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

  }
       
   var valor =  parseInt( prompt("ahora escribe valor monto a recargar"));

   if(valortv === Number){
    confirm("Datos de tu recarga "+ movil +" "+ empresa +" "+ valor + " comfirmas la recarga");
 
    alert("Felicidades tu transaccion a sido exitosa ...  gracias por preferinos");
    
   }else {

    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");


   }
 
      
        
  }else{

    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

  }
  

  }

  //si elige la opcion TV

  if(tipo === "2"){
 
    var tv = "TV";

  }else {
    alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

  }

 var prestador = prompt("Que quieres recargar:  1. claro    2. Direc tv   3. etb");

 if(prestador === "1"){

  tipotv = "claro";

 }else {
  alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

 }
 if(prestador === "2"){

  tipotv = "Direc tv";

 }else {
  alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

 }
 if(prestador == "3"){

  tipotv = "etb";

 }else {
  alert("Lo sentimos uno de los valores no existe o no fue diligenciado.. vuelve a intentarlo");

 }



 valortv = prompt("ahora ingresa el valor a recargar");

 confirm("Datos de la recarga " + tv +" "+ tipotv +" "+ valortv +" comfirmas la recarga");

 alert("Felicidades tu transaccion a sido exitosa ...  gracias por preferinos");