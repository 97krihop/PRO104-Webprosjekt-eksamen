const activeCompleteBtn = document.querySelector('[data-active-complete-btn]');

activeCompleteBtn.addEventListener('click', () => {
	const selectedList = lists.find((list) => list.id === selectedListId);
	console.log(selectedList);
	if (selectedList.complete === false) {
		selectedList.complete = true;
	} else {
		selectedList.complete = false;
	}
	saveAndRender();
});
