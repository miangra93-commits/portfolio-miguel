// js/language.js - Traducciones COMPLETAS para todas las páginas

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
        
        // Página About
        aboutTitle: "Sobre Mí",
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
        
        // Página Skills
        skillsTitle: "Mis Habilidades",
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
        
        // Página Education
        educationTitle: "Mi Formación Académica",
        university: "Ingeniería de Software",
        universityDesc: "Actualmente cursando la carrera de Ingeniería de Software, enfocándome en el desarrollo de aplicaciones y sistemas robustos.",
        universityItem1: "Fundamentos de programación",
        universityItem2: "Estructuras de datos y algoritmos",
        universityItem3: "Desarrollo web",
        universityItem4: "Bases de datos",
        technical: "Técnico en Soldadura",
        technicalDesc: "Formación técnica especializada en procesos de soldadura y fabricación metalmecánica.",
        technicalItem1: "Técnicas de soldadura SMAW, GMAW",
        technicalItem2: "Interpretación de planos",
        technicalItem3: "Seguridad industrial",
        technicalItem4: "Control de calidad",
        highschool: "Bachiller Académico",
        highschoolDesc: "Educación secundaria con énfasis en ciencias y matemáticas.",
        highschoolItem1: "Graduado con honores",
        highschoolItem2: "Participación en proyectos científicos",
        highschoolItem3: "Desarrollo de habilidades investigativas",
        elementary: "Educación Básica Primaria",
        elementaryDesc: "Formación básica primaria donde desarrollé mis primeras habilidades de aprendizaje y socialización.",
        courses: "Cursos y Certificaciones",
        course1: "Desarrollo Web Frontend",
        course1Desc: "HTML5, CSS3, JavaScript",
        course2: "Automatización con Python",
        course2Desc: "Scripting y automatización de procesos",
        course3: "Power BI para Análisis de Datos",
        course3Desc: "Creación de dashboards y reportes",
        course4: "Git y Control de Versiones",
        course4Desc: "Gestión de proyectos con Git/GitHub",
        statusInProgress: "En progreso",
        statusCompleted: "Completado",
        
        // Página Projects
        projectsTitle: "Mis Proyectos",
        projectsSubtitle: "Una muestra de mis trabajos y desarrollos más recientes",
        project1Title: "Sistema de Gestión de Inventarios",
        project1Desc: "Sistema desarrollado en Java para la gestión eficiente de productos, stock y movimientos de inventario en pequeñas y medianas empresas.",
        project1Feature1: "CRUD completo de productos",
        project1Feature2: "Control de entradas y salidas",
        project1Feature3: "Reportes de stock",
        project1Feature4: "Interfaz de consola intuitiva",
        project1Feature5: "Persistencia de datos en archivos",
        project2Title: "Calculadora Interactiva",
        project2Desc: "Calculadora funcional desarrollada con HTML, CSS y JavaScript. Incluye operaciones básicas, diseño responsive, validación de entrada y soporte para teclado.",
        project2Feature1: "Operaciones básicas (+, -, *, /)",
        project2Feature2: "Diseño responsive",
        project2Feature3: "Interfaz moderna y limpia",
        project2Feature4: "Manejo de errores",
        project2Feature5: "Soporte para teclado",
        project3Title: "Sistema de Automatización de Procesos",
        project3Desc: "Suite de scripts y herramientas para automatizar tareas repetitivas en el ámbito laboral, incluyendo generación de reportes y procesamiento de datos.",
        project3Feature1: "Scripts en JavaScript/Node.js",
        project3Feature2: "Macros para Excel",
        project3Feature3: "Generación automática de reportes",
        project3Feature4: "Procesamiento de archivos CSV",
        project3Feature5: "Dashboard de seguimiento",
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
        statusDevelopment: "En desarrollo",
        
        // Página Contact
        contactTitle: "Contáctame",
        contactSubtitle: "¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.",
        contactInfo: "Información de Contacto",
        email: "Email",
        sendEmail: "Enviar email",
        phone: "Teléfono",
        callNow: "Llamar ahora",
        location: "Ubicación",
        remoteWork: "Disponible para trabajo remoto",
        availability: "Disponibilidad",
        availabilityText: "Abierto a oportunidades",
        fullPartTime: "Tiempo completo/Medio tiempo",
        followMe: "Sígueme en:",
        sendMessage: "Envíame un Mensaje",
        fullName: "Nombre Completo *",
        subject: "Asunto *",
        message: "Mensaje *",
        projectType: "Tipo de Proyecto",
        selectOption: "Selecciona una opción",
        webDev: "Desarrollo Web",
        automation: "Automatización",
        consulting: "Consultoría",
        other: "Otro",
        sendMessageBtn: "Enviar Mensaje",
        faq: "Preguntas Frecuentes",
        faq1: "¿Cuál es tu tiempo de respuesta?",
        faq1Answer: "Normalmente respondo dentro de las 24 horas siguientes a la recepción de tu mensaje.",
        faq2: "¿Trabajas de forma remota?",
        faq2Answer: "Sí, estoy acostumbrado a trabajar en entornos remotos y tengo experiencia en colaboración virtual.",
        faq3: "¿Estás disponible para freelance?",
        faq3Answer: "Sí, estoy disponible para proyectos freelance mientras completo mis estudios universitarios.",
        faq4: "¿Qué tecnologías manejas?",
        faq4Answer: "HTML, CSS, JavaScript, Java, Python, y herramientas de automatización como Excel y Power BI."
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
        
        // About Page
        aboutTitle: "About Me",
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
        skillsTitle: "My Skills",
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
        
        // Education Page
        educationTitle: "My Academic Background",
        university: "Software Engineering",
        universityDesc: "Currently pursuing a Software Engineering degree, focusing on developing robust applications and systems.",
        universityItem1: "Programming fundamentals",
        universityItem2: "Data structures and algorithms",
        universityItem3: "Web development",
        universityItem4: "Databases",
        technical: "Welding Technician",
        technicalDesc: "Specialized technical training in welding processes and metalworking fabrication.",
        technicalItem1: "SMAW, GMAW welding techniques",
        technicalItem2: "Blueprint interpretation",
        technicalItem3: "Industrial safety",
        technicalItem4: "Quality control",
        highschool: "Academic High School Diploma",
        highschoolDesc: "Secondary education with emphasis on sciences and mathematics.",
        highschoolItem1: "Graduated with honors",
        highschoolItem2: "Participation in scientific projects",
        highschoolItem3: "Development of research skills",
        elementary: "Elementary Basic Education",
        elementaryDesc: "Basic elementary education where I developed my first learning and socialization skills.",
        courses: "Courses and Certifications",
        course1: "Frontend Web Development",
        course1Desc: "HTML5, CSS3, JavaScript",
        course2: "Automation with Python",
        course2Desc: "Scripting and process automation",
        course3: "Power BI for Data Analysis",
        course3Desc: "Dashboard and report creation",
        course4: "Git and Version Control",
        course4Desc: "Project management with Git/GitHub",
        statusInProgress: "In progress",
        statusCompleted: "Completed",
        
        // Projects Page
        projectsTitle: "My Projects",
        projectsSubtitle: "A showcase of my recent work and developments",
        project1Title: "Inventory Management System",
        project1Desc: "System developed in Java for efficient management of products, stock, and inventory movements in small and medium-sized businesses.",
        project1Feature1: "Complete product CRUD",
        project1Feature2: "Input and output control",
        project1Feature3: "Stock reports",
        project1Feature4: "Intuitive console interface",
        project1Feature5: "Data persistence in files",
        project2Title: "Interactive Calculator",
        project2Desc: "Functional calculator developed with HTML, CSS, and JavaScript. Includes basic operations, responsive design, input validation, and keyboard support.",
        project2Feature1: "Basic operations (+, -, *, /)",
        project2Feature2: "Responsive design",
        project2Feature3: "Modern and clean interface",
        project2Feature4: "Error handling",
        project2Feature5: "Keyboard support",
        project3Title: "Process Automation System",
        project3Desc: "Suite of scripts and tools to automate repetitive tasks in the workplace, including report generation and data processing.",
        project3Feature1: "JavaScript/Node.js scripts",
        project3Feature2: "Excel macros",
        project3Feature3: "Automatic report generation",
        project3Feature4: "CSV file processing",
        project3Feature5: "Tracking dashboard",
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
        statusDevelopment: "In development",
        
        // Contact Page
        contactTitle: "Contact Me",
        contactSubtitle: "Have a project in mind? Let's talk and make it happen.",
        contactInfo: "Contact Information",
        email: "Email",
        sendEmail: "Send email",
        phone: "Phone",
        callNow: "Call now",
        location: "Location",
        remoteWork: "Available for remote work",
        availability: "Availability",
        availabilityText: "Open to opportunities",
        fullPartTime: "Full time/Part time",
        followMe: "Follow me on:",
        sendMessage: "Send me a Message",
        fullName: "Full Name *",
        subject: "Subject *",
        message: "Message *",
        projectType: "Project Type",
        selectOption: "Select an option",
        webDev: "Web Development",
        automation: "Automation",
        consulting: "Consulting",
        other: "Other",
        sendMessageBtn: "Send Message",
        faq: "Frequently Asked Questions",
        faq1: "What is your response time?",
        faq1Answer: "I typically respond within 24 hours of receiving your message.",
        faq2: "Do you work remotely?",
        faq2Answer: "Yes, I'm accustomed to working in remote environments and have experience with virtual collaboration.",
        faq3: "Are you available for freelance work?",
        faq3Answer: "Yes, I'm available for freelance projects while completing my university studies.",
        faq4: "What technologies do you work with?",
        faq4Answer: "HTML, CSS, JavaScript, Java, Python, and automation tools like Excel and Power BI."
    }
};

// Sistema de aplicación de idiomas
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = localStorage.getItem('portfolio-language') || 'es';
    
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-language', lang);
        const t = translations[lang];
        if (!t) return;
        
        console.log('Applying language:', lang);
        
        // Aplicar traducciones según la página actual
        applyTranslationsByPage(t);
        
        // Actualizar botones activos
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${lang}`) btn.classList.add('active');
        });
    }
    
    function applyTranslationsByPage(t) {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        console.log('Current page:', page);
        
        // Aplicar traducciones comunes a todas las páginas
        applyCommonTranslations(t);
        
        // Aplicar traducciones específicas por página
        switch(page) {
            case 'index.html':
                applyIndexTranslations(t);
                break;
            case 'about.html':
                applyAboutTranslations(t);
                break;
            case 'skills.html':
                applySkillsTranslations(t);
                break;
            case 'education.html':
                applyEducationTranslations(t);
                break;
            case 'projects.html':
                applyProjectsTranslations(t);
                break;
            case 'contact.html':
                applyContactTranslations(t);
                break;
        }
    }
    
    function applyCommonTranslations(t) {
        // Navegación
        updateElement('a[href="index.html"]', t.navHome);
        updateElement('a[href="about.html"]', t.navAbout);
        updateElement('a[href="skills.html"]', t.navSkills);
        updateElement('a[href="education.html"]', t.navEducation);
        updateElement('a[href="projects.html"]', t.navProjects);
        
        // Footer
        updateElement('.footer-contact h4', t.contact);
        updateElement('.footer-links h4', t.quickLinks);
        updateElement('.footer-links a[href="index.html"]', t.homeLink);
        updateElement('.footer-links a[href="projects.html"]', t.projectsLink);
        updateElement('.footer-links a[href="about.html"]', t.aboutLink);
        updateElement('.footer-bottom p', `&copy; 2024 Miguel Angel Gracia. ${t.rights}.`, true);
    }
    
    function applyIndexTranslations(t) {
        updateElement('.hero-title', t.heroTitle, true);
        updateElement('.hero-subtitle', t.heroSubtitle);
        updateElement('.hero-description', t.heroDescription);
        updateElement('.hero-buttons a[href="projects.html"]', t.btnProjects);
        updateElement('.hero-buttons a[href="about.html"]', t.btnAbout);
        updateElement('.info-card:nth-child(1) h3', t.location);
        updateElement('.info-card:nth-child(2) h3', t.education);
        updateElement('.info-card:nth-child(3) h3', t.experience);
        updateElement('.info-card:nth-child(4) h3', t.available);
        updateElement('.info-card:nth-child(1) p', t.locationText);
        updateElement('.info-card:nth-child(2) p', t.educationText);
        updateElement('.info-card:nth-child(3) p', t.experienceText);
        updateElement('.info-card:nth-child(4) p', t.availableText);
    }
    
    function applyAboutTranslations(t) {
        updateElement('.page-title', t.aboutTitle);
        updateElement('.text-section:nth-child(1) h2', t.aboutHistory);
        updateElement('.text-section:nth-child(1) p', t.aboutHistoryText);
        updateElement('.text-section:nth-child(2) h2', t.aboutExperience);
        updateElement('.text-section:nth-child(2) p', t.aboutExperienceText);
        updateElement('.text-section:nth-child(3) h2', t.aboutPassion);
        updateElement('.text-section:nth-child(3) p', t.aboutPassionText);
        updateElement('.detail-card:nth-child(1) h3', t.interests);
        updateElement('.detail-card:nth-child(2) h3', t.goals);
        
        // Listas
        updateList('.detail-card:nth-child(1) li', [t.interest1, t.interest2, t.interest3, t.interest4]);
        updateList('.detail-card:nth-child(2) li', [t.goal1, t.goal2, t.goal3, t.goal4]);
    }
    
    function applySkillsTranslations(t) {
        updateElement('.page-title', t.skillsTitle);
        updateElement('.skills-section:nth-child(1) h2', t.technicalSkills);
        updateElement('.skills-category:nth-child(1) h3', t.programmingLanguages);
        updateElement('.skills-category:nth-child(2) h3', t.toolsTechnologies);
        updateElement('.skills-section:nth-child(2) h2', t.softSkills);
        
        // Habilidades blandas
        updateElement('.soft-skill-item:nth-child(1) h4', t.teamwork);
        updateElement('.soft-skill-item:nth-child(1) p', t.teamworkDesc);
        updateElement('.soft-skill-item:nth-child(2) h4', t.problemSolving);
        updateElement('.soft-skill-item:nth-child(2) p', t.problemSolvingDesc);
        updateElement('.soft-skill-item:nth-child(3) h4', t.communication);
        updateElement('.soft-skill-item:nth-child(3) p', t.communicationDesc);
        updateElement('.soft-skill-item:nth-child(4) h4', t.leadership);
        updateElement('.soft-skill-item:nth-child(4) p', t.leadershipDesc);
        updateElement('.soft-skill-item:nth-child(5) h4', t.timeManagement);
        updateElement('.soft-skill-item:nth-child(5) p', t.timeManagementDesc);
        updateElement('.soft-skill-item:nth-child(6) h4', t.adaptability);
        updateElement('.soft-skill-item:nth-child(6) p', t.adaptabilityDesc);
    }
    
    function applyEducationTranslations(t) {
        updateElement('.page-title', t.educationTitle);
        updateElement('.timeline-item:nth-child(1) h3', t.university);
        updateElement('.timeline-item:nth-child(1) p', t.universityDesc);
        updateElement('.timeline-item:nth-child(2) h3', t.technical);
        updateElement('.timeline-item:nth-child(2) p', t.technicalDesc);
        updateElement('.timeline-item:nth-child(3) h3', t.highschool);
        updateElement('.timeline-item:nth-child(3) p', t.highschoolDesc);
        updateElement('.timeline-item:nth-child(4) h3', t.elementary);
        updateElement('.timeline-item:nth-child(4) p', t.elementaryDesc);
        updateElement('.courses-section h2', t.courses);
        
        // Listas de timeline
        updateList('.timeline-item:nth-child(1) li', [t.universityItem1, t.universityItem2, t.universityItem3, t.universityItem4]);
        updateList('.timeline-item:nth-child(2) li', [t.technicalItem1, t.technicalItem2, t.technicalItem3, t.technicalItem4]);
        updateList('.timeline-item:nth-child(3) li', [t.highschoolItem1, t.highschoolItem2, t.highschoolItem3]);
        
        // Cursos
        updateElement('.course-card:nth-child(1) h4', t.course1);
        updateElement('.course-card:nth-child(1) p', t.course1Desc);
        updateElement('.course-card:nth-child(2) h4', t.course2);
        updateElement('.course-card:nth-child(2) p', t.course2Desc);
        updateElement('.course-card:nth-child(3) h4', t.course3);
        updateElement('.course-card:nth-child(3) p', t.course3Desc);
        updateElement('.course-card:nth-child(4) h4', t.course4);
        updateElement('.course-card:nth-child(4) p', t.course4Desc);
        
        // Estados de cursos
        updateCourseStatus(t);
    }
    
    function applyProjectsTranslations(t) {
        updateElement('.page-title', t.projectsTitle);
        updateElement('.page-subtitle', t.projectsSubtitle);
        
        // Proyectos
        updateElement('.project-card:nth-child(1) h3', t.project1Title);
        updateElement('.project-card:nth-child(1) p', t.project1Desc);
        updateElement('.project-card:nth-child(2) h3', t.project2Title);
        updateElement('.project-card:nth-child(2) p', t.project2Desc);
        updateElement('.project-card:nth-child(3) h3', t.project3Title);
        updateElement('.project-card:nth-child(3) p', t.project3Desc);
        
        // Botones
        updateElement('.project-links .btn-secondary', t.viewCode);
        updateElement('.project-links .btn-primary[href="calculadora.html"]', t.tryCalculator);
        updateElement('.project-links .btn-primary:not([href="calculadora.html"])', t.viewDemo);
        
        // Listas de características
        updateList('.project-card:nth-child(1) li', [t.project1Feature1, t.project1Feature2, t.project1Feature3, t.project1Feature4, t.project1Feature5]);
        updateList('.project-card:nth-child(2) li', [t.project2Feature1, t.project2Feature2, t.project2Feature3, t.project2Feature4, t.project2Feature5]);
        updateList('.project-card:nth-child(3) li', [t.project3Feature1, t.project3Feature2, t.project3Feature3, t.project3Feature4, t.project3Feature5]);
        
        // Proyectos futuros
        updateElement('.future-projects h2', t.futureProjects);
        updateElement('.future-card:nth-child(1) h4', t.futureProject1);
        updateElement('.future-card:nth-child(1) p', t.futureProject1Desc);
        updateElement('.future-card:nth-child(2) h4', t.futureProject2);
        updateElement('.future-card:nth-child(2) p', t.futureProject2Desc);
        updateElement('.future-card:nth-child(3) h4', t.futureProject3);
        updateElement('.future-card:nth-child(3) p', t.futureProject3Desc);
        
        updateProjectStatus(t);
    }
    
    function applyContactTranslations(t) {
        updateElement('.page-title', t.contactTitle);
        updateElement('.page-subtitle', t.contactSubtitle);
        updateElement('.contact-info h2', t.contactInfo);
        
        // Información de contacto
        updateElement('.contact-item:nth-child(1) h4', t.email);
        updateElement('.contact-item:nth-child(1) .contact-link', t.sendEmail);
        updateElement('.contact-item:nth-child(2) h4', t.phone);
        updateElement('.contact-item:nth-child(2) .contact-link', t.callNow);
        updateElement('.contact-item:nth-child(3) h4', t.location);
        updateElement('.contact-item:nth-child(3) .contact-link', t.remoteWork);
        updateElement('.contact-item:nth-child(4) h4', t.availability);
        updateElement('.contact-item:nth-child(4) p', t.availabilityText);
        updateElement('.contact-item:nth-child(4) .contact-link', t.fullPartTime);
        
        updateElement('.social-links h3', t.followMe);
        updateElement('.contact-form h2', t.sendMessage);
        
        // Formulario
        updateElement('label[for="name"]', t.fullName);
        updateElement('label[for="email"]', t.email);
        updateElement('label[for="subject"]', t.subject);
        updateElement('label[for="message"]', t.message);
        updateElement('label[for="project-type"]', t.projectType);
        updateElement('#project-type option[value=""]', t.selectOption);
        updateElement('#project-type option[value="web"]', t.webDev);
        updateElement('#project-type option[value="automation"]', t.automation);
        updateElement('#project-type option[value="consulting"]', t.consulting);
        updateElement('#project-type option[value="other"]', t.other);
        updateElement('.btn-full', t.sendMessageBtn);
        
        // FAQ
        updateElement('.faq-section h2', t.faq);
        updateElement('.faq-item:nth-child(1) h4', t.faq1);
        updateElement('.faq-item:nth-child(1) p', t.faq1Answer);
        updateElement('.faq-item:nth-child(2) h4', t.faq2);
        updateElement('.faq-item:nth-child(2) p', t.faq2Answer);
        updateElement('.faq-item:nth-child(3) h4', t.faq3);
        updateElement('.faq-item:nth-child(3) p', t.faq3Answer);
        updateElement('.faq-item:nth-child(4) h4', t.faq4);
        updateElement('.faq-item:nth-child(4) p', t.faq4Answer);
    }
    
    function updateElement(selector, text, isHTML = false) {
        const element = document.querySelector(selector);
        if (element) {
            if (isHTML) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    }
    
    function updateList(selector, items) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            if (items[index]) {
                element.textContent = items[index];
            }
        });
    }
    
    function updateCourseStatus(t) {
        const statusElements = document.querySelectorAll('.course-status');
        statusElements.forEach((element, index) => {
            if (index === 0 || index === 3) {
                element.textContent = t.statusInProgress;
            } else {
                element.textContent = t.statusCompleted;
            }
        });
    }
    
    function updateProjectStatus(t) {
        const statusElements = document.querySelectorAll('.future-card .status');
        statusElements.forEach((element, index) => {
            switch(index) {
                case 0: element.textContent = t.statusPlanning; break;
                case 1: element.textContent = t.statusDesign; break;
                case 2: element.textContent = t.statusDevelopment; break;
            }
        });
    }
    
    // Event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.id === 'lang-es' ? 'es' : 'en';
            applyLanguage(lang);
        });
    });
    
    // Aplicar idioma inicial
    applyLanguage(currentLang);
});
