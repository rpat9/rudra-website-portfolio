const resumeData = {
  
  education: [
    {
      id: 1,
      institution: "Lewis University",
      degree: "B.S. Computer Science, Artificial Intelligence Concentration",
      period: "Expected May 2026",
      location: "Romeoville, IL",
      achievementDetails: "GPA: 3.9/4.0, Presidential Scholarship Recipient, Dean's List 2023-2025",
      courseworkDetails: "Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Object-Oriented Programming, Artificial Intelligence, Machine Learning"
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
        "Doubled monthly sales to $40,000 by building and deploying a full-stack e-commerce platform for 750+ products using React, Tailwind, and Firebase",
        "Engineered a high-performance Algolia search pipeline, achieving sub-200ms query latency and cutting database load by 30%",
        "Boosted customer conversion by 25% and product discovery by 40% by implementing a search-optimized, mobile-first UX",
        "Automated inventory and order management, eliminating out of stock incidents and reducing manual operations by over 80%",
      ]
    },
  ],

  projects: [
    {
      id: 1,
      company: "Exoviz",
      role: "Personal Project",
      period: "October 2025 - Present",
      location: "Romeoville, IL",
      description: "AI-powered exoplanet exploration platform that transforms NASA's vast planetary database into an interactive, visual experience.",
      achievements: [
        "Architecting a full-stack platform to process and visualize 5,000+ NASA exoplanet records, integrating AI-driven habitability scoring and interactive 3D rendering",
        "Engineering a 3-service backend (Spring Boot, Fast API, Redis) to target a 30% reduction in database load and sub-200ms query times through caching and optimization",
        "Developing a Scikit-learn ML pipeline to classify planet habitability, targeting 85%+ model accuracy for deployment via a dedicated microservice API",
        "Building a Three.js visualization engine designed to sustain 60fps performance using instanced rendering and level-of-detail (LOD) optimizations"
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