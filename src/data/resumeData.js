const resumeData = {
  
  education: [
    {
      id: 1,
      institution: "Lewis University",
      degree: "Bachelor of Science in Computer Science, Artificial Intelligence Concentration",
      period: "Expected May 2026",
      location: "Romeoville, IL",
      achievementDetails: "GPA: 3.87/4.0, Presidential Scholarship Recipient, Dean's List 2023-2025",
      courseworkDetails: "Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Object-Oriented Programming, Artificial Intelligence, Machine Learning"
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Hometown Liquor",
      role: "Full-Stack Web Developer",
      period: "May 1, 2025 - July 31, 2025",
      location: "Braceville, IL",
      description: "Developed a complete production-ready e-commerce platform from concept to deployment, transforming a local liquor store's digital presence with modern web technologies and seamless user experience.",
      achievements: [
        "Engineered an e-commerce platform for 750+ products, using React, Tailwind, and Firebase, with mobile-first responsive design and real-time inventory validation",
        "Optimized database performance, leading to a 30% cost reduction, by implementing a pagination system that limits Firebase reads to 25 products per page while maintaining <200ms search performance with Algolia",
        "Enhanced user experience with a search-first UX design and cost-optimized loading, resulting in a 40% improvement in product discovery",
        "Developed a complete order management system using SendGrid email automation for order confirmation and real-time inventory tracking with automated stock alerts",
      ]
    },
  ],

  projects: [
    {
      id: 1,
      company: "Property Pulse",
      role: "Personal Project",
      period: "July 2025 - Present",
      location: "Romeoville, IL",
      description: "Real Estate analytics platform to help investors evaluate property ROI, neighborhood trends, and location fit for various investments.",
      achievements: [
        "Built AI-powered real estate investment platform helping users evaluate properties and make data-driven investment decisions using React/TypeScript, Spring Boot, PostgreSQL, and ML integration",
        "Implemented Spring Security, JWT Authentication and role-based access control across 8+ REST endpoints for property CRUD operations, and market data retrieval",
        "Engineered multi-service architecture supporting microservices deployment, with ML pipeline integration for investment scoring, price prediction, and automated market trend analysis",
        "Created responsive mobile-first interface ensuring optimal user experience across mobile, tablet, and desktop platforms"
      ]
    },

    {
      id: 2,
      company: "QuizMaster",
      role: "Capstone Team Project",
      period: "August 2025 - Present",
      location: "Romeoville, IL",
      description: "Educational quiz platform that allows users to create, publish, and take customizable quizzes with personalized feedback and difficulty levels.",
      achievements: [
        "Led a team of 4 in architectural refactoring of 7000+ line React application, reducing load times from 886ms to 147ms through systematic refactoring performance optimization",
        "Implemented unified design system and state management, reducing complexity by 33% while creating reusable component libraries that accelerated feature development",
        "Built a service layer architecture, migrating business logic from 40+ components, establishing separation of concerns and improving application maintenance"
      ]
    },

    {
      id: 3,
      company: "MasterChef Claude",
      role: "Personal Project",
      period: "April 2025 - May 2025",
      location: "Romeoville, IL",
      description: "AI-Powered Recipe Generator using Claude API, serving 200+ unique recipes to users.",
      achievements: [
        "Built AI-powered recipe platform using Claude API, React, Node.js, delivering custom recipes within 5s of ingredient submission with Firebase authentication and data persistence",
        "Engineered comprehensive input validation with 3-layer error handling using regex patterns and providing real-time user feedback",
        "Simplified deployment with Docker containerization, reducing deployment time by 80% through automated CI/CD pipeline on AWS"
      ]
    }
  ],
    
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    frameworks: ["React", "Node.js", "Express.js", "Tailwind", "Spring Boot", "FastAPI"],
    databases: ["MySQL", "Firestore", "MongoDB", "PostgreSQL", "Supabase"],
    cloud: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions", "CI/CD"],
    tools: ["Git", "Maven", "JWT Authentication", "REST APIs", "Microservices", "Agile", "Containerization", "Event-Driven Architecture"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile Development", "Time Management", "Leadership", "Project Management"]
  }

};

export default resumeData;