const menuBtns = document.querySelectorAll('.drop-down');
	const drops = document.querySelectorAll('.drops');
	const dropsLink = document.querySelectorAll('.drops__scrol');
	

export default	function drduwn() {
		menuBtns.forEach(el => {
			el.addEventListener('click', (e) => {
				let currentBtn = e.currentTarget;
				let drop = currentBtn.closest('.drop').querySelector('.drops');
				menuBtns.forEach(el => {
					if (el !== currentBtn) {
						el.classList.remove('drops-active');
						el.classList.remove('drop__active');
						
					}
				});
	
				drops.forEach(el => {
					if (el !== drop) {
						el.classList.remove('drops-active');
						el.classList.remove('drop__active');
					}
				});			
				drop.classList.toggle('drops-active');
				currentBtn.classList.toggle('drop__active');
			});
		});
	
		document.addEventListener('click', (e) => {
			if (!e.target.closest('.drop')) {
				menuBtns.forEach(el => {
					el.classList.remove('drop__active');
				});
	
				drops.forEach(el => {
					el.classList.remove('drops-active');
				});
			}
		});
		dropsLink.forEach(i => {
			i.addEventListener('click', (e) => {
				if (!e.target.closest('.drops')) {
					menuBtns.forEach(el => {
						el.classList.remove('drop__active');
					});
					drops.forEach(el => {
						el.classList.remove('drops-active');
					});
				}
			});
		})	
	}