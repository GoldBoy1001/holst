const boxes = Array.from(document.querySelectorAll(".answers__box")); // считываем все элементы аккордеона в массив


export default function accordeon(item, itemBox) {
	itemBox.forEach((box) => {
		box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
	 });
	 
	 function boxHandler(e) {
		e.preventDefault(); // сбрасываем стандартное поведение
		let currentBox = e.target.closest(`.${item}__box`); // определяем текущий бокс
		let currentContent = e.target.nextElementSibling; // находим скрытый контент
		currentBox.classList.toggle(`${item}__active`); // присваиваем ему активный класс
		if (currentBox.classList.contains(`${item}__active`)) {
		  // если класс активный ..
		  currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
		} else {
		  // в противном случае
		  currentContent.style.maxHeight = 0; // скрываем контент
		}
	 }
}
