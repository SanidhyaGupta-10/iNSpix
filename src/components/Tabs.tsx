import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useAppDispatch()
    const activeTab = useAppSelector((state) => state.search.activeTab)

    return (
        <div className='flex gap-4 p-8 justify-center'>
            {tabs.map(function (elem, idx) {
                return (
                    <button
                        className={`${(activeTab === elem ? 'bg-[#a078ff] text-white shadow-lg shadow-[#a078ff]/30' : 'bg-white/5 backdrop-blur-md text-slate-400 hover:text-white hover:bg-white/10')} transition-all duration-500 cursor-pointer active:scale-95 px-10 py-3 rounded-full uppercase text-[10px] font-black tracking-[0.2em] border border-white/5`}
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
