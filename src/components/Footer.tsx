import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-white/[0.03] py-16 px-6 lg:px-20">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Brand Side */}
                <Link to="/" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center border border-white/[0.1] group-hover:border-[#a078ff]/30 transition-all duration-500">
                        <span className="material-symbols-outlined text-[#a078ff] text-xl font-black">layers</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">iNSpix</h2>
                        <p className="text-[9px] font-black tracking-[0.4em] text-[#4a4a4a] uppercase mt-1">Noir Luxe Archive</p>
                    </div>
                </Link>

                {/* Navigation Side */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#958ea0] hover:text-white transition-all duration-300">Archive</Link>
                    <Link to="/about" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#958ea0] hover:text-white transition-all duration-300">The Story</Link>
                    <Link to="/collection" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#958ea0] hover:text-white transition-all duration-300">Collections</Link>
                    <a href="https://github.com/SanidhyaGupta-10/iNSpix" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d0bcff] hover:text-white transition-all duration-300">Contribute</a>
                </div>

                {/* Social/Copy Side */}
                <div className="flex flex-col items-center md:items-end gap-4 text-[9px] font-black tracking-[0.2em] text-[#333333] uppercase">
                    <div className="flex gap-8 text-[#958ea0]">
                        <a href="http://instagram.com/sanidhyagupta10" target="_blank" rel="noreferrer" className="hover:text-[#a078ff] transition-colors">Instagram</a>
                        <a href="https://github.com/SanidhyaGupta-10" target="_blank" rel="noreferrer" className="hover:text-[#a078ff] transition-colors">GitHub</a>
                    </div>
                    <p>© {new Date().getFullYear()} iNSpix. OPEN SOURCE ARCHIVE.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
