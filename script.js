const button = document.getElementById('magicButton');
button.addEventListener('click', (e) => {
   for (let i = 0; i < 5; i++) { // Crea 5 corazones
       const heart = document.createElement('div');
       heart.classList.add('star'); // Usamos la misma clase para los corazones
       // Definir el SVG de un corazón
       heart.innerHTML = `
<svg viewBox="0 0 24 24" width="100%" height="100%">
<path fill="#941212" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>
       `;
       // Posicionar el corazón en el lugar del clic con un pequeño desplazamiento aleatorio
       const rect = button.getBoundingClientRect();
       const x = e.clientX - rect.left + (Math.random() * 20 - 10); // Desplazamiento aleatorio
       const y = e.clientY - rect.top + (Math.random() * 20 - 10); // Desplazamiento aleatorio
       heart.style.left = `${x}px`;
       heart.style.top = `${y}px`;
       // Añadir el corazón al botón
       button.appendChild(heart);
       // Eliminar el corazón después de la animación
       setTimeout(() => {
           heart.remove();
       }, 500); // Duración de la animación
   }
})

;
