// js/language.js - Sistema de idiomas INDEPENDIENTE

const translations = {
    es: {
        navHome: "Inicio",
        navAbout: "Sobre Mí",
        navSkills: "Habilidades", 
        navEducation: "Formación",
        navProjects: "Proyectos",
        heroTitle: "Hola, soy <span class='highlight'>Miguel Angel Gracia</span>",
        heroSubtitle: "Estudiante de Ingeniería de Software & Apasionado por la Tecnología",
        heroDescription: "Persona apasionada por aprender y mejorar cada día. Actualmente trabajando en automatización de procesos mientras completo mis estudios universitarios.",
        btnProjects: "Ver Mis Proyectos",
        btnAbout: "Conóceme Más",
        location: "Ubicación",
        education: "Educación",
        experience: "Experiencia",
        available: "Disponible", 
        locationText: "Bogotá, Colombia",
        educationText: "Ingeniería de Software - UCompensar",
        experienceText: "Asociado Logística - SGS Global",
        availableText: "Para proyectos y oportunidades",
        contact: "Contacto",
        quickLinks: "Enlaces Rápidos",
        homeLink: "Inicio",
        projectsLink: "Proyectos", 
        aboutLink: "Sobre Mí",
        rights: "Todos los derechos reservados",
        aboutTitle: "Sobre Mí",
        skillsTitle: "Mis Habilidades",
        educationTitle: "Mi Formación Académica", 
        projectsTitle: "Mis Proyectos",
        projectsSubtitle: "Una muestra de mis trabajos y desarrollos más recientes",
        contactTitle: "Contáctame",
        contactSubtitle: "¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad."
    },
    en: {
        navHome: "Home",
        navAbout: "About Me",
        navSkills: "Skills",
        navEducation: "Education", 
        navProjects: "Projects",
        heroTitle: "Hello, I'm <span class='highlight'>Miguel Angel Gracia</span>",
        heroSubtitle: "Software Engineering Student & Technology Enthusiast",
        heroDescription: "Passionate about learning and improving every day. Currently working on process automation while completing my university studies.",
        btnProjects: "View My Projects", 
        btnAbout: "Learn More About Me",
        location: "Location",
        education: "Education",
        experience: "Experience",
        available: "Available",
        locationText: "Bogotá, Colombia", 
        educationText: "Software Engineering - UCompensar",
        experienceText: "Logistics Associate - SGS Global",
        availableText: "For projects and opportunities",
        contact: "Contact",
        quickLinks: "Quick Links",
        homeLink: "Home",
        projectsLink: "Projects",
        aboutLink: "About Me", 
        rights: "All rights reserved",
        aboutTitle: "About Me",
        skillsTitle: "My Skills",
        educationTitle: "My Academic Background",
        projectsTitle: "My Projects",
        projectsSubtitle: "A showcase of my recent work and developments", 
        contactTitle: "Contact Me",
        contactSubtitle: "Have a project in mind? Let's talk and make it happen."
    }
};

// Sistema simple y directo
function initLanguageSystem() {
    let currentLang = localStorage.getItem('portfolio-language') || 'es';
    
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-language', lang);
        const t = translations[lang];
        if (!t) return;
        
        // Navegación
        document.querySelectorAll('a[href="index.html"]').forEach(el => el.textContent = t.navHome);
        document.querySelectorAll('a[href="about.html"]').forEach(el => el.textContent = t.navAbout);
        document.querySelectorAll('a[href="skills.html"]').forEach(el => el.textContent = t.navSkills);
        document.querySelectorAll('a[href="education.html"]').forEach(el => el.textContent = t.navEducation);
        document.querySelectorAll('a[href="projects.html"]').forEach(el => el.textContent = t.navProjects);
        
        // Footer
        document.querySelectorAll('.footer-contact h4').forEach(el => el.textContent = t.contact);
        document.querySelectorAll('.footer-links h4').forEach(el => el.textContent = t.quickLinks);
        document.querySelectorAll('.footer-links a[href="index.html"]').forEach(el => el.textContent = t.homeLink);
        document.querySelectorAll('.footer-links a[href="projects.html"]').forEach(el => el.textContent = t.projectsLink);
        document.querySelectorAll('.footer-links a[href="about.html"]').forEach(el => el.textContent = t.aboutLink);
        document.querySelectorAll('.footer-bottom p').forEach(el => el.innerHTML = `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`);
        
        // Contenido específico de página
        const page = window.location.pathname.split('/').pop() || 'index.html';
        
        // Títulos de página
        document.querySelectorAll('.page-title').forEach(el => {
            if (page === 'about.html') el.textContent = t.aboutTitle;
            if (page === 'skills.html') el.textContent = t.skillsTitle;
            if (page === 'education.html') el.textContent = t.educationTitle;
            if (page === 'projects.html') el.textContent = t.projectsTitle;
            if (page === 'contact.html') el.textContent = t.contactTitle;
        });
        
        // Subtítulos
        document.querySelectorAll('.page-subtitle').forEach(el => {
            if (page === 'projects.html') el.textContent = t.projectsSubtitle;
            if (page === 'contact.html') el.textContent = t.contactSubtitle;
        });
        
        // Página principal
        if (page === 'index.html') {
            document.querySelectorAll('.hero-title').forEach(el => el.innerHTML = t.heroTitle);
            document.querySelectorAll('.hero-subtitle').forEach(el => el.textContent = t.heroSubtitle);
            document.querySelectorAll('.hero-description').forEach(el => el.textContent = t.heroDescription);
            document.querySelectorAll('.hero-buttons a[href="projects.html"]').forEach(el => el.textContent = t.btnProjects);
            document.querySelectorAll('.hero-buttons a[href="about.html"]').forEach(el => el.textContent = t.btnAbout);
            document.querySelectorAll('.info-card:nth-child(1) h3').forEach(el => el.textContent = t.location);
            document.querySelectorAll('.info-card:nth-child(2) h3').forEach(el => el.textContent = t.education);
            document.querySelectorAll('.info-card:nth-child(3) h3').forEach(el => el.textContent = t.experience);
            document.querySelectorAll('.info-card:nth-child(4) h3').forEach(el => el.textContent = t.available);
            document.querySelectorAll('.info-card:nth-child(1) p').forEach(el => el.textContent = t.locationText);
            document.querySelectorAll('.info-card:nth-child(2) p').forEach(el => el.textContent = t.educationText);
            document.querySelectorAll('.info-card:nth-child(3) p').forEach(el => el.textContent = t.experienceText);
            document.querySelectorAll('.info-card:nth-child(4) p').forEach(el => el.textContent = t.availableText);
        }
        
        // Botones activos
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${lang}`) btn.classList.add('active');
        });
    }
    
    // Event listeners simples
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-btn')) {
            e.preventDefault();
            const lang = e.target.id === 'lang-es' ? 'es' : 'en';
            applyLanguage(lang);
        }
    });
    
    // Aplicar idioma inicial
    applyLanguage(currentLang);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem);
} else {
    initLanguageSystem();
}
