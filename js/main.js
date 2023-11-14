function splitText(el) {
	const dom = document.querySelector(el);
	let tags = '';
	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
		dom.innerHTML = tags;
	}
}
