const clearCompleteTasksBtn = document.querySelector(
	'[data-clear-complete-tasks-btn]'
);

clearCompleteTasksBtn.addEventListener('click', () => {
	const selectedList = lists.find((list) => list.id === selectedListId);
	selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
	saveAndRender();
});
