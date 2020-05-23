// get elements form DOM
const mergeBtn = document.querySelector('[data-merge-btn]');

// EventListener to button
mergeBtn.addEventListener('click', () => {
	tasks.forEach(task => {
		// to return all the non selected tasks or if its null
		if (task.id !== selectedTaskId || selectedTeamId == null) {
			return;
		}
		// to go thru all team on the selected task and remove if allredy added the selected one
		for (let i = 0; i < task.team.length; i++) {
			if (task.team[i] === selectedTeamId) {
				task.team.splice(i, 1);
				i--;
				saveAndRender();
				return;
			}
		}
		// add the selected team member
		task.team.push(selectedTeamId);
		// see if all are uniq
		uniq = [...new Set(task.team)];
		// set all the uniq to the task.team
		task.team = uniq;
		saveAndRender();
	});
});
