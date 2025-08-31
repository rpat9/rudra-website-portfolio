import { useState, useEffect } from "react";
import { Code, ChevronLeft, ChevronRight, Layers, Zap, Globe, Wrench } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";
import projectsData from "../data/projectsData";

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const allTechnologies = [...new Set(projectsData.flatMap(project => project.technologies))];
    
    const filterCategories = [
        { id: 'all', label: 'All Projects', icon: Layers },
        { id: 'full-stack', label: 'Full-Stack', icon: Code },
        { id: 'live', label: 'Live Apps', icon: Globe },
        { id: 'in-development', label: 'In Development', icon: Wrench }
    ];

    const [projectsPerView, setProjectsPerView] = useState(2);

    useEffect(() => {
        const updateProjectsPerView = () => {
            setProjectsPerView(window.innerWidth < 1024 ? 1 : 2);
        };

        updateProjectsPerView();
        window.addEventListener('resize', updateProjectsPerView);
        return () => window.removeEventListener('resize', updateProjectsPerView);
    }, []);

    useEffect(() => {
        setIsVisible(true);
        setCurrentIndex(0);
        
        if (filter === 'all') {
            setFilteredProjects(projectsData);
        } else if (filter === 'full-stack') {
            
            setFilteredProjects(projectsData);

        } else if (filter === 'live') {
            
            setFilteredProjects(
                projectsData.filter(project => project.liveLink)
            );

        } else if (filter === 'in-development') {

            setFilteredProjects(
                projectsData.filter(project => 
                    project.title.includes("IN-PROGRESS")
                )
            );

        }
    }, [filter]);

    const maxIndex = Math.max(0, filteredProjects.length - projectsPerView);

    const goToNext = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const goToPrev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const stats = {
        total: projectsData.length,
        technologies: allTechnologies.length,
        live: projectsData.filter(p => p.liveLink).length
    };

    const visibleProjects = filteredProjects.slice(currentIndex, currentIndex + projectsPerView);

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-[var(--color-primary)]/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] border-[var(--color-primary)] rounded-full text-[var(--button-text-color)] text-sm font-medium mb-6">
                        <Code size={16} />
                        <span>Featured Work</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>
                    
                    <p className="text-base sm:text-lg text-[var(--color-text)] mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                        Here are some of my recent projects showcasing full-stack development, 
                        cloud deployment, and modern web technologies. Each project represents 
                        different challenges and learning opportunities I've embraced.
                    </p>

                    <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-md mx-auto mb-8">

                        <div className="card rounded-xl border border-white/10 p-3 sm:p-4">
                            <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">{stats.total}</div>
                            <div className="text-xs sm:text-sm text-[var(--color-text)]/70">Projects</div>
                        </div>

                        <div className="card rounded-xl border border-white/10 p-3 sm:p-4">
                            <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">{stats.technologies}+</div>
                            <div className="text-xs sm:text-sm text-[var(--color-text)]/70">Technologies</div>
                        </div>

                        <div className="card rounded-xl border border-white/10 p-3 sm:p-4">
                            <div className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">{stats.live}</div>
                            <div className="text-xs sm:text-sm text-[var(--color-text)]/70">Live Demos</div>
                        </div>

                    </div>
                </div>

                
                <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {filterCategories.map((category) => {
                        const Icon = category.icon;
                        const isActive = filter === category.id;
                        
                        return (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`flex cursor-pointer items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                                    isActive
                                        ? 'bg-[var(--color-primary)] text-[var(--button-text-color)] shadow-lg shadow-[var(--color-primary)]/25'
                                        : 'card border border-white/10 text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 hover:text-[var(--color-primary)]'
                                }`}
                            >
                                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <span className="hidden xs:inline sm:inline">{category.label}</span>
                                <span className="xs:hidden sm:hidden">{category.label.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                </div>

                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {filteredProjects.length > 0 ? (

                        <div className="relative max-w-6xl mx-auto">
                            
                            {filteredProjects.length > projectsPerView && (
                                <>
                                    <button
                                        onClick={goToPrev}
                                        className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-[var(--color-primary)] text-[var(--button-text-color)] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
                                        aria-label="Previous projects"
                                    >
                                        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform duration-200 cursor-pointer" />
                                    </button>
                                    
                                    <button
                                        onClick={goToNext}
                                        className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-[var(--color-primary)] text-[var(--button-text-color)] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
                                        aria-label="Next projects"
                                    >
                                        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform duration-200 cursor-pointer" />
                                    </button>
                                </>
                            )}

                            <div className={`grid gap-6 sm:gap-8 transition-all duration-500 ${
                                projectsPerView === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
                            }`}>

                                {visibleProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="transition-all duration-500 transform"
                                        style={{
                                            animationDelay: `${index * 100}ms`
                                        }}
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}

                            </div>

                            {filteredProjects.length > projectsPerView && (
                                <div className="flex justify-center gap-2 mt-8">

                                    {Array.from({ length: maxIndex + 1 }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
                                                currentIndex === index
                                                    ? 'bg-[var(--color-primary)] scale-110'
                                                    : 'bg-[var(--color-text)]/30 hover:bg-[var(--color-primary)]/50'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}

                                </div>
                            )}

                            
                            <div className="text-center mt-6">
                                <span className="text-sm text-[var(--color-text)]/70">
                                    Showing {currentIndex + 1}-{Math.min(currentIndex + projectsPerView, filteredProjects.length)} of {filteredProjects.length} projects
                                </span>
                            </div>

                        </div>
                    ) : (
                        
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>

                            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                                No projects found
                            </h3>

                            <p className="text-[var(--color-text)]">
                                Try selecting a different filter or view all projects.
                            </p>

                        </div>
                    )}
                </div>

                <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-[var(--color-primary)]/5 to-purple-600/5 backdrop-blur-sm border border-[var(--color-primary)]/10 rounded-2xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-4">
                            Interested in My Work?
                        </h3>
                        <p className="text-sm sm:text-base text-[var(--color-text)] mb-6 leading-relaxed">
                            I'm always working on new projects and exploring cutting-edge technologies. 
                            Let's discuss how I can contribute to your team!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a 
                                href="#contact" 
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Get In Touch
                            </a>
                            <a 
                                href="https://github.com/rpat9" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--button-text-color)] font-semibold rounded-xl hover:bg-[var(--color-primary)] transition-all duration-300 transform hover:scale-105"
                            >
                                View All on GitHub
                            </a>

                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
    );
}