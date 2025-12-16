const resumeData = {
  
  education: [
    {
      id: 1,
      institution: "Lewis University",
      degree: "B.S. Computer Science, Artificial Intelligence Concentration",
      period: "Expected May 2026",
      location: "Romeoville, IL",
      achievementDetails: "GPA: 3.9/4.0, Presidential Scholarship Recipient, Dean's List 2023-2025",
      courseworkDetails: "Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Software Engineering, Artificial Intelligence, Machine Learning, Linear Algebra, Discrete Mathematics, Natural Language Processing"
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
        "Increased monthly revenue by 45% to $40,000 by developing and deploying a full-stack e-commerce platform using React, TypeScript, FastAPI, and PostgreSQL for 750+ products",
        "Boosted customer conversion rate by 25% through mobile-first responsive design and optimized search functionality using PostgreSQL indexed queries achieving sub-200ms response times",
        "Built 85+ RESTful API endpoints with FastAPI achieving 99.9% uptime for critical operations (search, cart, checkout) with transactional integrity and comprehensive unit test coverage",
        "Reduced database load by 30% by implementing Zustand state management to eliminate redundant API calls and secured application with JWT token-based authentication, implementing OAuth 2.0 flows, encrypted password storage, and HTTPS enforcement",
      ]
    },
    {
      id: 2,
      company: "QuizMaster",
      role: "Lead Developer (Capstone)",
      location: "Romeoville, IL",
      period: "Aug. 2025 - Dec. 2025",
      description: "Leading the development of an interactive quiz application designed to enhance learning, give real-time feedback, and track user progress through engaging quizzes and analytics.",
      achievements: [
        "Led 4-person team in refactoring a 30,000-line production React application, reducing dashboard load times by 6x and cutting API calls by 83% through Firebase query batching, caching, and service layer architecture across 65+ components",
        "Cut cloud hosting costs by 37% by migrating 35+ Node.js cloud functions to v20 runtime and implementing caching layer that reduced database reads by 80%",
        "Accelerated feature development velocity by 40% by extracting business logic from 65+ React components into reusable service modules, improving code maintainability and test coverage by 60% "
      ]
    }
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
        "Engineered interactive data exploration tool processing 5,000+ NASA exoplanet records with ML-powered habitability scoring, enabling researchers to filter and visualize planetary characteristics in real-time 3D",
        "Designed a 3-service microservices backend using Spring Boot, FastAPI, and Redis to reduce query latency by 50% and improve database efficiency",
        "Developed an ML classification pipeline using Scikit-learn to predict planet habitability with 82% accuracy, deployed as a standalone microservice",
        "Implemented a Three.js 3D visualization engine achieving 60fps performance through instanced rendering and level-of-detail optimizations"
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
        "Built an AI recipe generator integrating Claude API with React frontend, serving personalized recipes in under 5 seconds through optimized prompt engineering and async request handling for dietary restrictions and ingredient preferences",
        "Implemented 3-layer error handling with input validation and real-time feedback, ensuring 99% successful API response rate",
        "Simplified  deployment with Docker containers and automated CI/CD pipeline on AWS, reducing deployment time by 80%"
      ]
    }
  ],
    
  skills: {
    languages: ["Python", "Java", "JavaScript/TypeScript", "C/C++", "HTML/CSS", "SQL"],
    frameworks: ["React", "Spring Boot", "FastAPI", "Node.js", "Express.js", "Tailwind", "Bootstrap"],
    cloudAndDevops: ["AWS", "GCP", "Azure", "Docker", "CI/CD", "GitHub Actions", "Containerization"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL", "NoSQL"],
    mlAndData: ["Scikit-learn", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Data Visualization"],
    toolsAndConcepts: ["Git", "Agile", "System Design", "Agile Development", "REST APIs", "Microservices", "JWT Authentication", "Object-Oriented Design"]
  }

};
export default resumeData;