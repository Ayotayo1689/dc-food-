import {apiSlice} from "@/services";
import endpoints from "@/features/api/endpoints";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrderById: builder.query({
            query: (id) => ({
                url: endpoints.getOrderById(id),
            })
        }),
        getOrdersCallback: builder.query({
            query: (id) => ({
                url: endpoints.getOrdersCallback(id),
            })
        }),
        getPaymentSummary: builder.query({
            query: (id) => ({
                url: endpoints.getPaymentSummary(id),
            })
        }),
    })
})

export const {useGetOrderByIdQuery, useGetOrdersCallbackQuery, useGetPaymentSummaryQuery } = orderApi;