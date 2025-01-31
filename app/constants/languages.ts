export const languages = {
  en: {
    changeTheme: "Change theme",
    changeLanguage: "Change language",
    projects: "Main Projects",
    skills: "Skills and Professional Achievements",
    about: "About Me",
    contactMe: "Contact me",
    copyEmail: "Copy Email",
    copied: "Copied!",
    downloadCV: "Download CV",
    viewProject: "View Project",
    viewBackOffice:"View back office",
    sendEmail:"Send an email",
    workSkills:"Work skills",
    workSkillsDescription:"Experience in agile methodologies and teamwork.",
    mainDescription:
      "Passion for designing and creating projects, web applications and development work to facilitate tasks.",
    aboutDescription:
      "Industrial Engineer with experience and programming skills specializing in automation and optimization of industrial and business processes.",
    aboutContent:
      "With over X years of experience in web development, I specialize in creating robust and scalable applications using the latest technologies. My focus is on performance optimization and creating exceptional user experiences.",
  },
  es: {
    changeTheme: "Cambiar tema",
    changeLanguage: "Cambiar idioma",
    projects: "Proyectos principales",
    skills: "Habilidades y Logros Profesionales",
    about: "Sobre Mí",
    contactMe: "Contáctame",
    copyEmail: "Copiar Email",
    copied: "¡Copiado!",
    downloadCV: "Descargar CV",
    viewProject: "Ver Proyecto",
    viewBackOffice:"Ver back office",
    sendEmail:"Enviar email",
    workSkills:"Habilidades en trabajos",
    workSkillsDescription:"Experiencia en métodologias ágiles y trabajo en equipo.",
    mainDescription:
      "Pasion por diseñar y crear proyectos, aplicaciones web y trabajos de desarrollo para facilitar las tareas",
    aboutDescription:
      "Ingeniero Industrial con experiencia y habilidades en programación especializado en la automatización y optimización de procesos industriales y de negocio.",
    aboutContent:
      "Con más de 3 años de experiencia en el desarrollo web, me especializo en crear aplicaciones robustas y escalables utilizando las últimas tecnologías. Mi enfoque se centra en la optimización del rendimiento y la creación de experiencias de usuario excepcionales.",
  },
};

export type Language = keyof typeof languages;
export type TranslationKey = keyof typeof languages.en;
