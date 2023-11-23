// const items = Array.from(document.getElementsByClassName('width'));

const items = document.querySelectorAll('.width');
const images = document.querySelectorAll('.size__img');



export function sizeBanner() {
	items.forEach((item, index) => {
		if (item.classList.contains('active')) {
		  images[index].style.display = 'block';
		}
	 });
	 
	 // Добавляем обработчик события на каждый пункт
	 items.forEach((item, index) => {
		item.addEventListener('click', () => {
		  // Удаляем класс "active" у всех пунктов
		  items.forEach((item) => {
			 item.classList.remove('active');
		  });
	 
		  // Добавляем класс "active" только к текущему пункту
		  item.classList.add('active');
	 
		  // Скрываем все картинки
		  images.forEach((image) => {
			 image.style.display = 'none';
		  });
	 
		  // Показываем соответствующую картинку
		  images[index].style.display = 'block';
		});
	 });
}

        