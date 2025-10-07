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
    'ver-github': 'Ver en GitHub',
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
    // ================================
    // TRADUCCIONES MARCA PERSONAL
    // ================================
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
    'ver-github': 'View on GitHub',
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
    // ================================
    // TRADUCCIONES MARCA PERSONAL
    // ================================
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
  document.getElementById('lang-label').textContent = lang === 'es' ? 'Español' : 'English';

  // Guardar preferencia en localStorage
  localStorage.setItem('preferredLang', lang);
}

// ================================
// MODO OSCURO/CLARO
// ================================

const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Verificar preferencia guardada
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'false') {
  body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
} else {
  body.classList.remove("light-mode");
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Guardar preferencia
  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem('darkMode', 'false');
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem('darkMode', 'true');
  }
});

// ================================
// FUNCIONES PARA MODALES DE PROYECTOS
// ================================

function openModal(projectId) {
  const modal = document.getElementById(`modal-${projectId}`);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(projectId) {
  const modal = document.getElementById(`modal-${projectId}`);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('DOMContentLoaded', function() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        const projectId = this.id.replace('modal-', '');
        closeModal(projectId);
      }
    });
  });
});

// ================================
// EVENT LISTENERS
// ================================

document.addEventListener('DOMContentLoaded', function() {
  // Botón de cambio de idioma
  document.getElementById('lang-toggle').addEventListener('click', function() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  });

  // Verificar idioma guardado
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang && savedLang !== currentLang) {
    changeLanguage(savedLang);
  }

  // Inicializar botones "Ver más" de proyectos
  initializeProjectButtons();
});

// Función para inicializar botones "Ver más" de proyectos
function initializeProjectButtons() {
  const verMasButtons = document.querySelectorAll('.btn-more');
  
  verMasButtons.forEach(button => {
    // Remover event listeners previos para evitar duplicados
    button.replaceWith(button.cloneNode(true));
  });

  // Re-asignar event listeners a los nuevos botones
  document.querySelectorAll('.btn-more').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.closest('.card').getAttribute('data-project');
      if (projectId) {
        openModal(projectId);
      }
    });
  });
}

// Función para scroll suave
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cerrar modales con la tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      const projectId = modal.id.replace('modal-', '');
      closeModal(projectId);
    });
  }
});