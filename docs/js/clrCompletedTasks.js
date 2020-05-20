const clrCompButton = document.querySelector('[data-clr-comp-tasks-button]');

clrCompButton.addEventListener('click', e => {
	// filtrere ut alle som er complete, slette di fra array, lagre det tilbake i arrayet
	tasks = tasks.filter(task => task.complete !== true);
	saveAndRender();
});
