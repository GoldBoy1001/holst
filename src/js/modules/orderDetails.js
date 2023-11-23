const elements = document.querySelectorAll('.width');
const baguettes = document.getElementById('baguettes');
const baguette = document.getElementById('baguette');
const targetElement = document.getElementById('width__height');

// Функция-обработчик для события 'click'
function onElementClick(e) {
  const currentElement = e.currentTarget;
  if (targetElement) { // Проверяем наличие элемента targetElement
	if (currentElement.classList.contains('active')) {
	  targetElement.textContent = currentElement.textContent;
	} 
 }
}


// Присоедините обработчик onElementClick к каждому элементу

export function orderDetails() {
	elements.forEach((el) => {
		el.addEventListener('click', onElementClick);
	 });
}


function updateElementContent(currentElement, targetElement, activeClass) {
	if (currentElement.textContent) {
		targetElement.textContent = currentElement.textContent;
	 } if (currentElement.classList.contains(activeClass)) {
		const questionElement = currentElement.querySelector('.question');
		if(questionElement) {
			const textWithoutQuestion = currentElement.textContent.replace(questionElement.textContent, '');
		targetElement.textContent = textWithoutQuestion.trim() ;
		}
	  } else {
		targetElement.textContent = currentElement.textContent;
	 }
 }

 export function handleItemClick(itemList, targetElement, activeClass) {
	itemList.forEach((item) => {
	  item.addEventListener('click', () => {
		 // Удаляем класс "active" у всех пунктов
		 itemList.forEach((item) => {
			item.classList.remove(activeClass)
		 });
		 // Добавляем класс "active" только к текущему пункту
		 item.classList.add(activeClass);
	  });
	});
 
	itemList.forEach((el) => {
	  el.addEventListener('click', (e) => {
		 updateElementContent(e.currentTarget, targetElement, activeClass);
	  });
	});
 }
 
 export function Bagete() {
	baguettes.addEventListener('click', (e) => {
		baguettes.classList.toggle('baguettes-active')
		if (!baguette.textContent) {
			baguette.textContent = 'Нет'
		}
		if ( baguettes.classList.contains('baguettes-active')) {
			baguette.textContent = 'Да'
		} else {
			baguette.textContent = 'Нет'
		}
	})
 }
 


        