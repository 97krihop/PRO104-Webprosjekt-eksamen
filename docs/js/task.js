const tasksDiv = document.querySelector('[data-tasks]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');

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

tasksDiv.addEventListener('click', e => {
	if (e.target.tagName.toLowerCase() === 'li') {
		if (selectedTaskId === e.target.dataset.taskId) selectedTaskId = null;
		else selectedTaskId = e.target.dataset.taskId;
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
		complete: false,
		emoji: Math.floor(Math.random() * allowedEmoji.length)
	};
}

function renderTasks() {
	clearElement(tasksDiv);
	tasks.forEach(task => {
		const taskElement = document.createElement('li');
		taskElement.dataset.taskId = task.id;
		taskElement.classList.add('task-name');
		if (task.complete === true) taskElement.innerText = '✔' + task.name;
		else taskElement.innerText = allowedEmoji[task.emoji] + task.name;

		if (task.id === selectedTaskId) {
			taskElement.classList.add('active-task');
		}
		if (task.complete === true) {
			taskElement.classList.add('complete-task');
		}
		tasksDiv.appendChild(taskElement);
	});
}
