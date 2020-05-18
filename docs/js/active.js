const activeDiv = document.querySelector('[data-active-div]');
const activeTitle = document.querySelector('[data-active-h2]');
const activeCompBtn = document.querySelector('[data-active-complete-btn]');
const activeTeams = document.querySelector('[data-active-team]');
const activeComments = document.querySelector('[data-active-comment]');
const activeForm = document.querySelector('[data-new-active-form]');
const activeInput = document.querySelector('[data-new-active-input]');

activeForm.addEventListener('submit', e => {
	e.preventDefault();
	const comment = activeInput.value;
	if (comment === null || comment === '') {
		return;
	}
	activeInput.value = null;
	const selectedTask = tasks.find(task => task.id === selectedTaskId);
	selectedTask.comments.push(comment);
	saveAndRender();
});

function rederActive() {
	const selectedTask = tasks.find(task => task.id === selectedTaskId);
	if (
		selectedTaskId === null ||
		selectedTaskId === [] ||
		selectedTaskId === undefined
	) {
		activeDiv.style.display = 'none';
		return;
	} else {
		activeDiv.style.display = '';
		activeTitle.innerText = selectedTask.name;
		rednerTeams(selectedTask);
		rednerComments(selectedTask);
	}
}

function rednerComments(selectedTask) {
	clearElement(activeComments);

	for (let i = 0; i < selectedTask.comments.length; i++) {
		const commentElement = document.createElement('li');
		commentElement.classList.add('task-name');
		commentElement.innerText = selectedTask.comments[i];
		activeComments.appendChild(commentElement);
	}
}
function rednerTeams(selectedTask) {
	clearElement(activeTeams);

	for (let i = 0; i < selectedTask.team.length; i++) {
		const teamElement = document.createElement('li');
		teamElement.classList.add('team-name');
		const teamId = selectedTask.team[i];

		teams.forEach(team => {
			if (team.id === teamId) {
				teamElement.innerText = team.name;
			}
		});
		activeTeams.appendChild(teamElement);
	}
}
