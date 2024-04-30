import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const BRANDS_URL = 'http://localhost:3500/brands'

const initialState = {
    brands: [],
    status: 'idle',
    error: null
}


export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
    const response = await axios.get(BRANDS_URL)
    return response.data
})


const productBrandsDataSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder 
            .addCase(fetchBrands.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.brands = action.payload
            })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const getAllBrands = (state) => state.brands.brands
export const getBrandStatus = (state) => state.brands.status
export const getBrandError= (state) => state.brands.error


export default productBrandsDataSlice.reducer