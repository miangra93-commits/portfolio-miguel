// js/script.js

// Función para el cambio de idioma
document.addEventListener('DOMContentLoaded', function() {
    // Selector de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Aquí puedes agregar la lógica para cambiar el contenido del sitio
            const lang = this.id === 'lang-es' ? 'es' : 'en';
            changeLanguage(lang);
        });
    });
    
    // Función para cambiar idioma (placeholder para futura implementación)
    function changeLanguage(lang) {
        console.log(`Cambiando idioma a: ${lang}`);
        // Aquí puedes implementar la lógica para cambiar todo el contenido
        // Puedes usar una librería como i18next o implementar tu propio sistema
    }
    
    // Animación de barras de habilidades
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                skillLevel.style.width = skillLevel.style.width;
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Aquí puedes agregar el envío real del formulario
                alert('¡Mensaje enviado! Gracias por contactarme.');
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});