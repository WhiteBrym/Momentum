const todoForm = document.querySelector('.js-formTodo'),
  todoInput = todoForm.querySelector('input'),
  todoList = document.querySelector('.js-todoList')

const TODOS_LS = 'toDo'
let toDos = []

function loadTodos() {
  const todos = localStorage.getItem(TODOS_LS)
  if (todos !== null) {
    const parsedTodos = JSON.parse(todos)
    parsedTodos.forEach((e) => {
      showTodos(e.name)
    })
  }
}
function init() {
  loadTodos()
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const currentValue = todoInput.value
    showTodos(currentValue)
    todoInput.value = ''
  })
}

function deletBtn(event) {
  const btn = event.target
  const li = btn.parentNode
  todoList.removeChild(li)
  const cleanTodos = toDos.filter((i) => i.id !== +li.id)
  toDos = cleanTodos
  saveTodos()
}

function showTodos(text) {
  const li = document.createElement('li')
  const btnDel = document.createElement('button')
  const span = document.createElement('span')
  const newId = toDos.length + 1
  btnDel.textContent = '❌'
  btnDel.classList.add('button-css')
  btnDel.addEventListener('click', deletBtn)
  span.textContent = text
  li.appendChild(span)
  li.appendChild(btnDel)
  li.id = newId
  todoList.appendChild(li)
  const objectTodos = {
    name: text,
    id: newId,
  }
  toDos.push(objectTodos)
  saveTodos()
}
init()
function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)) // обєкт в виде строки в строку
}
