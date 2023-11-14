const taskText = document.getElementById('task__input')
const btnAddTask = document.getElementById('tasks__add')
const tasksList = document.getElementById('tasks__list')

taskText.addEventListener('keydown', addTask)
btnAddTask.addEventListener('click', addTask)
document.addEventListener('click', delTask)

function addTask(event) {
    if ((event.key == 'Enter' || event.type == 'click') && taskText.value.length != 0) {
        tasksList.innerHTML +=
         `<div class="task">
            <div class="task__title">
                ${taskText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`
        
        taskText.value = null
        
        if (event.type == 'click') {
            taskText.focus()
        }

        event.preventDefault()
    }
}

function delTask (event) {
    let target = event.target
    if (Array.from(target.classList).includes('task__remove')) {
      target.parentElement.remove()
    }
}