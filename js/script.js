// js/script.js - Sistema de idiomas DEFINITIVO

// ===== TRADUCCIONES COMPLETAS =====
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

// ===== SISTEMA PRINCIPAL =====
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-language') || 'es';
        this.init();
    }

    init() {
        console.log('🚀 Iniciando sistema de idiomas...');
        this.setupEventListeners();
        this.applyLanguage(this.currentLang);
    }

    setupEventListeners() {
        // Usar event delegation para manejar clicks en botones de idioma
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                e.preventDefault();
                const lang = e.target.id === 'lang-es' ? 'es' : 'en';
                console.log(`🌐 Cambiando idioma a: ${lang}`);
                this.changeLanguage(lang);
            }
        });

        // También agregar event listeners directos por si acaso
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.id === 'lang-es' ? 'es' : 'en';
                console.log(`🌐 Click directo - Cambiando idioma a: ${lang}`);
                this.changeLanguage(lang);
            });
        });
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('portfolio-language', lang);
        this.applyLanguage(lang);
    }

    applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        console.log(`🎯 Aplicando idioma: ${lang}`);

        // 1. Actualizar navegación
        this.updateNavigation(t);
        
        // 2. Actualizar footer
        this.updateFooter(t);
        
        // 3. Actualizar contenido específico de la página
        this.updatePageContent(t);
        
        // 4. Actualizar botones activos
        this.updateActiveButtons(lang);
    }

    updateNavigation(t) {
        const navSelectors = {
            'a[href="index.html"]': t.navHome,
            'a[href="about.html"]': t.navAbout,
            'a[href="skills.html"]': t.navSkills,
            'a[href="education.html"]': t.navEducation,
            'a[href="projects.html"]': t.navProjects
        };

        Object.entries(navSelectors).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        });
    }

    updateFooter(t) {
        const footerSelectors = {
            '.footer-contact h4': t.contact,
            '.footer-links h4': t.quickLinks,
            '.footer-links a[href="index.html"]': t.homeLink,
            '.footer-links a[href="projects.html"]': t.projectsLink,
            '.footer-links a[href="about.html"]': t.aboutLink
        };

        Object.entries(footerSelectors).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        });

        // Derechos de autor
        const rightsElement = document.querySelector('.footer-bottom p');
        if (rightsElement) {
            rightsElement.innerHTML = `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`;
        }
    }

    updatePageContent(t) {
        const currentPage = this.getCurrentPage();
        console.log(`📄 Detectada página: ${currentPage}`);

        const pageContent = {
            'index': () => this.updateIndexContent(t),
            'about': () => this.updateAboutContent(t),
            'skills': () => this.updateSkillsContent(t),
            'education': () => this.updateEducationContent(t),
            'projects': () => this.updateProjectsContent(t),
            'contact': () => this.updateContactContent(t)
        };

        const updateFunction = pageContent[currentPage];
        if (updateFunction) {
            updateFunction();
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        // Mapear nombres de archivo a identificadores de página
        const pageMap = {
            'index.html': 'index',
            'about.html': 'about', 
            'skills.html': 'skills',
            'education.html': 'education',
            'projects.html': 'projects',
            'contact.html': 'contact'
        };

        return pageMap[page] || 'index';
    }

    updateIndexContent(t) {
        const elements = {
            '.hero-title': { type: 'html', value: t.heroTitle },
            '.hero-subtitle': { type: 'text', value: t.heroSubtitle },
            '.hero-description': { type: 'text', value: t.heroDescription },
            '.hero-buttons a[href="projects.html"]': { type: 'text', value: t.btnProjects },
            '.hero-buttons a[href="about.html"]': { type: 'text', value: t.btnAbout },
            '.info-card:nth-child(1) h3': { type: 'text', value: t.location },
            '.info-card:nth-child(2) h3': { type: 'text', value: t.education },
            '.info-card:nth-child(3) h3': { type: 'text', value: t.experience },
            '.info-card:nth-child(4) h3': { type: 'text', value: t.available },
            '.info-card:nth-child(1) p': { type: 'text', value: t.locationText },
            '.info-card:nth-child(2) p': { type: 'text', value: t.educationText },
            '.info-card:nth-child(3) p': { type: 'text', value: t.experienceText },
            '.info-card:nth-child(4) p': { type: 'text', value: t.availableText }
        };

        this.updateElements(elements);
    }

    updateAboutContent(t) {
        const elements = {
            '.page-title': { type: 'text', value: t.aboutTitle }
        };
        this.updateElements(elements);
    }

    updateSkillsContent(t) {
        const elements = {
            '.page-title': { type: 'text', value: t.skillsTitle }
        };
        this.updateElements(elements);
    }

    updateEducationContent(t) {
        const elements = {
            '.page-title': { type: 'text', value: t.educationTitle }
        };
        this.updateElements(elements);
    }

    updateProjectsContent(t) {
        const elements = {
            '.page-title': { type: 'text', value: t.projectsTitle },
            '.page-subtitle': { type: 'text', value: t.projectsSubtitle }
        };
        this.updateElements(elements);
    }

    updateContactContent(t) {
        const elements = {
            '.page-title': { type: 'text', value: t.contactTitle },
            '.page-subtitle': { type: 'text', value: t.contactSubtitle }
        };
        this.updateElements(elements);
    }

    updateElements(elementsMap) {
        Object.entries(elementsMap).forEach(([selector, config]) => {
            const element = document.querySelector(selector);
            if (element) {
                if (config.type === 'html') {
                    element.innerHTML = config.value;
                } else {
                    element.textContent = config.value;
                }
                console.log(`✅ Actualizado: ${selector}`);
            } else {
                console.log(`❌ No encontrado: ${selector}`);
            }
        });
    }

    updateActiveButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active');
            }
        });
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el sistema de idiomas
    window.languageManager = new LanguageManager();

    // Código existente para barras de habilidades
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
            
            const currentLang = localStorage.getItem('portfolio-language') || 'es';
            
            if (name && email && message) {
                alert(currentLang === 'es' ? '¡Mensaje enviado! Gracias por contactarme.' : 'Message sent! Thank you for contacting me.');
                contactForm.reset();
            } else {
                alert(currentLang === 'es' ? 'Por favor, completa todos los campos requeridos.' : 'Please fill in all required fields.');
            }
        });
    }

    // Debug info
    console.log('🔧 Sistema de idiomas cargado correctamente');
    console.log('🌐 Idioma actual:', localStorage.getItem('portfolio-language') || 'es');
    console.log('🖱️ Botones de idioma encontrados:', document.querySelectorAll('.lang-btn').length);
});
