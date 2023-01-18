const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// delete to do list
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// add li at html
function paintToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = todo;
  button.innerText = "❌";

  button.addEventListener('click', deleteToDo);

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

// after form enter
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(item => {
    console.log("this is the turn of ", item);
  });
}