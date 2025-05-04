import { Github, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-[var(--color-bg)]">

      <div className="container mx-auto max-w-4xl">

        <h2 className="section-title">Get In Touch</h2>
        
        <p className="text-center text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
          Interested in working together or have questions? Here's how you can reach me.
        </p>
        
        <div className="card fade-in-on-scroll max-w-3xl mx-auto ">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>

              <h3 className="text-xl font-semibold mb-6 text-[var(--color-primary)]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:rudrap26176@gmail.com" 
                  className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <span>rudrap26176@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+12246079378"
                  className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone className="mr-3" size={20} />
                  <span>(224) 607-9378</span>
                </a>
                
                <div className="flex items-center text-[var(--color-text)]">
                  <MapPin className="mr-3" size={20} />
                  <span>Chicago, IL</span>
                </div>

              </div>

            </div>
            

            <div>

              <h3 className="text-xl font-semibold mb-6 text-[var(--color-primary)]">
                Connect With Me
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="https://github.com/rpat9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Github className="mr-3" size={20} />
                  <span>github.com/rpat9</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/rudrapatel09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Linkedin className="mr-3" size={20} />
                  <span>linkedin.com/in/rudrapatel09</span>
                </a>
                
                <div className="flex items-center text-[var(--color-text)]">
                  <Calendar className="mr-3" size={20} />
                  <span>Available for new opportunities</span>
                </div>

              </div>

            </div>

          </div>
          
          
          <div className="mt-8 pt-6 border-t border-gray-600">

            <h4 className="font-semibold mb-4 text-[var(--color-text)]">
              Currently Available For:
            </h4>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="bg-indigo-800 text-indigo-100 px-4 py-2 rounded-lg text-center">
                Full-time Positions
              </li>

              <li className="bg-indigo-800 text-indigo-100 px-4 py-2 rounded-lg text-center">
                Part-time Positions
              </li>

              <li className="bg-indigo-800 text-indigo-100 px-4 py-2 rounded-lg text-center">
                Internships (All Seasons)
              </li>

            </ul>

          </div>
          
          
          <div className="mt-8 text-center">

            <a 
              href="mailto:rudrap26176@gmail.com" 
              className="btn-primary inline-flex items-center btn-hover"
            >
              <Mail size={16} className="mr-2" />
              Send me an email
            </a>

          </div>

        </div>
        
      </div>
    </section>
  );
}