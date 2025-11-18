// js/script.js - Sistema de idiomas simplificado

// Variable global para el idioma actual
let currentLang = localStorage.getItem('language') || 'es';

// Función principal para cambiar idioma
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
    
    // Actualizar contenido según la página
    updatePageContent(lang);
}

// Función para actualizar el contenido de la página
function updatePageContent(lang) {
    const t = translations[lang];
    if (!t) {
        console.error('No se encontraron traducciones para:', lang);
        return;
    }
    
    // Actualizar navegación (común a todas las páginas)
    updateNavigation(t);
    
    // Actualizar footer (común a todas las páginas)
    updateFooter(t);
    
    // Actualizar contenido específico de cada página
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    switch(page) {
        case 'index.html':
            updateIndexContent(t);
            break;
        case 'about.html':
            updateAboutContent(t);
            break;
        case 'skills.html':
            updateSkillsContent(t);
            break;
        case 'education.html':
            updateEducationContent(t);
            break;
        case 'projects.html':
            updateProjectsContent(t);
            break;
        case 'contact.html':
            updateContactContent(t);
            break;
    }
}

// Actualizar navegación
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

// Actualizar footer
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
    
    // Derechos de autor
    const rightsElement = document.querySelector('.footer-bottom p');
    if (rightsElement) {
        rightsElement.innerHTML = `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`;
    }
}

// Página principal
function updateIndexContent(t) {
    const elements = {
        '.hero-title': t.heroTitle,
        '.hero-subtitle': t.heroSubtitle,
        '.hero-description': t.heroDescription,
        '.hero-buttons a[href="projects.html"]': t.btnProjects,
        '.hero-buttons a[href="about.html"]': t.btnAbout
    };
    
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) {
            if (selector === '.hero-title') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    }
}

// Página About (versión simplificada)
function updateAboutContent(t) {
    const elements = {
        '.page-title': t.aboutTitle
    };
    
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
}

// Página Skills (versión simplificada)
function updateSkillsContent(t) {
    const elements = {
        '.page-title': t.skillsTitle
    };
    
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
}

// Página Education (versión simplificada)
function updateEducationContent(t) {
    const elements = {
        '.page-title': t.educationTitle
    };
    
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
}

// Página Projects (versión simplificada)
function updateProjectsContent(t) {
    const elements = {
        '.page-title': t.projectsTitle,
        '.page-subtitle': t.projectsSubtitle
    };
    
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
}

// Página Contact (versión simplificada)
function updateContactContent(t) {
    const elements = {
        '.page-title': t.contactTitle,
        '.page-subtitle': t.contactSubtitle
    };
    
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada, idioma actual:', currentLang);
    
    // Configurar event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.id === 'lang-es' ? 'es' : 'en';
            console.log('Botón clickeado, cambiando a:', lang);
            changeLanguage(lang);
        });
    });
    
    // Aplicar idioma actual
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
});
