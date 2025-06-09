import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import rudraPic from "../assets/rudra-pic.JPG";
import Typewriter from 'typewriter-effect';

export default function Hero() {

    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-20 pb-12 relative overflow-hidden">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    
                    <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 translate-y-10`}>
                        
                        
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
                                Hi, I'm {' '}
                                <span className="inline-block">

                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                            .typeString('Rudra Patel')
                                            .callFunction(() => {
                                                const cursor = document.querySelector('.Typewriter__cursor');
                                                if (cursor) cursor.style.display = 'none';
                                            })
                                            .start();
                                        }}

                                        options={{
                                            autoStart: true,
                                            delay: 200,
                                            loop: false,
                                        }}
                                        />

                                </span>
                            </h1>
                        </div>

                        
                        <div className="h-5 flex items-center justify-center lg:justify-start">
                            <div className="text-2xl font-semibold text-[var(--color-text)]">
                                Software Engineer based in Chicago, IL
                            </div>
                        </div>

                        
                        <p className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed max-w-2xl">
                            Computer Science student at Lewis University building full-stack web applications  
                            <span className="text-[var(--color-primary)] font-semibold"> in React, Node.js, and Python. </span> 
                            Experienced in cloud deployment with
                            <span className="text-[var(--color-primary)] font-semibold"> AWS and Azure, database design,</span> and collaborative development using
                            <span className="text-[var(--color-primary)] font-semibold"> Git and Agile methodologies.</span>
                        </p>

                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a 
                                href="#projects" 
                                className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    View My Work
                                    <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            
                            <a 
                                href="#contact" 
                                className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-text)] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
                            >
                                Let's Connect
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 justify-center lg:justify-start pt-4">
                            <a 
                                href="https://github.com/rpat9" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <Github size={24} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/rudrapatel09" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a 
                                href="mailto:rudrap26176@gmail.com"
                                className="p-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    
                    <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 translate-x-10`}>
                        <div className="relative group">
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-full blur-2xl opacity-20 scale-110 group-hover:opacity-30 transition-all duration-500"></div>
                            
                            
                            <div className="relative">
                                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--color-primary)]/30 shadow-2xl group-hover:border-[var(--color-primary)]/50 transition-all duration-300">
                                    <img 
                                        src={rudraPic} 
                                        alt="Rudra Patel - Full Stack Developer" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-[var(--color-primary)] rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[var(--color-primary)] rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}