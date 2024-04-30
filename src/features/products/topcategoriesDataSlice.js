import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const TOP_CATEGORIES_URL = 'http://localhost:3500/top-categories'

const initialState = {
    topCategories: [],
    status: 'idle',
    error: null
}


export const fetchTopCategories = createAsyncThunk('topCategories/fetchToPCategories', async () => {
    const response = await axios.get(TOP_CATEGORIES_URL)
    return response.data
})


const TopCategoriesDataSlice = createSlice({
    name: 'topCategories',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder 
            .addCase(fetchTopCategories.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTopCategories.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.topCategories = action.payload
            })
            .addCase(fetchTopCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const getAllTopCategories = (state) => state.topCategories.topCategories
export const getToptCategoryStatus = (state) => state.topCategories.status
export const getTopCategoryError = (state) => state.topCategories.error

export default TopCategoriesDataSlice.reducer