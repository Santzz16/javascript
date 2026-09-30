const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function createListItem(){

    const completarBtn = document.createElement('span');
    completarBtn.classList.add('completar-btn');

    const taskString = document.createElement('span');
    taskString.textContent = inputTask.value.trim();
    taskString.classList.add('task-text');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    const task = document.createElement('li');
    task.classList.add('incomplete')

    
    task.appendChild(completarBtn);
    task.appendChild(taskString);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);

    inputTask.value = "";
    inputTask.focus();

    completarBtn.addEventListener('click', function() {
        if (completarBtn.classList.contains('completar-btn')) {
            completarBtn.classList.replace('completar-btn', 'btn-completed');

            taskString.classList.replace('task-text', 'task-text-completed');
        } else {
            completarBtn.classList.replace('btn-completed', 'completar-btn');
            taskString.classList.replace('task-text-completed', 'task-text');
        }
        
    })

    deleteBtn.addEventListener('click', function(){
        task.remove();
    });
}


addTaskBtn.addEventListener('click', function(){
    if (inputTask.value.trim() != "") {
        createListItem()
    }
})