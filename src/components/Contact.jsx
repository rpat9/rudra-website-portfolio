import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Send, User } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "rudrap26176@gmail.com",
      href: "mailto:rudrap26176@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(224) 607-9378",
      href: "tel:+12246079378"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chicago, IL",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rpat9",
      href: "https://github.com/rpat9"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rudrapatel09",
      href: "https://www.linkedin.com/in/rudrapatel09"
    }
  ];

  const availability = [
    "Full-time Positions",
    "Part-time Positions", 
    "Internships (All Seasons)"
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-[var(--color-bg)] relative overflow-hidden">
      
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[var(--color-primary)]/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] rounded-full text-[var(--button-text-color)] text-sm font-medium mb-6">
            <User size={16} />
            <span>Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-lg text-[var(--color-text)] max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities, collaborate on projects, or just connect? 
            I'm always excited to hear from fellow developers, recruiters, and potential collaborators.
          </p>
        </div>

        
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          
          <div className="card hover:scale-105 transition-all duration-300 border border-[var(--color-primary)]/10">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                Contact Information
              </h3>
              <p className="text-[var(--color-text)]/70 text-sm">
                Reach out through any of these channels
              </p>
            </div>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="group">
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="flex items-center p-3 rounded-lg bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:scale-102"
                      >
                        <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-xs text-[var(--color-text)]/60 uppercase tracking-wide font-medium">
                            {method.label}
                          </div>
                          <div className="text-[var(--color-text)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                            {method.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center p-3 rounded-lg bg-[var(--color-primary)]/5">
                        <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mr-4">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-xs text-[var(--color-text)]/60 uppercase tracking-wide font-medium">
                            {method.label}
                          </div>
                          <div className="text-[var(--color-text)] font-medium">
                            {method.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          
          <div className="card hover:scale-105 transition-all duration-300 border border-[var(--color-primary)]/10">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                Connect With Me
              </h3>
              <p className="text-[var(--color-text)]/70 text-sm">
                Follow my work and professional journey
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/10 transition-all duration-300 group hover:scale-102"
                  >
                    <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text)]/60 uppercase tracking-wide font-medium">
                        {link.label}
                      </div>
                      <div className="text-[var(--color-text)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <Calendar className="mr-3 text-green-600" size={20} />
              <div>
                <div className="text-xs text-green-600 uppercase tracking-wide font-medium">
                  Status
                </div>
                <div className="text-[var(--color-text)] font-medium">
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>

          
          <div className="card hover:scale-105 transition-all duration-300 border border-[var(--color-primary)]/10">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                Currently Available For
              </h3>
              <p className="text-[var(--color-text)]/70 text-sm">
                Open to various opportunities
              </p>
            </div>
            
            <div className="space-y-3">
              {availability.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-gradient-to-r from-[var(--color-primary)]/10 to-purple-600/10 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></div>
                  <span className="text-[var(--color-text)] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-[var(--color-primary)]/5 to-purple-600/5 backdrop-blur-sm border border-[var(--color-primary)]/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-[var(--color-text)] mb-6 leading-relaxed">
              Whether you're looking to hire, collaborate, or just want to chat about technology, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <a 
              href="mailto:rudrap26176@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Send size={20} />
              <span>Send me an email</span>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}