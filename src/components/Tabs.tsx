import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useAppDispatch()
    const activeTab = useAppSelector((state) => state.search.activeTab)

    return (
        <div className='flex gap-5 p-10'>
            {tabs.map(function (elem, idx) {
                return (
                    <button
                        className={`${(activeTab === elem ? 'bg-blue-700' : 'bg-gray-500')} transition cursor-pointer active:scale-100 hover:bg-blue-600 px-5 py-2 rounded uppercase text-sm font-medium`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem))
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs
