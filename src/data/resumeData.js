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
        "Delivered production-ready e-commerce platform supporting 750+ products by gathering and translating business requirements into React, Tailwind, and Firebase architecture with mobile-first responsive design and real-time inventory validation",
        "Optimized database performance by 70% cost reduction through an intelligent pagination system limiting Firebase reads to 25 products per page while maintaining sub-200ms search performance via Algolia search",
        "Enhanced user experience by 80% faster product discovery through implementing cost-optimized data loading strategy with search-first UX design enabling instant product location versus sequential browsing",
        "Architected comprehensive admin dashboard with role-based access control using Firestore security rules and order management system featuring SendGrid email automation for order confirmations, inventory tracking, and automated stock alerts with real-time notifications",
        "Delivered seamless multi-device experience across mobile, tablet, and desktop platforms using adaptive layouts, dark/light theme implementation with CSS variables, and touch-optimized interfaces"
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
        "Built full-stack real estate investment platform serving property analysis and financial calculations using React/TypeScript frontend and Spring Boot backend with PostgreSQL database schema supporting complex property relationships",
        "Secured platform with Spring Security authentication using JWT tokens and role-based access control; implemented 8+ REST endpoints for property CRUD operations, user management, and market data retrieval",
        "Engineered multi-service architecture supporting microservices deployment with health monitoring endpoints and ML pipeline integration for investment scoring, price prediction, and automated market trend analysis",
        "Optimized user experience across all device types using responsive CSS Grid and Flexbox with mobile-first principles, ensuring consistent performance on mobile, tablet, and desktop platforms"
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
    languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
    frameworks: ["React", "Node.js", "Express.js", "Tailwind", "Spring Boot", "FastAPI"],
    databases: ["MySQL", "Firestore", "MongoDB", "PostgreSQL", "Supabase"],
    cloud: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions", "CI/CD"],
    tools: ["Git", "Maven", "JWT Authentication", "REST APIs", "Microservices", "Agile", "Containerization", "Event-Driven Architecture"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile Development", "Time Management", "Leadership", "Project Management"]
  }

};

export default resumeData;