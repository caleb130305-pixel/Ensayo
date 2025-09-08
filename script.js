// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona todos los elementos que tienen la clase 'fade-in'
    const fadeElems = document.querySelectorAll('.fade-in');

    // Configuración para el observador de intersección
    const options = {
        threshold: 0.1 // El elemento se considerará visible cuando el 10% de él esté en pantalla
    };

    // Crea un nuevo observador
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Si el elemento está en la pantalla (intersecting)
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación CSS
                entry.target.classList.add('visible');
                // Deja de observar este elemento para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Pide al observador que vigile cada uno de los elementos
    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

});