import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { setQuery } from '../redux/features/searchSlice'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(setQuery(text))
            navigate('/search')
        }
    }

    return (
        <form onSubmit={submitHandler} className="w-full group">
            <div className="relative flex items-center h-12">
                <div className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-xl group-focus-within:bg-white/[0.08] group-focus-within:border-[#a078ff]/40 transition-all duration-500"></div>
                
                <div className="relative w-full flex items-center px-4 gap-3">
                    <span className="material-symbols-outlined text-[#4a4a4a] group-focus-within:text-[#a078ff] transition-colors duration-500 text-xl">search</span>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1 bg-transparent border-none text-white placeholder-[#333333] focus:ring-0 text-[13px] font-medium"
                        placeholder="Search inspiration..."
                    />
                    
                    {text && (
                        <button 
                            type="button" 
                            onClick={() => setText('')}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#4a4a4a] hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined text-base">close</span>
                        </button>
                    )}

                    <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-white/5 opacity-40">
                        <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[8px] font-black text-[#958ea0] border border-white/10">⌘</span>
                        <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[8px] font-black text-[#958ea0] border border-white/10">K</span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchBar
