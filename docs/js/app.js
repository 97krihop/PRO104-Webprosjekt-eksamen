const listsDiv = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListBtn = document.querySelector('[data-delete-list-btn]');
const listDisplayDiv = document.querySelector('[data-list-display-div]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');

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

function save() {
	localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function saveAndRender() {
	save();
	renderLists();
	render();
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

function render() {
	const selectedList = lists.find((list) => list.id == selectedListId);
	if (selectedListId == null || selectedList == undefined) {
		listDisplayDiv.style.display = 'none';
	} else {
		listDisplayDiv.style.display = '';
		listTitleElement.innerText = selectedList.name;
		renderTaskCount(selectedList);
		clearElement(tasksDiv);
		renderTasks(selectedList);
	}
}

function clearElement(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}
saveAndRender();
