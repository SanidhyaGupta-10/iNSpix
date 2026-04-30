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
        <div className='masonry-item relative bg-[#0e0e0e] rounded-3xl overflow-hidden group border border-white/5 transition-all duration-500 hover:border-[#a078ff]/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]'>
            <a target='_blank' rel="noreferrer" className='block overflow-hidden' href={item.url}>
                {item.type === 'photo' && <img className='w-full object-cover object-center transition duration-700 group-hover:scale-110' src={item.src} alt={item.title} />}
                {item.type === 'video' && <video className='w-full object-cover object-center transition duration-700 group-hover:scale-110' autoPlay loop muted src={item.src}></video>}
                {item.type === 'gif' && <img className='w-full object-cover object-center transition duration-700 group-hover:scale-110' src={item.src} alt={item.title} />}
            </a>
            
            {/* Action Bar */}
            <div className='absolute inset-x-4 bottom-4 glass rounded-[1.25rem] p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
                <div className="flex-1 min-w-0 mr-3">
                    <h2 className='text-xs font-bold text-white truncate uppercase tracking-tight' title={item.title}>{item.title}</h2>
                    <p className="text-[9px] text-[#d0bcff] font-bold uppercase tracking-[0.2em] mt-1">{item.type}</p>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        addToCollection(item)
                    }}
                    className='bg-[#a078ff] text-[#340080] hover:scale-105 active:scale-95 rounded-xl px-5 py-2 cursor-pointer font-bold text-[10px] uppercase tracking-widest transition-all shrink-0 shadow-[0_0_15px_rgba(160,120,255,0.3)]'
                >
                    Collect
                </button>
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] font-bold text-white uppercase tracking-widest">{item.type}</span>
            </div>
        </div>
    )
}

export default ResultCard
