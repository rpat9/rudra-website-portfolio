import { useState } from "react";
import { Code, Server, Wrench } from "lucide-react";

export default function Skills() {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    
    const skillGroups = [
        {
            category: "Frontend",
            icon: Code,
            skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
            description: "Building responsive and interactive user interfaces"
        },
        {
            category: "Backend", 
            icon: Server,
            skills: ["Node.js", "Express", "Python", "SQL", "RESTful APIs", "Firebase"],
            description: "Creating robust server-side applications and APIs"
        },
        {
            category: "Tools & Others",
            icon: Wrench,
            skills: ["Git", "GitHub", "VS Code", "Agile", "Microsoft Azure", "Responsive Design", "AWS", "Docker"],
            description: "Development tools and deployment technologies"
        }
    ];

    return (
        <section id="skills" className="py-16 px-4 md:px-16 bg-[var(--color-bg)]">
            <div className="container mx-auto">
                <h2 className="section-title">My Skills</h2>
                
                <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Here are the technologies and tools I've been working with to build modern web applications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {skillGroups.map((group, index) => {
                        const IconComponent = group.icon;
                        return (
                            <div 
                                key={group.category}
                                className="fade-in group relative card p-6 rounded-2xl transition-all duration-500 hover:border-[var(--color-primary)] hover:transform hover:scale-[1.02] flex flex-col min-h-[280px] md:min-h-[320px]"
                                onMouseEnter={() => setHoveredCategory(group.category)}
                                onMouseLeave={() => setHoveredCategory(null)}
                            >
                                
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-[var(--color-primary)] text-[var(--button-text-color)] transition-transform duration-300 group-hover:scale-110">
                                        <IconComponent size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary)]/80 transition-colors duration-300">
                                        {group.category}
                                    </h3>
                                </div>

                                
                                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                                    {group.description}
                                </p>
                                
                                
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {group.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1 text-center text-sm font-medium rounded-2xl border transition-all duration-300 ${
                                                skillIndex % 3 === 0 
                                                    ? 'bg-blue-500/10 text-[var(--color-text)] border-blue-500/20' 
                                                    : skillIndex % 3 === 1 
                                                    ? 'bg-purple-500/10 text-[var(--color-text)] border-purple-500/20'
                                                    : 'bg-green-500/10 text-[var(--color-text)] border-green-500/20'
                                            } hover:scale-105 cursor-default`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                
                                <div className="flex items-center justify-center pt-4 mt-auto border-t border-[var(--color-primary)]/10">
                                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                                        <span className="font-medium">{group.skills.length} Technologies</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}