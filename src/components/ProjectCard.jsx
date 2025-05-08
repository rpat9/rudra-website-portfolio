import { useState } from "react";

export default function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    
    // Check if the project has any links to display
    const hasLinks = project.github || project.liveLink;

    return (
        <div
            className="card overflow-hidden transition-all duration-300 hover:shadow-xl "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-52 mb-4 overflow-hidden rounded-lg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                />
                
                {/* Only show overlay if there are links to display */}
                {hasLinks && (
                    <div 
                        className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                            isHovered ? 'opacity-80' : 'opacity-0'
                        }`}
                    >
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary btn-hover"
                            >
                                GitHub
                            </a>
                        )}

                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary btn-hover"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                )}
                
                {/* Alternative display for projects without links - shows a caption instead */}
                {!hasLinks && isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 opacity-80">
                        <p className="text-white text-center px-4 py-2">
                            {project.title} - Not Deployed
                        </p>
                    </div>
                )}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="bg-[var(--color-primary)] text-[var(--button-text-color)] text-xs px-2 py-1 rounded-md"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <p className="text-[var(--color-text)] text-sm">
                {project.description}
            </p>
        </div>
    );
}