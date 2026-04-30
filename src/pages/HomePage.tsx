import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { useAppSelector } from '../redux/hooks'

const HomePage = () => {
    const { query } = useAppSelector((state) => state.search)

    return (
        <div className="relative min-h-screen bg-[#131313]">
            <div className="relative z-10 noise-bg min-h-screen">
                {/* Hero Section */}
                {!query && (
                    <header className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
                        {/* Atmospheric Background */}
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img 
                                alt="Atmospheric Landscape" 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgL5qaskqc1wHkTa4YPEYGilDBU1R7LPwKkrfO2_7StqrHKWa-SKUnmpyJAHQh6XW43erLGLJFFp8xijrq2IqA9gdT6jnmMPSWc4u438WZw5DeYyvX2LzQimq0PzukIuSN-tynhqkjM58MC0zDcxV4h8oka4hr2bRcYJCLNzWNW5zXxqESwK1ei2JqfC8FEXHTLGTz-i6PoU9pYyNJ-3uPiVWOVJrpfLrsdGa96c-Qr7YYWavFkZJlISU5qw-q8UFGE4fmbXiG2C2e" 
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/80 to-transparent"></div>
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                            <h1 className="text-6xl md:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl font-black">
                                Curate the Void.
                            </h1>
                            <p className="text-lg md:text-xl text-[#cbc3d7] max-w-2xl mb-12 font-medium opacity-80">
                                Discover exclusive digital craftsmanship. A high-fidelity gallery space for the modern collector, where minimalism meets cosmic depth.
                            </p>
                            <SearchBar />
                        </div>
                    </header>
                )}

                {/* Featured Collections (Bento Grid) */}
                {!query && (
                    <section className="max-w-7xl mx-auto px-6 py-32 z-10 relative">
                        <div className="flex items-center justify-between mb-16">
                            <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tight">Featured Collections</h2>
                            <button className="text-[#d0bcff] hover:text-white transition-colors duration-300 text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
                            {/* Large Item */}
                            <div className="md:col-span-2 md:row-span-2 bg-[#1c1b1b]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group relative hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,0.15)]">
                                <img 
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 group-hover:scale-105" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkPSkyuJM4DRwRkExEOfAKYIEUlwQkzcyexAXIxnAZiE4pNCaXoigtWqlPn7ZWwAlxKB0Nw36A7zNCWZYpOMqtLIhjWCJJ7NakeyPz0o9ukrKE14z2gBfVE8W3AVaCyD9fG-3RVjSLZOcR4hur4reOp_wO9Fg7orv4soul7CdBk7SyxSoKHPkBEstBH6W56Yl2qkTLH3iuUmq0o2lncf-8BLBkY7pfSTziL7Y3sE1vGlWhPj7wKcWaUM8I-dta6lQG6QZC0xFQPkvE" 
                                    alt="Obsidian Epoch"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-10">
                                    <span className="inline-block px-4 py-1.5 mb-6 border border-[#a078ff]/30 rounded-full text-[#d0bcff] text-xs font-bold bg-[#131313]/50 backdrop-blur-md uppercase tracking-widest">Premium</span>
                                    <h3 className="text-4xl text-white mb-4 font-bold">The Obsidian Epoch</h3>
                                    <p className="text-[#cbc3d7] max-w-md text-lg">Exclusive high-fidelity assets for profound visual narratives.</p>
                                </div>
                            </div>

                            {/* Small Item 1 */}
                            <div className="bg-[#1c1b1b]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group relative hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] flex flex-col p-8 justify-between">
                                <div className="w-14 h-14 rounded-full bg-[#a078ff]/20 flex items-center justify-center border border-[#a078ff]/30 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-[#d0bcff] text-2xl">diamond</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl text-white mb-2 font-bold">Rare Artifacts</h3>
                                    <p className="text-[#cbc3d7]">Curated single-edition pieces for the elite collector.</p>
                                </div>
                            </div>

                            {/* Small Item 2 */}
                            <div className="bg-[#1c1b1b]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group relative hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]">
                                <img 
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwxyvWEeVof8r8oXlYRGvjgt8Z2TWb4-06_21qIf1xV1OnA6f34nwzbPHAhv-gTcu91iryLDy9-smyZkgRmU9qlLY3EAQj_W9e7alf93HCAEIqFN0xqyHcv9V-D_8QSDvPp2WkU-vXYzzRTyvcvn2QuSSGiFSFLufU8wmDbsAjJc72clYjMI7E8dsF8LH7wGf-bRp9rlGPygfyYNFuKJvL3O7vJQjIiAP0DvCBhPRw5uyKyjQ5bvSZu0rxQkuJgR8o4tchLs-O5tl5" 
                                    alt="Luminance"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#050505]/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl text-white mb-1 font-bold">Luminance</h3>
                                    <p className="text-[#cbc3d7] text-sm font-medium uppercase tracking-widest">Light-reactive sculptures</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Main Archive Section */}
                {!query && (
                    <section className="mx-auto max-w-full px-6 py-40 border-t border-white/5 bg-[#0e0e0e]/50">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 max-w-7xl mx-auto px-4">
                            <div>
                                <h2 className="text-5xl font-bold tracking-tight text-white uppercase">The Archive</h2>
                                <p className="text-[#958ea0] mt-3 font-bold tracking-[0.3em] uppercase text-[10px]">Masterworks of the digital age</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="glass p-4 hover:bg-white hover:text-black transition-all rounded-xl border-white/10">
                                    <span className="material-symbols-outlined text-sm">filter_list</span>
                                </button>
                                <button className="bg-white text-black px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#d0bcff] hover:text-[#340080] transition-all rounded-xl">
                                    Newest First
                                </button>
                            </div>
                        </div>
                        <div className="max-w-7xl mx-auto">
                            <ResultGrid />
                        </div>
                    </section>
                )}

                {/* Search Results Section */}
                {query && (
                    <div className="pt-32 min-h-screen">
                        <div className="max-w-7xl mx-auto px-6 mb-20">
                            <div className="glass border border-white/10 rounded-[2.5rem] p-16 flex flex-col items-center text-center space-y-10 shadow-2xl">
                                <div className="space-y-4">
                                    <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d0bcff]">Archive Search</p>
                                    <h2 className="text-6xl font-black text-white capitalize tracking-tighter">
                                        Exploration: <span className="italic opacity-80">{query}</span>
                                    </h2>
                                </div>
                                <div className="w-full flex justify-center">
                                    <Tabs />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto px-6 pb-40">
                            <ResultGrid />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
