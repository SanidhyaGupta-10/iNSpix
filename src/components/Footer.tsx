import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-[#131313] border-t border-white/5 py-12 px-6 lg:px-20">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Brand Side */}
                <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#a078ff]/30 transition-all duration-500">
                        <span className="material-symbols-outlined text-[#a078ff] text-xl font-black">layers</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">iNSpix</h2>
                        <p className="text-[9px] font-black tracking-[0.3em] text-[#958ea0] uppercase mt-1 opacity-60">The Archive</p>
                    </div>
                </div>

                {/* Navigation Side */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#958ea0] hover:text-white transition-all duration-300">Discover</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#958ea0] hover:text-white transition-all duration-300">About</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#958ea0] hover:text-white transition-all duration-300">Privacy</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d0bcff] hover:text-white transition-all duration-300">Connect</a>
                </div>

                {/* Social/Copy Side */}
                <div className="flex flex-col items-center md:items-end gap-3 text-[9px] font-black tracking-[0.2em] text-[#4a4a4a] uppercase">
                    <div className="flex gap-6 text-[#958ea0]">
                        <a href="#" className="hover:text-white transition-colors">IG</a>
                        <a href="#" className="hover:text-white transition-colors">TW</a>
                        <a href="#" className="hover:text-white transition-colors">GH</a>
                    </div>
                    <p>© {new Date().getFullYear()} ARCHIVE. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
