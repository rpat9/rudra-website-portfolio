import { useState } from "react";

export default function ProjectCard({ project }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card overflow-hidden transition-all duration-300 hover:shadow-xl"
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

                <div 
                    className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            GitHub</a>
                    )}

                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[var(--color-primary)] px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            Live Demo</a>
                    )}

                </div>

            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-3">

                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-[var(--color-text-secondary)] text-xs px-2 py-1 rounded-md"
                    >
                        {tech}
                    </span>
                ))}

            </div>

            <p className="text-[var(--color-text-secondary)] text-sm">
                {project.description}
            </p>

        </div>
    )

}