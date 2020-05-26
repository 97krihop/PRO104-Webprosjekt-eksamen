// get elements form DOM
const activeDiv = document.querySelector('[data-active-div]');
const activeTitle = document.querySelector('[data-active-h2]');
const activeCompBtn = document.querySelector('[data-active-complete-btn]');
const activeTeams = document.querySelector('[data-active-team]');
const activeComments = document.querySelector('[data-active-comment]');
const activeForm = document.querySelector('[data-new-active-form]');
const activeInput = document.querySelector('[data-new-active-input]');

// EventListener on comment input
activeForm.addEventListener('submit', e => {
	e.preventDefault();
	// to see input if its empty
	const comment = activeInput.value;
	if (comment === null || comment === '') {
		return;
	}
	// set the input feld to null
	activeInput.value = null;
	// find the selected task and add coment to it
	const selectedTask = tasks.find(task => task.id === selectedTaskId);
	selectedTask.comments.push(comment);
	saveAndRender();
});
// render the active task
function rederActive() {
	// find the selected task
	const selectedTask = tasks.find(task => task.id === selectedTaskId);

	// make it not visible if none is selected
	if (selectedTask === null || selectedTask === undefined) {
		activeDiv.style.display = 'none';
	} else {
		// make it visble and adds title to the name of the task
		activeDiv.style.display = '';
		activeTitle.innerText = selectedTask.name;
		// render teams on task and comment on task
		rednerTeams(selectedTask);
		rednerComments(selectedTask);
	}
}
// render team on the task
function rednerTeams(selectedTask) {
	clearElement(activeTeams);
	// list out the selcted on the task and dem on a li
	selectedTask.team.forEach(taskTeam => {
		const teamElement = document.createElement('li');
		teamElement.classList.add('team-name');
		// get team id
		const teamId = taskTeam;
		// render the name of all inn teamId  from teams
		teams.forEach(team => {
			if (team.id === teamId) {
				teamElement.innerText = team.name;
			}
		});
		activeTeams.appendChild(teamElement);
	});
}

function rednerComments(selectedTask) {
	clearElement(activeComments);
	// lists out all the comments on the task
	selectedTask.comments.forEach(comment => {
		const commentElement = document.createElement('li');
		commentElement.classList.add('task-name');
		commentElement.innerText = comment;
		activeComments.appendChild(commentElement);
	});
}

function dateChange(){
	document.getElementById("deadline-text").innerHTML = dateInput.value;
}
