import * as webpFn from "./modules/fn.js";
import { sizeBanner } from "./modules/sizeBanner.js";
import { addFileInput } from "./modules/addFileInput.js";
import { orderDetails, handleItemClick, Bagete} from "./modules/orderDetails.js";
import review from "./modules/reviewFn.js";
import accordeon from "./modules/accordeon.js";
import { useDynamicAdapt } from "./modules/dinamicAdapt.js";
import Burger from "./modules/burger.js";
import drduwn from "./modules/dropDuwn.js";
import clickScrol from "./modules/ClickScrol.js";



const matery = document.getElementById('matery');
const design = document.getElementById('design');
const canvas = document.getElementById('canvas');
const boxes = Array.from(document.querySelectorAll(".answers__box"));

webpFn.isWebp();
sizeBanner();
addFileInput();
orderDetails();
Bagete();
review();
accordeon('answers', boxes);
useDynamicAdapt();
Burger();
drduwn();
clickScrol();


// Используйте функцию для обработки раздела "Материалы"
const itemMatery = document.querySelectorAll('.matery');
handleItemClick(itemMatery, matery, 'matery-active');

// Используйте функцию для обработки раздела "Дизайны"
const designItem = document.querySelectorAll('.designs');
handleItemClick(designItem, design, 'designs-active');

// Используйте функцию для обработки раздела "Покрытие"
const coveringItem = document.querySelectorAll('.covering');
handleItemClick(coveringItem, canvas, 'covering-active');

import JustValidate from 'just-validate';
import Inputmask from 'inputmask'

// const form = document.querySelector('.order__form');
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(telSelector);

const validation = new JustValidate('.order__form');

validation
  .addField('.order__form-name', [
    {
      rule: 'minLength',
      value: 3,
		errorMessage: 'Имя должно состоять больше чем из 3 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('.order__form-mail', [
    {
      rule: 'required',
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный email !',
    },
  ])
  .addField('.order__form-code', [
	{
	  rule: 'minLength',
	  value: 6,
	  errorMessage: 'Промокод должен состоять и 6 символов',
	},
 ])
 .addField('.order__form-tel', [
	{
	  rule: 'required',
	  errorMessage: 'Телефон обязателен',
	},
 ]);
 

 const open = document.querySelector('.order__form-btn')
 const modal = document.querySelector('.modal');
 const modalBody = document.querySelector('.modal__body');
 const close = document.querySelector('.modal__icon');
 const body = document.body;

 open.addEventListener('click', (e) =>{
	e.preventDefault()
	modal.classList.add('show')
	body.style.overflow = 'hidden';
 })
 
 close.addEventListener('click', () => {
	modal.classList.remove('show')
 })


window.addEventListener('click', (e) => {
	if(e.target === modalBody) {
		body.style.overflow = 'hidden';
	}
	if (e.target === modal) {
		modal.classList.remove('show');
	} 
})

