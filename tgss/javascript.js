document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const loadingIndicator = document.getElementById('loading');

    let tasks = [];

    function showLoading() {
        loadingIndicator.style.display = 'block';
    }

    function hideLoading() {
        loadingIndicator.style.display = 'none';
    }

    function renderTasks() {
        taskList.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            const taskText = document.createElement('span');
            taskText.textContent = task.text;
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';
            if (task.completed) {
                const undoBtn = document.createElement('button');
                undoBtn.textContent = 'Batal';
                undoBtn.className = 'btn-undo';
                undoBtn.addEventListener('click', function() {
                    toggleTaskStatus(task.id);
                });
                actionsDiv.appendChild(undoBtn);
            } else {
                const doneBtn = document.createElement('button');
                doneBtn.textContent = 'Selesai';
                doneBtn.className = 'btn-done';
                doneBtn.addEventListener('click', function() {
                    toggleTaskStatus(task.id);
                });
                actionsDiv.appendChild(doneBtn);
            }
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Hapus';
            deleteBtn.className = 'btn-delete';
            deleteBtn.addEventListener('click', function() {
                deleteTask(task.id);
            });
            actionsDiv.appendChild(deleteBtn);
            taskItem.appendChild(taskText);
            taskItem.appendChild(actionsDiv);
            taskList.appendChild(taskItem);
        }
    }

    async function addTask() {
        const inputText = taskInput.value.trim();
        if (inputText === '') {
            alert('Nama tugas tidak boleh kosong!');
            return;
        }
        showLoading();
        await new Promise(function(resolve) {
            setTimeout(resolve, 500);
        });
        const newTask = {
            id: Date.now(),
            text: inputText,
            completed: false,
        };
        tasks.push(newTask);
        hideLoading();
        renderTasks();
        taskInput.value = '';
        console.log(`Pesan sukses: Tugas "${inputText}" berhasil ditambahkan.`);
    }

    async function deleteTask(id) {
        let taskToDelete;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                taskToDelete = tasks[i];
                break;
            }
        }
        showLoading();
        await new Promise(function(resolve) {
            setTimeout(resolve, 500);
        });
        const newTasksArray = [];
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== id) {
                newTasksArray.push(tasks[i]);
            }
        }
        tasks = newTasksArray;
        hideLoading();
        renderTasks();
        console.log(`Pesan sukses: Tugas "${taskToDelete.text}" berhasil dihapus.`);
    }

    function toggleTaskStatus(id) {
        let task;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                task = tasks[i];
                break;
            }
        }
        if (task) {
            task.completed = !task.completed;
            renderTasks();
        }
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
