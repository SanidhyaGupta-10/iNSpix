import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import CollectionPage from './pages/CollectionPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-[#0a0a0a] selection:bg-[#a078ff]/30 selection:text-[#d0bcff]">
      <Navbar />

      <main className="relative z-10 w-full">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
