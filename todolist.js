const todoInput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo")
 
todobutton.addEventListener('click' , addtodo);
todolist.addEventListener('click' , deletecheck);
filteroption.addEventListener('click' , filtertodo);

function addtodo(event) {
    event.preventDefault();

    //creating todo
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
 
    //creating LI
    const newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    //completed button
    const completebutton = document.createElement('button');
    completebutton.innerHTML = `<i class="fas fa-check"></i>`;
    completebutton.classList.add("complete-btn");
    tododiv.appendChild(completebutton);

    //delete button
    const removebutton = document.createElement('button');
    removebutton.innerHTML = `<i class="fas fa-trash"></i>`;
    removebutton.classList.add("remove-btn");
    tododiv.appendChild(removebutton);

    todolist.appendChild(tododiv);
    // to clear todo input values
   todoInput.value= "";

}

function deletecheck (e) {
    const item = e.target;

    if(item.classList[0] === "remove-btn"){
    const todo = item.parentElement;
    todo.classList.add('fall');
     todo.addEventListener("transitionend" ,function(){
         todo.remove();
     });
    }

    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filtertodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}