



//elements from html 
const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")  
const searchInput = document.getElementById("searchInput")
const taskTableBody = document.getElementById("taskTableBody")


// state
let tasks = [];
let currentTaskId = null;

//* any btn needs event 
addBtn.addEventListener("click", addTask)
searchInput.addEventListener("input", searchTask)



// functions 

function addTask() {
  const taskName = taskInput.value.trim()

  if (taskName === '') {
    alert("Add task")
    return
  }

  if (currentTaskId === null) {
    const task = {
      id: Date.now(),
      name: taskName
    }

    tasks.push(task)
  } else {
    tasks = tasks.map(function(task) {
      if (task.id === currentTaskId) {
        return {
          ...task,
          name: taskName
        }
      }
      return task
    })

    currentTaskId = null
    addBtn.innerHTML = "Add"
  }

  renderTasks()
  taskInput.value = ''
}


function searchTask() {
  const searchValue = searchInput.value.toLowerCase().trim()

  const filteredTasks = tasks.filter(function(task) {
    return task.name.toLowerCase().includes(searchValue)
  })

  taskTableBody.innerHTML = ''

  filteredTasks.forEach(function(task, index) {
    const row = document.createElement("tr")

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.name}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="updateTask(${task.id})">
          Update
        </button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">
          Delete
        </button>
      </td>
    `

    taskTableBody.appendChild(row)
  })
}

function updateTask(id) {
  const task = tasks.find(function(task) {
    return task.id === id
  })

  taskInput.value = task.name
  currentTaskId = id
  addBtn.innerHTML = "Update"
}


function deleteTask(id) {
  tasks = tasks.filter(function(task) {
    return task.id !== id
  })

  if (currentTaskId === id) {
    currentTaskId = null
    taskInput.value = ''
    addBtn.innerHTML = "Add"
  }

  renderTasks()
}

function renderTasks() {
  taskTableBody.innerHTML = ''

  tasks.forEach(function(task, index) {
    const row = document.createElement("tr")

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.name}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="updateTask(${task.id})">
          Update
        </button>
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">
          Delete
        </button>
      </td>
    `

    taskTableBody.appendChild(row)
  })

}