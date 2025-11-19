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
        heroDescription: "apasionado por aprender y mejorar cada día. Actualmente trabajando en automatización de procesos mientras completo mis estudios universitarios.",
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
        contactTitle: "Contáctame"
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
        contactTitle: "Contact Me"
    }
};

// traducción 
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = localStorage.getItem('portfolio-language') || 'es';
    
    console.log('🚀 Sistema de idiomas iniciado');
    console.log('=== ELEMENTOS ENCONTRADOS ===');
        const commonSelectors = [
            '.page-title',
            '.hero-title',
            '.hero-subtitle', 
            '.hero-description',
            '.text-section',
            '.detail-card',
            '.info-card',
            '.skills-section',
            '.timeline-item',
            '.project-card'
        ];
        
        commonSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            console.log(`${selector}: ${elements.length} elementos`);
        });
    
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-language', lang);
        const t = translations[lang];
        if (!t) return;
        
        console.log(`🌐 Aplicando idioma: ${lang}`);
        
        // 1. TRADUCCIONES BÁSICAS (siempre funcionan)
        applyBasicTranslations(t);
        
        // 2. TRADUCCIONES POR PÁGINA
        applyPageSpecificTranslations(t);
        
        // 3. BOTONES ACTIVOS
        updateLanguageButtons(lang);
        
        console.log('✅ Idioma aplicado');
    }
    
    function applyBasicTranslations(t) {
        // Navegación 
        safeUpdate('a[href="index.html"]', t.navHome);
        safeUpdate('a[href="about.html"]', t.navAbout);
        safeUpdate('a[href="skills.html"]', t.navSkills);
        safeUpdate('a[href="education.html"]', t.navEducation);
        safeUpdate('a[href="projects.html"]', t.navProjects);
        
        // Footer 
        safeUpdate('.footer-contact h4', t.contact);
        safeUpdate('.footer-links h4', t.quickLinks);
        safeUpdate('.footer-links a[href="index.html"]', t.homeLink);
        safeUpdate('.footer-links a[href="projects.html"]', t.projectsLink);
        safeUpdate('.footer-links a[href="about.html"]', t.aboutLink);
        safeUpdate('.footer-bottom p', `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`, true);
        
        // Títulos de página 
        safeUpdate('.page-title', getPageTitle(t));
    }
    
    function applyPageSpecificTranslations(t) {
        const page = getCurrentPage();
        console.log(`📄 Página detectada: ${page}`);
        
        switch(page) {
            case 'index':
                applyIndexTranslations(t);
                break;
            case 'about':
                applyAboutTranslations(t);
                break;
            case 'skills':
                applySkillsTranslations(t);
                break;
            case 'education':
                applyEducationTranslations(t);
                break;
            case 'projects':
                applyProjectsTranslations(t);
                break;
            case 'contact':
                applyContactTranslations(t);
                break;
        }
    }
    
    function getPageTitle(t) {
        const page = getCurrentPage();
        const titles = {
            'index': '',
            'about': t.aboutTitle,
            'skills': t.skillsTitle,
            'education': t.educationTitle,
            'projects': t.projectsTitle,
            'contact': t.contactTitle
        };
        return titles[page] || '';
    }
    
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page.replace('.html', '');
    }
    
    function applyIndexTranslations(t) {
        // Hero section
        safeUpdate('.hero-title', t.heroTitle, true);
        safeUpdate('.hero-subtitle', t.heroSubtitle);
        safeUpdate('.hero-description', t.heroDescription);
        safeUpdate('.hero-buttons a[href="projects.html"]', t.btnProjects);
        safeUpdate('.hero-buttons a[href="about.html"]', t.btnAbout);
        
        // Info cards 
        safeUpdate('.info-card:nth-child(1) h3', t.location);
        safeUpdate('.info-card:nth-child(2) h3', t.education);
        safeUpdate('.info-card:nth-child(3) h3', t.experience);
        safeUpdate('.info-card:nth-child(4) h3', t.available);
        safeUpdate('.info-card:nth-child(1) p', t.locationText);
        safeUpdate('.info-card:nth-child(2) p', t.educationText);
        safeUpdate('.info-card:nth-child(3) p', t.experienceText);
        safeUpdate('.info-card:nth-child(4) p', t.availableText);
        
        // También intentar selectores más genéricos
        safeUpdate('.info-card h3', t.location, false, true); // Solo primer elemento
    }
    
    function applyAboutTranslations(t) {
    
        const sections = document.querySelectorAll('.text-section, .about-text, section');
        sections.forEach((section, index) => {
            const h2 = section.querySelector('h2');
            const p = section.querySelector('p');
            
            if (h2 && index === 0) safeUpdate(h2, t.aboutHistory);
            if (p && index === 0) safeUpdate(p, t.aboutHistoryText);
            if (h2 && index === 1) safeUpdate(h2, t.aboutExperience);
            if (p && index === 1) safeUpdate(p, t.aboutExperienceText);
            if (h2 && index === 2) safeUpdate(h2, t.aboutPassion);
            if (p && index === 2) safeUpdate(p, t.aboutPassionText);
        });
        
        // Cards de intereses y metas
        safeUpdate('.detail-card:first-child h3', t.interests);
        safeUpdate('.detail-card:last-child h3', t.goals);
    }
    
    function applySkillsTranslations(t) {
        // Títulos de secciones
        safeUpdate('h2', t.technicalSkills, false, true); // Primer h2
        

        const skillItems = document.querySelectorAll('.soft-skill-item, .skill-item, [class*="skill"]');
        skillItems.forEach((item, index) => {
            const h4 = item.querySelector('h4');
            const p = item.querySelector('p');
            
            if (h4 && index === 0) safeUpdate(h4, t.teamwork);
            if (p && index === 0) safeUpdate(p, t.teamworkDesc);
            if (h4 && index === 1) safeUpdate(h4, t.problemSolving);
            if (p && index === 1) safeUpdate(p, t.problemSolvingDesc);
            // Continuar para otros índices...
        });
    }
    
    function applyEducationTranslations(t) {
        // Timeline items
        const timelineItems = document.querySelectorAll('.timeline-item, [class*="timeline"], [class*="education"]');
        timelineItems.forEach((item, index) => {
            const h3 = item.querySelector('h3');
            const p = item.querySelector('p');
            
            if (h3 && index === 0) safeUpdate(h3, t.university);
            if (p && index === 0) safeUpdate(p, t.universityDesc);
            if (h3 && index === 1) safeUpdate(h3, t.technical);
            if (p && index === 1) safeUpdate(p, t.technicalDesc);
            // Continuar para otros índices...
        });
    }
    
    function applyProjectsTranslations(t) {
        // Proyectos
        const projects = document.querySelectorAll('.project-card, [class*="project"]');
        projects.forEach((project, index) => {
            const h3 = project.querySelector('h3');
            const p = project.querySelector('p');
            
            if (h3 && index === 0) safeUpdate(h3, t.project1Title);
            if (p && index === 0) safeUpdate(p, t.project1Desc);
            if (h3 && index === 1) safeUpdate(h3, t.project2Title);
            if (p && index === 1) safeUpdate(p, t.project2Desc);
            if (h3 && index === 2) safeUpdate(h3, t.project3Title);
            if (p && index === 2) safeUpdate(p, t.project3Desc);
        });
        
        // Botones
        safeUpdate('.btn-secondary', t.viewCode, false, true);
        safeUpdate('.btn-primary', t.tryCalculator, false, true);
    }
    
    function applyContactTranslations(t) {
        // Información de contacto
        safeUpdate('.contact-info h2', t.contactInfo);
        safeUpdate('.contact-item h4', t.email, false, true);
        safeUpdate('.social-links h3', t.followMe);
    }
    
    // Función para actualizar elementos
    function safeUpdate(selectorOrElement, text, isHTML = false, firstOnly = false) {
        try {
            let elements;
            
            if (typeof selectorOrElement === 'string') {
                elements = document.querySelectorAll(selectorOrElement);
            } else {
                elements = [selectorOrElement];
            }
            
            if (elements.length > 0) {
                const elementsToUpdate = firstOnly ? [elements[0]] : elements;
                
                elementsToUpdate.forEach(element => {
                    if (element && text) {
                        if (isHTML) {
                            element.innerHTML = text;
                        } else {
                            element.textContent = text;
                        }
                        console.log(`✅ Actualizado: "${text.substring(0, 30)}..."`);
                    }
                });
                
                return true;
            }
        } catch (error) {
            console.log(`❌ Error actualizando: ${selectorOrElement}`, error);
        }
        
        return false;
    }
    
    function updateLanguageButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${lang}`) btn.classList.add('active');
        });
    }
    
    // Event listeners 
    function setupEventListeners() {
        // Método 1: Event delegation
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('lang-btn')) {
                e.preventDefault();
                const lang = e.target.id === 'lang-es' ? 'es' : 'en';
                console.log(`🖱️ Click en botón: ${lang}`);
                applyLanguage(lang);
            }
        });
        
        // Método 2: Event listeners directos
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.id === 'lang-es' ? 'es' : 'en';
                console.log(`🖱️ Click directo: ${lang}`);
                applyLanguage(lang);
            });
        });
    }
    
    // INICIALIZAR
    setupEventListeners();
    applyLanguage(currentLang);
    
    // Re-aplicar después de que la página cargue completamente
    window.addEventListener('load', function() {
        console.log('🏁 Página completamente cargada');
        applyLanguage(currentLang);
    });
});
