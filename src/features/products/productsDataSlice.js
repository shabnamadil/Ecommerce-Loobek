import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const PRODUCTS_URL = 'http://localhost:3500/products'

const initialState = {
    products: [],
    activeFilters: {
        category: null,
        color: null,
        brand: null
    },
    status: 'idle',
    filteredProducts: [],
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(PRODUCTS_URL)
    return response.data
})

const calculateDiscountedPrice = (product) => {
    if (product.onSale && product.onSale.saleAvailabilty === true) {
        const discountedPrice = +product.price - Math.floor((+product.price / 100) * +product.onSale.saleCount);
        return discountedPrice;
    } else {
        return +product.price;
    }
};

const productsDataSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProductsByCategory(state, action) {
            try {
                if (state.status == 'succeded') {
                    if (state.activeFilters.category == action.payload) {
                        state.activeFilters.category = null
                    }
                    else {
                        state.activeFilters.category = action.payload
                    }
                    const categoryFilter = state.products.filter(product => product.category.name === action.payload)
                    const categoryColorFilter = state.products.filter(product => product.category.name === action.payload && product.color === state.activeFilters.color)
                    const subFilter = state.products.filter(product => product.category.sub_category === action.payload.name ||  product.category.sub_category === action.payload)

                    if (state.activeFilters.color != null) {
                        state.filteredProducts = categoryColorFilter
                        if (subFilter && action.payload.name) {
                            state.filteredProducts = subFilter
                        }
                    }
                    if (state.activeFilters.color == null) {
                        state.filteredProducts = categoryFilter
                        if (subFilter && action.payload.name) {
                            state.filteredProducts = subFilter
                        }
                    }
                    if (action.payload === "All products") {
                        state.filteredProducts = state.products
                    }
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        filterProductsByColor(state, action) {
            try {
                if (state.status == 'succeded') {
                    if (state.activeFilters.color == action.payload) {
                        state.activeFilters.color = null
                    }
                    else {
                        state.activeFilters.color = action.payload
                    }
                    if (state.activeFilters.category != null) {
                        const filterColor = state.products.filter(product => product.color === action.payload && product.category.name === state.activeFilters.category)
                        state.filteredProducts = filterColor
                    } else {
                        const filterColor = state.products.filter(product => product.color === action.payload)
                        state.filteredProducts = filterColor
                    }

                }
            } catch (err) {
                console.log(err.message);
            }
        },
        filterProductsByBrand(state, action) {
            try {
                if (state.status == 'succeded') {
                    if (state.activeFilters.brand == action.payload) {
                        state.activeFilters.brand = null
                    }
                    else {
                        state.activeFilters.brand = action.payload
                    }

                    if (state.activeFilters.category != null) {
                        const filterBrand = state.products.filter(product =>
                            product.brand === action.payload &&
                            product.category.name === state.activeFilters.category
                        )
                        state.filteredProducts = filterBrand
                    }
                    else if (state.activeFilters.color != null) {
                        const filterBrand = state.products.filter(product =>
                            product.brand === action.payload &&
                            product.color === state.activeFilters.color
                        )
                        state.filteredProducts = filterBrand
                    }
                    else if (state.activeFilters.category != null && state.activeFilters.color != null) {
                        const filterBrand = state.products.filter(product =>
                            product.brand === action.payload &&
                            product.color === state.activeFilters.color &&
                            product.category.name === state.activeFilters.category
                        )
                        state.filteredProducts = filterBrand
                    }
                    else {
                        const filterBrand = state.products.filter(product => product.brand === action.payload)
                        state.filteredProducts = filterBrand
                    }

                }

            } catch (err) {
                console.log(err.message);
            }
        },
        filterProductByBrandQuickView(state, action) {
            try {
                state.filteredProducts = state.products.filter((product) => product.brand === action.payload)
            } catch (err) {
                console.log(err.message);
            }
        },
        filterProductBySubCatQuickView(state, action) {
            try {
                state.filteredProducts = state.products.filter((product) => product.category.sub_category === action.payload)
            } catch (err) {
                console.log(err.message);
            }
        },
        filterProductsBySize(state, action) {
            try {
                state.filteredProducts = state.products.filter(product => {
                    return product.sizes.find(size => size.name === action.payload);
                });
            } catch (err) {
                console.log(err.message);
            }
        }, 
        filterProductByPrice(state, action) {
            try {
                if (action.payload === '$0 - $199') {
                    state.filteredProducts = state.products.filter(product => {
                        const price = calculateDiscountedPrice(product);
                        return price >= 0 && price <= 199;
                    });
                } else if (action.payload === '$200 - $399') {
                    state.filteredProducts = state.products.filter(product => {
                        const price = calculateDiscountedPrice(product);
                        return price >= 200 && price <= 399;
                    });
                } else if (action.payload === '$400 - $599') {
                    state.filteredProducts = state.products.filter(product => {
                        const price = calculateDiscountedPrice(product);
                        return price >= 400 && price <= 599;
                    });
                } else if (action.payload === '$600 - $799') {
                    state.filteredProducts = state.products.filter(product => {
                        const price = calculateDiscountedPrice(product);
                        return price >= 600 && price <= 799;
                    });
                } else if (action.payload === 'Over $799') {
                    state.filteredProducts = state.products.filter(product => {
                        const price = calculateDiscountedPrice(product);
                        return price >= 800
                    });
                }
            } catch (err) {
                console.log(err.message);
            }
        },         
        clearFilters(state, action) {
            state.activeFilters.category = null;
            state.activeFilters.color = null;
            state.activeFilters.brand = null
            state.filteredProducts = state.products
        },
        filterByOnSale(state, action) {
            try {
                const onSaleProducts = state.products.filter(product => product.onSale.saleAvailabilty === true)
                if (action.payload === true) {
                    state.filteredProducts = onSaleProducts
                } else {
                    state.filteredProducts = state.products
                }

            } catch (err) {
                log(err.message)
            }
        },
        searchProducts(state, action) {
            const query = action.payload.toLowerCase();

            const searchResults = state.products.filter(product =>
                product.title.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.color.toLowerCase().includes(query) ||
                product.category.name.toLowerCase().includes(query) ||
                product.price.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query)
            );

            state.filteredProducts = searchResults;
        },
        addToWishlist(state, action) {
            try {
                const product = action.payload
                if (!state.wishlist.find(item => item.id === product.id)) {
                    state.wishlist.push(action.payload)
                    state.wishlistCount += 1
                    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
                    localStorage.setItem("wishlistCount", JSON.stringify(state.wishlistCount));
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        removeFromWishlist(state, action) {
            try {
                const product = action.payload
                if (state.wishlist.find(item => item.id === product.id)) {
                    state.wishlist = state.wishlist.filter(item => item.id != product.id)
                    state.wishlistCount -= 1
                    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
                    localStorage.setItem("wishlistCount", JSON.stringify(state.wishlistCount));
                }
            } catch (err) {
                console.log(err.message);
            }
        },
        sortByPrice(state, action) {
            action.payload == "asc"
                ? (state.filteredProducts = state.products.sort(
                    (a, b) => calculateDiscountedPrice(a) - calculateDiscountedPrice(b)
                ))
                : (state.filteredProducts = state.products.sort(
                    (a, b) => calculateDiscountedPrice(b) - calculateDiscountedPrice(a)
                ));
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.products = action.payload
                state.filteredProducts = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const getAllProducts = (state) => state.products.products
export const getProductStatus = (state) => state.products.status
export const getProductError = (state) => state.products.error
export const getFilteredProducts = (state) => state.products.filteredProducts


export default productsDataSlice.reducer
export const {
    filterProductsByCategory,
    filterProductsByColor,
    filterProductsByBrand,
    filterProductByBrandQuickView,
    filterProductBySubCatQuickView,
    filterProductsBySize,
    filterProductByPrice,
    clearFilters,
    searchProducts,
    filterByOnSale,
    sortByPrice
} = productsDataSlice.actions