import { useState } from "react";
import { ExternalLink, Code, DollarSign, Users, TrendingUp, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function FeaturedWork() {
    const [isVisible, setIsVisible] = useState(true);

    const featuredProject = {
        title: "Hometown Liquor E-Commerce Platform",
        subtitle: "Freelance Software Engineer",
        period: "May 1, 2025 - July 31, 2025",
        client: "Hometown Liquor, Braceville, IL",
        description: "Developed a complete production-ready e-commerce platform from concept to deployment, transforming a local liquor store's digital presence with modern web technologies and seamless user experience.",
        image: "/hometown-liquor-preview.png",
        technologies: ["React", "Firebase", "Algolia", "Python", "Tailwind CSS", "Vercel"],
        
        highlights: [
            {
                icon: DollarSign,
                metric: "$40,000+",
                label: "Monthly Sales",
                description: "Doubled Monthly Sales"
            },
            {
                icon: TrendingUp,
                metric: "<200ms",
                label: "Search Speed",
                description: "Lightning-fast product discovery"
            },
            {
                icon: Users,
                metric: "750+",
                label: "Products Managed",
                description: "Complete inventory system"
            },
            {
                icon: Award,
                metric: "100%",
                label: "Mobile Responsive",
                description: "Cross-platform compatibility"
            }
        ],

        achievements: [
            "Doubled monthly sales to $40,000 by deploying full-stack e-commerce platform for 750+ products",
            "Engineered Algolia search pipeline achieving sub-200ms query latency and 30% reduction in database load",
            "Boosted customer conversion by 25% and product discovery by 40% through search-optimized, mobile-first UX",
            "Automated inventory and order management, eliminating stockouts and reducing manual operations by 80%",
            "Built scalable FastAPI backend with role-based access control and real-time notifications",
            "Designed comprehensive admin dashboard with sales reporting and inventory analytics"
        ],

        techStack: {
            frontend: ["React", "Tailwind CSS", "TypeScript"],
            backend: ["PostgreSQL", "FastAPI", "Supabase"],
            "Search And Emails": ["Algolia Search API", "Resend API"],
            automation: ["Python", "Custom Scripts"],
            deployment: ["Vercel", "Railway", "CI/CD Pipeline"]
        }
    };

    return (
        <section id="featured-work" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[var(--color-primary)]/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-full text-white text-sm font-medium mb-6">
                        <Award size={16} />
                        <span>Professional Work</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 bg-clip-text text-transparent">
                            Featured Work
                        </span>
                    </h2>
                    
                    <p className="text-base sm:text-lg text-[var(--color-text)] max-w-3xl mx-auto leading-relaxed px-2">
                        Highlighting my most impactful professional development work - a complete 
                        e-commerce solution delivered for a real business client.
                    </p>

                </div>

                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="max-w-6xl mx-auto">

                        <div className="card rounded-3xl p-6 sm:p-8 md:p-10 mb-8 bg-gradient-to-br from-[var(--color-primary)]/5 to-purple-600/5 border border-[var(--color-primary)]/20">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                                <div className="space-y-6">

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium">
                                            <Clock size={16} />
                                            <span>{featuredProject.period}</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                                            {featuredProject.title}
                                        </h3>
                                        <div className="text-lg font-medium text-[var(--color-text)]/80">
                                            {featuredProject.subtitle} • {featuredProject.client}
                                        </div>
                                    </div>
                                    
                                    <p className="text-[var(--color-text)] leading-relaxed">
                                        {featuredProject.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.technologies.map((tech, index) => (
                                            <span
                                                key={tech}
                                                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                                                    index % 3 === 0 
                                                        ? 'bg-blue-500/10 text-[var(--color-text)] border-blue-500/20' 
                                                        : index % 3 === 1 
                                                        ? 'bg-purple-500/10 text-[var(--color-text)] border-purple-500/20'
                                                        : 'bg-green-500/10 text-[var(--color-text)] border-green-500/20'
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                                <a 
                                    href="https://www.hometownliquorsil.com/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group cursor-pointer block"
                                >
                                    <div className="relative overflow-hidden rounded-2xl border-2 border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/5 to-purple-600/5 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                        <img 
                                            src={featuredProject.image} 
                                            alt="Hometown Liquor E-Commerce Platform Preview"
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ aspectRatio: '16/10' }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.querySelector('.fallback-content').style.display = 'flex';
                                            }}
                                        />
                                        
                                        <div className="fallback-content absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-purple-600/20 flex items-center justify-center" style={{ display: 'none' }}>
                                            <div className="text-center space-y-4 p-8">
                                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--color-primary)] to-purple-600 rounded-xl flex items-center justify-center">
                                                    <Code size={32} className="text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                                                        E-Commerce Platform
                                                    </h4>
                                                    <p className="text-sm text-[var(--color-text)]/70">
                                                        Full-stack web application
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        
                                        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 opacity-90">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                            <span>Live</span>
                                        </div>

                                    </div>
                                    
                                    
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>

                                </a>
                            </div>
                        </div>

                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                            {featuredProject.highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <div
                                        key={index}
                                        className="card rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 border border-white/10"
                                    >
                                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[var(--color-primary)] to-purple-600 rounded-xl flex items-center justify-center">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                                            {highlight.metric}
                                        </div>
                                        <div className="text-sm font-medium text-[var(--color-text)] mb-1">
                                            {highlight.label}
                                        </div>
                                        <div className="text-xs text-[var(--color-text)]/70">
                                            {highlight.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        

                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            <div className="card rounded-2xl p-6 sm:p-8 space-y-6">

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-purple-600 rounded-lg flex items-center justify-center">
                                        <CheckCircle size={20} className="text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--color-primary)]">Key Achievements</h4>
                                </div>

                                <ul className="space-y-3">
                                    {featuredProject.achievements.map((achievement, index) => (
                                        <li key={index} className="flex gap-3 text-sm text-[var(--color-text)] leading-relaxed">
                                            <ArrowRight size={16} className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            
                            <div className="card rounded-2xl p-6 sm:p-8 space-y-6">

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                        <Code size={20} className="text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--color-primary)]">Technical Stack</h4>
                                </div>

                                <div className="space-y-4">
                                    {Object.entries(featuredProject.techStack).map(([category, technologies]) => (
                                        <div key={category}>
                                            <h5 className="text-sm font-semibold text-[var(--color-primary)] mb-2 capitalize">
                                                {category}
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-[var(--color-primary)]/10 text-[var(--color-text)] border border-[var(--color-primary)]/20 rounded-lg"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        
                        <div className="text-center">
                            <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-purple-600/10 backdrop-blur-sm border border-[var(--color-primary)]/20 rounded-2xl">

                                <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-4">
                                    Ready for Your Next Project?
                                </h4>

                                <p className="text-sm sm:text-base text-[var(--color-text)] mb-6 leading-relaxed">
                                    I bring the same level of professionalism and technical excellence to every project. 
                                    Let's build something amazing together.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                    <a 
                                        href="#contact" 
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                                    >
                                        <span>Let's Work Together</span>
                                        <ArrowRight size={18} />
                                    </a>
                                    <a 
                                        href="#projects" 
                                        className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                                    >
                                        <span>View More Projects</span>
                                        <ExternalLink size={18} />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
    
}