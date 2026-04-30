import ResultGrid from '../components/ResultGrid'
import Tabs from '../components/Tabs'
import { useAppSelector } from '../redux/hooks'

const SearchPage = () => {
    const { query } = useAppSelector((state) => state.search)

    return (
        <div className="relative min-h-screen bg-[#131313] pt-32 noise-bg">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                {/* Cinematic Search Header */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a078ff] animate-pulse"></span>
                        <span className="text-[10px] font-black text-[#958ea0] uppercase tracking-[0.3em]">Exploration Mode</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl text-white font-black tracking-tighter uppercase italic mb-6">
                        {query ? (
                            <>
                                <span className="opacity-30">Archive /</span> {query}
                            </>
                        ) : 'The Archive'}
                    </h1>
                    
                    <p className="text-[#958ea0] text-sm font-medium uppercase tracking-[0.4em] opacity-40 max-w-2xl leading-relaxed">
                        Scanning the void for high-fidelity digital artifacts matching your intent.
                    </p>

                    <div className="mt-12 w-full max-w-2xl">
                        <Tabs />
                    </div>
                </div>

                {/* Grid Container */}
                <div className="max-w-full mx-auto pb-20">
                    <ResultGrid />
                </div>
            </div>

            {/* Decorative background glow */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#a078ff]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-[#a078ff]/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        </div>
    )
}

export default SearchPage
