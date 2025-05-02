export default function Skills() {
    
    const skillGroups = [
      {
        category: "Frontend",
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "Python", "SQL", "RESTful APIs"]
      },
      {
        category: "Tools & Others",
        skills: ["Git", "GitHub", "VS Code", "Agile", "Microsoft Azure", "Responsive Design"]
      }
    ];
  
    return (
      <section id="skills" className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-gray-800">

        <div className="container mx-auto">

          <h2 className="section-title">My Skills</h2>
          
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with to build web applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {skillGroups.map((group) => (
              <div 
                key={group.category}
                className="card fade-in-on-scroll bg-white dark:bg-gray-700"
              >

                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    );
}