const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

splitText(tits[0]);
splitText(tits[1]);

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(btns, idx);
		activation(boxs, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}
function splitText(el) {
	let tags = '';
	for (let letter of el.innerText) {
		tags += `<span>${letter}</span>`;
		el.innerHTML = tags;
	}
}
