const menuBurger = document.querySelector('.navbar-toggle');
const navBar = document.querySelector('.menu__list');
const dropsLink = document.querySelectorAll('.drops__scrol');
const overlay = document.querySelector('.overlay');
const menuDropDown = document.querySelector('.menu-drop-down');
const menuLogo = document.querySelector('.menu__logo');



export default function Burger() {
	menuBurger.addEventListener('click', (e) => {
		navBar.classList.toggle('navbar-active')
		if (navBar.classList.contains('navbar-active')) {
			navBar.style.display = 'flex';
			navBar.style.right = '0';
			overlay.style.display = 'block';
			menuDropDown.style.display = 'flex';
			menuLogo.style.display = 'block';
			document.body.style.overflow = 'hidden';
		} else {
			navBar.style.right = '-100%';
			menuLogo.style.display = 'none';
			document.body.style.overflow = 'visible';
		}
	})
	
	
	document.addEventListener('mousedown', (event) => {
	  if (!navBar.contains(event.target)) {
		navBar.classList.remove('navbar-active');
		navBar.style.right = '-100%';
		overlay.style.display = 'none';
		document.body.style.overflow = 'visible';
		menuDropDown.style.display = 'none';
		menuLogo.style.display = 'none';
	  }
	});
	dropsLink.forEach(el => {
		el.addEventListener('click', () => {
			console.log('hi');
			 navBar.classList.remove('navbar-active');
			 navBar.style.right = '-100%';
			 overlay.style.display = 'none';
			 document.body.style.overflow = 'visible';
			 menuDropDown.style.display = 'none';
			 menuLogo.style.display = 'none';
		 });
	})
	
}

