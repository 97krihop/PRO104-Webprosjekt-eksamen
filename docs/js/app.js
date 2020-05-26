// set the key for local storage
const LOCAL_STORAGE_TASK_KEY = 'task.tasks';
const LOCAL_STORAGE_SELECTED_TASK_ID_KEY = 'task.selectedTaskId';

const LOCAL_STORAGE_TEAM_KEY = 'task.teams';
const LOCAL_STORAGE_SELECTED_TEAM_ID_KEY = 'task.selectedTeamId';

// get item from local storage or sets a empty array
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];
let selectedTaskId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TASK_ID_KEY);

let teams = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TEAM_KEY)) || [];
let selectedTeamId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TEAM_ID_KEY);

// save the value to local storage
function save() {
	localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(tasks));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_TASK_ID_KEY, selectedTaskId);

	localStorage.setItem(LOCAL_STORAGE_TEAM_KEY, JSON.stringify(teams));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_TEAM_ID_KEY, selectedTeamId);
}

// calls save and all the render functions
function saveAndRender() {
	save();

	renderTasks();
	renderTeams();
	renderActive();
}
// clear the elements form the paramenter
function clearElement(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

saveAndRender();
