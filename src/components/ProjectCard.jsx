import { useState } from "react";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";

export default function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const hasLinks = project.github || project.liveLink;

    const getProjectStatus = () => {
        if (project.title.includes("IN-PROGRESS")) {
            return { label: "In Development", color: "bg-yellow-500", icon: "🚧" };
        }
        if (project.liveLink) {
            return { label: "Live", color: "bg-green-500", icon: "🟢" };
        }
        return { label: "Completed", color: "bg-blue-500", icon: "✅" };
    };

    const status = getProjectStatus();

    return (
        <div
            className="group relative card rounded-2xl overflow-hidden transition-all duration-500  hover:border-[var(--color-primary)] hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                <span>{status.icon}</span>
                <span>{status.label}</span>
            </div>

            
            <div className="relative h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                
                <div 
                    className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                        isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    {hasLinks && (
                        <>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 btn-primary btn-hover"
                                >
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                            )}

                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 btn-primary btn-hover"
                                >
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>

            
            <div className="p-6 space-y-4">
                
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary)]/80 transition-colors duration-300">
                        {project.title.replace(" (IN-PROGRESS)", "")}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                                index % 3 === 0 
                                    ? 'bg-blue-500/10 text-[var(--color-text)] border-blue-500/20' 
                                    : index % 3 === 1 
                                    ? 'bg-purple-500/10 text-[var(--color-text)] border-purple-500/20'
                                    : 'bg-green-500/10 text-[var(--color-text)] border-green-500/20'
                            } hover:scale-105`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="text-[var(--color-text)] text-sm leading-relaxed line-clamp-3 group-hover:text-[var(--color-text)] transition-colors duration-300">
                    {project.description}
                </p>

                
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4 text-xs text-[var(--color-text)]">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Recent</span>
                        </div>
                        {project.liveLink && (
                            <div className="flex items-center gap-1">
                                <Star size={14} />
                                <span>Featured</span>
                            </div>
                        )}
                    </div>
                    
                    
                    <div className="flex items-center gap-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[var(--color-primary)] text-[var(--button-text-color)]"
                                title="View Source Code"
                            >
                                <Github size={16} />
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[var(--color-primary)] text-[var(--button-text-color)]"
                                title="View Live Demo"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}