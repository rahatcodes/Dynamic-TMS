let tasks = [];
let currentTaskIndex = -1; // Variable to track the current task index

// Load tasks and currentTaskIndex from local storage on page load
window.addEventListener('load', function() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const storedIndex = localStorage.getItem('currentTaskIndex');
    
    if (storedTasks) {
        tasks = storedTasks;
    }
    if (storedIndex !== null) {
        currentTaskIndex = parseInt(storedIndex, 10);
    }

    renderTaskList();
});

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskName = document.getElementById('taskName').value;
    const priority = parseInt(document.getElementById('priority').value);

    if (taskName === '' || isNaN(priority)) {
        alert('Please enter both task name and priority.');
        return;
    }

    tasks.push({ taskName, priority, done: false });
    document.getElementById('taskName').value = '';
    document.getElementById('priority').value = '';

    saveTasks();
    renderTaskList();
});

function renderTaskList() {
    tasks.sort((a, b) => b.priority - a.priority); // Sorting by priority
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '<p>Your Tasks</p>';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        if (task.done) {
            listItem.classList.add('done');
        }
        listItem.innerHTML = `
            ${task.priority} - ${task.taskName}
            <button onclick="deleteTask(${index})"><i class="fas fa-trash-alt"></i></button>
        `;
        taskList.appendChild(listItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTaskList();
    // Adjust currentTaskIndex if necessary
    if (currentTaskIndex >= index) {
        currentTaskIndex = Math.max(currentTaskIndex - 1, -1);
        saveCurrentTaskIndex();
    }
}

document.getElementById('doneButton').addEventListener('click', function() {
    if (tasks.length === 0) {
        alert('No tasks to execute!');
        return;
    }

    // Move to the next task
    currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
    const highestPriorityTaskIndex = currentTaskIndex;
    const highestPriorityTask = tasks[highestPriorityTaskIndex];
    const taskListItem = document.querySelectorAll('.task-item')[highestPriorityTaskIndex];
    
    // Update the task status to done
    highestPriorityTask.done = true;
    saveTasks();
    taskListItem.classList.add('done');
    alert(`Executing: ${highestPriorityTask.taskName}`);
    saveCurrentTaskIndex();
});

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function saveCurrentTaskIndex() {
    localStorage.setItem('currentTaskIndex', currentTaskIndex);
}

const date = new Date().toUTCString();
  const extractedDateTime = date.slice(5, 16);
  document.getElementById("date").innerHTML =  extractedDateTime;