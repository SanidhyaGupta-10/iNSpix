import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
import SkeletonCard from './SkeletonCard'

interface MediaData {
    id: string | number;
    type: string;
    title: string;
    thumbnail: string;
    src: string;
    url: string;
}

const ResultGrid = () => {
    const dispatch = useAppDispatch()
    const { query, activeTab, results, loading, error } = useAppSelector((state) => state.search)

    useEffect(function () {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data: MediaData[] = []
                if (activeTab === 'photos') {
                    const response = await fetchPhotos(query)
                    data = response.results.map((item: any) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description || 'photo',
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }))
                }
                if (activeTab === 'videos') {
                    const response = await fetchVideos(query)
                    data = response.videos.map((item: any) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }
                if (activeTab === 'gif') {
                    const response = await fetchGIF(query)
                    data = response.results.map((item: any) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url: item.url
                    }))
                }
                dispatch(setResults(data))
            } catch (err: any) {
                dispatch(setError(err.message || 'Something went wrong'))
            }
        }
        getData()
    }, [query, activeTab, dispatch])

    if (error) return <h1 className="text-center text-red-500 mt-10 p-20 font-black uppercase tracking-widest glass rounded-3xl mx-6">Error: {error}</h1>
    
    if (loading) {
        return (
            <div className='masonry w-full px-6 pb-20'>
                {[400, 300, 500, 350, 450, 300, 500, 400, 350, 450].map((h, i) => (
                    <SkeletonCard key={i} height={`${h}px`} />
                ))}
            </div>
        )
    }

    return (
        <div className='masonry w-full px-6 pb-20'>
            {results.map((item, idx) => {
                return (
                    <ResultCard key={`${item.id}-${idx}`} item={item} />
                )
            })}
        </div>
    )
}

export default ResultGrid
