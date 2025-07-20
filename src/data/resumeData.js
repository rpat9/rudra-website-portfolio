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
      description: "Developed a production-ready e-commerce platform for a local liquor store, enabling real-time product browsing, order placement, and personalized user experiences across mobile and desktop.",
      achievements: [
        "Developed a production-ready e-commerce platform for a local liquor store using React, Firebase, and Tailwind, enabling real-time product browsing, order placement, and personalized user experiences across mobile and desktop.",
        "Engineered backend with Firestore handling 750+ products and secure user authentication, order tracking, and inventory management; integrated Algolia for sub-200ms search responses with typo-tolerance, pagination, and category filters.",
        "Designed and implemented a role-based admin dashboard with comprehensive order management, sales reporting, and inventory control tools; built 15+ reusable React components reducing development time by 40%.",
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
        "Designing full-stack real estate analytics platform to help investors evaluate property ROI, neighborhood trends, and location fit using ML, clustering, and predictive modeling",
        "Implementing FastAPI backend with Python-based ML models (regression, KNN, clustering) and PostgreSQL database for property and ZIP-level data",
        "Developing interactive UI with React and Tailwind to provide visual insights, investment scores, and lifestyle-matched recommendations for users",
        "Deploying via GCP with CI/CD workflows, and RESTful API access for broader integration and external data ingestion"
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