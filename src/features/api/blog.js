import {apiSlice} from "@/services";
import endpoints from "@/features/api/endpoints";

export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => ({
                url: endpoints.getBlogs,
            })
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: endpoints.getBlogById(id),
            })
        }),
        getBlogCommentsById: builder.query({
            query: (id) => ({
                url: endpoints.getBlogCommentsById(id),
            })
        }),
        getBlogComments: builder.query({
            query: () => ({
                url: endpoints.getBlogComments,
            })
            }),

    })
})

export const {useGetBlogsQuery, useGetBlogByIdQuery, useGetBlogCommentsByIdQuery, useGetBlogCommentsQuery } = blogApi;