const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

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
  li.id = todo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = todo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(item => {
    paintToDo(item);
  });
}