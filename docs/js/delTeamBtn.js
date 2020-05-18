const deleteTeamBtn = document.querySelector('[data-delete-team-btn]');

deleteTeamBtn.addEventListener('click', () => {
	tasks.forEach(task => {
		for (let i = 0; i < task.team.length; i++) {
			if (task.team[i] === selectedTeamId) {
				task.team.splice(i, 1);
				i--;
			}
		}
	});

	teams = teams.filter(team => team.id !== selectedTeamId);
	selectedTeamId = null;
	saveAndRender();
});
