const activeCompleteBtn = document.querySelector('[data-active-complete-btn]');

activeCompleteBtn.addEventListener('click', () => {
	const selectedTask = tasks.find(task => task.id === selectedTaskId);
	console.log(selectedTask);
	if (selectedTask.complete === false) {
		selectedTask.complete = true;
	} else {
		selectedTask.complete = false;
	}
	saveAndRender();
});
