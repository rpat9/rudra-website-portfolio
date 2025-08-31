import { useState, useEffect } from "react";
import { FileText, Download, BookOpen, GraduationCap, Briefcase, Code, User, FolderKanban } from "lucide-react";
import resumeData from "../data/resumeData.js";

export default function RudraResume() {
    const [viewMode, setViewMode] = useState('preview');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const viewModeOptions = [
        {
            id: 'preview',
            label: 'Interactive View',
            icon: BookOpen,
            description: 'Browse through sections'
        },
        {
            id: 'pdf',
            label: 'PDF View',
            icon: FileText,
            description: 'Traditional format'
        }
    ];

    const skillCategories = [
        {
            title: "Languages",
            skills: resumeData.skills.languages,
            color: "from-blue-500/10 to-blue-600/10",
            borderColor: "border-blue-500/20",
            hoverColor: "hover:bg-blue-500/20",
            dotColor: "bg-blue-500"
        },
        {
            title: "Frameworks/Libraries",
            skills: resumeData.skills.frameworks,
            color: "from-green-500/10 to-green-600/10",
            borderColor: "border-green-500/20",
            hoverColor: "hover:bg-green-500/20",
            dotColor: "bg-green-500"
        },
        {
            title: "Databases",
            skills: resumeData.skills.databases,
            color: "from-purple-500/10 to-purple-600/10",
            borderColor: "border-purple-500/20",
            hoverColor: "hover:bg-purple-500/20",
            dotColor: "bg-purple-500"
        },
        {
            title: "Cloud & DevOps",
            skills: resumeData.skills.cloud,
            color: "from-orange-500/10 to-orange-600/10",
            borderColor: "border-orange-500/20",
            hoverColor: "hover:bg-orange-500/20",
            dotColor: "bg-orange-500"
        },
        {
            title: "Tools",
            skills: resumeData.skills.tools,
            color: "from-teal-500/10 to-teal-600/10",
            borderColor: "border-teal-500/20",
            hoverColor: "hover:bg-teal-500/20",
            dotColor: "bg-teal-500"
        },
        {
            title: "Soft Skills",
            skills: resumeData.skills.soft,
            color: "from-pink-500/10 to-pink-600/10",
            borderColor: "border-pink-500/20",
            hoverColor: "hover:bg-pink-500/20",
            dotColor: "bg-pink-500"
        }
    ];

    return (
        <section id="resume" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-[var(--color-bg)] relative overflow-hidden">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-[var(--color-primary)]/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] rounded-full text-[var(--button-text-color)] text-sm font-medium mb-6">
                        <User size={16} />
                        <span>Professional Background</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 bg-clip-text text-transparent">
                            My Resume
                        </span>
                    </h2>
                    
                    <p className="text-base sm:text-lg text-[var(--color-text)] max-w-3xl mx-auto leading-relaxed mb-8 px-2">
                        A comprehensive overview of my educational background, work experience, and technical expertise. 
                        Choose your preferred viewing format below.
                    </p>
                </div>

                <div className={`flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                        {viewModeOptions.map((option) => {
                            const Icon = option.icon;
                            const isActive = viewMode === option.id;
                            
                            return (
                                <button 
                                    key={option.id}
                                    onClick={() => setViewMode(option.id)}
                                    className={`flex items-center gap-3 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:cursor-pointer hover:scale-105 ${
                                        isActive
                                            ? 'bg-[var(--color-primary)] text-[var(--button-text-color)] shadow-lg shadow-[var(--color-primary)]/25'
                                            : 'card border border-[var(--color-primary)]/10 text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 hover:text-[var(--color-primary)]'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <div className="text-left">
                                        <div className="text-sm sm:text-base">{option.label}</div>
                                        <div className="text-xs opacity-70">{option.description}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center w-full sm:w-auto justify-center">
                        <div className="w-px h-8 bg-[var(--color-primary)]/20 mx-4 hidden sm:block"></div>
                        <a 
                            href="/RudraResume.pdf"
                            download 
                            className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <Download size={18} />
                            <span className="text-sm sm:text-base">Download PDF</span>
                        </a>
                    </div>
                </div>

                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {viewMode === "pdf" ? (
                        <div className="card border border-[var(--color-primary)]/10 p-2">
                            <embed 
                                src="./RudraResume.pdf" 
                                width="100%" 
                                height="600" 
                                className="sm:h-[800px] rounded-lg" 
                                type="application/pdf" 
                            />
                        </div>
                    ) : (
                        <div className="space-y-8 sm:space-y-12">
                            
                            <div className="card border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-lg flex items-center justify-center">
                                        <GraduationCap className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">Education</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Academic Background</p>
                                    </div>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    {resumeData.education.map((edu, index) => (
                                        <div key={edu.id} className="group">
                                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-lg bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                                                
                                                <div className="lg:col-span-1">
                                                    <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-xs sm:text-sm font-medium text-[var(--color-primary)]">
                                                        {edu.period}
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-3">
                                                    <h4 className="text-base sm:text-lg font-semibold text-[var(--color-text)] mb-1">
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-[var(--color-primary)] font-bold mb-1 text-sm sm:text-base">
                                                        {edu.institution}
                                                    </p>
                                                    <p className="text-[var(--color-text)]/60 text-sm mb-2">
                                                        {edu.location}
                                                    </p>
                                                    <p className="text-[var(--color-text)] leading-relaxed text-sm sm:text-base">
                                                        {edu.achievementDetails}
                                                    </p>
                                                    <p className="text-[var(--color-text)] leading-relaxed text-sm sm:text-base">
                                                        {edu.courseworkDetails}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                        <Briefcase className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">Work Experience</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Development Experience</p>
                                    </div>
                                </div>

                                <div className="space-y-6 sm:space-y-8">
                                    {resumeData.experience.map((exp, index) => (
                                        <div key={exp.id} className="group relative">
                                            
                                            {index < resumeData.experience.length - 1 && (
                                                <div className="absolute left-4 sm:left-6 top-16 sm:top-20 w-0.5 h-full bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent hidden sm:block"></div>
                                            )}
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                                                
                                                <div className="lg:col-span-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
                                                        <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-xs sm:text-sm font-medium text-[var(--color-primary)]">
                                                            {exp.period}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-3">
                                                    <h4 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-2">
                                                        {exp.role}
                                                    </h4>
                                                    <p className="text-[var(--color-primary)] font-bold text-base sm:text-lg mb-1">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-[var(--color-text)]/60 text-sm mb-4">
                                                        {exp.location}
                                                    </p>
                                                    <p className="text-[var(--color-text)] leading-relaxed mb-4 text-sm sm:text-base">
                                                        {exp.description}
                                                    </p>
                                                    
                                                    {exp.achievements && (
                                                        <div className="space-y-2">
                                                            <h5 className="font-semibold text-[var(--color-text)] text-xs sm:text-sm uppercase tracking-wide">
                                                                Key Achievements
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {exp.achievements.map((achievement, i) => (
                                                                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-[var(--color-text)]">
                                                                        <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                                                                        <span className="leading-relaxed text-sm sm:text-base">{achievement}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                                        <FolderKanban className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">Technical Projects</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Project Experience</p>
                                    </div>
                                </div>

                                <div className="space-y-6 sm:space-y-8">
                                    {resumeData.projects.map((project, index) => (
                                        <div key={project.id} className="group relative">
                                            
                                            {index < resumeData.projects.length - 1 && (
                                                <div className="absolute left-4 sm:left-6 top-16 sm:top-20 w-0.5 h-full bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent hidden sm:block"></div>
                                            )}
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                                                
                                                <div className="lg:col-span-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
                                                        <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-xs sm:text-sm font-medium text-[var(--color-primary)]">
                                                            {project.period}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-3">
                                                    <h4 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-2">
                                                        {project.role}
                                                    </h4>
                                                    <p className="text-[var(--color-primary)] font-bold text-base sm:text-lg mb-1">
                                                        {project.company}
                                                    </p>
                                                    <p className="text-[var(--color-text)]/60 text-sm mb-4">
                                                        {project.location}
                                                    </p>
                                                    <p className="text-[var(--color-text)] leading-relaxed mb-4 text-sm sm:text-base">
                                                        {project.description}
                                                    </p>
                                                    
                                                    {project.achievements && (
                                                        <div className="space-y-2">
                                                            <h5 className="font-semibold text-[var(--color-text)] text-xs sm:text-sm uppercase tracking-wide">
                                                                Key Achievements
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {project.achievements.map((achievement, i) => (
                                                                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-[var(--color-text)]">
                                                                        <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                                                                        <span className="leading-relaxed text-sm sm:text-base">{achievement}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="card border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                                        <Code className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">Skills & Expertise</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Technical & Soft Skills</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                    {skillCategories.map((category, index) => (
                                        <div key={index} className="space-y-4">
                                            <h4 className="text-base sm:text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
                                                <div className={`w-2 h-2 ${category.dotColor} rounded-full`}></div>
                                                {category.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, i) => (
                                                    <span 
                                                        key={i} 
                                                        className={`px-3 sm:px-4 py-2 bg-gradient-to-r ${category.color} border ${category.borderColor} text-[var(--color-text)] rounded-lg text-xs sm:text-sm font-medium ${category.hoverColor} hover:scale-105 transition-all duration-300`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                
            </div>
        </section>
    );
}