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
        "Optimized search performance and reduced costs by implementing a pagination and caching system with Algolia, maintaining sub-200ms search times while achieving a 30% reduction in database-related operational costs.",
        "Improved customer conversion and product discovery by implementing a search-centric UX design, resulting in a 40% increase in product visibility and a 25% rise in user conversion rates",
        "Automated business operations by developing a real-time order management system, which reduced out-of-stock incidents and enhanced customer satisfaction through automated email confirmations",
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
        "Cut application load times by over 80% from (886ms to 147ms) by leading a 4-person team in a full-scale architectural refactoring of a 7,000-line React codebase",
        "Reduced codebase complexity by 33% by implementing a unified design system and state management, enabling faster and more consistent feature development",
        "Enhanced maintainability and scalability by building a service layer architecture, successfully migrating business logic from 40+ components to establish a clear separation of concerns",
        "Optimized Firebase backend reducing API calls by 83% and dashboard load times by 6x (less than 5s) through query batching and intelligent caching"
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
        "Built AI-powered recipe platform using Claude API, React, Node.js, delivering custom recipes within 5s through optimized prompt engineering and async request handling",
        "Engineered 3-layer error handling with input validation and real-time feedback ensuring reliable AI responses",
        "Simplified deployment with Docker containerization, reducing deployment time by 80% through automated CI/CD pipeline on AWS for faster feature releases"
      ]
    }
  ],
    
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    frameworks: ["React", "Node.js", "Express.js", "Tailwind", "Spring Boot", "FastAPI"],
    databases: ["MySQL", "Firestore", "MongoDB", "PostgreSQL", "Supabase"],
    cloud: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions", "CI/CD"],
    tools: ["Git", "Maven", "JWT Authentication", "REST APIs", "Microservices", "Agile", "Containerization", "Event-Driven Architecture", "Object-Oriented Design"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile Development", "Time Management", "Leadership", "Project Management"]
  }

};
export default resumeData;