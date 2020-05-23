// get elements form DOM
const deleteTaskBtn = document.querySelector('[data-delete-task-btn]');

// EventListener on delete task button
deleteTaskBtn.addEventListener('click', () => {
	// adds all the tasks exept the selected task and removes it
	tasks = tasks.filter(task => task.id !== selectedTaskId);
	selectedTaskId = null;
	saveAndRender();
});
