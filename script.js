// ================================
// TRADUCTOR (ESPAÑOL/INGLÉS) - MEJORADO
// ================================
const translations = {
    'es': {
        'intereses-titulo': 'Intereses',
        'interes1-titulo': 'Programación',
        'interes1-desc': 'La programación me gusta porque disfruto aprender cómo funcionan las cosas y crear mis propias ideas con código. Cada avance que hago me motiva a seguir practicando y mejorando.',
        'interes2-titulo': 'Manga',
        'interes2-desc': 'Me interesa mucho leer manga porque disfruto las historias, los personajes y los diferentes estilos de dibujo. Es una de mis actividades favoritas para relajarme y pasar un buen rato.',
        'interes3-titulo': 'Música',
        'interes3-desc': 'Leer manga es algo que disfruto mucho porque me encantan las historias, los personajes y los estilos de dibujo. Es una de mis actividades favoritas para relajarme y pasar un buen rato.',
        'interes4-titulo': 'Fútbol',
        'interes4-desc': 'El fútbol es el deporte que más disfruto practicar y seguir, porque me divierte jugarlo, me ayuda a trabajar en equipo y a ser más disciplinada. Además, me encanta apoyar a mis equipos favoritos y vivir la emoción de cada partido.',
        // Otras traducciones existentes...
        'brand': 'MI PORTAFOLIO',
        'menu-sobre': 'Sobre mí',
        'menu-habilidades': 'Habilidades',
        'menu-proyectos': 'Proyectos',
        'menu-testimonios': 'Testimonios',
        'menu-intereses': 'Intereses',
        'menu-contacto': 'Contacto',
        'hero-hola': '¡Hola! Soy Gabriela Lissette Amaya Garay',
        'hero-interes-titulo': 'Áreas de interés:',
        'hero-interes': '"Desarrollo Backend y Desarrollo de Apps Móviles"',
        'sobre-titulo': 'Sobre mí',
        'sobre-texto': 'Soy una persona responsable, puntual, con muchas ganas de progresar, aprendo rápido, capaz de trabajar en equipo. Mi objetivo en la empresa es demostrar mis conocimientos ayudando al funcionamiento de la misma y a su vez adquirir nuevas experiencias para seguir formándome tanto personal como laboral.',
        'btn-descargar': 'Descargar CV',
        'habilidades-titulo': 'Habilidades',
        'habilidades-blandas': 'Habilidades Blandas',
        'habilidades-duras': 'Habilidades Duras',
        'lenguajes-titulo': 'Lenguajes de Programación',
        'hab-trabajo': 'Trabajo en equipo',
        'hab-trabajo-desc': 'Capacidad para colaborar de manera efectiva con diferentes personas, aportando ideas y escuchando a los demás.',
        'hab-tiempo': 'Gestión del tiempo',
        'hab-tiempo-desc': 'Organización y priorización de tareas para cumplir plazos de forma eficiente y sin perder calidad.',
        'hab-aprendizaje': 'Aprendizaje continuo',
        'hab-aprendizaje-desc': 'Interés constante por adquirir nuevas habilidades y actualizar conocimientos en el área profesional.',
        'hab-responsabilidad': 'Responsabilidad',
        'hab-responsabilidad-desc': 'Compromiso con los objetivos y cumplimiento de las tareas asignadas con seriedad y disciplina.',
        'hab-creatividad': 'Creatividad',
        'hab-creatividad-desc': 'Capacidad para generar ideas innovadoras y proponer soluciones originales a los problemas.',
        'hab-git': 'Manejo de Git',
        'hab-git-desc': 'Uso de comandos principales para control de versiones, trabajo en ramas y colaboración en proyectos.',
        'hab-android': 'Uso de Android Studio',
        'hab-android-desc': 'Experiencia en la creación de aplicaciones móviles con Java y XML, incluyendo diseño de interfaces.',
        'hab-planillas': 'Elaboración de planillas de pago',
        'hab-planillas-desc': 'Realización de planillas de pago con cálculo de comisiones, IVA, ISSS, AFP y renta.',
        'hab-contabilidad': 'Registro y contabilización de transacciones financieras',
        'hab-contabilidad-desc': 'Capacidad para registrar y clasificar operaciones en comprobantes contables (ingresos, egresos, compras y ventas).',
        'proyectos-titulo': 'PROYECTOS',
        'proyecto1-titulo': 'Adopta a un amigo',
        'proyecto1-desc': 'Plataforma web para un refugio de animales, enfocada en promover la adopción responsable de mascotas.',
        'proyecto2-titulo': 'Artesanías Conchita',
        'proyecto2-desc': 'Prototipo de software empresarial que permite llevar el control completo de facturación e inventario de la empresa.',
        'proyecto3-titulo': 'Task Planner',
        'proyecto3-desc': 'Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo.',
        'proyecto4-titulo': 'Sitio web de Artesanías Conchita',
        'proyecto4-desc': 'Sitio web informativo que muestra los productos de la empresa',
        'ver-github': 'VER EN GITHUB',
        'ver-mas': 'Ver más',
        'testimonios-titulo': 'Testimonios',
        'testimonio1': '"Trabaja con responsabilidad y mantiene una actitud positiva."',
        'testimonio2': '"Muy responsable y cumplida, siempre entrega sus tareas a tiempo."',
        'testimonio-nombre1': 'Jennifer Boîtes',
        'testimonio-cargo1': 'Estudiante de Técnico',
        'testimonio-nombre2': 'Josue Alejandro Chicas', 
        'testimonio-cargo2': 'Estudiante de Técnico',
        'contacto-titulo': 'Contacto',
        'footer': '© 2025 Gabriela Amaya - Todos los derechos reservados',
        'marca-titulo': 'Marca Personal',
        'frase-marca': '"Con lealtad en el camino, constancia en el esfuerzo y pasión en cada aprendizaje, porque aprender juntos siempre nos lleva más lejos."',
        'marca-autor': '- Gabriela Amaya',
        
        // TRADUCCIONES PARA EL MODAL
        'description': 'Descripción',
        'features': 'Características',
        'technologies-used': 'Tecnologías Utilizadas',
        'programming-languages': 'Lenguajes de Programación',
        'applications': 'Aplicaciones',
        'role-performed': 'Rol Desempeñado',
        'close': 'Cerrar',
        'role-backend': 'Desarrollador Backend',
        'role-quality': 'Gestor de Calidad',
        'tech-languages': 'Lenguajes de Programación',
        'tech-apps': 'Aplicaciones',
        'image': 'Imagen',
        'problem': 'Problema',
        'solution': 'Solución',
        'result': 'Resultado',
        
        // TRADUCCIONES PARA PUBLICACIONES
        'publicaciones-titulo': 'Publicaciones',
        'publicaciones-intro': 'Aquí comparto mis artículos, reflexiones y aprendizajes publicados en LinkedIn.',
        'publicacion1-titulo': 'D.A.R.E',
        'publicacion1-desc': 'Certificado del programa D.A.R.E. otorgado por la Policía Nacional Civil de El Salvador por completar la formación sobre prevención del uso de drogas, tabaco y alcohol.',
        'publicacion2-titulo': '¡Yo... Sí Puedo!',
        'publicacion2-desc': 'Diploma otorgado por una institución educativa nacional en reconocimiento a la labor voluntaria como facilitador en un programa de alfabetización, destacando el apoyo brindado en la enseñanza de lectura y escritura y el compromiso con la educación de adultos.',
        'publicacion3-titulo': 'Speak English',
        'publicacion3-desc': 'Diploma que certifica la participación en el proyecto "Speak English", enfocado en promover el aprendizaje y la práctica del idioma inglés a través de actividades formativas y educativas.',
        'publicacion4-titulo': 'Taller de Manejo de Ansiedad',
        'publicacion4-desc': 'Reconocimiento otorgado por la participación y finalización satisfactoria del Taller de Manejo de Ansiedad, enfocado en el desarrollo de estrategias y técnicas para la gestión emocional y el bienestar psicológico.',
        'publicacion5-titulo': 'CCNA: Introducción a las redes',
        'publicacion5-desc': 'Certificado que acredita la finalización del curso CCNA: Introducción a las redes, orientado al aprendizaje de los fundamentos de redes informáticas, configuración de dispositivos y principios básicos de conectividad dentro del programa Cisco Networking Academy.',
        'leer-mas': 'Ver en LinkedIn'
    },
    'en': {
        'intereses-titulo': 'Interests',
        'interes1-titulo': 'Programming',
        'interes1-desc': 'I enjoy programming because I like learning how things work and creating my own ideas with code. Every little improvement motivates me to keep practicing and getting better.',
        'interes2-titulo': 'Manga',
        'interes2-desc': 'Im really interested in reading manga because I enjoy the stories, the characters, and the different art styles. Its one of my favorite things to do to relax and have a good time.',
        'interes3-titulo': 'Music',
        'interes3-desc': 'Reading manga is something I really enjoy because I love the stories, the characters, and the art styles. It’s one of my favorite activities to relax and have a good time.',
        'interes4-titulo': 'Soccer',
        'interes4-desc': 'Soccer is the sport I enjoy practicing and following the most because I have fun playing it, it helps me with teamwork, and I love supporting my favorite teams.',
        // Otras traducciones existentes...
        'brand': 'MY PORTFOLIO',
        'menu-sobre': 'About me',
        'menu-habilidades': 'Skills',
        'menu-proyectos': 'Projects',
        'menu-testimonios': 'Testimonials',
        'menu-intereses': 'Interests',
        'menu-contacto': 'Contact',
        'hero-hola': 'Hello! I am Gabriela Lissette Amaya Garay',
        'hero-interes-titulo': 'Areas of interest:',
        'hero-interes': '"Backend Development and Mobile App Development"',
        'sobre-titulo': 'About me',
        'sobre-texto': 'I am a responsible, punctual person with a strong desire to progress, I learn quickly, and I am capable of working in a team. My goal in the company is to demonstrate my knowledge by helping its operation. At the same time, I want to acquire new experiences to continue developing both personally and professionally.',
        'btn-descargar': 'Download CV',
        'habilidades-titulo': 'Skills',
        'habilidades-blandas': 'Soft Skills',
        'habilidades-duras': 'Hard Skills',
        'lenguajes-titulo': 'Programming Languages',
        'hab-trabajo': 'Teamwork',
        'hab-trabajo-desc': 'Ability to collaborate effectively with different people, contributing ideas and listening to others.',
        'hab-tiempo': 'Time management',
        'hab-tiempo-desc': 'Organization and prioritization of tasks to meet deadlines efficiently without losing quality.',
        'hab-aprendizaje': 'Continuous learning',
        'hab-aprendizaje-desc': 'Constant interest in acquiring new skills and updating knowledge in the professional field.',
        'hab-responsabilidad': 'Responsibility',
        'hab-responsabilidad-desc': 'Commitment to objectives and fulfillment of assigned tasks with seriousness and discipline.',
        'hab-creatividad': 'Creativity',
        'hab-creatividad-desc': 'Ability to generate innovative ideas and propose original solutions to problems.',
        'hab-git': 'Git Management',
        'hab-git-desc': 'Use of main commands for version control, branch work and project collaboration.',
        'hab-android': 'Android Studio Usage',
        'hab-android-desc': 'Experience in creating mobile applications with Java and XML, including interface design.',
        'hab-planillas': 'Payroll preparation',
        'hab-planillas-desc': 'Preparation of payrolls with calculation of commissions, VAT, ISSS, AFP and income tax.',
        'hab-contabilidad': 'Recording and accounting of financial transactions',
        'hab-contabilidad-desc': 'Ability to record and classify operations in accounting vouchers (income, expenses, purchases and sales).',
        'proyectos-titulo': 'PROJECTS',
        'proyecto1-titulo': 'Adopt a friend',
        'proyecto1-desc': 'Web platform for an animal shelter, focused on promoting responsible pet adoption.',
        'proyecto2-titulo': 'Conchita Crafts',
        'proyecto2-desc': 'Business software prototype that allows complete control of company billing and inventory.',
        'proyecto3-titulo': 'Task Planner',
        'proyecto3-desc': 'Mobile application to organize tasks, with local storage and filters for better time management.',
        'proyecto4-titulo': 'Conchita Crafts Website',
        'proyecto4-desc': 'Informative website that displays the company products',
        'ver-github': 'VIEW ON GITHUB',
        'ver-mas': 'View more',
        'testimonios-titulo': 'Testimonials',
        'testimonio1': '"Works with responsibility and maintains a positive attitude."',
        'testimonio2': '"Very responsible and diligent, always delivers her tasks on time."',
        'testimonio-nombre1': 'Jennifer Boîtes',
        'testimonio-cargo1': 'Engineering Technician Student',
        'testimonio-nombre2': 'Josue Alejandro Chicas',
        'testimonio-cargo2': 'Engineering Technician Student',
        'contacto-titulo': 'Contact',
        'footer': '© 2025 Gabriela Amaya - All rights reserved',
        'marca-titulo': 'Personal Brand',
        'frase-marca': '"With loyalty along the way, perseverance in effort, and passion in every learning process, because learning together always takes us further."',
        'marca-autor': '- Gabriela Amaya',
        
        // TRADUCCIONES PARA EL MODAL
        'description': 'Description',
        'features': 'Features',
        'technologies-used': 'Technologies Used',
        'programming-languages': 'Programming Languages',
        'applications': 'Applications',
        'role-performed': 'Role Performed',
        'close': 'Close',
        'role-backend': 'Backend Developer',
        'role-quality': 'Quality Manager',
        'tech-languages': 'Programming Languages',
        'tech-apps': 'Applications',
        'image': 'Image',
        'problem': 'Problem',
        'solution': 'Solution',
        'result': 'Result',
        
        // TRADUCCIONES PARA PUBLICACIONES
        'publicaciones-titulo': 'Publications',
        'publicaciones-intro': 'Here I share my articles, reflections and learnings published on LinkedIn.',
        'publicacion1-titulo': 'D.A.R.E',
        'publicacion1-desc': 'Certificate from the D.A.R.E. program awarded by the National Civil Police of El Salvador for completing training on prevention of drug, tobacco and alcohol use.',
        'publicacion2-titulo': 'I... Yes I Can!',
        'publicacion2-desc': 'Diploma awarded by a national educational institution in recognition of volunteer work as a facilitator in a literacy program, highlighting the support provided in teaching reading and writing and commitment to adult education.',
        'publicacion3-titulo': 'Speak English',
        'publicacion3-desc': 'Diploma certifying participation in the "Speak English" project, focused on promoting the learning and practice of the English language through training and educational activities.',
        'publicacion4-titulo': 'Anxiety Management Workshop',
        'publicacion4-desc': 'Recognition awarded for participation and satisfactory completion of the Anxiety Management Workshop, focused on developing strategies and techniques for emotional management and psychological well-being.',
        'publicacion5-titulo': 'CCNA: Introduction to Networks',
        'publicacion5-desc': 'Certificate accrediting completion of the CCNA: Introduction to Networks course, oriented to learning the fundamentals of computer networks, device configuration and basic connectivity principles within the Cisco Networking Academy program.',
        'leer-mas': 'View on LinkedIn'
    }
};




let currentLang = 'es';
function changeLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  // Actualizar etiqueta de idioma
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'es' ? 'Español' : 'English';
  }
  // Si hay un modal abierto, actualizar su contenido
  if (modal && modal.style.display === 'block') {
    const activeProject = getActiveProject();
    if (activeProject) {
      updateProjectModal(activeProject);
    }
  }
}
// ================================
// MODO OSCURO/CLARO
// ================================
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;
if (toggleBtn) {
  // Verificar preferencia guardada (sin localStorage)
  const isDarkMode = true; // Por defecto modo oscuro
  if (!isDarkMode) {
    body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    toggleBtn.textContent = "🌙";
  }
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
}
// ================================
// DATOS DE LOS PROYECTOS 
// ================================
const projectsData = {
    'adopta-amigo': {
        title: { 'es': 'Adopta a un amigo', 'en': 'Adopt a friend' },
        modalTitle: { 'es': 'Adopta a un amigo | 2024', 'en': 'Adopt a friend | 2024' },
        description: {
            'es': 'Plataforma web para un refugio de animales, enfocada en promover la adopción responsable de mascotas. Permite a los usuarios ver los animales disponibles, filtrar por características y solicitar adopciones de manera sencilla.',
            'en': 'Web platform for an animal shelter, focused on promoting responsible pet adoption. Allows users to view available animals, filter by characteristics, and request adoptions easily.'
        },
        problem: {
            'es': 'Los refugios de animales enfrentaban dificultades para gestionar las adopciones de manera eficiente, con procesos manuales que generaban demoras y falta de seguimiento en las solicitudes.',
            'en': 'Animal shelters faced difficulties in managing adoptions efficiently, with manual processes that caused delays and lack of follow-up on applications.'
        },
        features: {
            'es': [
                'Sistema de registro de usuarios',
                'Catálogo de animales disponibles para adopción',
                'Filtros por tipo, tamaño y edad del animal',
                'Formulario de solicitud de adopción',
                'Panel de administración para el refugio'
            ],
            'en': [
                'User registration system',
                'Catalog of animals available for adoption',
                'Filters by animal type, size and age',
                'Adoption request form',
                'Administration panel for the shelter'
            ]
        },
        result: {
            'es': 'El sistema permitió aumentar las adopciones, redujo el tiempo de procesamiento de solicitudes y mejoró significativamente la experiencia tanto para los adoptantes como para el personal del refugio.',
            'en': 'The system increased adoptions, reduced application processing time, and significantly improved the experience for both adopters and shelter staff.'
        },
        technologies: [
            { name: 'C#', icon: 'fas fa-code', color: '#a179dc', type: 'language' },
            { name: 'ASP.NET', icon: 'fas fa-globe', color: '#512bd4', type: 'app' },
            { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927', type: 'app' },
            { name: 'Entity Framework', icon: 'fas fa-layer-group', color: '#004880', type: 'app' },
            { name: 'Visual Studio', icon: 'fab fa-microsoft', color: '#5c2d91', type: 'tool' }
        ],
        role: { 'es': 'Desarrollador Backend', 'en': 'Backend Developer' },
        githubLink: 'https://github.com/gabrielaamaya/progral-2024-semi.git',
        images: [
            'Adoptaaunamigo.jpeg',
            'visual studio.png',
            'adopta un amigo-inicio.jpeg',
        ]
    },
    'task-planner': {
        title: { 'es': 'Task Planner', 'en': 'Task Planner' },
        modalTitle: { 'es': 'Task Planner | 2025', 'en': 'Task Planner | 2025' },
        description: {
            'es': 'Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo. Permite crear, editar y eliminar tareas, establecer prioridades y fechas de vencimiento.',
            'en': 'Mobile application to organize tasks, with local storage and filters for better time management. Allows creating, editing and deleting tasks, setting priorities and due dates.'
        },
        problem: {
            'es': 'Muchas personas tienen dificultades para organizar sus tareas diarias, olvidan compromisos importantes y no tienen una forma visual de ver su progreso en la gestión del tiempo.',
            'en': 'Many people struggle to organize their daily tasks, forget important commitments, and lack a visual way to see their progress in time management.'
        },
        features: {
            'es': [
                'Creación y gestión de tareas con fecha y hora límite',
                'Sistema de repetición diaria de tareas',
                'Marcado de tareas como realizadas',
                'Visualización de gráficos de progreso',
                'Organización por grupos de tareas'
            ],
            'en': [
                'Task creation and management with due date and time',
                'Daily task repetition system',
                'Mark tasks as completed',
                'Progress charts visualization',
                'Organization by task groups'
            ]
        },
        result: {
            'es': 'Los usuarios reportaron un aumento en su productividad, mejor organización de sus actividades y reducción del estrés al tener un control visual claro de sus tareas pendientes y realizadas.',
            'en': 'Users reported an increase in their productivity, better organization of their activities, and reduced stress by having clear visual control of their pending and completed tasks.'
        },
        technologies: [
            { name: 'Java', icon: 'fab fa-java', color: '#ed8b00', type: 'language' },
            { name: 'Android Studio', icon: 'fab fa-android', color: '#3ddc84', type: 'app' },
            { name: 'Couchbase', icon: 'fas fa-database', color: '#aa2c26', type: 'database' }
        ],
        role: { 'es': 'Desarrollador Backend', 'en': 'Backend Developer' },
        githubLink: 'https://github.com/gabrielaamaya/Prograll-Semi-2025.git',
        images: [
            'task planner.png',
            'task planner login.jpeg',
            'task planner pantalla principal.jpeg',
            'task planner grafica.jpeg',
            'notificaciones.jpeg'
        ]
    },
    'artesanias-conchita': {
        title: { 'es': 'Artesanías Conchita', 'en': 'Conchita Crafts' },
        modalTitle: { 'es': 'Artesanías Conchita | 2024', 'en': 'Conchita Crafts | 2024' },
        description: {
            'es': 'Prototipo de software empresarial que permite llevar el control completo de facturación e inventario de la empresa. Facilita la gestión de productos, clientes, proveedores y ventas.',
            'en': 'Business software prototype that allows complete control of company billing and inventory. Facilitates product, customer, supplier and sales management.'
        },
        problem: {
            'es': 'La empresa manejaba todos sus procesos de forma manual, lo que generaba errores en el inventario, retrasos en la facturación y dificultades para obtener reportes financieros precisos.',
            'en': 'The company managed all its processes manually, which generated inventory errors, billing delays, and difficulties in obtaining accurate financial reports.'
        },
        features: {
            'es': [
                'Gestión de inventario y productos',
                'Control de ventas y facturación',
                'Registro de clientes y proveedores',
            ],
            'en': [
                'Inventory and product management',
                'Sales and billing control',
                'Customer and supplier registration',
            ]
        },
        result: {
            'es': 'Se redujeron los errores de inventario, se aceleró el proceso de facturación y la empresa pudo acceder a reportes financieros en tiempo real para una mejor toma de decisiones.',
            'en': 'Inventory errors were reduced, the billing process was accelerated, and the company could access real-time financial reports for better decision making.'
        },
        technologies: [
            { name: 'C#', icon: 'fas fa-code', color: '#a179dc', type: 'language' },
            { name: 'ASP.NET', icon: 'fas fa-globe', color: '#512bd4', type: 'app' },
            { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927', type: 'app' },
            { name: 'Entity Framework', icon: 'fas fa-layer-group', color: '#004880', type: 'app' },
             { name: 'Visual Studio', icon: 'fab fa-microsoft', color: '#5c2d91', type: 'tool' }
        ],
        role: { 'es': 'Desarrollador Backend', 'en': 'Backend Developer' },
        githubLink: 'https://github.com/gabrielaamaya/Artesanias-Conchitas.git',
        images: [
            'Prototipo de Artesanias Conchita.jpeg',
            'login-artesania.jpeg',
            'ayuda-artesania.jpeg'
        ]
    },
    'artesanias-web': {
        title: { 'es': 'Sitio web de Artesanías Conchita', 'en': 'Conchita Crafts Website' },
        modalTitle: { 'es': 'Sitio web de Artesanías Conchita | 2025', 'en': 'Conchita Crafts Website | 2025' },
        description: {
            'es': 'Sitio web informativo que muestra los productos de la empresa. Permite a los clientes conocer la historia de la empresa, ver el catálogo de productos y contactar con la empresa.',
            'en': 'Informative website that displays the company products. Allows customers to learn about the company history, view the product catalog and contact the company.'
        },
        problem: {
            'es': 'La empresa carecía de presencia digital, lo que limitaba su alcance a nuevos clientes y dificultaba la comunicación con clientes potenciales interesados en sus productos artesanales.',
            'en': 'The company lacked digital presence, which limited its reach to new customers and made communication with potential customers interested in its craft products difficult.'
        },
        features: {
            'es': [
                'Página informativa de productos artesanales',
                'Diseño atractivo y profesional',
                'Información de contacto y correo',
                'Presentación de catálogo de productos'
            ],
            'en': [
                'Informative page for handicraft products',
                'Attractive and professional design',
                'Contact information and email',
                'Product catalog presentation'
            ]
        },
        result: {
            'es': 'El sitio web incrementó las consultas de clientes, permitió a la empresa expandirse a nuevos mercados y estableció una imagen profesional que aumentó la confianza de los clientes.',
            'en': 'The website increased customer inquiries, allowed the company to expand to new markets, and established a professional image that increased customer trust.'
        },
        technologies: [
            { name: 'Python', icon: 'fab fa-python', color: '#3776ab', type: 'language' },
            { name: 'HTML', icon: 'fab fa-html5', color: '#e34f26', type: 'language' },
            { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572b6', type: 'language' },
            { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e', type: 'language' },
            { name: 'Visual Studio Code', icon: 'fas fa-cube', color: '#007acc', type: 'tool' }
        ],
        role: { 'es': 'Gestor de Calidad', 'en': 'Quality Manager' },
        githubLink: 'https://github.com/gabrielaamaya/Artesanias-Conchita-sitio-web.git',
        images: [
            'Prototipo de Artesanias Conchita.jpeg',
            'sitio web conchita modo claro.jpeg',
            'sitio web conchita modo oscuro.jpeg'
        ]
    } 
};
// ================================
// VARIABLES GLOBALES PARA EL MODAL
// ================================
let modal = null;
let modalTitle = null;
let modalDescription = null;
let modalFeatures = null;
let modalRole = null;
let modalGitHubLink = null;
let modalGallery = null;
let closeModalBtn = null;
// ================================
// FUNCIÓN PARA ACTUALIZAR PROYECTOS EN EL MODAL - CORREGIDA
// ================================
function updateProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (!project || !modal) return;
    
    // Actualizar contenido del modal según el idioma actual
    modalTitle.textContent = project.modalTitle ? project.modalTitle[currentLang] : project.title[currentLang];
    modalDescription.textContent = project.description[currentLang];
    modalRole.textContent = project.role[currentLang];
    modalGitHubLink.href = project.githubLink;
    
    // Actualizar PROBLEMA según el idioma
    const modalProblem = document.getElementById('modalProblem');
    if (modalProblem && project.problem) {
        modalProblem.textContent = project.problem[currentLang];
    }
    
    // Actualizar CARACTERÍSTICAS según el idioma
    modalFeatures.innerHTML = '';
    project.features[currentLang].forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Actualizar RESULTADO según el idioma
    const modalResult = document.getElementById('modalResult');
    if (modalResult && project.result) {
        modalResult.textContent = project.result[currentLang];
    }
    
    // Actualizar tecnologías - Separar lenguajes y aplicaciones
    const modalTechLanguages = document.getElementById('modalTechLanguages');
    const modalTechApps = document.getElementById('modalTechApps');
    
    if (modalTechLanguages && modalTechApps) {
        modalTechLanguages.innerHTML = '';
        modalTechApps.innerHTML = '';
        
        // Actualizar subtítulos según el idioma
        const languagesSubtitle = document.querySelector('.tech-subtitle[data-lang="programming-languages"]');
        const appsSubtitle = document.querySelector('.tech-subtitle[data-lang="applications"]');
        
        if (languagesSubtitle) {
            languagesSubtitle.textContent = translations[currentLang]['programming-languages'];
        }
        if (appsSubtitle) {
            appsSubtitle.textContent = translations[currentLang]['applications'];
        }
        
        project.technologies.forEach(tech => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';
            techItem.innerHTML = `
                <i class="${tech.icon}" style="color: ${tech.color};"></i>
                <span>${tech.name}</span>
            `;
            
            // Clasificar en lenguajes o aplicaciones
            if (tech.type === 'language') {
                modalTechLanguages.appendChild(techItem);
            } else {
                modalTechApps.appendChild(techItem);
            }
        });
    }
    
    // Actualizar galería de imágenes
    const galleryContainer = modalGallery.querySelector('.gallery-container');
    const indicatorsContainer = document.getElementById('galleryIndicators');
    
    if (galleryContainer && indicatorsContainer) {
        galleryContainer.innerHTML = '';
        indicatorsContainer.innerHTML = '';
        
        project.images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${project.title[currentLang]} - ${translations[currentLang]['image']} ${index + 1}`;
            
            if (index === 0) {
                img.classList.add('active');
            } else if (index === 1) {
                img.classList.add('next');
            } else {
                img.classList.add('hidden');
            }
            
            galleryContainer.appendChild(img);
            
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.onclick = () => goToImage(index);
            indicatorsContainer.appendChild(indicator);
        });
        
        galleryImages = galleryContainer.querySelectorAll('img');
        galleryIndicators = indicatorsContainer.querySelectorAll('.indicator');
        totalImages = project.images.length;
        currentIndex = 0;
    }
}
// ================================
// GALERÍA 3D - VARIABLES GLOBALES
// ================================
let currentIndex = 0;
let totalImages = 0;
let galleryImages = [];
let galleryIndicators = [];
// ================================
// FUNCIONES DE GALERÍA 3D
// ================================
function updateGallery() {
  galleryImages.forEach((img, index) => {
    img.classList.remove('active', 'prev', 'next', 'hidden');
    
    if (index === currentIndex) {
      img.classList.add('active');
    } else if (index === (currentIndex - 1 + totalImages) % totalImages) {
      img.classList.add('prev');
    } else if (index === (currentIndex + 1) % totalImages) {
      img.classList.add('next');
    } else {
      img.classList.add('hidden');
    }
  });
  
  galleryIndicators.forEach((ind, index) => {
    ind.classList.toggle('active', index === currentIndex);
  });
}
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateGallery();
}
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateGallery();
}
function goToImage(index) {
  currentIndex = index;
  updateGallery();
}
// ================================
// FUNCIONALIDAD DEL MODAL DE PROYECTOS
// ================================
// Función para obtener el proyecto activo
function getActiveProject() {
    const activeCard = document.querySelector('.card.active');
    return activeCard ? activeCard.getAttribute('data-project') : null;
}
// Función para abrir el modal
function openProjectModal(projectId) {
    // Marcar el proyecto como activo
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('data-project') === projectId) {
            card.classList.add('active');
        }
    });
    
    updateProjectModal(projectId);
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
// Función para cerrar el modal
function closeProjectModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Remover clase activa
        const activeCard = document.querySelector('.card.active');
        if (activeCard) {
            activeCard.classList.remove('active');
        }
    }
}
// ================================
// MODAL PARA VISUALIZACIÓN DE IMÁGENES EN GRANDE
// ================================
let imageModal = null;
let modalImage = null;
let modalCaption = null;
let currentImageIndex = 0;
let currentProjectImages = [];
// Inicializar modal de imágenes
function initImageModal() {
    // Crear elementos del modal si no existen
    if (!document.getElementById('imageModal')) {
        const modalHTML = `
            <div id="imageModal" class="image-modal">
                <div class="image-modal-content">
                    <span class="image-close">&times;</span>
                    <div class="image-modal-body">
                        <img id="modalImage" src="" alt="">
                        <div class="image-caption">
                            <span id="modalCaption"></span>
                            <span id="imageCounter"></span>
                        </div>
                    </div>
                    <button class="image-nav image-prev">&#10094;</button>
                    <button class="image-nav image-next">&#10095;</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    imageModal = document.getElementById('imageModal');
    modalImage = document.getElementById('modalImage');
    modalCaption = document.getElementById('modalCaption');
    
    // Event listeners para el modal de imágenes
    document.querySelector('.image-close').addEventListener('click', closeImageModal);
    document.querySelector('.image-prev').addEventListener('click', showPrevImage);
    document.querySelector('.image-next').addEventListener('click', showNextImage);
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
}
// Abrir modal de imagen
function openImageModal(imageSrc, caption, projectImages, startIndex = 0) {
    if (!imageModal) initImageModal();
    
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    currentProjectImages = projectImages;
    currentImageIndex = startIndex;
    
    updateImageCounter();
    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
// Cerrar modal de imagen
function closeImageModal() {
    if (imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentProjectImages = [];
        currentImageIndex = 0;
    }
}
// Mostrar imagen anterior
function showPrevImage() {
    if (currentProjectImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    const project = getActiveProject();
    const projectData = projectsData[project];
    
    modalImage.src = currentProjectImages[currentImageIndex];
    modalCaption.textContent = `${projectData.title[currentLang]} - ${translations[currentLang]['image']} ${currentImageIndex + 1}`;
    updateImageCounter();
}
// Mostrar siguiente imagen
function showNextImage() {
    if (currentProjectImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
    const project = getActiveProject();
    const projectData = projectsData[project];
    
    modalImage.src = currentProjectImages[currentImageIndex];
    modalCaption.textContent = `${projectData.title[currentLang]} - ${translations[currentLang]['image']} ${currentImageIndex + 1}`;
    updateImageCounter();
}
// Actualizar contador de imágenes
function updateImageCounter() {
    const imageCounter = document.getElementById('imageCounter');
    if (imageCounter && currentProjectImages.length > 0) {
        imageCounter.textContent = `${currentImageIndex + 1} / ${currentProjectImages.length}`;
    }
}
// Agregar event listeners a las imágenes de la galería
function initGalleryImageClicks() {
    document.addEventListener('click', function(e) {
        // Verificar si se hizo clic en una imagen de la galería
        const galleryImg = e.target.closest('.gallery-container img');
        if (galleryImg && modal && modal.style.display === 'block') {
            const galleryContainer = galleryImg.closest('.gallery-container');
            const images = Array.from(galleryContainer.querySelectorAll('img'));
            const imageIndex = images.indexOf(galleryImg);
            const project = getActiveProject();
            const projectData = projectsData[project];
            
            if (projectData && projectData.images) {
                openImageModal(
                    galleryImg.src,
                    `${projectData.title[currentLang]} - ${translations[currentLang]['image']} ${imageIndex + 1}`,
                    projectData.images,
                    imageIndex
                );
            }
        }
    });
}
// Función para ampliar imagen al hacer clic del logotipo 
function initImagenAmpliada() {
    const logoImg = document.querySelector('.logo-img');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    if (logoImg) {
        logoImg.addEventListener('click', function() {
            // Crear copia de la imagen para vista ampliada
            const imagenGrande = this.cloneNode();
            imagenGrande.className = 'imagen-grande';
            
            // Mostrar overlay
            overlay.style.display = 'block';
            
            // Agregar imagen ampliada al body
            document.body.appendChild(imagenGrande);
            
            // Funciones para cerrar
            function cerrarImagen() {
                if (document.body.contains(imagenGrande)) {
                    document.body.removeChild(imagenGrande);
                }
                overlay.style.display = 'none';
            }
            
            // Event listeners para cerrar
            imagenGrande.addEventListener('click', cerrarImagen);
            overlay.addEventListener('click', cerrarImagen);
            
            // Cerrar con tecla ESC
            document.addEventListener('keydown', function cerrarConTecla(e) {
                if (e.key === 'Escape') {
                    cerrarImagen();
                    document.removeEventListener('keydown', cerrarConTecla);
                }
            });
        });
    }
}
// ================================
// INICIALIZACIÓN
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar elementos del DOM
    modal = document.getElementById('projectModal');
    modalTitle = document.getElementById('modalTitle');
    modalDescription = document.getElementById('modalDescription');
    modalFeatures = document.getElementById('modalFeatures');
    modalRole = document.getElementById('modalRole');
    modalGitHubLink = document.getElementById('modalGitHubLink');
    modalGallery = document.getElementById('modalGallery');
    closeModalBtn = document.querySelector('.close-modal');
    // Event listener para cerrar modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    // Event listeners para botones "Ver más"
    const verMasButtons = document.querySelectorAll('.btn-more');
    verMasButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            if (card) {
                const projectId = card.getAttribute('data-project');
                if (projectId) {
                    openProjectModal(projectId);
                }
            }
        });
    });
    // Botón de cambio de idioma
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
    // Event listeners para controles de galería
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    // Inicializar modal de imágenes
    initImageModal();
    
    // Inicializar clics en imágenes de galería
    initGalleryImageClicks();
    // Inicializar imagen ampliada del logo
    initImagenAmpliada();
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (imageModal && imageModal.style.display === 'block') {
                closeImageModal();
            } else if (modal && modal.style.display === 'block') {
                closeProjectModal();
            }
        }
    });
    // Inicializar traducciones
    changeLanguage('es');
});
// Función para scroll suave
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Carrusel infinito sin espacio vacío -->

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const cards = document.querySelectorAll(".slider-track .card");
  const prevBtn = document.querySelector(".publi-btn.prev");
  const nextBtn = document.querySelector(".publi-btn.next");

  let index = 0;
  const total = cards.length;
  const gap = 32; // coincide con el gap del CSS
  let cardWidth = cards[0].offsetWidth + gap;
  let isTransitioning = false;

  // Clonar primera y última tarjeta
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[total - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);

  // Ajustar ancho del track
  track.style.width = `${(total + 2) * cardWidth}px`;

  // Posición inicial (mostrando la primera tarjeta real)
  let position = -cardWidth;
  track.style.transform = `translateX(${position}px)`;

  // Función para moverse
  function moveToSlide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    if (direction === "next") {
      index++;
      position -= cardWidth;
    } else {
      index--;
      position += cardWidth;
    }

    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(${position}px)`;

    track.addEventListener("transitionend", () => {
      // Si pasa del último (vuelve sin dejar espacio)
      if (index === total) {
        track.style.transition = "none";
        index = 0;
        position = -cardWidth;
        track.style.transform = `translateX(${position}px)`;
      }

      // Si pasa antes del primero
      if (index === -1) {
        track.style.transition = "none";
        index = total - 1;
        position = -cardWidth * total;
        track.style.transform = `translateX(${position}px)`;
      }

      isTransitioning = false;
    }, { once: true });
  }

  nextBtn.addEventListener("click", () => moveToSlide("next"));
  prevBtn.addEventListener("click", () => moveToSlide("prev"));

  // Ajustar automáticamente al cambiar tamaño de pantalla
  window.addEventListener("resize", () => {
    cardWidth = cards[0].offsetWidth + gap;
    position = -(index + 1) * cardWidth;
    track.style.transition = "none";
    track.style.transform = `translateX(${position}px)`;
    track.style.width = `${(total + 2) * cardWidth}px`;
  });
});

// Abrir enlaces de linkeden en publicaciones
 document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', e => {
      const link = btn.getAttribute('href');
      if (link && link.startsWith('https://')) {
        window.open(link, '_blank');
      }
    });
  });




   // ====== 🟢 AMPLIAR IMAGEN AL CLIC ======    de publicaciones
  document.querySelectorAll('#publicaciones .card .imgBx img').forEach(img => {
    img.addEventListener('click', () => {
      const popup = document.getElementById('imagePopup');
      const popupImg = document.getElementById('popupImg');
      popupImg.src = img.src;
      popup.classList.add('active');
    });
  });

  // ====== 🔴 CERRAR LA VENTANA ======
  document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('imagePopup').classList.remove('active');
  });

  // Cerrar si se hace clic fuera de la imagen
  document.getElementById('imagePopup').addEventListener('click', (e) => {
    if (e.target.id === 'imagePopup') {
      document.getElementById('imagePopup').classList.remove('active');
    }
  });


  






  // ====== 🟢 NAVEGACIÓN ENTRE IMÁGENES EN EL POPUP ======
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('imagePopup');
  const popupImg = document.getElementById('popupImg');
  const closePopup = document.getElementById('closePopup');
  const prevBtn = document.getElementById('prevImg');
  const nextBtn = document.getElementById('nextImg');
  
  // Obtener todas las imágenes de las publicaciones
  const allImages = Array.from(document.querySelectorAll('#publicaciones .card .imgBx img'));
  let currentImageIndex = 0;

  // Función para abrir el popup con una imagen específica
  function openPopup(imgElement) {
    currentImageIndex = allImages.indexOf(imgElement);
    popupImg.src = imgElement.src;
    popup.classList.add('active');
    updateNavigationButtons();
  }

  // Función para navegar a la imagen anterior
  function showPrevImage() {
    if (allImages.length === 0) return;
    
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = allImages.length - 1; // Volver al final
    }
    
    popupImg.src = allImages[currentImageIndex].src;
    updateNavigationButtons();
  }

  // Función para navegar a la siguiente imagen
  function showNextImage() {
    if (allImages.length === 0) return;
    
    currentImageIndex++;
    if (currentImageIndex >= allImages.length) {
      currentImageIndex = 0; // Volver al inicio
    }
    
    popupImg.src = allImages[currentImageIndex].src;
    updateNavigationButtons();
  }

  // Función para actualizar el estado de los botones de navegación
  function updateNavigationButtons() {
    // Puedes agregar lógica aquí si quieres ocultar botones en los extremos
    // Por ejemplo, deshabilitar botones cuando solo hay una imagen
    if (allImages.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    }
  }

  // Event listeners para las imágenes
  allImages.forEach((img, index) => {
    img.addEventListener('click', () => openPopup(img));
  });

  // Event listeners para los botones de navegación
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar que el clic cierre el popup
    showPrevImage();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar que el clic cierre el popup
    showNextImage();
  });

  // Cerrar popup
  closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  // Cerrar si se hace clic fuera de la imagen
  popup.addEventListener('click', (e) => {
    if (e.target.id === 'imagePopup') {
      popup.classList.remove('active');
    }
  });

  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (popup.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'Escape') {
        popup.classList.remove('active');
      }
    }
  });

  // Inicializar estado de los botones
  updateNavigationButtons();
});





/*dplomas carrusel*/

/* Carrusel de diplomas: responsive, autoplay, swipe */
(function () {
  const carousel = document.querySelector('.diplomas-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  let currentIndex = 0;
  let slidesPerView = calculateSlidesPerView();
  let autoplayInterval = 4000;
  let autoplayTimer = null;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  // Build dots
  function buildDots() {
    dotsContainer.innerHTML = '';
    const pages = Math.max(1, Math.ceil(slides.length / slidesPerView));
    for (let i = 0; i < pages; i++) {
      const btn = document.createElement('button');
      btn.setAttribute('aria-label', `Ir a página ${i + 1}`);
      btn.addEventListener('click', () => { goToIndex(i * slidesPerView); });
      dotsContainer.appendChild(btn);
    }
  }

  function updateDots() {
    const buttons = Array.from(dotsContainer.children);
    const page = Math.floor(currentIndex / slidesPerView);
    buttons.forEach((b, i) => b.classList.toggle('active', i === page));
  }

  function calculateSlidesPerView() {
    const w = window.innerWidth;
    if (w >= 1000) return 3;
    if (w >= 700) return 2;
    return 1;
  }

  function setTrackPosition() {
    const slide = slides[0];
    if (!slide) return;
    const slideWidth = slide.getBoundingClientRect().width;
    const offset = currentIndex * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  function goToIndex(index) {
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    currentIndex = Math.min(maxIndex, Math.max(0, index));
    setTrackPosition();
    updateDots();
    resetAutoplay();
  }

  prevBtn.addEventListener('click', () => goToIndex(currentIndex - slidesPerView));
  nextBtn.addEventListener('click', () => goToIndex(currentIndex + slidesPerView));

  /* AUTOPLAY */
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      if (currentIndex >= maxIndex) {
        goToIndex(0);
      } else {
        goToIndex(currentIndex + slidesPerView);
      }
    }, autoplayInterval);
  }
  function stopAutoplay() { if (autoplayTimer) clearInterval(autoplayTimer); autoplayTimer = null; }
  function resetAutoplay() { stopAutoplay(); startAutoplay(); }

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', startAutoplay);

  /* TOUCH DRAG */
  slides.forEach((slide) => {
    slide.addEventListener('touchstart', touchStart());
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
    slide.addEventListener('mousedown', touchStart());
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);

    const img = slide.querySelector('img');
    if (img) img.addEventListener('dragstart', (e) => e.preventDefault());
  });

  function touchStart() {
    return function (event) {
      isDragging = true;
      startX = getX(event);
      prevTranslate = currentTranslate;
    };
  }

  function touchMove(event) {
    if (!isDragging) return;
  }

  function touchEnd(event) {
    if (!isDragging) return;
    isDragging = false;
    const dx = getX(event) - startX;
    const threshold = 50;
    if (dx > threshold) {
      goToIndex(currentIndex - slidesPerView);
    } else if (dx < -threshold) {
      goToIndex(currentIndex + slidesPerView);
    }
  }

  function getX(event) {
    return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
  }

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToIndex(currentIndex - slidesPerView);
    if (e.key === 'ArrowRight') goToIndex(currentIndex + slidesPerView);
  });

  window.addEventListener('resize', () => {
    slidesPerView = calculateSlidesPerView();
    buildDots();
    setTrackPosition();
    updateDots();
  });

  // ===============================
  //    MODAL CON FLECHAS INTERNAS
  // ===============================
  const imgModal = document.getElementById("img-modal");
  const imgModalContent = document.getElementById("img-modal-content");
  const imgModalClose = document.querySelector(".img-modal-close");
  const modalPrev = document.querySelector(".img-modal-prev");
  const modalNext = document.querySelector(".img-modal-next");

  let modalIndex = 0;

  // Abrir modal al hacer clic
  slides.forEach((slide, i) => {
    const img = slide.querySelector("img");
    if (!img) return;

    img.addEventListener("click", () => {
      modalIndex = i;
      showModalImage();
      imgModal.style.display = "flex";
    });
  });

  function showModalImage() {
    imgModalContent.src = slides[modalIndex].querySelector("img").src;
  }

  // Flecha siguiente (loop infinito)
  modalNext.addEventListener("click", () => {
    modalIndex = (modalIndex + 1) % slides.length;
    showModalImage();
  });

  // Flecha anterior (loop infinito)
  modalPrev.addEventListener("click", () => {
    modalIndex = (modalIndex - 1 + slides.length) % slides.length;
    showModalImage();
  });

  imgModalClose.addEventListener("click", () => {
    imgModal.style.display = "none";
  });

  imgModal.addEventListener("click", (e) => {
    if (e.target === imgModal) imgModal.style.display = "none";
  });

  // Init
  function init() {
    slidesPerView = calculateSlidesPerView();
    buildDots();
    updateDots();
    setTrackPosition();
    startAutoplay();
  }

  init();
})();
