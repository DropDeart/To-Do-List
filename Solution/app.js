//DOM Elements
const text = document.getElementById('text')
const addTaskButton = document.getElementById('add-task-btn')
const saveTaskButton = document.getElementById('save-todo-btn')
const listBox = document.getElementById('listBox')
const saveInd = document.getElementById('saveIndex')
let todoArray = []
//LocalStroge
addTaskButton.addEventListener('click', (e) => {
  e.preventDefault()
  let todo = localStorage.getItem('todo')
  if (todo === null) {
    todoArray = []
  } else {
    todoArray = JSON.parse(todo)
  }
  todoArray.push(text.value)
  text.value = ''
  localStorage.setItem('todo', JSON.stringify(todoArray))
  displayTodo()
})
//Display 
function displayTodo() {
  let todo = localStorage.getItem('todo')
  if (todo === null) {
    todoArray = []
  } else {
    todoArray = JSON.parse(todo)
  }
  let htmlCode = ''//Add item from to List
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <p class='w-full text-grey-darkest' id ="textContent">${list}</p>
    <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
 </div>`
  })
  listBox.innerHTML = htmlCode
}//Delete Button Function
function deleteTodo(ind) {
  let todo = localStorage.getItem('todo')
  todoArray = JSON.parse(todo)
  todoArray.splice(ind, 1)
  localStorage.setItem('todo', JSON.stringify(todoArray))
  displayTodo()
}
