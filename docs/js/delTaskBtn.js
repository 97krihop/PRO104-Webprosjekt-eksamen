const deleteTaskBtn = document.querySelector('[data-delete-task-btn]');

deleteTaskBtn.addEventListener('click', () => {
	tasks = tasks.filter(task => task.id !== selectedTaskId);
	selectedTaskId = null;
	saveAndRender();
});
