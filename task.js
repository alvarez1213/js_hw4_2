const taskText = document.getElementById('task__input')
const btnAddTask = document.getElementById('tasks__add')
const tasksList = document.getElementById('tasks__list')

btnAddTask.addEventListener('click', addTask)
tasksList.addEventListener('click', delTask)

function addTask(event) {
    if (taskText.value.trim() !== '') {
        tasksList.insertAdjacentHTML('afterBegin',
         `<div class="task">
            <div class="task__title">
                ${taskText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`
        )        
        
        taskText.value = ''
    }
    
    taskText.focus()
    event.preventDefault()
}

function delTask (event) {
    let target = event.target
    if (Array.from(target.classList).includes('task__remove')) {
      target.parentElement.remove()
    }
}