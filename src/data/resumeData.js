const resumeData = {
  
  education: [
    {
      id: 1,
      institution: "Lewis University",
      degree: "B.S. Computer Science, Artificial Intelligence Concentration",
      period: "Expected May 2026",
      location: "Romeoville, IL",
      achievementDetails: "GPA: 3.9/4.0, Presidential Scholarship Recipient, Dean's List 2023-2025",
      courseworkDetails: "Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Software Engineering, Artificial Intelligence, Machine Learning, Linear Algebra, Discrete Mathematics"
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
        "Raised customer conversion rate by 25% by designing a mobile-first UX with search-optimized product discovery built on indexed queries achieving sub-200ms response times",
        "Achieved 99.9% backend reliability by implementing 35+ RESTful FastAPI endpoints with Supabase PostgreSQL, modular routing, input validation, and automated testing",
        "Reduced database load by 30% by integrating Zustand-based global state management that eliminated redundant API calls and synchronized cart data in real time",
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
        "Led 4-person team in refactoring a 30,000-line production React application, cutting load times by 83% (886ms to 147ms) and reducing codebase complexity by 33%",
        "Optimized Firebase backend reducing API calls by 70% and dashboard load times by 6x (under 5 seconds) through query batching and intelligent caching strategies",
        "Improved scalability by migrating business logic from 40+ components into a modular service layer, accelerating feature development velocity by 40%"
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
        "Built a full-stack platform that visualizes 5,000+ NASA exoplanet records with AI-driven habitability scoring and interactive 3D rendering using Three.js",
        "Designed a 3-service microservices backend using Spring Boot, FastAPI, and Redis to reduce query latency by 70% and improve database efficiency",
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
        "Built an AI-powered recipe platform using Claude API and React that delivers custom recipes within 5 seconds through optimized prompt engineering and asynchronous request handling",
        "Implemented 3-layer error handling with input validation and real-time feedback, ensuring 99% successful API response rate",
        "Simplified deployment with Docker containers and automated CI/CD pipeline on AWS, reducing deployment time by 80%"
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