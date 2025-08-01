const resumeData = {
  education: [
    {
      id: 1,
      institution: "Lewis University",
      degree: "Bachelor of Science in Computer Science, Artificial Intelligence Concentration",
      period: "Expected 2026",
      location: "Romeoville, IL",
      details: "GPA: 3.87/4.0, Presidential Scholarship Recipient, Dean's List 2023-2025. Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Object-Oriented Programming, Artificial Intelligence, Introduction to Networks"
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Hometown Liquor",
      role: "Freelance Software Engineer",
      period: "May 1, 2025 - July 31, 2025",
      location: "Braceville, IL",
      description: "Developed a complete production-ready e-commerce platform from concept to deployment, transforming a local liquor store's digital presence with modern web technologies and seamless user experience.",
      achievements: [
        "Shipped a mobile-first e-commerce platform for a local liquor store from scratch using React, Firebase, and Tailwind CSS; platform enables real-time browsing, secure ordering, and live inventory updates.",
        "Engineered backend with Firestore handling 750+ products and secure user authentication, order tracking, and inventory management; integrated Algolia for sub-200ms search responses with typo-tolerance, pagination, category filters, and multi-select facets.",
        "Designed and built a feature-rich admin dashboard with comprehensive order management, sales reporting, and inventory controls; built 15+ reusable React components reducing development time by 40%.",
        "Automated product image curation with Python scripts and manual review flow; integrated stock alerting, and review systems for real-time UI updates and notification events."
      ]
    },
  ],

  projects: [
    {
      id: 1,
      company: "Property Pulse (IN-PROGRESS)",
      role: "Personal Project",
      period: "July 2025 - Present",
      location: "Romeoville, IL",
      description: "Real Estate analytics platform to help investors evaluate property ROI, neighborhood trends, and location fit for various investments.",
      achievements: [
        "Engineering a multi-service platform with React frontend, Java Spring Boot, REST API, and Python ML services for real estate investment analysis and property evaluation.",
        "Building secure authentication system using Spring Security with JWT tokens and role-base access control for user management and data protection.",
        "Designing database schema in PostgreSQL for property data, market analytics, and user profiles with optimized queries for financial metrics calculation.",
        "Developing ML pipeline with Python/FastAPI for investment scoring, price prediction, and risk assessment using scikit-learn and market trend analysis"
      ]
    },

    {
      id: 2,
      company: "MasterChef Claude",
      role: "Personal Project",
      period: "April 2025 - May 2025",
      location: "Romeoville, IL",
      description: "AI-Powered Recipe Generator using Claude API, serving 200+ unique recipes to users.",
      achievements: [
        "Built AI-Powered Recipe Generator using Claude API, serving 200+ unique recipes to users with personalized recipe recommendations.",
        "Implemented secure authentication system using Firebase Authentication for secure user registration, login, and managing personalized recipe collections.",
        "Deployed production-ready application using AWS with automated CI/CD pipeline, reducing deployment time by 80%."
      ]
    }
  ],
    
  skills: {
    technical: [
      "Python", "JavaScript", "Java", "HTML/CSS", "SQL", 
      "React", "Node.js", "Express.js", "Tailwind CSS", "Firebase/Firestore", 
      "MongoDB", "PostgreSQL", "Git/GitHub", "Docker", "AWS", "Google Cloud Platform", "Microsoft Azure",
      "REST APIs"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Communication", 
      "Agile Development", "Time Management", "Leadership", "Project Management"
    ]
  }

};

export default resumeData;