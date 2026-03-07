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
        <div className='w-full sm:w-[45vw] md:w-[28vw] lg:w-[18vw] relative h-80 bg-gray-900 rounded-xl overflow-hidden group shadow-lg'>
            <a target='_blank' rel="noreferrer" className='h-full block' href={item.url}>
                {item.type === 'photo' && <img className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' src={item.src} alt={item.title} />}
                {item.type === 'video' && <video className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' autoPlay loop muted src={item.src}></video>}
                {item.type === 'gif' && <img className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-110' src={item.src} alt={item.title} />}
            </a>
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-4 absolute bottom-0 bg-black/60 backdrop-blur-sm text-white translate-y-2 group-hover:translate-y-0 transition duration-300'>
                <h2 className='text-sm md:text-base font-semibold capitalize truncate' title={item.title}>{item.title}</h2>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        addToCollection(item)
                    }}
                    className='bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded px-4 py-1.5 cursor-pointer font-medium text-sm transition shrink-0'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard
