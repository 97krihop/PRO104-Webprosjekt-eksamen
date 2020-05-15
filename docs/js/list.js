const listsDiv = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const listDisplayDiv = document.querySelector('[data-list-display-div]');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count]');

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

function createList(name) {
	return {
		id: Date.now().toString(),
		name: name,
		tasks: [],
	};
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
