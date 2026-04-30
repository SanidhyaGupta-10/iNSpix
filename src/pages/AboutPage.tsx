import React from 'react'

const AboutPage = () => {
    const techStack = [
        { name: 'React', icon: 'code', desc: 'Core Frontend Library' },
        { name: 'Redux Toolkit', icon: 'account_tree', desc: 'State Management' },
        { name: 'Tailwind CSS', icon: 'palette', desc: 'Utility-First Styling' },
        { name: 'TypeScript', icon: 'verified', desc: 'Type-Safe Architecture' },
        { name: 'Vite', icon: 'bolt', desc: 'Modern Build Tooling' },
        { name: 'Google Fonts', icon: 'format_size', desc: 'Outfit & Inter Typography' },
    ]

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] pt-32 noise-bg overflow-hidden">
            {/* Background Atmosphere */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#a078ff]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-[#a078ff]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-32">
                {/* Header Section */}
                <header className="mb-24 text-center">
                    <span className="inline-block px-5 py-2 mb-8 border border-[#a078ff]/30 rounded-full text-[#d0bcff] text-[10px] font-black bg-[#131313]/50 backdrop-blur-md uppercase tracking-[0.4em]">Inside the Void</span>
                    <h1 className="text-6xl md:text-9xl text-white mb-8 tracking-tighter font-black italic uppercase leading-none">
                        iNSpix <br/> <span className="opacity-30">Archive.</span>
                    </h1>
                    <p className="text-[#958ea0] text-lg md:text-xl font-medium uppercase tracking-[0.4em] opacity-40 max-w-3xl mx-auto leading-relaxed mt-10">
                        A curated digital ecosystem built for explorers, by explorers.
                    </p>
                </header>

                {/* About Project Section */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="glass-morphism p-12 rounded-[3rem] border-white/[0.05]">
                            <h2 className="text-3xl text-white font-black uppercase italic tracking-tighter mb-8">The Philosophy</h2>
                            <div className="space-y-6 text-[#958ea0] text-sm leading-loose font-medium">
                                <p>iNSpix was conceived as more than just a search engine; it is a high-fidelity digital sanctuary for visual narratives. In a world of clutter, we curate the void.</p>
                                <p>Every asset in the archive is a testament to digital craftsmanship, organized through a state-of-the-art Redux-driven architecture to ensure seamless exploration.</p>
                                <p>The "Noir Luxe" aesthetic is our tribute to minimalist perfection—where every pixel serves a purpose and every interaction feels like a deliberate movement through an art gallery.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-[2rem] hover:border-[#a078ff]/30 transition-all duration-500 hover:bg-white/[0.04]">
                                    <span className="material-symbols-outlined text-[#a078ff] mb-4">{tech.icon}</span>
                                    <h3 className="text-white text-xs font-black uppercase tracking-widest mb-1">{tech.name}</h3>
                                    <p className="text-[#4a4a4a] text-[10px] font-black uppercase tracking-tighter">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Developer Profile Section */}
                <section className="mb-32">
                    <div className="relative group overflow-hidden glass-morphism rounded-[3.5rem] p-12 md:p-20 border-white/[0.03]">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                            <div className="w-48 h-48 rounded-[3rem] bg-linear-to-br from-[#a078ff] to-[#340080] p-1 shrink-0 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                <div className="w-full h-full rounded-[2.8rem] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                                    <span className="text-6xl font-black text-[#a078ff] italic">SG</span>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[#a078ff] text-[10px] font-black uppercase tracking-[0.5em] mb-4 inline-block">The Visionary</span>
                                <h2 className="text-5xl md:text-6xl text-white font-black tracking-tighter uppercase italic mb-8">Sanidhya Gupta</h2>
                                <p className="text-[#958ea0] text-lg leading-relaxed mb-10 max-w-2xl font-medium">
                                    A Full-Stack Developer obsessed with building premium digital experiences. I believe that software should not only function perfectly but should look and feel like art.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                    <a 
                                        href="https://github.com/SanidhyaGupta-10" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white text-black px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#a078ff] hover:text-white transition-all flex items-center gap-3"
                                    >
                                        GitHub Profile
                                    </a>
                                    <a 
                                        href="http://instagram.com/sanidhyagupta10" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-3"
                                    >
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl text-white font-black uppercase italic tracking-tighter mb-10">Join the Collective</h2>
                        <p className="text-[#958ea0] text-lg leading-relaxed mb-12 font-medium opacity-60">
                            iNSpix is an open-source initiative. I welcome you to explore the void, fork the repository, and contribute your unique features to our growing archive.
                        </p>
                        <a 
                            href="https://github.com/SanidhyaGupta-10/iNSpix" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-[#a078ff] text-white px-12 py-5 rounded-3xl text-xs font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(160,120,255,0.2)]"
                        >
                            Fork the Repository
                            <span className="material-symbols-outlined text-sm">terminal</span>
                        </a>
                        <p className="mt-8 text-[9px] font-black text-[#4a4a4a] uppercase tracking-[0.4em]">Public Repository / Open for Collaboration</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutPage
