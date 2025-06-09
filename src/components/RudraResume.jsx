import { useState, useEffect } from "react";
import { FileText, Download, BookOpen, GraduationCap, Briefcase, Code, User } from "lucide-react";
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

    return (
        <section id="resume" className="py-20 px-6 md:px-16 bg-[var(--color-bg)] relative overflow-hidden">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-[var(--color-primary)]/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] rounded-full text-[var(--button-text-color)] text-sm font-medium mb-6">
                        <User size={16} />
                        <span>Professional Background</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 bg-clip-text text-transparent">
                            My Resume
                        </span>
                    </h2>
                    
                    <p className="text-lg text-[var(--color-text)] max-w-3xl mx-auto leading-relaxed mb-8">
                        A comprehensive overview of my educational background, work experience, and technical expertise. 
                        Choose your preferred viewing format below.
                    </p>
                </div>

                <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    <div className="flex gap-3">
                        {viewModeOptions.map((option) => {
                            const Icon = option.icon;
                            const isActive = viewMode === option.id;
                            
                            return (
                                <button 
                                    key={option.id}
                                    onClick={() => setViewMode(option.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:cursor-pointer hover:scale-105 ${
                                        isActive
                                            ? 'bg-[var(--color-primary)] text-[var(--button-text-color)] shadow-lg shadow-[var(--color-primary)]/25'
                                            : 'card border border-[var(--color-primary)]/10 text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 hover:text-[var(--color-primary)]'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <div className="text-left">
                                        <div>{option.label}</div>
                                        <div className="text-xs opacity-70">{option.description}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center">
                        <div className="w-px h-8 bg-[var(--color-primary)]/20 mx-4 hidden sm:block"></div>
                        <a 
                            href="/RudraResume.pdf"
                            download 
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <Download size={18} />
                            <span>Download PDF</span>
                        </a>
                    </div>
                </div>

                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {viewMode === "pdf" ? (
                        <div className="card border border-[var(--color-primary)]/10 p-2">
                            <embed 
                                src="./RudraResume.pdf" 
                                width="100%" 
                                height="800" 
                                type="application/pdf" 
                                className="rounded-lg" 
                            />
                        </div>
                    ) : (
                        <div className="space-y-12">
                            
                            <div className="card border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-lg flex items-center justify-center">
                                        <GraduationCap className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--color-primary)]">Education</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Academic Background</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {resumeData.education.map((edu, index) => (
                                        <div key={edu.id} className="group">
                                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                                                
                                                <div className="lg:col-span-1">
                                                    <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-sm font-medium text-[var(--color-primary)]">
                                                        {edu.period}
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-3">
                                                    <h4 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-[var(--color-primary)] font-bold mb-1">
                                                        {edu.institution}
                                                    </p>
                                                    <p className="text-[var(--color-text)]/60 text-sm mb-2">
                                                        {edu.location}
                                                    </p>
                                                    <p className="text-[var(--color-text)] leading-relaxed">
                                                        {edu.details}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/20 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                        <Briefcase className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--color-primary)]">Work Experience</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Professional Journey</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {resumeData.experience.map((exp, index) => (
                                        <div key={exp.id} className="group relative">
                                            
                                            {index < resumeData.experience.length - 1 && (
                                                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent"></div>
                                            )}
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 rounded-lg bg-[var(--color-primary)]/5 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300">
                                                
                                                <div className="lg:col-span-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
                                                        <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)]/10 rounded-full text-sm font-medium text-[var(--color-primary)]">
                                                            {exp.period}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-3">
                                                    <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">
                                                        {exp.role}
                                                    </h4>
                                                    <p className="text-[var(--color-primary)] font-bold text-lg mb-1">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-[var(--color-text)]/60 text-sm mb-4">
                                                        {exp.location}
                                                    </p>
                                                    <p className="text-[var(--color-text)] leading-relaxed mb-4">
                                                        {exp.description}
                                                    </p>
                                                    
                                                    {exp.achievements && (
                                                        <div className="space-y-2">
                                                            <h5 className="font-semibold text-[var(--color-text)] text-sm uppercase tracking-wide">
                                                                Key Achievements
                                                            </h5>
                                                            <ul className="space-y-2">
                                                                {exp.achievements.map((achievement, i) => (
                                                                    <li key={i} className="flex items-start gap-3 text-[var(--color-text)]">
                                                                        <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                                                                        <span className="leading-relaxed">{achievement}</span>
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
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                                        <Code className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--color-primary)]">Skills & Expertise</h3>
                                        <p className="text-[var(--color-text)]/60 text-sm">Technical & Soft Skills</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
                                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                                            Technical Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {resumeData.skills.technical.map((skill, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-purple-600/10 border border-[var(--color-primary)]/20 text-[var(--color-text)] rounded-lg text-sm font-medium hover:bg-[var(--color-primary)]/20 hover:scale-105 transition-all duration-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-[var(--color-text)] flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                            Soft Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {resumeData.skills.soft.map((skill, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-600/20 text-[var(--color-text)] rounded-lg text-sm font-medium hover:bg-purple-600/20 hover:scale-105 transition-all duration-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
                
            </div>
        </section>
    );
}