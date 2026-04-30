import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { addCollection, addedToast } from '../redux/features/collectionSlice'
import { MediaItem } from '../types/types'

interface ResultCardProps {
    item: MediaItem;
}

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
    const dispatch = useAppDispatch()

    const addToCollection = (item: MediaItem) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

    return (
        <div className='masonry-item relative bg-[#0e0e0e] rounded-[2rem] overflow-hidden group border border-white/[0.03] transition-all duration-700 hover:border-[#a078ff]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(160,120,255,0.05)]'>
            <a target='_blank' rel="noreferrer" className='block overflow-hidden relative' href={item.url}>
                {item.type === 'photo' && <img className='w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110' src={item.src} alt={item.title} />}
                {item.type === 'video' && <video className='w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110' autoPlay loop muted src={item.src}></video>}
                {item.type === 'gif' && <img className='w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110' src={item.src} alt={item.title} />}
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </a>
            
            {/* Action Bar */}
            <div className='absolute inset-x-3 bottom-3 bg-black/40 backdrop-blur-3xl border border-white/[0.08] rounded-[1.5rem] p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl'>
                <div className="flex-1 min-w-0 mr-4">
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className='text-[11px] font-black text-white truncate uppercase tracking-tighter' title={item.title}>{item.title}</h2>
                    </div>
                    <div className="flex items-center gap-2 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d0bcff]"></div>
                        <p className="text-[8px] text-[#cbc3d7] font-black uppercase tracking-[0.2em]">{item.type}</p>
                    </div>
                </div>
                
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        addToCollection(item)
                    }}
                    className='group/btn relative flex items-center justify-center bg-white text-black hover:bg-[#a078ff] hover:text-white rounded-xl px-6 py-2.5 cursor-pointer font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 shadow-xl'
                >
                    <span className="relative z-10">Collect</span>
                    <div className="absolute inset-0 bg-[#a078ff] scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500 rounded-xl"></div>
                </button>
            </div>

            {/* Type Badge (Top Left) */}
            <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                <span className="material-symbols-outlined text-[10px] text-[#d0bcff]">
                    {item.type === 'photo' ? 'image' : item.type === 'video' ? 'videocam' : 'gif'}
                </span>
                <span className="text-[8px] font-black text-white uppercase tracking-widest">{item.type}</span>
            </div>
            
            {/* External Link (Top Right) */}
            <a 
                href={item.url} 
                target="_blank" 
                rel="noreferrer"
                className="absolute top-4 right-4 bg-white/10 hover:bg-white text-white hover:text-black w-8 h-8 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0 backdrop-blur-xl border border-white/10"
            >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
        </div>
    )
}

export default ResultCard
