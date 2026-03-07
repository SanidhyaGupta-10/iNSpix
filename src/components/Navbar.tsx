import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className='fixed top-0 z-50 w-full glass border-b border-white/10 px-6 py-4 lg:px-20'>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to='/' className="flex items-center gap-2 text-blue-500">
          <span className="material-symbols-outlined text-3xl font-bold">layers</span>
          <h2 className="text-xl font-extrabold tracking-tighter text-white">iNSpix</h2>
        </Link>

        <div className='flex gap-4 items-center'>
          <Link
            className={`text-sm md:text-base font-bold transition-all duration-300 px-6 py-2 rounded-lg ${location.pathname === '/' && !location.hash ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            to='/'
          >
            Discover
          </Link>
          <Link
            className={`text-sm md:text-base font-bold transition-all duration-300 px-6 py-2 rounded-lg ${location.pathname === '/collection' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            to='/collection'
          >
            Collection
          </Link>
          <button className="hidden md:ml-4 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all">
            Join Free
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
