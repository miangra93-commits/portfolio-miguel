// js/language.js - Sistema de idiomas SUPER AGRESIVO

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

// Sistema ULTRA AGRESIVO - se ejecuta inmediatamente
(function() {
    'use strict';
    
    console.log('🚀 INICIANDO SISTEMA DE IDIOMAS - MODO AGRESIVO');
    
    // Obtener idioma actual
    let currentLang = localStorage.getItem('portfolio-language') || 'es';
    console.log('🌐 Idioma detectado:', currentLang);
    
    // Aplicar idioma INMEDIATAMENTE
    applyLanguage(currentLang);
    
    // Configurar event listeners de manera SUPER AGRESIVA
    function setupEventListeners() {
        console.log('🖱️ Configurando event listeners...');
        
        // Método 1: Event delegation en TODO el documento
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('lang-btn')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 Botón de idioma clickeado:', e.target.id);
                
                const lang = e.target.id === 'lang-es' ? 'es' : 'en';
                changeLanguage(lang);
            }
        });
        
        // Método 2: Event listeners DIRECTOS en cada botón
        setTimeout(() => {
            const buttons = document.querySelectorAll('.lang-btn');
            console.log('🔍 Encontrados', buttons.length, 'botones de idioma');
            
            buttons.forEach(button => {
                // Remover cualquier event listener existente
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);
                
                // Agregar nuevo event listener
                newButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🎯 Click DIRECTO en botón:', this.id);
                    
                    const lang = this.id === 'lang-es' ? 'es' : 'en';
                    changeLanguage(lang);
                });
            });
        }, 100);
        
        // Método 3: También agregar onclick por si acaso
        setTimeout(() => {
            document.querySelectorAll('.lang-btn').forEach(button => {
                button.setAttribute('onclick', `window.changeLanguage('${button.id === 'lang-es' ? 'es' : 'en'}')`);
            });
        }, 200);
    }
    
    // Función para cambiar idioma
    window.changeLanguage = function(lang) {
        console.log('🔄 Cambiando idioma a:', lang);
        currentLang = lang;
        localStorage.setItem('portfolio-language', lang);
        applyLanguage(lang);
        
        // Forzar re-render si es necesario
        setTimeout(() => {
            applyLanguage(lang);
        }, 50);
    };
    
    // Función para aplicar el idioma
    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) {
            console.error('❌ No hay traducciones para:', lang);
            return;
        }
        
        console.log('🎨 Aplicando traducciones para:', lang);
        
        // 1. ACTUALIZAR NAVEGACIÓN (muy importante)
        updateElements('a[href="index.html"]', t.navHome);
        updateElements('a[href="about.html"]', t.navAbout);
        updateElements('a[href="skills.html"]', t.navSkills);
        updateElements('a[href="education.html"]', t.navEducation);
        updateElements('a[href="projects.html"]', t.navProjects);
        
        // 2. ACTUALIZAR FOOTER
        updateElements('.footer-contact h4', t.contact);
        updateElements('.footer-links h4', t.quickLinks);
        updateElements('.footer-links a[href="index.html"]', t.homeLink);
        updateElements('.footer-links a[href="projects.html"]', t.projectsLink);
        updateElements('.footer-links a[href="about.html"]', t.aboutLink);
        updateElements('.footer-bottom p', `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`, true);
        
        // 3. ACTUALIZAR CONTENIDO ESPECÍFICO DE PÁGINA
        const page = getCurrentPage();
        console.log('📄 Página actual:', page);
        
        updatePageContent(page, t);
        
        // 4. ACTUALIZAR BOTONES ACTIVOS
        updateLanguageButtons(lang);
        
        console.log('✅ Idioma aplicado exitosamente:', lang);
    }
    
    // Función para obtener página actual
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page.replace('.html', '');
    }
    
    // Función para actualizar contenido de página específica
    function updatePageContent(page, t) {
        switch(page) {
            case 'index':
                updateIndexContent(t);
                break;
            case 'about':
                updateElements('.page-title', t.aboutTitle);
                break;
            case 'skills':
                updateElements('.page-title', t.skillsTitle);
                break;
            case 'education':
                updateElements('.page-title', t.educationTitle);
                break;
            case 'projects':
                updateElements('.page-title', t.projectsTitle);
                updateElements('.page-subtitle', t.projectsSubtitle);
                break;
            case 'contact':
                updateElements('.page-title', t.contactTitle);
                updateElements('.page-subtitle', t.contactSubtitle);
                break;
            case 'calculadora':
                // La calculadora no necesita traducciones de contenido
                break;
        }
        
        // Contenido de index.html
        if (page === 'index') {
            updateIndexContent(t);
        }
    }
    
    // Contenido específico de index.html
    function updateIndexContent(t) {
        updateElements('.hero-title', t.heroTitle, true);
        updateElements('.hero-subtitle', t.heroSubtitle);
        updateElements('.hero-description', t.heroDescription);
        updateElements('.hero-buttons a[href="projects.html"]', t.btnProjects);
        updateElements('.hero-buttons a[href="about.html"]', t.btnAbout);
        updateElements('.info-card:nth-child(1) h3', t.location);
        updateElements('.info-card:nth-child(2) h3', t.education);
        updateElements('.info-card:nth-child(3) h3', t.experience);
        updateElements('.info-card:nth-child(4) h3', t.available);
        updateElements('.info-card:nth-child(1) p', t.locationText);
        updateElements('.info-card:nth-child(2) p', t.educationText);
        updateElements('.info-card:nth-child(3) p', t.experienceText);
        updateElements('.info-card:nth-child(4) p', t.availableText);
    }
    
    // Función helper para actualizar elementos
    function updateElements(selector, text, isHTML = false) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (isHTML) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        });
    }
    
    // Actualizar botones de idioma activos
    function updateLanguageButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active');
            }
        });
    }
    
    // INICIALIZAR TODO
    setTimeout(() => {
        setupEventListeners();
        // Re-aplicar idioma por si acaso
        applyLanguage(currentLang);
    }, 100);
    
    // También aplicar cuando la página termine de cargar
    window.addEventListener('load', function() {
        console.log('🏁 Página completamente cargada, re-aplicando idioma...');
        applyLanguage(currentLang);
        setupEventListeners();
    });
    
    console.log('🎉 Sistema de idiomas configurado');
})();
