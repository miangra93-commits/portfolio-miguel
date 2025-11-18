// js/script.js - Sistema completo de idiomas MEJORADO

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
        contactSubtitle: "¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.",
        
        // About Page
        aboutHistory: "Mi Historia",
        aboutHistoryText: "Soy Miguel Angel Gracia, un apasionado estudiante de Ingeniería de Software con sede en Bogotá, Colombia. Mi journey en la tecnología comenzó con la curiosidad por automatizar procesos y crear soluciones eficientes.",
        aboutExperience: "Mi Experiencia Actual",
        aboutExperienceText: "Actualmente trabajo como Asociado Logística en SGS Global, donde he tenido la oportunidad de aplicar mis conocimientos técnicos para optimizar procesos mediante scripts en JavaScript, creación de macros en Excel y desarrollo de reportes en Power BI.",
        aboutPassion: "Mi Pasión",
        aboutPassionText: "Creo firmemente en el poder de la tecnología para transformar y mejorar procesos. Mi objetivo es continuar aprendiendo y creciendo en el campo del desarrollo de software, combinando mis habilidades técnicas con mi experiencia práctica en automatización.",
        interests: "Intereses",
        goals: "Metas",
        interest1: "Desarrollo de Software",
        interest2: "Automatización de Procesos",
        interest3: "Inteligencia Artificial", 
        interest4: "Análisis de Datos",
        goal1: "Completar mi Ingeniería de Software",
        goal2: "Especializarme en Desarrollo Backend",
        goal3: "Contribuir a proyectos de código abierto",
        goal4: "Crear soluciones innovadoras",
        
        // Skills Page
        technicalSkills: "Habilidades Técnicas",
        programmingLanguages: "Lenguajes de Programación",
        toolsTechnologies: "Herramientas y Tecnologías",
        softSkills: "Habilidades Blandas",
        teamwork: "Trabajo en Equipo",
        teamworkDesc: "Colaboración efectiva en equipos multidisciplinarios",
        problemSolving: "Resolución de Problemas", 
        problemSolvingDesc: "Análisis y solución eficiente de desafíos técnicos",
        communication: "Comunicación Efectiva",
        communicationDesc: "Claridad en la comunicación técnica y interpersonal",
        leadership: "Liderazgo",
        leadershipDesc: "Capacidad para guiar proyectos y tomar iniciativa",
        timeManagement: "Gestión del Tiempo",
        timeManagementDesc: "Organización eficiente entre trabajo y estudios", 
        adaptability: "Adaptabilidad",
        adaptabilityDesc: "Flexibilidad para aprender nuevas tecnologías",
        
        // Projects Page
        viewCode: "Ver Código",
        tryCalculator: "Probar Calculadora", 
        viewDemo: "Ver Demo",
        futureProjects: "Próximos Proyectos",
        futureProject1: "Chatbot con IA",
        futureProject1Desc: "Chatbot inteligente integrado con APIs de inteligencia artificial para atención al cliente.",
        futureProject2: "App de Tareas", 
        futureProject2Desc: "Aplicación web para gestión de tareas con recordatorios y categorización.",
        futureProject3: "Portfolio Personal",
        futureProject3Desc: "Este mismo sitio web, mejorado continuamente con nuevas características.",
        statusPlanning: "En planeación",
        statusDesign: "En diseño", 
        statusDevelopment: "En desarrollo"
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
        contactSubtitle: "Have a project in mind? Let's talk and make it happen.",
        
        // About Page
        aboutHistory: "My Story",
        aboutHistoryText: "I am Miguel Angel Gracia, a passionate Software Engineering student based in Bogotá, Colombia. My journey in technology began with curiosity about automating processes and creating efficient solutions.",
        aboutExperience: "My Current Experience", 
        aboutExperienceText: "Currently working as a Logistics Associate at SGS Global, where I've had the opportunity to apply my technical knowledge to optimize processes through JavaScript scripts, Excel macros, and Power BI reports.",
        aboutPassion: "My Passion",
        aboutPassionText: "I firmly believe in the power of technology to transform and improve processes. My goal is to continue learning and growing in the field of software development, combining my technical skills with my practical experience in automation.",
        interests: "Interests",
        goals: "Goals", 
        interest1: "Software Development",
        interest2: "Process Automation",
        interest3: "Artificial Intelligence",
        interest4: "Data Analysis",
        goal1: "Complete my Software Engineering degree",
        goal2: "Specialize in Backend Development",
        goal3: "Contribute to open source projects", 
        goal4: "Create innovative solutions",
        
        // Skills Page
        technicalSkills: "Technical Skills",
        programmingLanguages: "Programming Languages",
        toolsTechnologies: "Tools and Technologies",
        softSkills: "Soft Skills", 
        teamwork: "Teamwork",
        teamworkDesc: "Effective collaboration in multidisciplinary teams",
        problemSolving: "Problem Solving",
        problemSolvingDesc: "Efficient analysis and solution of technical challenges",
        communication: "Effective Communication", 
        communicationDesc: "Clarity in technical and interpersonal communication",
        leadership: "Leadership",
        leadershipDesc: "Ability to guide projects and take initiative",
        timeManagement: "Time Management",
        timeManagementDesc: "Efficient organization between work and studies",
        adaptability: "Adaptability", 
        adaptabilityDesc: "Flexibility to learn new technologies",
        
        // Projects Page
        viewCode: "View Code",
        tryCalculator: "Try Calculator",
        viewDemo: "View Demo", 
        futureProjects: "Upcoming Projects",
        futureProject1: "AI Chatbot",
        futureProject1Desc: "Intelligent chatbot integrated with artificial intelligence APIs for customer service.",
        futureProject2: "Task App",
        futureProject2Desc: "Web application for task management with reminders and categorization.", 
        futureProject3: "Personal Portfolio",
        futureProject3Desc: "This same website, continuously improved with new features.",
        statusPlanning: "In planning",
        statusDesign: "In design",
        statusDevelopment: "In development"
    }
};

// ===== SISTEMA MEJORADO DE IDIOMAS =====
let currentLang = localStorage.getItem('language') || 'es';

// Función mejorada para cambiar idioma
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    console.log('🔁 Cambiando idioma a:', lang);
    
    // Actualizar TODOS los elementos de la página
    updateAllContent(lang);
}

// Función para actualizar TODO el contenido
function updateAllContent(lang) {
    const t = translations[lang];
    if (!t) {
        console.error('❌ No se encontraron traducciones para:', lang);
        return;
    }
    
    // 1. Actualizar navegación
    updateNavigation(t);
    
    // 2. Actualizar footer
    updateFooter(t);
    
    // 3. Actualizar contenido específico de cada página
    updatePageSpecificContent(t);
    
    // 4. Actualizar botones de idioma activos
    updateLanguageButtons(lang);
    
    console.log('✅ Idioma cambiado exitosamente a:', lang);
}

// Actualizar navegación
function updateNavigation(t) {
    const navElements = {
        'a[href="index.html"]': t.navHome,
        'a[href="about.html"]': t.navAbout, 
        'a[href="skills.html"]': t.navSkills,
        'a[href="education.html"]': t.navEducation,
        'a[href="projects.html"]': t.navProjects
    };
    
    for (const [selector, text] of Object.entries(navElements)) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
}

// Actualizar footer
function updateFooter(t) {
    const footerElements = {
        '.footer-contact h4': t.contact,
        '.footer-links h4': t.quickLinks,
        '.footer-links a[href="index.html"]': t.homeLink,
        '.footer-links a[href="projects.html"]': t.projectsLink,
        '.footer-links a[href="about.html"]': t.aboutLink
    };
    
    for (const [selector, text] of Object.entries(footerElements)) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
    
    // Derechos de autor
    const rightsElement = document.querySelector('.footer-bottom p');
    if (rightsElement) {
        rightsElement.innerHTML = `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`;
    }
}

// Actualizar contenido específico de cada página
function updatePageSpecificContent(t) {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    console.log('📄 Actualizando página:', page);
    
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
        case 'projects.html':
            updateProjectsContent(t);
            break;
        default:
            updateBasicContent(t, page);
    }
}

// Página principal
function updateIndexContent(t) {
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
    
    updateMultipleElements(elements);
}

// Página About
function updateAboutContent(t) {
    const elements = {
        '.page-title': { type: 'text', value: t.aboutTitle },
        '.text-section:nth-child(1) h2': { type: 'text', value: t.aboutHistory },
        '.text-section:nth-child(1) p': { type: 'text', value: t.aboutHistoryText },
        '.text-section:nth-child(2) h2': { type: 'text', value: t.aboutExperience },
        '.text-section:nth-child(2) p': { type: 'text', value: t.aboutExperienceText },
        '.text-section:nth-child(3) h2': { type: 'text', value: t.aboutPassion },
        '.text-section:nth-child(3) p': { type: 'text', value: t.aboutPassionText },
        '.detail-card:nth-child(1) h3': { type: 'text', value: t.interests },
        '.detail-card:nth-child(2) h3': { type: 'text', value: t.goals }
    };
    
    updateMultipleElements(elements);
    
    // Actualizar listas
    updateListItems('.detail-card:nth-child(1) li', [
        t.interest1, t.interest2, t.interest3, t.interest4
    ]);
    
    updateListItems('.detail-card:nth-child(2) li', [
        t.goal1, t.goal2, t.goal3, t.goal4
    ]);
}

// Página Skills
function updateSkillsContent(t) {
    const elements = {
        '.page-title': { type: 'text', value: t.skillsTitle },
        '.skills-section:nth-child(1) h2': { type: 'text', value: t.technicalSkills },
        '.skills-category:nth-child(1) h3': { type: 'text', value: t.programmingLanguages },
        '.skills-category:nth-child(2) h3': { type: 'text', value: t.toolsTechnologies },
        '.skills-section:nth-child(2) h2': { type: 'text', value: t.softSkills },
        '.soft-skill-item:nth-child(1) h4': { type: 'text', value: t.teamwork },
        '.soft-skill-item:nth-child(1) p': { type: 'text', value: t.teamworkDesc },
        '.soft-skill-item:nth-child(2) h4': { type: 'text', value: t.problemSolving },
        '.soft-skill-item:nth-child(2) p': { type: 'text', value: t.problemSolvingDesc },
        '.soft-skill-item:nth-child(3) h4': { type: 'text', value: t.communication },
        '.soft-skill-item:nth-child(3) p': { type: 'text', value: t.communicationDesc },
        '.soft-skill-item:nth-child(4) h4': { type: 'text', value: t.leadership },
        '.soft-skill-item:nth-child(4) p': { type: 'text', value: t.leadershipDesc },
        '.soft-skill-item:nth-child(5) h4': { type: 'text', value: t.timeManagement },
        '.soft-skill-item:nth-child(5) p': { type: 'text', value: t.timeManagementDesc },
        '.soft-skill-item:nth-child(6) h4': { type: 'text', value: t.adaptability },
        '.soft-skill-item:nth-child(6) p': { type: 'text', value: t.adaptabilityDesc }
    };
    
    updateMultipleElements(elements);
}

// Página Projects
function updateProjectsContent(t) {
    const elements = {
        '.page-title': { type: 'text', value: t.projectsTitle },
        '.page-subtitle': { type: 'text', value: t.projectsSubtitle },
        '.project-links .btn-secondary': { type: 'text', value: t.viewCode },
        '.project-links .btn-primary[href="calculadora.html"]': { type: 'text', value: t.tryCalculator },
        '.project-links .btn-primary:not([href="calculadora.html"])': { type: 'text', value: t.viewDemo },
        '.future-projects h2': { type: 'text', value: t.futureProjects },
        '.future-card:nth-child(1) h4': { type: 'text', value: t.futureProject1 },
        '.future-card:nth-child(1) p': { type: 'text', value: t.futureProject1Desc },
        '.future-card:nth-child(2) h4': { type: 'text', value: t.futureProject2 },
        '.future-card:nth-child(2) p': { type: 'text', value: t.futureProject2Desc },
        '.future-card:nth-child(3) h4': { type: 'text', value: t.futureProject3 },
        '.future-card:nth-child(3) p': { type: 'text', value: t.futureProject3Desc }
    };
    
    updateMultipleElements(elements);
    
    // Actualizar estados de proyectos
    updateProjectStatus(t);
}

// Contenido básico para otras páginas
function updateBasicContent(t, page) {
    const pageTitles = {
        'education.html': t.educationTitle,
        'contact.html': t.contactTitle
    };
    
    const title = pageTitles[page];
    if (title) {
        const titleElement = document.querySelector('.page-title');
        if (titleElement) {
            titleElement.textContent = title;
        }
    }
    
    // Subtítulos
    const pageSubtitles = {
        'contact.html': t.contactSubtitle
    };
    
    const subtitle = pageSubtitles[page];
    if (subtitle) {
        const subtitleElement = document.querySelector('.page-subtitle');
        if (subtitleElement) {
            subtitleElement.textContent = subtitle;
        }
    }
}

// Función auxiliar para actualizar múltiples elementos
function updateMultipleElements(elementsMap) {
    for (const [selector, config] of Object.entries(elementsMap)) {
        const element = document.querySelector(selector);
        if (element) {
            if (config.type === 'html') {
                element.innerHTML = config.value;
            } else {
                element.textContent = config.value;
            }
        }
    }
}

// Función auxiliar para actualizar items de lista
function updateListItems(selector, items) {
    const listItems = document.querySelectorAll(selector);
    listItems.forEach((item, index) => {
        if (items[index]) {
            item.textContent = items[index];
        }
    });
}

// Actualizar estados de proyectos futuros
function updateProjectStatus(t) {
    const statusElements = document.querySelectorAll('.future-card .status');
    statusElements.forEach((element, index) => {
        switch(index) {
            case 0:
                element.textContent = t.statusPlanning;
                break;
            case 1:
                element.textContent = t.statusDesign;
                break;
            case 2:
                element.textContent = t.statusDevelopment;
                break;
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

// ===== INICIALIZACIÓN MEJORADA =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de idiomas iniciado');
    
    // Configurar botones de idioma - MÁS ROBUSTO
    function setupLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        console.log(`🔍 Encontrados ${buttons.length} botones de idioma`);
        
        buttons.forEach(button => {
            // Remover event listeners existentes
            button.replaceWith(button.cloneNode(true));
        });
        
        // Agregar nuevos event listeners
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.id === 'lang-es' ? 'es' : 'en';
                console.log('🖱️ Botón clickeado:', lang);
                changeLanguage(lang);
            });
        });
    }
    
    // Configurar botones
    setupLanguageButtons();
    
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

// Función global para forzar actualización de idioma
window.forceLanguageUpdate = function(lang) {
    changeLanguage(lang);
};
