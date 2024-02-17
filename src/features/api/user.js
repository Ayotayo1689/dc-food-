import endpoints from "@/features/api/endpoints";
import {apiSlice} from "@/services";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({
            query: () => ({
                url: endpoints.user,
                method: "GET",
            })
        }),
        editUser: builder.mutation({
            query: (body) => ({
                url: endpoints.user,
                method: "PATCH",
                body,
            })
        }),
        updateUser: builder.mutation({
            query: (body) => ({
                url: endpoints.user,
                method: "PUT",
                body,
            })
        }),
        deleteUser: builder.mutation({
            query: () => ({
                url: endpoints.user,
                method: "DELETE",
            })
        })
    })
})

export const {useGetUserQuery, useEditUserMutation, useUpdateUserMutation, useDeleteUserMutation} = userApi;