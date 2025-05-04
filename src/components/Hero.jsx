import rudraPic from "../assets/rudra-pic.JPG";
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 fade-in">

            <div className="flex-1 text-center md:text-left">

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

                <p className="text-lg md:text-xl mb-6 text-[var(--color-text)]">
                    Aspiring software engineer with hands-on experience building web applications in JavaScript, React, Node.js, and Python. Skilled in Agile development, cloud deployment, and creating scalable, user-focused solutions. Strong collaborator and problem-solver, recognized for improving performance and usability.
                </p>

                <a href="#projects" className="btn-primary mr-5 btn-hover">
                    My Projects
                </a>

                <a href="#resume" className="btn-primary btn-hover">
                    My Resume
                </a>

            </div>

            <div className="flex-1 flex justify-center mb-8 md:mb-0">

                <img 
                src={rudraPic} 
                alt="Rudra Patel" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg float" />

            </div>

        </section>
    )
}