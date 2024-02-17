import endpoints from "@/features/api/endpoints";
import {apiSlice} from "@/services";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: endpoints.getProducts,
                tags: ['products'],
            }),
        }),
        getProductsByCategories: builder.query({
            query: () => ({
                url: endpoints.getProductsByCategories,
                method: 'get',
                invalidateTags: ['products'],
            }),
        }),
        getProductByCategoriesId: builder.query({
            query: (id) => ({
                url: endpoints.getProductByCategoriesId(id),
            }),
        }),
        getProductCoupon: builder.query({
            query: (id) => ({
                url: endpoints.getProductCoupon(id),
            }),
        }),
        getProductsById: builder.query({
            query: (id) => ({
                url: endpoints.getProductsById(id),
            }),
        }),
        getFavoriteProducts: builder.query({
            query: () => ({
                url: endpoints.getFavoriteProducts,
            }),
        }),
        getFavoriteProductsById: builder.query({
            query: (id) => ({
                url: endpoints.getFavoriteProductsById(id),
            }),
        }),

    }),
})


export const {useGetFavoriteProductsQuery,useGetFavoriteProductsByIdQuery, useGetProductsQuery, useGetProductsByCategoriesQuery, useGetProductByCategoriesIdQuery, useGetProductCouponQuery, useGetProductsByIdQuery } = productApi;

