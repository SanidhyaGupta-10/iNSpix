import { useAppDispatch, useAppSelector } from "../redux/hooks"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection = useAppSelector(state => state.collection.items)
  const dispatch = useAppDispatch()

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear your collection?')) {
      dispatch(clearCollection())
    }
  }

  return (
    <div className="overflow-auto px-5 md:px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-white border-l-4 border-indigo-600 pl-4">
            Your Collection
          </h2>
          <button 
            onClick={clearAll} 
            className="active:scale-95 transition cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-bold rounded-lg shadow-lg"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-4xl md:text-5xl text-gray-500 text-center font-bold mb-4">
            Collection is Empty
          </h2>
          <p className="text-gray-400 text-xl">Start exploring and save your favorites!</p>
        </div>
      )}

      <div className='flex justify-start w-full flex-wrap gap-6 pb-10'>
        {collection.map((item, idx) => (
          <div key={`${item.id}-${idx}`}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
