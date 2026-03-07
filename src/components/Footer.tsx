import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-slate-950 py-16 px-6 lg:px-20 text-slate-300">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                <div className="space-y-4 col-span-1 md:col-span-1">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-blue-500">
                        <span className="material-symbols-outlined text-3xl font-bold">layers</span>
                        <h2 className="text-xl font-extrabold tracking-tight text-white">iNSpix</h2>
                    </div>
                    <p className="text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
                        The world's most generous community of photographers and creators. High-quality imagery for everyone, built with Redux Toolkit and TypeScript.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Discover</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Free Images</a></li>
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Collections</a></li>
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Topics</a></li>
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Trending</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a className="hover:text-blue-500 transition-colors" href="#">About Us</a></li>
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Our API</a></li>
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Newsletter</h4>
                    <p className="text-sm text-slate-500 mb-6">Get the best images directly in your inbox.</p>
                    <div className="flex gap-2 max-w-sm mx-auto md:mx-0">
                        <input 
                            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" 
                            placeholder="Email address" 
                            type="email"
                        />
                        <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                            <span className="material-symbols-outlined text-base">send</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
                © {new Date().getFullYear()} iNSpix. Built with React, Redux Toolkit, and Tailwind CSS.
            </div>
        </footer>
    )
}

export default Footer
