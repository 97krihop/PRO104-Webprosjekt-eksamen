// get elements form DOM
const darkModeToggle = document.querySelector('[data-darkmode-toggle]');
// get item from local storage
let darkMode = localStorage.getItem('darkMode');

// sets to dark mode
const enableDarkMode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkMode', 'enabled');
	darkModeToggle.innerText = 'Light';
};

// disable the dark mode
const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkMode', null);
	darkModeToggle.innerText = 'Dark';
};

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
