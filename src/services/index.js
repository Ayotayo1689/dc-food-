import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from "@/features/api/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://api.dcfood.tanta.com.ng/",
    }),
    endpoints: () => ({}),
});

