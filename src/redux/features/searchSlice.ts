import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MediaItem } from '../../types/types';

interface SearchState {
    query: string;
    activeTab: 'photos' | 'videos' | 'gif' | string;
    results: MediaItem[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    query: '',
    activeTab: 'photos',
    results: [],
    loading: false,
    error: null
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        },
        setActiveTabs(state, action: PayloadAction<string>) {
            state.activeTab = action.payload
        },
        setResults(state, action: PayloadAction<MediaItem[]>) {
            state.results = action.payload
            state.loading = false
        },
        setLoading(state) {
            state.loading = true
            state.error = null
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
        clearResults(state) {
            state.results = []
        }
    }
})



export const {
    setQuery,
    setActiveTabs,
    setError,
    setLoading,
    setResults,
    clearResults
} = searchSlice.actions


export default searchSlice.reducer;