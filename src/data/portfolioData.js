export const portfolioData = {
  personalInfo: {
    name: "Yashodha",
    title: "Business Analysis & Technology-Driven Solutions Enthusiast",
    university: "University of Kelaniya, Sri Lanka",
    tagline: "Welcome to my Portfolio",
    shortBio: "I am a second-year BSc (Hons) Management & Information Technology undergraduate at the University of Kelaniya, Sri Lanka. I am interested in understanding business challenges, analyzing requirements, and exploring how technology can be used to create practical solutions. Through academic projects and continuous learning, I am developing my skills in Business Analysis, Information Systems, Project Management, and technology-driven problem solving. I enjoy collaborating with others, learning new concepts, and applying both business and technical perspectives to real-world situations.",
    githubUrl: "https://github.com/yashodha-samarakoon",
    linkedinUrl: "https://www.linkedin.com/in/yashodha-samarakoon-5534143ab/",
    email: "yashodhasamarakoon22@gmail.com",
    cvPath: "/assets/cv.pdf",
    profilePhoto: "/assets/profile.png",
  },

  about: {
    academicBackground: "Undergraduate student pursuing the BSc (Hons) in Management and Information Technology at the University of Kelaniya, Sri Lanka. Combining analytical rigor with technology fundamentals.",
    learningJourney: "Continuously strengthening competencies across systems design, data analysis tools, process modeling, and web technologies.",
    currentlyExploring: [
      {
        title: "Business Analysis",
        desc: "Gathering business requirements, mapping processes, and designing technical solutions."
      },
      {
        title: "Information Systems",
        desc: "Understanding enterprise systems architecture, workflow integration, and software lifecycle."
      },
      {
        title: "Business Process Improvement",
        desc: "Identifying operational inefficiencies and streamlining workflows for higher productivity."
      },
      {
        title: "Data & Business Intelligence",
        desc: "Transforming raw data into actionable insights using visual analytics and tools."
      },
      {
        title: "Operations & Supply Chain",
        desc: "Applying quantitative and qualitative methods to optimize supply operations."
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "Programming & Development",
        skills: [
          { name: "C++", level: "Working Knowledge" },
          { name: "Java", level: "Working Knowledge" },
          { name: "JavaScript", level: "Working Knowledge" },
          { name: "TypeScript", level: "Familiar" }
        ]
      },
      {
        name: "Frameworks & Technologies",
        skills: [
          { name: "React", level: "Working Knowledge" },
          { name: "Node.js", level: "Familiar" },
          { name: "Express", level: "Familiar" }
        ]
      },
      {
        name: "Databases",
        skills: [
          { name: "MySQL", level: "Familiar" },
          { name: "PostgreSQL", level: "Familiar" }
        ]
      },
      {
        name: "Tools & Platforms",
        skills: [
          { name: "Git", level: "Working Knowledge" },
          { name: "GitHub", level: "Working Knowledge" },
          { name: "Jira", level: "Developing" },
          { name: "Power BI", level: "Developing" }
        ]
      },
      {
        name: "Business & Analytical Skills",
        skills: [
          { name: "Business Analysis", level: "Developing" },
          { name: "Requirements Analysis", level: "Developing" },
          { name: "Process Analysis", level: "Developing" },
          { name: "Problem Solving", level: "Developing" },
          { name: "Data Analysis", level: "Developing" },
          { name: "Project Collaboration", level: "Working Knowledge" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "worknest",
      title: "WorkNest / Enterprise Task Management System",
      category: "University Group Project",
      isGroupProject: true,
      status: "Completed",
      shortDescription: "A web-based task management system designed to help users create, organize, assign, and track tasks efficiently. Focuses on task organization and structured collaboration workflows.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Socket.io", "Docker"],
      myContribution: "Frontend",
      keyFeatures: [
        "Task Creation & Assignment",
        "Structured Collaboration Workflows",
        "Real-time Updates with Socket.io",
        "Containerized Deployment with Docker"
      ],
      githubUrl: "https://github.com/yashodha-samarakoon",
      liveDemoUrl: "",
      screenshot: "WorkNest Interface",
      projectLinksNote: "Project links coming soon"
    },
    {
      id: "distribution-agency",
      title: "Distribution Agency Management System",
      category: "Individual University Software Project",
      isGroupProject: false,
      status: "Currently Developing",
      shortDescription: "A web-based management system designed to improve inventory, credit bill, cash, returns, and reporting processes within a distribution agency. The system aims to reduce manual work, improve data accuracy, and provide better visibility into day-to-day operations.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      myContribution: "Full system development including database schema, API design, and inventory/reporting module UI.",
      keyFeatures: [
        "Inventory & Stock Tracking",
        "Credit Bill & Cash Management",
        "Returns & Operations Reporting",
        "Automated Data Accuracy Controls"
      ],
      githubUrl: "https://github.com/yashodha-samarakoon",
      liveDemoUrl: "",
      screenshot: "Distribution Agency System",
      projectLinksNote: "Project links coming soon"
    },
    {
      id: "cocoswift",
      title: "CocoSwift",
      category: "University Project",
      isGroupProject: true,
      status: "Completed",
      shortDescription: "Sustainable coconut-based products combining quality, innovation, and environmental responsibility.",
      technologies: ["Business & Product Design", "Market Research", "Sustainability Frameworks"],
      myContribution: "Marketing and project designing",
      keyFeatures: [
        "Eco-friendly Product Line",
        "Market Feasibility Assessment",
        "Sustainable Packaging Strategy"
      ],
      githubUrl: "",
      liveDemoUrl: "",
      screenshot: "CocoSwift Project Concept"
    }
  ],

  education: {
    university: {
      institution: "University of Kelaniya, Sri Lanka",
      degree: "BSc (Hons) Management and Information Technology",
      duration: "2025 – 2029",
      relevantCoursework: [
        "Business Analysis & Requirements Engineering",
        "Database Management Systems (MySQL & PostgreSQL)",
        "Systems Analysis & Design",
        "Operations & Supply Chain Management"
      ],
      achievements: [
        "Active member of academic modules and team-based software/business solutions."
      ]
    },
    schools: [
      {
        institution: "Rathnawali Balika Vidyalaya, Gampaha",
        qualification: "G.C.E. Advanced Level (A/L)",
        duration: "2021 – 2023"
      },
      {
        institution: "Galahitiyawa Central College",
        qualification: "G.C.E. Ordinary Level (O/L)",
        duration: "2015 – 2020"
      }
    ]
  },

  experience: [
    {
      id: "exp-1",
      title: "Member",
      type: "University Club & Extra-Curricular",
      organization: "LED Club",
      duration: "2026 – Present",
      description: "Participate in club activities, events, and collaborative initiatives. Contribute to team-based activities and organizational initiatives. Continue developing communication, teamwork, leadership, and professional skills.",
      highlights: [
        "Active participation in team-based activities and organizational initiatives.",
        "Developing communication, teamwork, leadership, and professional competencies."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Enterprise Design Thinking Practitioner",
      category: "Certifications",
      organization: "IBM SkillsBuild",
      date: "2026.08.11",
      description: "Strengthened understanding of user-centered design, problem solving, user research, and collaborative innovation.",
      credentialUrl: "https://www.credly.com/badges/6cb8441e-adcd-463a-9b8a-4ffdca12f8ab/linked_in?t=tjl50n"
    },
    {
      id: "cert-2",
      title: "AI Fundamentals Course",
      category: "Certifications",
      organization: "LEARN",
      date: "2026.07.23",
      description: "Gained a solid foundational understanding of AI concepts and their practical real-world applications.",
      credentialUrl: ""
    }
  ]
};
