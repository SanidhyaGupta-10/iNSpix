import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className='flex justify-between items-center py-5 px-5 md:px-10 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800'>
      <Link to='/' className='font-bold text-3xl tracking-tighter text-blue-500'>iNSpix</Link>
      <div className='flex gap-4 items-center'>
        <Link
          className={`text-sm md:text-base font-bold transition-all duration-300 px-6 py-2 rounded-lg ${location.pathname === '/' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
          to='/'
        >
          Search
        </Link>
        <Link
          className={`text-sm md:text-base font-bold transition-all duration-300 px-6 py-2 rounded-lg ${location.pathname === '/collection' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
          to='/collection'
        >
          Collection
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
