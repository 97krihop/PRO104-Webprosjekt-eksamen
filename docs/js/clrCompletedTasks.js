// get elements from DOM
const clrCompButton = document.querySelector('[data-clr-comp-tasks-button]');

// EventListener on clear complete tasks button
clrCompButton.addEventListener('click', e => {
	// filter out all the complete tasks and removes them
	tasks = tasks.filter(task => task.complete !== true);
	saveAndRender();
});
