const hiden = document.querySelectorAll('.hiden')
const reviewsBtn = document.querySelector('.reviews__btn')

export default function review() {
	reviewsBtn.addEventListener('click', (e) => {
		let allHidden = true;
		
		hiden.forEach(i => {
			 if (i.style.display === 'grid') {
				  i.style.display = 'none';
				  allHidden = false;
			 } else {
				  i.style.display = 'grid';
			 }
		});
		
		if (allHidden) {
			 reviewsBtn.textContent = 'Закрыть отзывы';
		} else {
			 reviewsBtn.textContent = 'Читать все отзывы';
		}
	});
}

