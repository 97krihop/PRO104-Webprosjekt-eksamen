const deleteTeamBtn = document.querySelector('[data-delete-team-btn]');

deleteTeamBtn.addEventListener('click', () => {
	teams = teams.filter((team) => team.id !== selectedTeamId);

	//søke gjennom alle lister om personen er med å jobbe med på den
	lists.forEach((list) => {
		for (let i = 0; i < list.team.length; i++) {
			if (list.team[i] === selectedTeamId) {
				list.team.splice(i, 1);
				i--;
			}
		}
	});
	selectedTeamId = null;
	saveAndRender();
});
