// script.js
const button = document.getElementById('magicButton');
button.addEventListener('click', (e) => {
   // Crear una estrella
   const star = document.createElement('div');
   star.classList.add('star');
   // Posicionar la estrella en el lugar del clic
   const rect = button.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;
   star.style.left = `${x}px`;
   star.style.top = `${y}px`;
   // Añadir la estrella al botón
   button.appendChild(star);
   // Eliminar la estrella después de la animación
   setTimeout(() => {
       star.remove();
   }, 500); // Duración de la animación
});