const activeDiv = document.querySelector('[data-active-div]');
const activeTitle = document.querySelector('[data-active-h2]');
const activeCompBtn = document.querySelector('[data-active-complete-btn]');
const activeTeams = document.querySelector('[data-active-team]');
const activeComments = document.querySelector('[data-active-comment]');
const activeForm = document.querySelector('[data-new-active-form]');
const activeInput = document.querySelector('[data-new-active-input]');

activeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const comment = activeInput.value;
	if (comment == null || comment === '') {
		return;
	}
	activeInput.value = null;
	const selectedList = lists.find((list) => list.id === selectedListId);
	selectedList.comments.push(comment);
	saveAndRender();
});

function rederActive() {
	const selectedList = lists.find((list) => list.id === selectedListId);
	if (selectedListId == null) {
		activeDiv.style.display = 'none';
	} else {
		activeDiv.style.display = '';
		activeTitle.innerText = selectedList.name;
		rednerTeams(selectedList);
		rednerComments(selectedList);
	}
}

function rednerComments(selectedList) {
	clearElement(activeComments);

	for (let i = 0; i < selectedList.comments.length; i++) {
		const commentElement = document.createElement('li');
		commentElement.classList.add('list-name');
		commentElement.innerText = selectedList.comments[i];
		activeComments.appendChild(commentElement);
	}
}
function rednerTeams(selectedList) {
	clearElement(activeTeams);

	for (let i = 0; i < selectedList.team.length; i++) {
		const teamElement = document.createElement('li');
		teamElement.classList.add('team-name');
		const teamId = selectedList.team[i];

		teams.forEach((team) => {
			if (team.id == teamId) {
				teamElement.innerText = team.name;
			}
		});
		activeTeams.appendChild(teamElement);
	}
}
