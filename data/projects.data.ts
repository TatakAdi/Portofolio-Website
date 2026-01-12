import type { Project } from "@/lib/types";
const projects = [
  {
    id: "aura",
    slug: "aura",
    title: "AURA",
    shortDescription:
      "A Capstone Project for university course focusing on automated student assignment assessment using AI-based Large Language Models (LLMs)",
    category: "Academic",
    stage: "Production Ready",
    type: "Capstone Project",
    year: 2025,
    thumbnails: [
      {
        src: "/projects/AuraCapstoneWeb.png",
        type: "web",
      },
      {
        src: "/projects/AuraCapstoneMobile2.png",
        type: "mobile",
      },
    ],
    techStack: ["Laravel", "PostgreSQL", "Flutter"],
    role: "Mobile Developer",
    overview:
      "AURA is an academic capstone project designed to assist lecturers in evaluating student assignment by leveraging AI-based Large Language Models.",
    features: [
      "Automated assignment evaluation",
      "Rubric-based scoring assistance",
      "Lecturer dashboard",
    ],
    challenges: [
      "Designing prompt strategies for consistent assessment",
      "Handling subjective grading criteria",
      "Ensuring scalability for multiple classes",
    ],
    solution: [
      "Prompt engineering with structured rubrics",
      "separation of evaluation logic and UI layer",
      "Optimized backend API design",
    ],
    statusNote:
      "The system is on production-ready. Deployment is pending final hosting setup for institutional access.",
    confidential: false,
  },
  {
    id: "cashi",
    slug: "cashi",
    title: "Cashi Finance App",
    shortDescription:
      "A personal finance application developed as a side project and once for academic purposes, currently undergoing backend architecture refactoring.",

    category: "Personal",
    stage: "MVP Ready",
    completionReason: "Architecture Refactor",
    type: "Mobile & Website Application",
    year: 2025,
    thumbnails: [
      {
        src: "/projects/CashiProjectMobile.jpg",
        type: "mobile",
      },
    ],
    techStack: ["Flutter", "Supabase", "Prisma", "Express", "PostgreSQL"],
    role: "Fullstack Developer",
    statusNote:
      "Mobile MVP completed. Backend system is currently being redesigned. Web frontend is planned but not yet implemented.",
    overview:
      "Cashi is a personal finance tracking application designed to help users manage daily expenses through a simple and intuitive mobile interface",
    features: [
      "Expenses tracking",
      "category-based financial summary",
      "Authentication and user profiles",
    ],
    challenges: [
      "Designing a scalable backend architecture suitable for future feature growth.",
      "Managing authentications and data consistency accross-platforms",
      "Identifying limitations in the initial API design during MVP evaluation.",
    ],
    solution: [
      "Refactoring the backend architecture to improve scalability and maintainability",
      "Redesigning API contracts to better support mobile-first interactions",
      "Separating bussines logic from API routing for cleaner system structure",
    ],
    currentWork: [
      "Refactoring backend architecture for scalability",
      "Redesigning API structured",
      "Planning web frontend implementation",
    ],
    confidential: false,
  },
  {
    id: "kampung_toga",
    slug: "kampung_toga",
    title: "Website Profil Kampung Pangan Berseri Balikpapan",
    shortDescription:
      "A local comunity website designed to promote Kampung Pangan Berseri Balikpapan, its local products, and village identity through a digital platform",
    overview:
      "The Kampung Pangan Berseri Website was develop as a public-facing digital platform to introduce the village, highlight its local products, and support comunity visibility. The system was designed to be production-ready and deployed to a live hosting environment. My primary responsibility focused on backend development, including data management, API integration, and system reliability",
    category: "Academic",
    stage: "Production Ready",
    type: "Website",
    year: 2025,
    thumbnails: [
      {
        src: "/projects/KampungBerseriWeb.png",
        type: "web",
      },
    ],
    techStack: ["React", "PostgreSQL", "TailwindCSS"],
    role: "Backend Developer",
    features: [
      "Dynamic content management for village profiles and product information",
      "Image upload and storage for product and documentation assets",
      "RESTful API for public-facing content delivery",
    ],
    confidential: false,
    challenges: [
      "Designing a backend system flexible enough for non-technical content updates",
      "Ensuring data consistency between public content and administrative input",
      "Impelemnting secure image upload ad storage",
      "First-time integration of Supabase in production environment",
    ],
    solution: [
      "Adopted Supabase for its managed PostgreSQL and integrated object storage.",
      "Utilized Supabase storage to handle image uploads efficiently",
    ],
    statusNote:
      "The website was deployed and production-ready. Frontend status may have evolved since the last maintenance period, as my primary involvement focused on backend development.",
    completionReason: "Production",
  },
] satisfies Project[];

export default projects;
