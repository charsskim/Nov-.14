const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';

for (let letter of txt) {
	tags += `<span>${letter}</span>`;
}
console.log(tags);
h1.innerHTML = tags;

//미션 위의 내용을 처리해주는 함수 제작(인수로 선택자 전달)
