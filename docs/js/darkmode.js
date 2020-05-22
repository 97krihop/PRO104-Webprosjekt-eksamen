// get elements form DOM
const darkModeToggle = document.querySelector('[dark-mode-toggle]');
// get item from local storage
let darkMode = localStorage.getItem('darkMode');

// sets to dark mode
const enableDarkMode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkMode', 'enabled');
};

// disable the dark mode
const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkMode', null);
};

// if you reset, sets it to dark mode if you was
if (darkMode === 'enabled') {
	enableDarkMode();
}
// EventListener on dark mode button
darkModeToggle.addEventListener('click', () => {
	// gets the latest from local storage
	darkMode = localStorage.getItem('darkMode');

	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
