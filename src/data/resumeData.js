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
        company: "QuizMaster",
        role: "Project Lead",
        period: "Mar 2025 - Present",
        location: "Romeoville, IL",
        description: "Led the development of QuizMaster, a web application for creating and taking quizzes.",
        achievements: [
          "Collaborated on scalable, distributed quiz platform, enhancing backend processing and user interface",
          "Managed a team of 4 developers using Agile methodology and Scrum, including sprint planning and retrospectives.",
          "Modernized UI/UX with 15+ redesigned React components, enchancing responsivness and accessibility",
        ]
      },
      {
        id: 2,
        company: "MasterChef Claude",
        role: "Personal Project",
        period: "Apr 2025 - Present",
        location: "Romeoville, IL",
        description: "React and Tailwind-based app that utilizes Claude API to send a list of ingredients and receive a recipe which is recommended to the user.",
        achievements: [
          "Developed a dynamic and responsive web app using React and Tailwind CSS to allow users to add, validate, and remove ingredients in real time, improving interactivity and UX",
          "Integrated Claude API to utilize user-submitted ingredients and generate a recipe for the user",
          "Engineered robust input validation logic that reduced invalid submissions by 90%, ensuring clean data and enhancing form usability"
        ]
      }
      
    ],
    skills: {
      technical: ["JavaScript", "React", "Node.js", "Python", "HTML/CSS", "Tailwind CSS", "Git", "RESTful APIs", "Java", "SQL"],
      soft: ["Problem Solving", "Team Collaboration", "Communication", "Agile Development", "Time Management"]
    }
  };

  export default resumeData;