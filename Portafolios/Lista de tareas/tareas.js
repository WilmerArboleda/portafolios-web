IdCounter = 0;
//OTRAS FORMAS DE TOMAR ALGO DEL HTML ADEMAS DE CLASS Y ID
const cash = document.querySelector('input[type="Text"]');
const campo = document.querySelector(".campo");

userInput.addEventListener("submit", (event)=>{
    event.preventDefault();
    if(campo.value == ""){
        return  alert("Debes Escribir una Tarea antes de Agregarla")
    }
    addTaks();
})

let addTaks= ()=>{
    IdCounter++;
    let newValue = cash.value;

   //NUEVO STANDAR PERMITE LLAMAR CON EL ID DEL DOM (list)
    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
      <label>
        <input type="checkbox">
        ${newValue}
      </label>
      <img src="https://media.istockphoto.com/vectors/trash-cangarbage-canrubbish-bin-icon-vector-id928418914?k=20&m=928418914&s=170667a&w=0&h=T5YqBSw1p2pVa3W3tPZjnWiikbCFclG6dm7wRusc-Ic=" class="closeBtn">
    </div>
    `
    cash.value = "";
    updateStats();
}


list.addEventListener("click", (event)=>{
    console.log(event.srcElement.nodeName);  // con el event buscamos donde se hizo el clic
    if(event.srcElement.nodeName == "INPUT"){
        updateStats();
    } else if(event.srcElement.nodeName == "IMG"){
        console.log(event.srcElement.parentNode.id);// asi se encuentra el id de la tarea agregada
        deleteTask(event.srcElement.parentNode.id);
    }
});


let updateStats = ()=>{
    let element = list.querySelectorAll("div");
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');

    stats.innerHTML = `<p> Tareas Pendientes: ${element.length} Completadas: ${checkbox.length}</p>`
}

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};