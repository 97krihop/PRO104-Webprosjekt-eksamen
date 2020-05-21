const mergeBtn = document.querySelector('[data-merge-btn]');

mergeBtn.addEventListener('click', () => {
	tasks.forEach(task => {
		if (task.id !== selectedTaskId || selectedTeamId == null) {
			return;
		}
		for (let i = 0; i < task.team.length; i++) {
			if (task.team[i] === selectedTeamId) {
				task.team.splice(i, 1);
				i--;
				saveAndRender();
				return;
			}
		}
		task.team.push(selectedTeamId);
		uniq = [...new Set(task.team)];
		task.team = uniq;
		saveAndRender();
	});
});
