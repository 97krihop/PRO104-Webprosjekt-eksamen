// get elements from DOM
const emojiBtn = document.querySelector('[data-emoji-toggle]');
// get item from local storage
let emojiStatus = localStorage.getItem('emojiMode');

// allowed emoji on tasks
const allowedEmoji = [
	'😊',
	'🙃',
	'🤪',
	'🤓',
	'🤯',
	'😴',
	'💩',
	'👻',
	'👽',
	'🤖',
	'👾',
	'👐',
	'🖖',
	'✌️',
	'🤟',
	'🤘',
	'🤙',
	'👋',
	'🐭',
	'🦕',
	'🦖',
	'🐉'
];

function disableEmoji() {
	localStorage.setItem('emojiMode', null);
	emojiBtn.innerText = 'Emoji';
}
function enableEmoji() {
	localStorage.setItem('emojiMode', 'enabled');
	emojiBtn.innerText = '❤️';
}

emojiBtn.addEventListener('click', () => {
	let emojiStatus = localStorage.getItem('emojiMode');
	if (emojiStatus === 'enabled') {
		disableEmoji();
	} else {
		enableEmoji();
	}
});
if (emojiStatus === 'enabled') {
	enableEmoji();
}

function randomEmoji() {
	let emojiStatus = localStorage.getItem('emojiMode');
	if (emojiStatus === 'enabled') {
		return Math.floor(Math.random() * allowedEmoji.length);
	} else {
		return -1;
	}
}
