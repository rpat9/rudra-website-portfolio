const resumeData = {
  education: [
    {
      id: 1,
      institution: "Lewis University",
      degree: "Bachelor of Science in Computer Science",
      period: "Expected May, 2026",
      location: "Romeoville, IL",
      details: "Coursework: Software Engineering, Database Systems, Object Oriented Programming, Artificial Intelligence, Data Structures and Algorithms"
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Hometown-Liquors (Current)",
      role: "Personal Project",
      period: "May 2025 - Present",
      location: "Romeoville, IL",
      description: "A Full-Stack web application built for a local liquor store that scales the business online with a user-friendly UI.",
      achievements: [
        "Developing a mobile-first e-commerce platform using React, Tailwind CSS, and Firebase/Firestore to support my local liquor store business.",
        "Integrating QR codes in person allowing customers to access exclusive promotions, track order history, and receive targeted offers through personalized user accounts.",
        "Building an admin dashboard to track product analytics and automate customer notifications for low stock and restocks, enabling data-driven decision-making and business scalability.",
        "Containerizing the app with Docker for deployment on AWS for scalable and constant release workflows."
      ]
    },

    {
      id: 2,
      company: "MasterChef Claude",
      role: "Personal Project",
      period: "April 2025 - Present",
      location: "Romeoville, IL",
      description: "React and Tailwind-based app that utilizes Claude API to send a list of ingredients and receive a recipe which is recommended to the user.",
      achievements: [
        "Built a responsive recipe suggestion web app using React, JavaScript, and Tailwind CSS, integrating ClaudeAPI for dynamic recipe generation.",
        "Implemented user authentication using Firebase/Firestore, enabling secure login and signup functionality, and the ability to fetch user-saved recipes.",
        "Containerized with Docker and deployed the application on AWS, using CI/CD for updates and scalability."
      ]
    },

    {
      id: 3,
      company: "QuizMaster",
      role: "Developer",
      period: "March 2025 - Present",
      location: "Romeoville, IL",
      description: "Contributed to the development of QuizMaster, a web application for creating and taking quizzes.",
      achievements: [
        "Collaborated on scalable, distributed quiz platform, enhancing backend processing and user interface",
        "Managed a team of 4 developers using Agile methodology and Scrum, including sprint planning and retrospectives.",
        "Modernized UI/UX with 15+ redesigned React components, enchancing responsivness and accessibility",
      ]
    }
      
  ],
    
  skills: {
    technical: ["JavaScript", "React", "Node.js", "Python", "HTML/CSS", "Tailwind CSS", "Git", "RESTful APIs", "Java", "SQL"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile Development", "Time Management"]
  }
};

export default resumeData;