const teamsDiv = document.querySelector('[data-teams]');
const newTeamForm = document.querySelector('[data-new-team-form]');
const newTeamInput = document.querySelector('[data-new-team-input]');

teamsDiv.addEventListener('click', e => {
	if (e.target.tagName.toLowerCase() === 'li') {
		if (selectedTeamId === e.target.dataset.teamId) selectedTeamId = null;
		else selectedTeamId = e.target.dataset.teamId;
		saveAndRender();
	}
});

newTeamForm.addEventListener('submit', e => {
	e.preventDefault();
	const teamName = newTeamInput.value;
	if (teamName == null || teamName === '') {
		return;
	} else {
		const team = createTeam(teamName);
		newTeamInput.value = null;
		teams.push(team);
		saveAndRender();
	}
});

function createTeam(name) {
	return {
		id: Date.now().toString(),
		name: name
	};
}

function renderTeams() {
	clearElement(teamsDiv);
	teams.forEach(team => {
		const teamElement = document.createElement('li');
		teamElement.dataset.teamId = team.id;
		teamElement.classList.add('team-name');
		teamElement.innerText = team.name;
		if (team.id === selectedTeamId) {
			teamElement.classList.add('active-task');
		}
		teamsDiv.appendChild(teamElement);
	});
}
