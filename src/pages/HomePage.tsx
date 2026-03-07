import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import { useAppSelector } from '../redux/hooks'

const HomePage = () => {
    const { query } = useAppSelector((state) => state.search)

    return (
        <div className="pb-20">
            {/* Hero Section */}
            {!query && (
                <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pt-20">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-10"></div>
                        <img
                            alt="Hero background"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi8EvUtj-59wR0LvtfvKlh61QhMHo0k0woQQftMisrHZvgwNkB3hBLvCnN8ZzwgGugcJZSyXLoaPbeOgm7Sv9iWOstijVI1rL8hCjZ1OPA_p6MeAmZxMODhuVK6wKU1SodOCqTlr4KVDAKbpXqfG0x9VuBzrcV4wTi93oS55BHE1IzcNL_GTHKehneS9z9eNrbsBIQrgaZVJTbQN1HPWMymldkcyCO6Rb1slO1S2F_9Oo9ULs2K4stY-bfyhjefWjJ-m9vz-OI3oDy"
                        />
                    </div>

                    <div className="relative z-20 w-full max-w-4xl text-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl leading-tight">
                                Stunning royalty-free media <br className="hidden md:block" /> for your next project
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
                                Discover high-quality photos, videos, and gifs from across the web in one place.
                            </p>
                        </div>
                        <SearchBar />
                    </div>
                </section>
            )}

            {/* Content Section */}
            {query && (
                <div className="pt-24 min-h-screen">
                    <div className="sticky top-16 z-40 glass border-b border-white/5 bg-slate-950/50 py-4 mb-8">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
                            <h2 className="text-2xl font-bold text-white capitalize">
                                Results for "{query}"
                            </h2>
                            <div className="scale-90 md:scale-100 origin-right">
                                <Tabs />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6">
                        <ResultGrid />
                    </div>
                </div>
            )}

            {/* Trending Categories (When no query) */}
            {!query && (
                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-20">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-white">Trending Categories</h2>
                            <p className="text-slate-500 mt-1">Browse our most popular visual themes</p>
                        </div>
                        <button className="text-sm font-bold text-blue-500 hover:underline underline-offset-4">
                            View all categories
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Nature', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_1sITbvZyi7lXaetAXNtrmbKTjOlyDz8sYx1kC0xW-LUkf4_HBz300ki23AW2OCUo1fMK3l11iCI57ho7aS2tDnwCejtUIDPyAGWvHii5mF8b8pEgyYZYfxDmXG-bfDIG7jeBHouhkVjrfSanPzfEVyAYSLFlf7-Q6oIMfdaNhW073nj0S-HdQQxJSqFN1q5a08jngsPVR_3cyrOzYYItCx8JAGJwVNeok0uBYqJ6i2tDmUR77N3LeSf-5g6qsaY6phwHdD5izskt', count: '12.4k' },
                            { name: 'Architecture', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKDIK0pXFb6D74CKxoZ3twUC-C-q5FGqc_hc4S14kW9GHDhTs3eL-SoRda8A_bLBSKDUiryytfLwQsMGdSiZp5m_0U6cAPqS4JsbSsSqpsF0Z4CElrzm4_o4Ac6oHuSE3lL4bnYfBEw7wK1NesWhiMZfkMwyCFwbrKFFzWyf8BKC66dZsVpZsX0zcuC3kcrLvvWQUyFdPXdTuqgDI2chQByD9WU-qFDwsZP6qsCDTaEIXlcbrlVGJqXnbUHmLqUH57JThhQ-1l5OX7', count: '8.9k' },
                            { name: 'Minimal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfiT5oSEPJ4ei9AALE--Bh9yE5Og93o9sBIXDDFXkgdIuf7AdmKmdv3WM3-tzEHIuOyyCnmTlIu4VcEC-PSfdKGndS8CG-IKun0hRaX_gO22qzfCO9T3G2DaQbphvFpZtKzYCZoOm7mzNPUaLfqbdqz8F6ZZSbA-kdLowGQFt28Z0XmrgMalFPx3s8T8b6jS5jFIts59ctgWwg7LqW_JG6FVyjoPCtjJrgXEzlZVjyaxYPtmAE0LmnZOgEjzVDymA9fKIXNERQ-0yn', count: '15.2k' }
                        ].map((cat) => (
                            <div key={cat.name} className="group relative h-48 overflow-hidden rounded-xl cursor-pointer">
                                <img
                                    alt={cat.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={cat.img}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-xl font-bold text-white">{cat.name}</p>
                                    <p className="text-xs text-slate-400">{cat.count} images</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default HomePage
