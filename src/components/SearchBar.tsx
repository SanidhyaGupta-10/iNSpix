import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setQuery(text))
    }

    return (
        <form onSubmit={submitHandler} className="w-full max-w-xl group">
            <div className="glass-search p-2 rounded-full flex items-center shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-300 hover:border-[#a078ff]/50 hover:shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-[#958ea0] ml-4 mr-2">search</span>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 bg-transparent border-none text-white placeholder-[#958ea0] focus:ring-0 text-base"
                    placeholder="Search the archive..."
                />
                <button 
                    type="submit"
                    className="shimmer bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.03] transition-all duration-300 shadow-2xl"
                >
                    Explore
                </button>
            </div>
        </form>
    )
}

export default SearchBar

