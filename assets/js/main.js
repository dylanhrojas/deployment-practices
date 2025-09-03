// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar el formulario
        alert('¡Gracias por tu mensaje! Te responderé pronto.');
        this.reset();
    });
}

// Cargar proyectos dinámicamente (ejemplo)
function loadProjects() {
    // En una implementación real, esto cargaría datos de una API o archivo JSON
    console.log('Cargando proyectos...');
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});