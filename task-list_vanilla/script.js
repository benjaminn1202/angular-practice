const taskCreation_NameInput = document.querySelector('#taskCreation_NameInput');
const taskCreation_AddButton = document.querySelector('#taskCreation_AddButton');
const popupDeleteTask = document.querySelector('.popupDeleteTask');
const popupEditTask = document.querySelector('.popupEditTask');
const deleteTaskButton = document.querySelector('#deleteTaskButton');
const editTaskButton = document.querySelector('#editTaskButton');

const taskList = document.querySelector('#taskList');

let tasks = [];

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const retrieveTasks = () => {
    let retrievedTasks = localStorage.getItem('tasks')

    if(!retrieveTasks) {
        console.log('No tasks yet')
        tasks = [];
    } else {
        tasks = JSON.parse(retrievedTasks);
        tasks.forEach(task => {
            console.log(task.name + ', ' + task.state)
        });
    }
}

const addTaskData = () => {
    validateInput(taskCreation_NameInput, 'add', tasks.length + 1);
    
    saveTasks();
    loadTasks();
}

const loadTasks = () => {
    retrieveTasks();
    taskList.innerHTML = '';

    tasks.forEach(task => {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        let taskName = document.createElement('span');

        // Mark as done
        checkbox.type = 'checkbox';
        checkbox.checked = task.state;
        checkbox.onclick = () => {
            task.state = checkbox.checked;
            if(checkbox.checked === true) {
                taskName.style.textDecoration = 'line-through';
            } else {
                taskName.style.textDecoration = 'none';
            }
            saveTasks();
        }
        if(task.state === true) {
            taskName.style.textDecoration = 'line-through';
        } else {
            taskName.style.textDecoration = 'none';
        }
        
        // Edit task button functions
        editButton.className = 'primaryButton';
        editButton.innerText = 'Edit';
        editTaskButton.onclick = () => {
            editTask(document.querySelector('#editTaskInput'), task.id);
        }
        editButton.onclick = () => {
            popupEditTask.style.display = 'block';
        }

        // Delete task button functions
        deleteButton.className = 'secondaryButton';
        deleteButton.innerText = 'delete';
        deleteTaskButton.onclick = () => {
            deleteTask(task.id);
        }
        deleteButton.onclick = () => {
            document.querySelector('.deleteTaskHint').innerText = `Are you sure you want to delete "${task.name}"?`;
            popupDeleteTask.style.display = 'block';
        }

        taskName.innerHTML = task.name;
        
        li.appendChild(checkbox);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(taskName);
        taskList.appendChild(li);
    });
};

const deleteTask = (taskId) => {
    tasks.forEach((task, index) => {
        if (task.id === taskId) {
            tasks.splice(index, 1);
        }
    });

    saveTasks();
    loadTasks();
    popupDeleteTask.style.display = 'none';
}

const editTask = (textbox, taskId) => {
    validateInput(textbox, 'edit', taskId);
    saveTasks();
    loadTasks();
    popupEditTask.style.display = 'none';
}

const closePopup = () => {
    popupEditTask.style.display = 'none';
    popupDeleteTask.style.display = 'none';
}

const validateInput = (textbox, operation, taskId) => {
    specialCharRegex = /[$&+,=?@#|'<>^*%!]/;

    if (specialCharRegex.test(textbox.value)) {
        window.alert(`The task name should not contain any ofthe following: $&+,=?@#|'<>^*%!`);
    } else if(!textbox.value) {
        window.alert("The task name should not be empty.");
    } else {
        switch(operation) {
            case 'add':
                let task = {
                    id: taskId,
                    name: textbox.value,
                    state: false
                };
            
                tasks = [...tasks, task];

                textbox.value = '';
            break;
            case 'edit':
                tasks.forEach((task) => {
                    if (task.id === taskId) {
                        task.name = document.querySelector('#editTaskInput').value;
                    }
                });
            break;
        }
    }
}

// Event Listeners
taskCreation_AddButton.onclick = () => {
    addTaskData();
};

// Initialize
loadTasks();