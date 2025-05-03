import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import RudraResume from "./components/RudraResume.jsx";

export default function App() {
  useEffect(() => {
    // Optional: Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply to elements with the fade-in-on-scroll class
    document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <RudraResume />
      </main>
      <footer className="bg-[var(--color-bg)] py-8 text-center text-[var(--color-text)]">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Rudra Patel. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}