const tasksDiv = document.querySelector('[data-tasks-div]');
const taskTemplate = document.getElementById('task-template');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompleteTasksBtn = document.querySelector(
	'[data-clear-complete-tasks-btn]'
);

tasksDiv.addEventListener('click', (e) => {
	if (e.target.tagName.toLowerCase() === 'input') {
		const selectedList = lists.find((list) => list.id === selectedListId);
		const selectedTask = selectedList.tasks.find(
			(task) => task.id === e.target.id
		);
		selectedTask.complete = e.target.checked;
		save();
		renderTaskCount(selectedList);
	}
});

newTaskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const taskName = newTaskInput.value;
	if (taskName == null || taskName === '') return;
	const task = createTask(taskName);
	newTaskInput.value = null;
	const selectedList = lists.find((list) => list.id === selectedListId);
	selectedList.tasks.push(task);
	saveAndRender();
});

clearCompleteTasksBtn.addEventListener('click', (e) => {
	const selectedList = lists.find((list) => list.id === selectedListId);
	selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
	saveAndRender();
});

function createTask(name) {
	return {
		id: Date.now().toString(),
		name: name,
		complete: false,
	};
}

function renderTaskCount(selectedList) {
	const incompleteTaskCount = selectedList.tasks.filter(
		(task) => !task.complete
	).length;
	const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
	listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaning`;
}

function renderTasks(selectedList) {
	selectedList.tasks.forEach((task) => {
		const taskElement = document.importNode(taskTemplate.content, true);
		const checkbox = taskElement.querySelector('input');
		checkbox.id = task.id;
		checkbox.checked = task.complete;
		const label = taskElement.querySelector('label');
		label.htmlfor = task.id;
		label.append(task.name);
		tasksDiv.appendChild(taskElement);
	});
}
