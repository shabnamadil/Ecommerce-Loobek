import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const REVIEWS_URL = 'http://localhost:3500/reviews'

const initialState = {
    reviews: [],
    status: 'idle',
    error: null
}


export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    const response = await axios.get(REVIEWS_URL)
    return response.data
})


const reviewsDataSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder 
            .addCase(fetchReviews.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.reviews = action.payload
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const getReviews = (state) => state.reviews.reviews
export const getHappyReviewsStatus = (state) => state.reviews.status
export const getReviewsError= (state) => state.reviews.error


export default reviewsDataSlice.reducer