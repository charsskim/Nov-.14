/*const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';*/

//미션 위의 내용을 처리해주는 함수 제작(인수로 선택자 전달)

splitText('h1');
splitText('h2');

function splitText(el) {
	const dom = document.querySelector(el);
	let tags = '';
	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
		dom.innerHTML = tags;
	}
}
