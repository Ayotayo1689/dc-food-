import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	getProductsByCategoriesThunk,
	getProductsThunk,
	getSingleProductThunk,
} from "./productThunk";

const initialState = {
	isLoading: false,
	products: [],
	product: null,
	bestCombo: [],
	favorites: [],
	category: [],
	groupId: 1,
	selectedTab: 0,
	categoryId: 1,
	filteredProducts: [],
};

export const getProducts = createAsyncThunk(
	"products/getProducts",
	getProductsThunk
);

export const getSingleProduct = createAsyncThunk(
	"products/getSingleProduct",
	getSingleProductThunk
);

export const getProductByCategories = createAsyncThunk(
	"products/getProductByCategories",
	getProductsByCategoriesThunk
);

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setProduct: (state, { payload }) => {
			state.product = payload;
		},
		setGroupId: (state, { payload }) => {
			state.groupId = payload;
		},

		setSelectedTab: (state, { payload }) => {
			state.selectedTab = payload;
		},
		setCategoryId: (state, { payload }) => {
			state.categoryId = payload;
		},
		setFilteredProducts: (state, { payload }) => {
			state.filteredProducts = state.products?.filter(
				(item) => item?.category === payload
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.products = payload;
				state.bestCombo = payload.filter(
					(product) => product.tags && product.tags.some((tag) => tag === 2)
				);
				state.favorites = payload.filter(
					(product) => product.tags && product.tags.some((tag) => tag === 1)
				);
			})
			.addCase(getProducts.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getSingleProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.product = payload;
			})
			.addCase(getSingleProduct.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getProductByCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductByCategories.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.category = payload;
			})
			.addCase(getProductByCategories.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const {
	testing,
	setProduct,
	setGroupId,
	setSelectedTab,
	setFilteredProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
