import endpoints from "@/features/api/endpoints";
import { apiSlice } from "@/services";

export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getContact: builder.mutation({
            query: (data) => ({
                url: endpoints.contactUs,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetContactMutation } = contactApi;
