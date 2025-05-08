import { useState } from "react";
import { FileText, Download, BookOpen } from "lucide-react";
import resumeData from "../data/resumeData.js";

export default function RudraResume() {

    const [viewMode, setViewMode] = useState('preview');

    return (
        <section id="resume" className="py-16 px-6 md:px-16 bg-[var(--color-bg)]">

            <h2 className="section-title">My Resume</h2>

            <p className="text-center text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
                My educational background, work experience, and qualifications.
            </p>

            <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">

                <button 
                    onClick={()=> setViewMode('preview')}
                    className="btn-primary btn-hover inline-flex items-center cursor-pointer"
                >

                    <BookOpen size={18} className="mr-2" />

                    Interactive View

                </button>

                <button 
                    onClick={()=> setViewMode('pdf')}
                    className="btn-primary btn-hover inline-flex items-center cursor-pointer"
                >

                    <FileText size={18} className="mr-2" />

                    PDF View

                </button>

                <a 
                    href="/RudraResume-25.pdf"
                    download 
                    className="btn-primary btn-hover inline-flex items-center cursor-pointer"
                >

                    <Download size={18} className="mr-2" />

                    Download PDF

                </a>

            </div>

            <div className="max-w-5xl mx-auto fade-in-on-scroll">
                {viewMode === "pdf" ? (
                    <div className="flex justify-center">
                        <embed src="./RudraResume-25.pdf" width="100%" height="800" type="application/pdf" className="rounded-lg shadow-lg" />
                    </div>
                ) : (
                        <div className="card">

                            <div className="mb-10">

                                <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)] border-b border-gray-200 pb-2">
                                    Education
                                </h3>

                                <div>

                                    {resumeData.education.map(edu => (
                                        <div key={edu.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                            <div className="md:col-span-1 text-[var(--color-text-secondary)]">
                                                {edu.period}
                                            </div>

                                            <div className="md:col-span-3">
                                                <h4 className="text-lg font-semibold text-[var(--color-text)]">{edu.degree}</h4>
                                                <p className="text-[var(--color-primary)] font-bold">{edu.institution}</p>
                                                <p className="text-[var(--color-text-secondary)]">{edu.location}</p>
                                                <p className="mt-2 text-[var(--color-text)]">{edu.details}</p>
                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        
                    

                    <div className="mt-4 mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)] border-b border-gray-700 pb-2">
                            Work Experience
                        </h3>
                
                        <div className="space-y-8">

                            {resumeData.experience.map(exp => (
                            <div key={exp.id} className="grid grid-cols-1 md:grid-cols-4 gap-4">

                                <div className="md:col-span-1 text-[var(--color-text-secondary)]">
                                {exp.period}
                                </div>
                                
                                <div className="md:col-span-3">
                                    <h4 className="text-lg font-bold text-[var(--color-text)]">{exp.role}</h4>
                                    <p className="text-[var(--color-primary)] font-bold">{exp.company}</p>
                                    <p className="text-[var(--color-text-secondary)] italic">{exp.location}</p>
                                    <p className="mt-2 text-[var(--color-text)]">{exp.description}</p>
                                
                                    {exp.achievements && (
                                        <ul className="mt-2 list-disc list-inside space-y-1">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-[var(--color-text)]">{achievement}</li>
                                        ))}
                                        </ul>
                                    )}
                                </div>

                            </div>
                            ))}
                        </div>
                    </div>
                
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)] border-b border-gray-700 pb-2">
                            Skills
                        </h3>
                
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-[var(--color-text)]">Technical Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.technical.map((skill, i) => (
                                        <span key={i} className="bg-[var(--color-primary)] text-[var(--button-text-color)] px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-[var(--color-text)]">Soft Skills</h4>

                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.soft.map((skill, i) => (
                                        <span key={i} className="bg-[var(--color-primary)] text-[var(--button-text-color)] px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>)}

            </div>
            
        </section>
    )
}