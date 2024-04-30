import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const CATEGORIES_URL = 'http://localhost:3500/categories'

const initialState = {
    categories: [],
    CLickedCategory: [],
    status: 'idle',
    error: null
}


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get(CATEGORIES_URL)
    return response.data
})


const productCategoriesDataSlice = createSlice({
    name: 'productCategories',
    initialState,
    reducers: {
        clickedCategory(state, action) {
            try {
                state.CLickedCategory = action.payload
            } catch (err) {
                console.log(err.message);
            }
        }
    },
    extraReducers(builder) {
        builder 
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const getAllProductCategories = (state) => state.productCategories.categories
export const getProductCategoryStatus = (state) => state.productCategories.status
export const getProductCategoryError = (state) => state.productCategories.error
export const getClickedCategory = (state) => state.productCategories.CLickedCategory

export default productCategoriesDataSlice.reducer
export const {clickedCategory} = productCategoriesDataSlice.actions