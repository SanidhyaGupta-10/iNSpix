import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { useAppSelector } from '../redux/hooks'
const HomePage = () => {

    const { query } = useAppSelector((state) => state.search)

    return (
        <div className="pb-10">
            <SearchBar />
            {query !== '' ? (
                <div>
                    <Tabs />
                    <ResultGrid />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center px-5">
                    <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-600 mb-6 uppercase tracking-tighter">
                        Discover Amazing Content
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                        Search for high-quality photos, videos, and gifs from Unsplash, Pexels, and Tenor all in one place.
                    </p>
                </div>
            )}
        </div>
    )
}

export default HomePage