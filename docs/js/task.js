const tasksDiv = document.querySelector('[data-tasks]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');

tasksDiv.addEventListener('click', e => {
	if (e.target.tagName.toLowerCase() === 'li') {
		selectedTaskId = e.target.dataset.taskId;
		saveAndRender();
	}
});

newTaskForm.addEventListener('submit', e => {
	e.preventDefault();
	const taskName = newTaskInput.value;
	if (taskName == null || taskName === '') {
		return;
	} else {
		const task = createTask(taskName);
		newTaskInput.value = null;
		tasks.push(task);
		saveAndRender();
	}
});

function createTask(name) {
	return {
		id: Date.now().toString(),
		name: name,
		team: [],
		comments: [],
		complete: false
	};
}

function renderTasks() {
	clearElement(tasksDiv);
	tasks.forEach(task => {
		const taskElement = document.createElement('li');
		taskElement.dataset.taskId = task.id;
		taskElement.classList.add('task-name');
		taskElement.innerText = task.name;
		if (task.id === selectedTaskId) {
			taskElement.classList.add('active-task');
		}
		if (task.complete === true) {
			taskElement.classList.add('complete-task');
		}
		tasksDiv.appendChild(taskElement);
	});
}
