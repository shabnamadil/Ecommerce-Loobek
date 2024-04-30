import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const COLORS_URL = 'http://localhost:3500/colors'

const initialState = {
    colors: [],
    status: 'idle',
    error: null
}


export const fetchColors = createAsyncThunk('colors/fetchColors', async () => {
    const response = await axios.get(COLORS_URL)
    return response.data
})


const productColorsDataSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder 
            .addCase(fetchColors.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchColors.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.colors = action.payload
            })
            .addCase(fetchColors.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const getAllColors = (state) => state.colors.colors
export const getColorStatus = (state) => state.colors.status
export const getColorError= (state) => state.colors.error


export default productColorsDataSlice.reducer