// ==========================
// Botón de modo claro/oscuro
// ==========================
const toggleBtn = document.getElementById("mode-toggle");

if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("mode", "light");
  } else {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("mode", "dark");
  }
});

// ==========================
// Botón de traducción 🌐
// ==========================
const texts = {
  es: {
    "brand": "MI PORTAFOLIO",
    "menu-sobre": "Sobre mí",
    "menu-habilidades": "Habilidades",
    "menu-proyectos": "Proyectos",
    "menu-testimonios": "Testimonios",
    "menu-intereses": "Intereses",
    "menu-contacto": "Contacto",

    // Hero
    "hero-hola": "¡Hola! Soy Gabriela Lissette Amaya Garay",
    "hero-interes-titulo": "Áreas de interés:",
    "hero-interes": '"Desarrollo Backend y Desarrollo de Apps Móviles"',

    // Sobre mí
    "sobre-titulo": "Sobre mí",
    "sobre-texto": "Soy una persona responsable, puntual, con muchas ganas de progresar, aprendo rápido, capaz de trabajar en equipo. Mi objetivo en la empresa es demostrar mis conocimientos ayudando al funcionamiento de la misma. Y a su vez adquirir nuevas experiencias para seguir formándome tanto personal como laboral.",
    "btn-descargar": "Descargar CV",

    // Habilidades
    "habilidades-titulo": "Habilidades",
    "habilidades-blandas": "Habilidades Blandas",
    "habilidades-duras": "Habilidades Duras",
    "lenguajes-titulo": "Lenguajes de Programación",

    // Habilidades blandas
    "hab-trabajo": "Trabajo en equipo",
    "hab-trabajo-desc": "Capacidad para colaborar de manera efectiva con diferentes personas, aportando ideas y escuchando a los demás.",
    "hab-tiempo": "Gestión del tiempo",
    "hab-tiempo-desc": "Organización y priorización de tareas para cumplir plazos de forma eficiente y sin perder calidad.",
    "hab-aprendizaje": "Aprendizaje continuo",
    "hab-aprendizaje-desc": "Interés constante por adquirir nuevas habilidades y actualizar conocimientos en el área profesional.",
    "hab-responsabilidad": "Responsabilidad",
    "hab-responsabilidad-desc": "Compromiso con los objetivos y cumplimiento de las tareas asignadas con seriedad y disciplina.",
    "hab-creatividad": "Creatividad",
    "hab-creatividad-desc": "Capacidad para generar ideas innovadoras y proponer soluciones originales a los problemas.",

    // Habilidades duras
    "hab-git": "Manejo de Git",
    "hab-git-desc": "Uso de comandos principales para control de versiones, trabajo en ramas y colaboración en proyectos.",
    "hab-android": "Uso de Android Studio",
    "hab-android-desc": "Experiencia en la creación de aplicaciones móviles con Java y XML, incluyendo diseño de interfaces.",
    "hab-planillas": "Elaboración de planillas de pago",
    "hab-planillas-desc": "Realización de planillas de pago con cálculo de comisiones, IVA, ISSS, AFP y renta.",
    "hab-contabilidad": "Registro y contabilización de transacciones financieras",
    "hab-contabilidad-desc": "Capacidad para registrar y clasificar operaciones en comprobantes contables (ingresos, egresos, compras y ventas).",

    // Proyectos
    "proyectos-titulo": "PROYECTOS",
    "proyecto1-titulo": "Adopta a un amigo",
    "proyecto1-desc": "Plataforma web para un refugio de animales, enfocada en promover la adopción responsable de mascotas.",
    "proyecto2-titulo": "Task Planner",
    "proyecto2-desc": "Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo.",
    "proyecto3-titulo": "Artesanías Conchita",
    "proyecto3-desc": "Prototipo de software empresarial que permite llevar el control completo de facturación e inventario de la empresa.",
    "proyecto4-titulo": "Sitio web de Artesanías Conchita",
    "proyecto4-desc": "Sitio web informativo que muestra los productos de la empresa",
    "ver-github": "Ver en GitHub",

    // Testimonios
    "testimonios-titulo": "Testimonios",
    "testimonio1": '"Trabaja con responsabilidad y mantiene una actitud positiva."',
    "testimonio2": '"Muy responsable y cumplida, siempre entrega sus tareas a tiempo."',

    // Intereses
    "intereses-titulo": "Intereses",
    "interes1-titulo": "Desarrollo Móvil",
    "interes1-desc": "Me interesa crear aplicaciones móviles eficientes con Android Studio y explorar nuevas tecnologías móviles.",
    "interes2-titulo": "Manga",
    "interes2-desc": "Disfruto leer novelas ficticias.",
    "interes3-titulo": "Música",
    "interes3-desc": "Me apasiona escuchar y descubrir géneros musicales diversos, lo que me inspira en la creatividad.",
    "interes4-titulo": "Fútbol",
    "interes4-desc": "El deporte que más disfruto practicar y seguir, fomenta el trabajo en equipo y la disciplina.",

    // Contacto
    "contacto-titulo": "Contacto",

    // Footer
    "footer": "© 2025 Gabriela Amaya - Todos los derechos reservados"
  },
  en: {
    "brand": "MY PORTFOLIO",
    "menu-sobre": "About Me",
    "menu-habilidades": "Skills",
    "menu-proyectos": "Projects",
    "menu-testimonios": "Testimonials",
    "menu-intereses": "Interests",
    "menu-contacto": "Contact",

    // Hero
    "hero-hola": "Hi! I'm Gabriela Lissette Amaya Garay",
    "hero-interes-titulo": "Areas of interest:",
    "hero-interes": '"Backend Development and Mobile App Development"',

    // Sobre mí
    "sobre-titulo": "About Me",
    "sobre-texto": "I am a responsible and punctual person, eager to progress, I learn fast, and I can work in a team. My goal in the company is to demonstrate my knowledge by helping its operation. And at the same time acquire new experiences to continue training both personally and professionally.",
    "btn-descargar": "Download CV",

    // Habilidades
    "habilidades-titulo": "Skills",
    "habilidades-blandas": "Soft Skills",
    "habilidades-duras": "Hard Skills",
    "lenguajes-titulo": "Programming Languages",

    // Habilidades blandas
    "hab-trabajo": "Teamwork",
    "hab-trabajo-desc": "Ability to collaborate effectively with different people, contributing ideas and listening to others.",
    "hab-tiempo": "Time Management",
    "hab-tiempo-desc": "Organization and prioritization of tasks to meet deadlines efficiently without losing quality.",
    "hab-aprendizaje": "Continuous Learning",
    "hab-aprendizaje-desc": "Constant interest in acquiring new skills and updating knowledge in the professional area.",
    "hab-responsabilidad": "Responsibility",
    "hab-responsabilidad-desc": "Commitment to objectives and fulfillment of assigned tasks with seriousness and discipline.",
    "hab-creatividad": "Creativity",
    "hab-creatividad-desc": "Ability to generate innovative ideas and propose original solutions to problems.",

    // Habilidades duras
    "hab-git": "Git Management",
    "hab-git-desc": "Use of main commands for version control, branch work and project collaboration.",
    "hab-android": "Android Studio Usage",
    "hab-android-desc": "Experience in creating mobile applications with Java and XML, including interface design.",
    "hab-planillas": "Payroll Preparation",
    "hab-planillas-desc": "Preparation of payroll with calculation of commissions, VAT, ISSS, AFP and income tax.",
    "hab-contabilidad": "Registration and Accounting of Financial Transactions",
    "hab-contabilidad-desc": "Ability to record and classify operations in accounting vouchers (income, expenses, purchases and sales).",

    // Proyectos
    "proyectos-titulo": "PROJECTS",
    "proyecto1-titulo": "Adopt a Friend",
    "proyecto1-desc": "Web platform for an animal shelter, focused on promoting responsible pet adoption.",
    "proyecto2-titulo": "Task Planner",
    "proyecto2-desc": "Mobile application to organize tasks, with local storage and filters for better time management.",
    "proyecto3-titulo": "Artesanías Conchita",
    "proyecto3-desc": "Business software prototype that allows complete control of billing and inventory of the company.",
    "proyecto4-titulo": "Artesanías Conchita Website",
    "proyecto4-desc": "Informative website that showcases the company's products",
    "ver-github": "View on GitHub",

    // Testimonios
    "testimonios-titulo": "Testimonials",
    "testimonio1": '"Works responsibly and maintains a positive attitude."',
    "testimonio2": '"Very responsible and reliable, always delivers her tasks on time."',

    // Intereses
    "intereses-titulo": "Interests",
    "interes1-titulo": "Mobile Development",
    "interes1-desc": "I'm interested in creating efficient mobile applications with Android Studio and exploring new mobile technologies.",
    "interes2-titulo": "Manga",
    "interes2-desc": "I enjoy reading fictional novels.",
    "interes3-titulo": "Music",
    "interes3-desc": "I'm passionate about listening to and discovering diverse musical genres, which inspires me creatively.",
    "interes4-titulo": "Soccer",
    "interes4-desc": "The sport I enjoy practicing and following the most, it promotes teamwork and discipline.",

    // Contacto
    "contacto-titulo": "Contact",

    // Footer
    "footer": "© 2025 Gabriela Amaya - All rights reserved"
  }
};

// Guardar el idioma en localStorage
let currentLang = localStorage.getItem("language") || "es";

// Aplicar traducciones al cargar la página
function applyTranslations(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  // Actualizar el atributo lang del HTML
  document.documentElement.lang = lang;

  // Guardar en localStorage
  localStorage.setItem("language", lang);
}

// Aplicar el idioma guardado al cargar
applyTranslations(currentLang);

// Evento del botón de traducción
document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  applyTranslations(currentLang);
});

// ==========================
// Botón volver arriba (opcional)
// ==========================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
