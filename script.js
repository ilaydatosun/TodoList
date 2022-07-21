const form = document.querySelector("form")
const input = document.querySelector("#txtTaskName")
const btnAddNewTask = document.querySelector("#btnAddNewTask")
const btnDeleteAll = document.querySelector("#btnDeleteAll")
const taskList = document.querySelector("#task-list")
const listId = document.getElementById("task-list")


const list = [
    {
        "task": "Todo 1",
        "taskId": "task1",
        "color": "secondary"
    },
    {
        "task": "Todo 2",
        "taskId": "task2",
        "color": "success"
    },
    {
        "task": "Todo 3",
        "taskId": "task3",
        "color": "warning"
    },
    {
        "task": "Todo 4",
        "taskId": "task4",
        "color": "danger"
    },
]

list.forEach(item => {

    const li = document.createElement("li")

    li.className = "list-group-item list-group-item-" + item.color
    li.appendChild(document.createTextNode(item.task))

    const i = document.createElement("i")
    i.className = "delete-item float-right fas fa-times"
    i.title = "delete"
    li.appendChild(i)
    taskList.appendChild(li)
})


eventListeners()

function eventListeners() {
    form.addEventListener("submit", addNewItem)

}

const ul = document.getElementById("task-list")
ul.addEventListener("click", function (e) {
    if (e.target.className === "delete-item float-right fas fa-times") {
        e.target.parentElement.remove()
    }
})

function addNewItem() {
    if (input.value === '') {
        alert("boş bırakılamaz")
        return
    }
    const li = document.createElement("li")
    li.className = "list-group-item list-group-item-secondary"
    li.id = new Date().getTime()
    li.appendChild(document.createTextNode(input.value))

    const i = document.createElement("i")
    i.classList = "delete-item float-right fas fa-times"
    i.title = "delete"
    li.appendChild(i)
    taskList.appendChild(li)

}

btnDeleteAll.addEventListener("click", function (e) {
    taskList.innerHTML = ""
})

const inputTaskName = document.getElementById("txtTaskName")
