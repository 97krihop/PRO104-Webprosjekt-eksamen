const activeDiv = document.querySelector('[data-active-div]');
const activeTitle = document.querySelector('[data-active-h2]');
const activeCompBtn = document.querySelector('[data-active-complete-btn]');
const activeTeams = document.querySelector('[data-active-team]');
const activeComments = document.querySelector('[data-active-comment]');
const activeForm = document.querySelector('[data-new-active-form]');
const activeInput = document.querySelector('[data-new-active-input]');

function rederActive() {
	const selectedList = lists.find((list) => list.id === selectedListId);
	if (selectedListId == null) {
		activeDiv.style.display = 'none';
	} else {
		activeDiv.style.display = '';
		activeTitle.innerText = selectedList.name;
		rednerComments(selectedList);
	}
}
function rednerComments(selectedList) {
	clearElement(activeComments);

	for (let i = 0; i < selectedList.comments.length; i++) {
		const element = selectedList.comments[i];
		const commentElement = document.createElement('li');
		commentElement.classList.add('list-name');
		commentElement.innerText = selectedList.comments[i];
		activeComments.appendChild(commentElement);
	}
}
