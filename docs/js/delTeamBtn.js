// get elements form DOM
const deleteTeamBtn = document.querySelector('[data-delete-team-btn]');
// EventListener on delete team button
deleteTeamBtn.addEventListener('click', () => {
	// to delete the team member form the tasks its on
	tasks.forEach(task => {
		for (let i = 0; i < task.team.length; i++) {
			if (task.team[i] === selectedTeamId) {
				task.team.splice(i, 1);
				i--;
			}
		}
	});
	// set the teams to all the teams exept the selectet and remove it
	teams = teams.filter(team => team.id !== selectedTeamId);
	selectedTeamId = null;
	saveAndRender();
});
