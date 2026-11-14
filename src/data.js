export const portfolioData = {
    greetings: "Hello,",
    selfTag: "I'm",
    name: "Aishwarya",
    role: "Senior Full-Stack Developer",
    tagline: "Building scalable web applications, leading technical delivery, and evolving toward AI-powered full-stack solutions.",
    about: "Senior Software Developer with 9+ years of experience in software development and web application delivery across banking, manufacturing and e-commerce domains. Experienced in backend development with Node.js, LoopBack and JavaScript, with prior hands-on frontend development using React.js, Redux and modern web technologies. Currently focused on Node.js development, alongside scrum activities, project coordination, junior developers mentoring. Building further capability in Python and FastAPI through a personal full-stack trading application integrating authentication and broker APIs.",
    email: "aishublackpearl@gmail.com",
    phone: "8056354435",
    location: "Hosur, Tamil Nadu",
    socials: [
        { platform: "LinkedIn", url: "www.linkedin.com/in/aishwarya-prasath-68a50b12a" },
        { platform: "GitHub", url: "#" }
    ],
    skills: {
        backendSkills: [
            "Node.js",
            "Express.js",
            "LoopBack",
            "Node-RED",
            "JavaScript (ES6+)",
            "REST API integration",
            "Microservices-based applications"
        ],
        frontendSkills: [
            "React.js",
            "Redux",
            "Redux Saga",
            "React Router",
            "HTML5",
            "CSS3",
            "SASS",
            "Bootstrap",
            "jQuery",
            "TypeScript"
        ],
        databaseSkills: [
            "PostgreSQL",
            "MongoDB",
            "RabbitMQ"
        ],
        toolsAndTesting: [
            "Mocha",
            "Component testing",
            "Postman",
            "Git",
            "GitHub",
            "Bitbucket",
            "JIRA",
            "NPM",
            "Visual Studio Code"
        ],
        emergingSkills: [
            "Python",
            "FastAPI",
            "Streamlit",
            "Supabase",
            "Alpaca API",
            "Agile/Scrum"
        ]
    },
    projects: [
        {
            title: "FinTech Compliance Dashboard",
            description: "A centralized dashboard for monitoring financial transactions and regulatory compliance in real-time.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
            link: "#"
        },
        {
            title: "Global Supply Chain Portal",
            description: "An enterprise portal streamlining logistics tracking across 12 countries, reducing operational delays by 25%.",
            tech: ["React", "Redux", "AWS", "Docker"],
            link: "#"
        },
        {
            title: "Corporate Identity Manager",
            description: "Internal IAM tool managing access provisioning and role-based permissions for over 10,000 employees globally.",
            tech: ["Vue.js", "Express", "PostgreSQL"],
            link: "#"
        }
    ]
};

export const projectData = [
  {
    id: 1,
    title: "AI Trading Platform",
    category: "AI · Full-Stack Development",

    description:
      "A full-stack trading platform designed to analyze market data and support trading workflows.",

    overview:
      "This application combines a React frontend with a Python backend and integrates with trading APIs. The project was built as a portfolio project to demonstrate full-stack architecture, API integration and modern web development.",

    features: [
      "User authentication",
      "Trading dashboard",
      "Portfolio monitoring",
      "Market data analysis",
      "Trading API integration",
      "Responsive React interface",
    ],

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Tailwind CSS",
      "Supabase",
      "Alpaca API",
    ],

    architecture:
      "React frontend communicates with a FastAPI backend. The backend manages business logic and external API integration, while Supabase handles authentication and user-related data.",

    github: "https://github.com/yourusername/first_bot",

    demo: "",
  },

  {
    id: 2,
    title: "Developer Portfolio",
    category: "React · Frontend",

    description:
      "A responsive personal portfolio designed to showcase projects and professional experience.",

    overview:
      "A modern portfolio application built using React and Tailwind CSS with reusable components and responsive design.",

    features: [
      "Responsive design",
      "Reusable React components",
      "Project detail modal",
      "Scroll animations",
    ],

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
    ],

    architecture:
      "A component-based React application with reusable sections and centralized project data.",

    github: "https://github.com/yourusername/myPortfolio",

    demo: "",
  },
];

// export default projectData;