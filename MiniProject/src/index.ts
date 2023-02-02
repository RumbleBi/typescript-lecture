interface Todo {
  text: string;
  completed: boolean;
}

// 코드 맨 뒤의 !은 ts의 Non-null 단언 연산자로, 기본적으로 element | null 방식으로 요소가 있을지 없을지 확신하지 못하는 상태로 TS는 이해하지만
// '!'를 붙임으로써 null일 경우는 없다고 단언해주는 방식이다.
// 같은 방식으로 type Assertions 는 as 를 붙임으로써 ~~타입이다 라는 것을 TS에게 알려주는 것이다.

const btn = document.getElementById("btn")! as HTMLButtonElement; //Type assertion
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

// 또는 제네릭을 사용하여 단언해주는 방식이 있다.
(<HTMLInputElement>input).value;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

// Load todos from local storage
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

// Save todos to local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);
