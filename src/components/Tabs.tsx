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
                        className={`${(activeTab === elem ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10')} transition-all cursor-pointer active:scale-95 px-6 py-2 rounded-full uppercase text-xs font-bold tracking-widest`}
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
