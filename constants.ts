import { PortfolioData } from './types';

export const DATA: Record<'fr' | 'en', PortfolioData> = {
  fr: {
    header: {
      role: "Étudiant & Développeur Fullstack",
      description: "Développeur passionné alliant programmation (C, Python, Web) et expertise infrastructure. Je conçois des applications performantes avec une attention particulière à l'expérience utilisateur et à la qualité du code.",
      availability: "À la recherche d'une opportunité — Lyon",
    },
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      skills: "Compétences",
      contact: "Contact",
    },
    sectionTitles: {
      experience: "Expérience Professionnelle",
      education: "Formation & Diplômes",
      skills: "Compétences Techniques",
      languages: "Langues",
      contact: "Me Contacter",
    },
    experience: [
      {
        role: "Président (CEO)",
        company: "GTG, Lyon",
        period: "Depuis déc. 2025",
        description: "Pilotage d'un projet web de jeux de rôle en ligne. Développement d'une plateforme interactive et immersive pour connecter les joueurs à distance.",
        logo: "gtg"
      },
      {
        role: "Développeur Front-End",
        company: "WIKI-CAT",
        period: "Depuis nov. 2025",
        description: "Développement et maintenance de l'interface utilisateur. Création d'une expérience responsive et intuitive pour la présentation de contenus documentaires.",
        logo: "wikicat"
      },
      {
        role: "Développeur Front/Back-End",
        company: "QUIZZEO",
        period: "Nov. 2025 — Déc. 2025",
        description: "Conception complète de l'application (Fullstack). Gestion de la logique des quiz, bases de données, et intégration de l'interface utilisateur.",
        logo: "quizzeo"
      },
      {
        role: "Boulanger polyvalent",
        company: "Carrefour",
        period: "Job Étudiant",
        description: "Gestion des stocks et respect des normes. Utilisation et entretien des équipements professionnels, organisation du stock quotidien, accueil client et conseil.",
        logo: "carrefour"
      },
      {
        role: "Cuisinier & Livreur",
        company: "Midnight",
        period: "Job Étudiant",
        description: "Service, rapidité et coordination. Préparation et envoi de commandes, livraison et relation client en direct. Gestion du stress et des priorités.",
        logo: "midnight"
      },
      {
        role: "Mise en rayon (Stage)",
        company: "Bricorama",
        period: "Stage",
        description: "Logistique et travail d'équipe. Réassort et merchandising des rayons. Collaboration avec l'équipe magasin, suivi des livraisons et réapprovisionnement.",
        logo: "bricorama"
      },
    ],
    education: [
      {
        degree: "Bachelor Info & Cybersécurité",
        school: "IPSSI Grande École d'Informatique, Lyon",
        period: "Depuis nov. 2025",
        description: "Formation technique alliant développement et infrastructure réseau.",
        logo: "ipssi"
      },
      {
        degree: "Piscine 42",
        school: "École 42, Charbonnières-les-Bains",
        period: "Sept. 2025 — Oct. 2025",
        description: "Immersion intensive en programmation C et résolution de problèmes algorithmiques.",
        logo: "school42"
      },
      {
        degree: "Baccalauréat Général",
        school: "Lycée Elie Cartan, La Tour du Pin",
        period: "2020 — 2024",
        description: "Spécialités Sciences Politiques, Géopolitique et SES. Mention et niveau approfondi en Anglais.",
        logo: "lycee"
      },
    ],
    skills: [
      {
        title: "Développement",
        skills: ["HTML5 / CSS3", "JavaScript", "Python", "PHP 7", "C", "iOS (Swift)", "PowerShell"],
      },
      {
        title: "Infrastructure & Cloud",
        skills: ["AWS Cloud", "Docker", "Linux (Ubuntu)", "Windows Server", "Active Directory", "Cisco"],
      },
      {
        title: "Outils & Méthodes",
        skills: ["Git / GitHub", "Vim", "MySQL", "VirtualBox", "Teamwork"],
      },
    ],
    languages: [
      { language: "Français", level: "Langue maternelle" },
      { language: "Anglais", level: "Courant / Professionnel" },
    ],
    contact: {
      email: "f.ayaichia@ecole-ipssi.net",
      location: "Lyon, France",
      cta: "Discutons de votre projet",
    },
  },
  en: {
    header: {
      role: "Student & Fullstack Developer",
      description: "Passionate developer combining programming (C, Python, Web) with infrastructure expertise. I build high-performance applications with a strong focus on user experience and code quality.",
      availability: "Open to opportunities — Lyon",
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    sectionTitles: {
      experience: "Work Experience",
      education: "Education",
      skills: "Technical Skills",
      languages: "Languages",
      contact: "Get in Touch",
    },
    experience: [
      {
        role: "President (CEO)",
        company: "GTG, Lyon",
        period: "Since Dec 2025",
        description: "Leading a web-based online role-playing game project. Developing an interactive and immersive platform to connect remote players.",
        logo: "gtg"
      },
      {
        role: "Front-End Developer",
        company: "WIKI-CAT",
        period: "Since Nov 2025",
        description: "Developed and maintained the front-end interface. Created a clear, responsive, and intuitive UX for documentary content presentation.",
        logo: "wikicat"
      },
      {
        role: "Front/Back-End Developer",
        company: "QUIZZEO",
        period: "Nov 2025 — Dec 2025",
        description: "Fullstack design and implementation. Managed user interface, quiz logic, data management, and system integration.",
        logo: "quizzeo"
      },
      {
        role: "Polyvalent Baker",
        company: "Carrefour",
        period: "Student Job",
        description: "Stock management and compliance with standards. Equipment maintenance, daily stock organization, customer service and sales advice.",
        logo: "carrefour"
      },
      {
        role: "Cook & Delivery Driver",
        company: "Midnight",
        period: "Student Job",
        description: "Fast service and coordination. Order preparation, delivery, and direct customer relations. Stress and priority management.",
        logo: "midnight"
      },
      {
        role: "Shelf Stocker (Intern)",
        company: "Bricorama",
        period: "Internship",
        description: "Logistics and teamwork. Restocking, merchandising, collaboration with the store team, and delivery tracking.",
        logo: "bricorama"
      },
    ],
    education: [
      {
        degree: "Bachelor CS & Cybersecurity",
        school: "IPSSI Graduate School of IT, Lyon",
        period: "Since Nov 2025",
        description: "Technical training combining software development and network infrastructure.",
        logo: "ipssi"
      },
      {
        degree: "Piscine 42",
        school: "42 School, Charbonnières-les-Bains",
        period: "Sept 2025 — Oct 2025",
        description: "Intensive immersion in C programming and algorithmic problem solving.",
        logo: "school42"
      },
      {
        degree: "General Baccalaureate",
        school: "Lycée Elie Cartan, La Tour du Pin",
        period: "2020 — 2024",
        description: "Focus on Political Science, Geopolitics, and Economics. Advanced level in English.",
        logo: "lycee"
      },
    ],
    skills: [
      {
        title: "Development",
        skills: ["HTML5 / CSS3", "JavaScript", "Python", "PHP 7", "C", "iOS (Swift)", "PowerShell"],
      },
      {
        title: "Infrastructure & Cloud",
        skills: ["AWS Cloud", "Docker", "Linux (Ubuntu)", "Windows Server", "Active Directory", "Cisco"],
      },
      {
        title: "Tools & Methods",
        skills: ["Git / GitHub", "Vim", "MySQL", "VirtualBox", "Teamwork"],
      },
    ],
    languages: [
      { language: "French", level: "Native" },
      { language: "English", level: "Fluent / Professional" },
    ],
    contact: {
      email: "f.ayaichia@ecole-ipssi.net",
      location: "Lyon, France",
      cta: "Let's discuss your project",
    },
  },
};