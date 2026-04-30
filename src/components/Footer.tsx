import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a] py-24 px-6 lg:px-20 text-[#958ea0]">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
                <div className="space-y-6 col-span-1 md:col-span-1">
                    <div className="flex items-center justify-center md:justify-start gap-2.5 text-[#d0bcff]">
                        <span className="material-symbols-outlined text-3xl font-black">layers</span>
                        <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">iNSpix</h2>
                    </div>
                    <p className="text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0 opacity-60">
                        The world's most generous community of photographers and creators. High-quality imagery for everyone, built with Redux Toolkit and TypeScript.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-black mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Discover</h4>
                    <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Free Images</a></li>
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Collections</a></li>
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Topics</a></li>
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Trending</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-black mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Company</h4>
                    <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">About Us</a></li>
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Our API</a></li>
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-[#d0bcff] transition-colors duration-300" href="#">Terms of Service</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-black mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Newsletter</h4>
                    <p className="text-sm mb-8 opacity-60 font-medium leading-relaxed">Join our exclusive circle for high-fidelity updates.</p>
                    <div className="flex gap-3 max-w-sm mx-auto md:mx-0 group">
                        <div className="relative flex-1">
                            <input 
                                className="w-full rounded-full bg-white/5 border border-white/5 px-6 py-3.5 text-xs focus:border-[#a078ff]/30 outline-none transition-all placeholder:text-[#4a4a4a] text-white" 
                                placeholder="Email address" 
                                type="email"
                            />
                        </div>
                        <button className="shimmer bg-white text-black p-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl active:scale-95 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm font-bold">send</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto max-w-7xl mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                <p>© {new Date().getFullYear()} iNSpix ARCHIVE. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-10">
                    <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                    <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                    <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
