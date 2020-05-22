// get elements form DOM
const tasksDiv = document.querySelector('[data-tasks]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');

// allowed emoji on tasks
const allowedEmoji = [
	'😊',
	'🙃',
	'🤪',
	'🤓',
	'🤯',
	'😴',
	'💩',
	'👻',
	'👽',
	'🤖',
	'👾',
	'👐',
	'🖖',
	'✌️',
	'🤟',
	'🤘',
	'🤙',
	'👋',
	'🐭',
	'🦕',
	'🦖',
	'🐉'
];

// EventListener on tasks
tasksDiv.addEventListener('click', e => {
	if (e.target.tagName.toLowerCase() === 'li') {
		if (selectedTaskId === e.target.dataset.taskId) selectedTaskId = null;
		else selectedTaskId = e.target.dataset.taskId;
		saveAndRender();
	}
});
// EventListener on innput
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

// making a task
function createTask(name) {
	return {
		id: Date.now().toString(),
		name: name,
		team: [],
		comments: [],
		complete: false,
		emoji: Math.floor(Math.random() * allowedEmoji.length)
	};
}

// render tasks
function renderTasks() {
	clearElement(tasksDiv);
	tasks.forEach(task => {
		const taskElement = document.createElement('li');
		taskElement.dataset.taskId = task.id;
		taskElement.classList.add('task-name');
		// to see if it is complete
		if (task.complete === true) taskElement.innerText = '✔' + task.name;
		else taskElement.innerText = allowedEmoji[task.emoji] + task.name;
		// add the class to the selected task
		if (task.id === selectedTaskId) {
			taskElement.classList.add('active-task');
		}
		// add class to complete tasks
		if (task.complete === true) {
			taskElement.classList.add('complete-task');
		}
		tasksDiv.appendChild(taskElement);
	});
}
