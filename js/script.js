// js/script.js - Sistema completo de idiomas (todo en un archivo)

// ===== TRADUCCIONES =====
const translations = {
    es: {
        // Navegación
        navHome: "Inicio",
        navAbout: "Sobre Mí",
        navSkills: "Habilidades", 
        navEducation: "Formación",
        navProjects: "Proyectos",
        
        // Página principal
        heroTitle: "Hola, soy <span class='highlight'>Miguel Angel Gracia</span>",
        heroSubtitle: "Estudiante de Ingeniería de Software & Apasionado por la Tecnología",
        heroDescription: "Persona apasionada por aprender y mejorar cada día. Actualmente trabajando en automatización de procesos mientras completo mis estudios universitarios.",
        btnProjects: "Ver Mis Proyectos",
        btnAbout: "Conóceme Más",
        
        // Info cards
        location: "Ubicación",
        education: "Educación",
        experience: "Experiencia",
        available: "Disponible", 
        locationText: "Bogotá, Colombia",
        educationText: "Ingeniería de Software - UCompensar",
        experienceText: "Asociado Logística - SGS Global",
        availableText: "Para proyectos y oportunidades",
        
        // Footer
        contact: "Contacto",
        quickLinks: "Enlaces Rápidos",
        homeLink: "Inicio",
        projectsLink: "Proyectos", 
        aboutLink: "Sobre Mí",
        rights: "Todos los derechos reservados",
        
        // Títulos de páginas
        aboutTitle: "Sobre Mí",
        skillsTitle: "Mis Habilidades",
        educationTitle: "Mi Formación Académica", 
        projectsTitle: "Mis Proyectos",
        projectsSubtitle: "Una muestra de mis trabajos y desarrollos más recientes",
        contactTitle: "Contáctame",
        contactSubtitle: "¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad."
    },

    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About Me",
        navSkills: "Skills",
        navEducation: "Education", 
        navProjects: "Projects",
        
        // Main page
        heroTitle: "Hello, I'm <span class='highlight'>Miguel Angel Gracia</span>",
        heroSubtitle: "Software Engineering Student & Technology Enthusiast",
        heroDescription: "Passionate about learning and improving every day. Currently working on process automation while completing my university studies.",
        btnProjects: "View My Projects", 
        btnAbout: "Learn More About Me",
        
        // Info cards
        location: "Location",
        education: "Education",
        experience: "Experience",
        available: "Available",
        locationText: "Bogotá, Colombia", 
        educationText: "Software Engineering - UCompensar",
        experienceText: "Logistics Associate - SGS Global",
        availableText: "For projects and opportunities",
        
        // Footer
        contact: "Contact",
        quickLinks: "Quick Links",
        homeLink: "Home",
        projectsLink: "Projects",
        aboutLink: "About Me", 
        rights: "All rights reserved",
        
        // Page titles
        aboutTitle: "About Me",
        skillsTitle: "My Skills",
        educationTitle: "My Academic Background",
        projectsTitle: "My Projects",
        projectsSubtitle: "A showcase of my recent work and developments", 
        contactTitle: "Contact Me",
        contactSubtitle: "Have a project in mind? Let's talk and make it happen."
    }
};

// ===== LÓGICA DEL SISTEMA DE IDIOMAS =====
let currentLang = localStorage.getItem('language') || 'es';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    console.log('Cambiando idioma a:', lang);
    
    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${lang}`) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar contenido de la página
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Actualizar navegación
    updateNavigation(t);
    
    // Actualizar footer
    updateFooter(t);
    
    // Actualizar contenido específico de la página
    updateSpecificContent(t);
}

function updateNavigation(t) {
    const navSelectors = {
        'a[href="index.html"]': t.navHome,
        'a[href="about.html"]': t.navAbout,
        'a[href="skills.html"]': t.navSkills,
        'a[href="education.html"]': t.navEducation,
        'a[href="projects.html"]': t.navProjects
    };
    
    for (const [selector, text] of Object.entries(navSelectors)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
}

function updateFooter(t) {
    const footerSelectors = {
        '.footer-contact h4': t.contact,
        '.footer-links h4': t.quickLinks,
        '.footer-links a[href="index.html"]': t.homeLink,
        '.footer-links a[href="projects.html"]': t.projectsLink,
        '.footer-links a[href="about.html"]': t.aboutLink
    };
    
    for (const [selector, text] of Object.entries(footerSelectors)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
    
    const rightsElement = document.querySelector('.footer-bottom p');
    if (rightsElement) {
        rightsElement.innerHTML = `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`;
    }
}

function updateSpecificContent(t) {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    const pageTitles = {
        'index.html': { 
            '.hero-title': { html: t.heroTitle },
            '.hero-subtitle': { text: t.heroSubtitle },
            '.hero-description': { text: t.heroDescription },
            '.hero-buttons a[href="projects.html"]': { text: t.btnProjects },
            '.hero-buttons a[href="about.html"]': { text: t.btnAbout },
            '.info-card:nth-child(1) h3': { text: t.location },
            '.info-card:nth-child(2) h3': { text: t.education },
            '.info-card:nth-child(3) h3': { text: t.experience },
            '.info-card:nth-child(4) h3': { text: t.available },
            '.info-card:nth-child(1) p': { text: t.locationText },
            '.info-card:nth-child(2) p': { text: t.educationText },
            '.info-card:nth-child(3) p': { text: t.experienceText },
            '.info-card:nth-child(4) p': { text: t.availableText }
        },
        'about.html': {
            '.page-title': { text: t.aboutTitle }
        },
        'skills.html': {
            '.page-title': { text: t.skillsTitle }
        },
        'education.html': {
            '.page-title': { text: t.educationTitle }
        },
        'projects.html': {
            '.page-title': { text: t.projectsTitle },
            '.page-subtitle': { text: t.projectsSubtitle }
        },
        'contact.html': {
            '.page-title': { text: t.contactTitle },
            '.page-subtitle': { text: t.contactSubtitle }
        }
    };
    
    const elements = pageTitles[page] || {};
    
    for (const [selector, config] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) {
            if (config.html) {
                element.innerHTML = config.html;
            } else if (config.text) {
                element.textContent = config.text;
            }
        }
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de idiomas iniciado');
    
    // Configurar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.id === 'lang-es' ? 'es' : 'en';
            changeLanguage(lang);
        });
    });
    
    // Aplicar idioma guardado
    changeLanguage(currentLang);
    
    // Resto del código existente...
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
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert(currentLang === 'es' ? '¡Mensaje enviado! Gracias por contactarme.' : 'Message sent! Thank you for contacting me.');
                contactForm.reset();
            } else {
                alert(currentLang === 'es' ? 'Por favor, completa todos los campos requeridos.' : 'Please fill in all required fields.');
            }
        });
    }
});
