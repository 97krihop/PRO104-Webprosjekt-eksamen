const deleteTeamBtn = document.querySelector('[data-delete-team-btn]');

deleteTeamBtn.addEventListener('click', () => {
	lists.forEach(list => {
		for (let i = 0; i < list.team.length; i++) {
			if (list.team[i] === selectedTeamId) {
				list.team.splice(i, 1);
				i--;
			}
		}
	});

	teams = teams.filter(team => team.id !== selectedTeamId);
	selectedTeamId = null;
	saveAndRender();
});
