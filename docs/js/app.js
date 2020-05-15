const mergeBtn = document.querySelector('[data-merge-btn]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const LOCAL_STORAGE_TEAM_KEY = 'task.teams';
const LOCAL_STORAGE_SELECTED_TEAM_ID_KEY = 'task.selectedTeamId';
let teams = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TEAM_KEY)) || [];
let selectedTeamId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TEAM_ID_KEY);

function save() {
	localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);

	localStorage.setItem(LOCAL_STORAGE_TEAM_KEY, JSON.stringify(teams));
	localStorage.setItem(LOCAL_STORAGE_SELECTED_TEAM_ID_KEY, selectedTeamId);
}

function saveAndRender() {
	save();
	renderLists();
	renderTeams();
	rederActive();
}
function clearElement(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

mergeBtn.addEventListener('click', (e) => {
	addTeamToList();
});

function addTeamToList() {
	lists.forEach((list) => {
		if (list.id !== selectedListId) {
			return;
		} else {
			list.team.push(selectedTeamId);
			uniq = [...new Set(list.team)];
			list.team = uniq;
			saveAndRender();
		}
	});
}
saveAndRender();
