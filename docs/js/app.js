const listsDiv = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListBtn = document.querySelector('[data-delete-list-btn]');
const listDisplayDiv = document.querySelector('[data-list-display-div]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');
const tasksDiv = document.querySelector('[data-tasks-div]');
const taskTemplate = document.getElementById('task-template');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompleteTasksBtn = document.querySelector(
	'[data-clear-complete-tasks-btn]'
);

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

listsDiv.addEventListener('click', (e) => {
	if (e.target.tagName.toLowerCase() === 'li') {
		selectedListId = e.target.dataset.listId;
		saveAndRender();
	}
});

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

newListForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const listName = newListInput.value;
	if (listName == null || listName === '') {
		return;
	} else {
		const list = createList(listName);
		newListInput.value = null;
		lists.push(list);
		saveAndRender();
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

deleteListBtn.addEventListener('click', (e) => {
	lists = lists.filter((list) => list.id !== selectedListId);
	selectedListId = null;
	saveAndRender();
});

function createList(name) {
	return {
		id: Date.now().toString(),
		name: name,
		tasks: [],
	};
}
function createTask(name) {
	return {
		id: Date.now().toString(),
		name: name,
		complete: false,
	};
}

function save() {
	localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function saveAndRender() {
	save();
	render();
	renderLists();
}

function renderLists() {
	clearElement(listsDiv);
	lists.forEach((list) => {
		const listElement = document.createElement('li');
		listElement.dataset.listId = list.id;
		listElement.classList.add('list-name');
		listElement.innerText = list.name;
		if (list.id === selectedListId) {
			listElement.classList.add('active-list');
		}
		listsDiv.appendChild(listElement);
	});
}

function clearElement(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function render() {
	const selectedList = lists.find((list) => list.id === selectedListId);
	if (selectedListId == null) {
		listDisplayDiv.style.display = 'none';
	} else {
		listDisplayDiv.style.display = '';
		listTitleElement.innerText = selectedList.name;
		renderTaskCount(selectedList);
		clearElement(tasksDiv);
		renderTasks(selectedList);
	}
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

saveAndRender();
