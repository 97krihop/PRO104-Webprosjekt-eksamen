// get elements form DOM
const activeCompleteBtn = document.querySelector('[data-active-complete-btn]');

// EventListener on complete button
activeCompleteBtn.addEventListener('click', () => {
	// find the selected task
	const selectedTask = tasks.find(task => task.id === selectedTaskId);

	// adds complete = true if its not, else removes it
	if (selectedTask.complete === false) {
		selectedTask.complete = true;
	} else {
		selectedTask.complete = false;
	}
	saveAndRender();
});
