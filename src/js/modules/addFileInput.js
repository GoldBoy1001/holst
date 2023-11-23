const input = document.getElementById('file-input');
const preview = document.getElementById('preview');

const fileUpload = document.querySelector('.custom-file-upload');





export function addFileInput() {
	input.addEventListener('change', e => {
		const files = e.target.files;
		if (!files.length) {
		  alert('No file selected!');
		  return;
		}
	 
		const file = files[0];
		const reader = new FileReader();
	 
		reader.onload = e => {
		  const img = new Image();
		  img.src = e.target.result;
		  img.style.maxWidth = '100%';
		  img.style.maxHeight = '100%'; 
		  fileUpload.style.backgroundColor = '#fff'
		  preview.innerHTML = '';
		  preview.appendChild(img);
		};
	 
		reader.readAsDataURL(file);
	 });
}

