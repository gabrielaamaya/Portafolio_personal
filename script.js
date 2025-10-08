// ================================
// TRADUCTOR (ESPAÑOL/INGLÉS)
// ================================

const translations = {
  'es': {
    'brand': 'MI PORTAFOLIO',
    'menu-sobre': 'Sobre mí',
    'menu-habilidades': 'Habilidades',
    'menu-proyectos': 'Proyectos',
    'menu-testimonios': 'Testimonios',
    'menu-intereses': 'Intereses',
    'menu-contacto': 'Contacto',
    'hero-hola': '¡Hola! Soy',
    'hero-interes-titulo': 'Áreas de interés:',
    'hero-interes': '"Desarrollo Backend y Desarrollo de Apps Móviles"',
    'sobre-titulo': 'Sobre mí',
    'sobre-texto': 'Soy una persona responsable, puntual, con muchas ganas de progresar, aprendo rápido, capaz de trabajar en equipo. Mi objetivo en la empresa es demostrar mis conocimientos ayudando al funcionamiento de la misma. Y a su vez adquirir nuevas experiencias para seguir formándome tanto personal como laboral.',
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
    'proyecto2-titulo': 'Task Planner',
    'proyecto2-desc': 'Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo.',
    'proyecto3-titulo': 'Artesanías Conchita',
    'proyecto3-desc': 'Prototipo de software empresarial que permite llevar el control completo de facturación e inventario de la empresa.',
    'proyecto4-titulo': 'Sitio web de Artesanías Conchita',
    'proyecto4-desc': 'Sitio web informativo que muestra los productos de la empresa',
    'ver-github': 'VER EN GITHUB',
    'ver-mas': 'Ver más',
    'testimonios-titulo': 'Testimonios',
    'testimonio1': '"Trabaja con responsabilidad y mantiene una actitud positiva."',
    'testimonio2': '"Muy responsable y cumplida, siempre entrega sus tareas a tiempo."',
    'intereses-titulo': 'Intereses',
    'interes1-titulo': 'Desarrollo Móvil',
    'interes1-desc': 'Me interesa crear aplicaciones móviles eficientes con Android Studio y explorar nuevas tecnologías móviles.',
    'interes2-titulo': 'Manga',
    'interes2-desc': 'Disfruto leer novelas ficticias.',
    'interes3-titulo': 'Música',
    'interes3-desc': 'Me apasiona escuchar y descubrir géneros musicales diversos, lo que me inspira en la creatividad.',
    'interes4-titulo': 'Fútbol',
    'interes4-desc': 'El deporte que más disfruto practicar y seguir, fomenta el trabajo en equipo y la disciplina.',
    'contacto-titulo': 'Contacto',
    'footer': '© 2025 Gabriela Amaya - Todos los derechos reservados',
    'marca-titulo': 'Marca Personal',
    'frase-marca': '"Creando soluciones con pasión y precisión"',
    'marca-autor': '- Gabriela Amaya'
  },
  'en': {
    'brand': 'MY PORTFOLIO',
    'menu-sobre': 'About me',
    'menu-habilidades': 'Skills',
    'menu-proyectos': 'Projects',
    'menu-testimonios': 'Testimonials',
    'menu-intereses': 'Interests',
    'menu-contacto': 'Contact',
    'hero-hola': 'Hello! I am',
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
    'proyecto2-titulo': 'Task Planner',
    'proyecto2-desc': 'Mobile application to organize tasks, with local storage and filters for better time management.',
    'proyecto3-titulo': 'Conchita Crafts',
    'proyecto3-desc': 'Business software prototype that allows complete control of company billing and inventory.',
    'proyecto4-titulo': 'Conchita Crafts Website',
    'proyecto4-desc': 'Informative website that displays the company products',
    'ver-github': 'VIEW ON GITHUB',
    'ver-mas': 'View more',
    'testimonios-titulo': 'Testimonials',
    'testimonio1': '"Works with responsibility and maintains a positive attitude."',
    'testimonio2': '"Very responsible and diligent, always delivers her tasks on time."',
    'intereses-titulo': 'Interests',
    'interes1-titulo': 'Mobile Development',
    'interes1-desc': 'I am interested in creating efficient mobile applications with Android Studio and exploring new mobile technologies.',
    'interes2-titulo': 'Manga',
    'interes2-desc': 'I enjoy reading fictional novels.',
    'interes3-titulo': 'Music',
    'interes3-desc': 'I am passionate about listening to and discovering diverse music genres, which inspires my creativity.',
    'interes4-titulo': 'Soccer',
    'interes4-desc': 'The sport I most enjoy practicing and following, promotes teamwork and discipline.',
    'contacto-titulo': 'Contact',
    'footer': '© 2025 Gabriela Amaya - All rights reserved',
    'marca-titulo': 'Personal Brand',
    'frase-marca': '"Creating solutions with passion and precision"',
    'marca-autor': '- Gabriela Amaya'
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
        title: 'Adopta a un amigo',
        description: 'Plataforma web para un refugio de animales, enfocada en promover la adopción responsable de mascotas. Permite a los usuarios ver los animales disponibles, filtrar por características y solicitar adopciones de manera sencilla.',
        features: [
            'Sistema de registro de usuarios',
            'Catálogo de animales disponibles para adopción',
            'Filtros por tipo, tamaño y edad del animal',
            'Formulario de solicitud de adopción',
            'Panel de administración para el refugio'
        ],
        technologies: [
            { name: 'C#', icon: 'fas fa-code', color: '#a179dc' },
            { name: 'ASP.NET', icon: 'fas fa-globe', color: '#512bd4' },
            { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927' },
            { name: 'Entity Framework', icon: 'fas fa-layer-group', color: '#004880' }
        ],
        role: 'Desarrollador Full Stack',
        githubLink: 'https://github.com/gabrielaamaya/progral-2024-semi.git',
        images: [
            'Adoptaaunamigo.jpeg',
            'visual studio.png',
            'adopta-amigo-2.jpg'
        ]
    },
    'task-planner': {
        title: 'Task Planner',
        description: 'Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo. Permite crear, editar y eliminar tareas, establecer prioridades y fechas de vencimiento.',
        features: [
            'Creación y gestión de tareas',
            'Categorización por prioridad',
            'Recordatorios y notificaciones',
            'Sincronización local sin necesidad de conexión a internet',
            'Interfaz intuitiva y fácil de usar'
        ],
        technologies: [
            { name: 'Java', icon: 'fab fa-java', color: '#ed8b00' },
            { name: 'Android Studio', icon: 'fab fa-android', color: '#3ddc84' },
            { name: 'SQLite', icon: 'fas fa-database', color: '#003b57' }
        ],
        role: 'Desarrollador Móvil',
        githubLink: 'https://github.com/gabrielaamaya/Prograll-Semi-2025.git',
        images: [
            'taskplanner.jpeg',
            'task-planner-1.jpg',
            'task-planner-2.jpg'
        ]
    },
    'artesanias-conchita': {
        title: 'Artesanías Conchita',
        description: 'Prototipo de software empresarial que permite llevar el control completo de facturación e inventario de la empresa. Facilita la gestión de productos, clientes, proveedores y ventas.',
        features: [
            'Gestión de inventario y productos',
            'Control de ventas y facturación',
            'Registro de clientes y proveedores',
            'Reportes y estadísticas de ventas',
            'Sistema de usuarios y permisos'
        ],
        technologies: [
            { name: 'C#', icon: 'fas fa-code', color: '#a179dc' },
            { name: 'Windows Forms', icon: 'fab fa-windows', color: '#0078d7' },
            { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927' }
        ],
        role: 'Analista y Desarrollador',
        githubLink: 'https://github.com/gabrielaamaya/Artesanias-Conchitas.git',
        images: [
            'Prototipo de Artesanias Conchita.jpeg',
            'artesanias-1.jpg',
            'artesanias-2.jpg'
        ]
    },
    'artesanias-web': {
        title: 'Sitio web de Artesanías Conchita',
        description: 'Sitio web informativo que muestra los productos de la empresa. Permite a los clientes conocer la historia de la empresa, ver el catálogo de productos y contactar con la empresa.',
        features: [
            'Diseño responsive adaptado a dispositivos móviles',
            'Galería de productos con categorías',
            'Formulario de contacto',
            'Información sobre la empresa y su historia',
            'Integración con redes sociales'
        ],
        technologies: [
            { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
            { name: 'Django', icon: 'fas fa-code', color: '#092e20' },
            { name: 'HTML/CSS/JavaScript', icon: 'fab fa-html5', color: '#e34f26' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' }
        ],
        role: 'Desarrollador Frontend y Backend',
        githubLink: 'https://github.com/gabrielaamaya/Artesanias-Conchita-sitio-web.git',
        images: [
            'Prototipo de Artesanias Conchita.jpeg',
            'artesanias-web-1.jpg',
            'artesanias-web-2.jpg'
        ]
    }
};

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
// FUNCIONALIDAD DEL MODAL
// ================================

let modal = null;
let modalTitle = null;
let modalDescription = null;
let modalFeatures = null;
let modalTechStack = null;
let modalRole = null;
let modalGitHubLink = null;
let modalGallery = null;
let closeModalBtn = null;

// Función para abrir el modal
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    
    if (!project || !modal) return;
    
    // Actualizar contenido del modal
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalRole.textContent = project.role;
    modalGitHubLink.href = project.githubLink;
    
    // Actualizar características
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Actualizar tecnologías
    modalTechStack.innerHTML = '';
    project.technologies.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.innerHTML = `
            <i class="${tech.icon}" style="color: ${tech.color};"></i>
            <span>${tech.name}</span>
        `;
        modalTechStack.appendChild(techItem);
    });
    
    // Actualizar galería de imágenes con estructura 3D
    const galleryContainer = modalGallery.querySelector('.gallery-container');
    const indicatorsContainer = document.getElementById('galleryIndicators');
    
    if (galleryContainer && indicatorsContainer) {
        // Limpiar contenido anterior
        galleryContainer.innerHTML = '';
        indicatorsContainer.innerHTML = '';
        
        // Crear imágenes
        project.images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${project.title} - Imagen ${index + 1}`;
            
            // Asignar clases según posición
            if (index === 0) {
                img.classList.add('active');
            } else if (index === 1) {
                img.classList.add('next');
            } else {
                img.classList.add('hidden');
            }
            
            galleryContainer.appendChild(img);
            
            // Crear indicador
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.onclick = () => goToImage(index);
            indicatorsContainer.appendChild(indicator);
        });
        
        // Actualizar variables globales
        galleryImages = galleryContainer.querySelectorAll('img');
        galleryIndicators = indicatorsContainer.querySelectorAll('.indicator');
        totalImages = project.images.length;
        currentIndex = 0;
    }
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProjectModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
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
    modalTechStack = document.getElementById('modalTechStack');
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

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
});

// Función para scroll suave
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}