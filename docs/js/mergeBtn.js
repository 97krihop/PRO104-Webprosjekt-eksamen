// get elements from DOM
const mergeBtn = document.querySelector('[data-merge-btn]');

// EventListener to button
mergeBtn.addEventListener('click', merge);

function merge() {
	tasks.forEach(task => {
		// to return all the non selected tasks or if its null
		if (task.id !== selectedTaskId || selectedTeamId == null) {
			return;
		}
		// to go thru all team members on the selected task and remove if already added the selected one
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
		uniq = [...new Set(task.team)];
		task.team = uniq;
		saveAndRender();
	});
}
