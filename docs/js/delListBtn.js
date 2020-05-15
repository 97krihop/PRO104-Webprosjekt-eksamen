const deleteListBtn = document.querySelector('[data-delete-list-btn]');

deleteListBtn.addEventListener('click', () => {
	lists = lists.filter((list) => list.id !== selectedListId);
	selectedListId = null;
	saveAndRender();
});
