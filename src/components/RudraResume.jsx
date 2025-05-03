export default function RudraResume() {
    return (
        <section id="resume" className="py-16 px-6 md:px-16 bg-[var(--color-bg)]">

            <h2 className="section-title">Rudra's Resume</h2>

            <p className="text-center text-[var(--color-text)] mb-12 max-w-2xl mx-auto">
                Rudra's Resume
            </p>

            <div className="flex fade-in-on-scroll justify-center">
                
                <embed src="./RudraResume-25.pdf" width="500" height="680" type="application/pdf"/>

            </div>
        </section>
    )
}