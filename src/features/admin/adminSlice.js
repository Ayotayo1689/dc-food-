import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	getProductsByCategoriesThunk,
	getProductsThunk,
	getSingleProductThunk,
	getStaffsThunk,
	getUsersThunk,
	getOrdersThunk,
	getSingleProductCategoryThunk, getProductsTagsThunk,
} from "./adminThunk";

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
	allUsers: [],
	allOrders: [],
	allStaffs: [],
};

export const getProducts = createAsyncThunk(
	"admin/getProducts",
	getProductsThunk
);
export const getUsers = createAsyncThunk("admin/getUsers", getUsersThunk);
export const getStaffs = createAsyncThunk("admin/getStaffs", getStaffsThunk);
export const getOrders = createAsyncThunk("admin/getOrders", getOrdersThunk);

export const getSingleProduct = createAsyncThunk(
	"admin/getSingleProduct",
	getSingleProductThunk
);

export const getProductByCategories = createAsyncThunk(
	"admin/getProductByCategories",
	getProductsByCategoriesThunk
);

export const getProductTags = createAsyncThunk(
	"admin/getProductTags",
	getProductsTagsThunk
);

export const getSingleProductCategory = createAsyncThunk(
	"admin/getSingleProductCategory",
	getSingleProductCategoryThunk
);

const adminSlice = createSlice({
	name: "admin",
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
			.addCase(getProductTags.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductTags.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.tags = payload;
			})
			.addCase(getProductTags.rejected, (state, { payload }) => {
				state.isLoading = false;
			})

			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.products = payload;
			})
			.addCase(getProducts.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUsers.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.allUsers = payload;
			})
			.addCase(getUsers.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getStaffs.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getStaffs.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.allStaffs = payload;
			})
			.addCase(getStaffs.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getOrders.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOrders.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.allOrders = payload;
			})
			.addCase(getOrders.rejected, (state, { payload }) => {
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
			})
			.addCase(getSingleProductCategory.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleProductCategory.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.category = payload;
			})
			.addCase(getSingleProductCategory.rejected, (state, { payload }) => {
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
} = adminSlice.actions;
export default adminSlice.reducer;
