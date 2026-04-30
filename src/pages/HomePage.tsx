import ResultGrid from '../components/ResultGrid'
import { useAppDispatch } from '../redux/hooks'
import { setQuery } from '../redux/features/searchSlice'
import { useEffect } from 'react'

const HomePage = () => {
    const dispatch = useAppDispatch();

    // Reset query when landing on home to show general archive
    useEffect(() => {
        dispatch(setQuery(''));
    }, [dispatch]);

    return (
        <div className="relative min-h-screen bg-[#131313] pt-24">
            <div className="relative z-10 noise-bg min-h-screen">
                {/* Hero Section */}
                <header className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
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
                        <span className="text-[#a078ff] text-[10px] font-black uppercase tracking-[0.5em] mb-6">Noir Luxe Edition</span>
                        <h1 className="text-6xl md:text-9xl text-white mb-8 tracking-tighter drop-shadow-2xl font-black italic uppercase">
                            Curate<br/>The Void.
                        </h1>
                        <p className="text-lg md:text-xl text-[#cbc3d7] max-w-xl mb-12 font-medium opacity-60 uppercase tracking-[0.3em] text-[10px]">
                            High-fidelity digital craftsmanship for the discerning explorer.
                        </p>
                        <div className="flex gap-6">
                            <button className="bg-white text-black px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all">Start Exploring</button>
                            <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">Latest Drops</button>
                        </div>
                    </div>
                </header>

                {/* Featured Collections (Bento Grid) */}
                <section className="max-w-7xl mx-auto px-6 py-32 z-10 relative">
                    <div className="flex items-center justify-between mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl text-white font-black tracking-tighter uppercase italic">The Spotlight</h2>
                            <p className="text-[#958ea0] mt-2 font-black tracking-[0.3em] uppercase text-[9px] opacity-60">Hand-picked excellence</p>
                        </div>
                        <button className="text-[#d0bcff] hover:text-white transition-colors duration-300 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
                        <div className="md:col-span-2 md:row-span-2 bg-[#1c1b1b]/40 backdrop-blur-xl border border-white/5 rounded-[3rem] overflow-hidden group relative hover:border-[#a078ff]/30 transition-all duration-700">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkPSkyuJM4DRwRkExEOfAKYIEUlwQkzcyexAXIxnAZiE4pNCaXoigtWqlPn7ZWwAlxKB0Nw36A7zNCWZYpOMqtLIhjWCJJ7NakeyPz0o9ukrKE14z2gBfVE8W3AVaCyD9fG-3RVjSLZOcR4hur4reOp_wO9Fg7orv4soul7CdBk7SyxSoKHPkBEstBH6W56Yl2qkTLH3iuUmq0o2lncf-8BLBkY7pfSTziL7Y3sE1vGlWhPj7wKcWaUM8I-dta6lQG6QZC0xFQPkvE" 
                                alt="Obsidian Epoch"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-12">
                                <span className="inline-block px-5 py-2 mb-8 border border-[#a078ff]/30 rounded-full text-[#d0bcff] text-[10px] font-black bg-[#131313]/50 backdrop-blur-md uppercase tracking-[0.3em]">Curated</span>
                                <h3 className="text-5xl text-white mb-6 font-black tracking-tighter uppercase italic">The Obsidian Epoch</h3>
                                <p className="text-[#cbc3d7] max-w-md text-lg opacity-60 leading-relaxed font-medium">Deep immersion into high-fidelity monochrome aesthetics.</p>
                            </div>
                        </div>

                        <div className="bg-[#1c1b1b]/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden group relative hover:border-[#a078ff]/30 transition-all duration-500 flex flex-col p-10 justify-between">
                            <div className="w-16 h-16 rounded-3xl bg-[#a078ff]/10 flex items-center justify-center border border-[#a078ff]/20">
                                <span className="material-symbols-outlined text-[#d0bcff] text-3xl font-black">diamond</span>
                            </div>
                            <div>
                                <h3 className="text-2xl text-white mb-3 font-black tracking-tight uppercase">Rare Artifacts</h3>
                                <p className="text-[#958ea0] text-[10px] font-black uppercase tracking-[0.2em] leading-loose opacity-60">Exclusive single-edition pieces for the elite collector.</p>
                            </div>
                        </div>

                        <div className="bg-[#1c1b1b]/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden group relative hover:border-[#a078ff]/30 transition-all duration-500">
                            <img 
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwxyvWEeVof8r8oXlYRGvjgt8Z2TWb4-06_21qIf1xV1OnA6f34nwzbPHAhv-gTcu91iryLDy9-smyZkgRmU9qlLY3EAQj_W9e7alf93HCAEIqFN0xqyHcv9V-D_8QSDvPp2WkU-vXYzzRTyvcvn2QuSSGiFSFLufU8wmDbsAjJc72clYjMI7E8dsF8LH7wGf-bRp9rlGPygfyYNFuKJvL3O7vJQjIiAP0DvCBhPRw5uyKyjQ5bvSZu0rxQkuJgR8o4tchLs-O5tl5" 
                                alt="Luminance"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505]/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10">
                                <h3 className="text-2xl text-white mb-2 font-black tracking-tight uppercase">Luminance</h3>
                                <p className="text-[#a078ff] text-[9px] font-black uppercase tracking-[0.3em]">Light-reactive series</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Archive Preview */}
                <section className="bg-[#0e0e0e]/50 border-t border-white/5 py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                            <div>
                                <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">The Full Archive</h2>
                                <p className="text-[#958ea0] mt-2 font-black tracking-[0.3em] uppercase text-[9px] opacity-60">Explore 50,000+ digital assets</p>
                            </div>
                        </div>
                        <ResultGrid />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage
