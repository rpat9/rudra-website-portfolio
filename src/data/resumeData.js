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
        "Architected and deployed production e-commerce platform using React, Tailwind, and Firebase supporting 750+ products with QR code integration, mobile-first responsive design, and real-time inventory validation for local business",
        "Engineered intelligent pagination system limiting Firebase reads to 25 products per page, reducing database costs by 70% while maintaining sub-200ms search performance through strategic Algolia integration",
        "Implemented cost-optimized data loading strategy with search-first UX design enabling users to find products instantly rather than browsing sequentially, reducing customer product discovery time by 80%",
        "Developed comprehensive admin dashboard with role-based access control using Firestore security rules; architected order management system, inventory tracking, and automated stock alerts with real-time notifications",
        "Designed responsive multi-device experience supporting mobile, tablet, and desktop platforms with adaptive layouts, dark/light theme implementation using CSS variables, and touch-optimized interfaces"
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
        "Developed full-stack real estate platform with React frontend, Spring Boot REST API, and PostgreSQL backend; designed database schema supporting complex property relationships and financial metrics calculations",
        "Built enterprise-grade authentication system using Spring Security with JWT tokens and role-based access control; implemented 8+ RESTful endpoints for property CRUD operations, user management, and market data retrieval",
        "Engineered multi-service architecture supporting microservices deployment with health monitoring endpoints and ML pipeline integration for investment scoring, price prediction, and automated market trend analysis",
        "Designed responsive full-stack architecture with mobile-first principles ensuring consistent user experience across all screen sizes using modern CSS Grid, Flexbox, and component-based design patterns"
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
        "Built AI-powered recipe platform integrating Claude API with React/Node.js architecture; implemented intelligent ingredient validation, recipe saving, and personalized user collections with Firebase Auth and Firestore",
        "Engineered responsive full-stack application with dark/light theme system, markdown rendering capabilities, and real-time progress tracking delivering seamless user experience across all device types",
        "Dockerized multi-container application and deployed on AWS with automated CI/CD pipeline, reducing deployment time by 80%"
      ]
    }
  ],
    
  skills: {
    languages: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL"],
    frameworks: ["React", "Node.js", "Express.js", "Tailwind", "Spring Boot", "FastAPI"],
    databases: ["MySQL", "Firestore", "MongoDB", "PostgreSQL", "Supabase"],
    cloud: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions", "CI/CD"],
    tools: ["Git", "Maven", "JWT Authentication", "REST APIs", "Microservices", "Agile", "Containerization", "Event-Driven Architecture"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile Development", "Time Management", "Leadership", "Project Management"]
  }

};

export default resumeData;