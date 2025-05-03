import ProjectCard from "./ProjectCard.jsx";
import projectsData from "../data/projectsData";

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6 md:px-16">

            <h2 className="section-title">My Projects</h2>

            <p className="text-center text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each one represents different challenges and learning opportunities I've embraced.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </section>
    )
}