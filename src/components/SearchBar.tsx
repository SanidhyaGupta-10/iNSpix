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
        <div className="mx-auto max-w-2xl px-5">
            <form onSubmit={submitHandler} className='glass flex w-full items-stretch rounded-xl p-2 shadow-2xl'>
                <div className="flex items-center justify-center pl-4 text-slate-400">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    className='w-full border-none bg-transparent px-4 py-4 text-white placeholder-slate-400 focus:ring-0 text-lg outline-none'
                    type="text"
                    placeholder='Search high-resolution media...'
                />

                <button
                    type="submit"
                    className='rounded-lg bg-blue-600 px-8 text-white font-bold transition-all hover:bg-blue-500 shadow-lg shadow-blue-500/20 active:scale-95'
                >
                    Search
                </button>
            </form>

            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-medium text-slate-400">
                <span>Trending:</span>
                {['Nature', 'Architecture', 'Travel', 'Minimal'].map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => {
                            setText(tag)
                            dispatch(setQuery(tag))
                        }}
                        className="hover:text-white underline underline-offset-4 decoration-blue-500/50 transition-colors"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SearchBar

