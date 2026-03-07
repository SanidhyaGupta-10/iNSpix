import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setQuery(text))
        // setText('') // Keeping text for better UX
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='flex bg-gray-900 gap-5 py-8 md:py-10 px-5 md:px-10'>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    className='w-full border-2 border-gray-700 bg-gray-800 text-white px-6 py-3 text-lg md:text-xl rounded outline-none focus:border-blue-500 transition'
                    type="text"
                    placeholder='Search anything (photos, videos, gifs)...' />

                <button
                    type="submit"
                    className='active:scale-95 cursor-pointer border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg md:text-xl rounded outline-none transition font-semibold'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
