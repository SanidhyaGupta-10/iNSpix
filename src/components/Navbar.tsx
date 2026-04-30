import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl z-50 mt-6 bg-[#0A0A0A]/60 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(160,120,255,0.1)] flex justify-between items-center px-10 py-5 transition-all duration-500 hover:border-white/20">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase italic flex items-center gap-2">
            <span className="material-symbols-outlined text-[#a078ff] text-2xl font-black">layers</span>
            iNSpix
        </Link>

        <div className="hidden lg:flex items-center space-x-12">
            <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#958ea0] hover:text-white transition-all duration-300">Archive</Link>
            <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Collections</Link>
            <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#958ea0] hover:text-white transition-all duration-300">Artifacts</Link>
            <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#958ea0] hover:text-white transition-all duration-300">Curation</Link>
        </div>

        <div className="flex items-center space-x-8">
            <button className="text-[#958ea0] hover:text-[#a078ff] transition-colors duration-300">
                <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <button className="shimmer bg-white text-black px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.03] transition-all duration-300 shadow-2xl">
                Connect
            </button>
        </div>
    </nav>
  )
}

export default Navbar
