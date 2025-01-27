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
    mainDescription:
      "Passion for designing and creating projects, web applications and development work to facilitate tasks.",
    aboutDescription:
      "Passionate developer with experience in creating innovative web solutions.",
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
    mainDescription:
      "Pasion por diseñar y crear proyectos, aplicaciones web y trabajos de desarrollo para facilitar las tareas",
    aboutDescription:
      "Desarrollador apasionado con experiencia en crear soluciones web innovadoras.",
    aboutContent:
      "Con más de 3 años de experiencia en el desarrollo web, me especializo en crear aplicaciones robustas y escalables utilizando las últimas tecnologías. Mi enfoque se centra en la optimización del rendimiento y la creación de experiencias de usuario excepcionales.",
  },
};

export type Language = keyof typeof languages;
export type TranslationKey = keyof typeof languages.en;
