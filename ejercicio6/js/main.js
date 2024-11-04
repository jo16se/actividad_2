document.addEventListener('DOMContentLoaded', () => {
     // Seleccionamos todos los enlaces
     const enlaces = document.querySelectorAll('a');
     
     // Añadimos event listener a cada enlace
     enlaces.forEach(enlace => {
         enlace.addEventListener('click', function(e) {
                          
             // Obtener el div padre que contiene el párrafo
             const contenedor = this.parentNode;
             // Obtener el párrafo dentro del div
             const parrafo = contenedor.querySelector('p');
             
             // Alternar visibilidad del párrafo
             if (parrafo.style.display !== 'none') {
                 parrafo.style.display = 'none';
                 this.textContent = 'Mostrar contenidos';
             } else {
                 parrafo.style.display = 'block';
                 this.textContent = 'Ocultar contenidos';
             }
         });
     });
 });