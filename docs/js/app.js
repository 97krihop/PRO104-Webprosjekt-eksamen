const LOCAL_STORAGE_TASK_KEY = 'task.tasks';
const LOCAL_STORAGE_SELECTED_TASK_ID_KEY = 'task.selectedTaskId';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];
let selectedTaskId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TASK_ID_KEY);

const LOCAL_STORAGE_TEAM_KEY = 'task.teams';
const LOCAL_STORAGE_SELECTED_TEAM_ID_KEY = 'task.selectedTeamId';
let teams = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TEAM_KEY)) || [];
let selectedTeamId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TEAM_ID_KEY);

function save() {
	localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(tasks));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_TASK_ID_KEY, selectedTaskId);

	localStorage.setItem(LOCAL_STORAGE_TEAM_KEY, JSON.stringify(teams));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_TEAM_ID_KEY, selectedTeamId);
}

function saveAndRender() {
	save();

	renderTasks();
	renderTeams();
	rederActive();
}
function clearElement(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

saveAndRender();
