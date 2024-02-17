import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getBlogCommentByIdThunk, getBlogsThunk, getSingleBlogThunk, postBlogCommentThunk} from "@/features/api/blog/blogThunk";
import {createStandaloneToast} from "@chakra-ui/react";




const { toast } = createStandaloneToast();


const initialState = {
    isLoading: false,
    success: false,
    blogs: [],
    comments: [],
    blog: null,
    filteredBlogs: [],
    searchText: "",
};

export const getBlogs = createAsyncThunk("blogs/getBlogs", getBlogsThunk);

export const getSingleBlog = createAsyncThunk(
    "blogs/getSingleBlog",
    getSingleBlogThunk
);
export const getBlogCommentById = createAsyncThunk(
    "blogs/getBlogCommentById",
    getBlogCommentByIdThunk
);
export const postBlogComment = createAsyncThunk(
    "blogs/postBlogComment",
    postBlogCommentThunk
);

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        testing: (state) => {
            console.log(state);
        },
        setBlogs: (state, { payload }) => {
            state.blogs = payload;
        },
        setIndex: (state, { payload }) => {
            state.index = payload;
        },
        setSearchText: (state, { payload }) => {
            if (payload) {
                state.searchText = payload;
            } else {
                state.searchText = "";
            }
        },
        SetFilteredBlogs: (state, { payload }) => {
            let tempData = [...state.blogs];
            if (state.searchText) {
                state.filteredBlogs = tempData.filter((blog) => {
                    return blog.title
                        .toLowerCase()
                        .includes(state.searchText.toLowerCase());
                });
            } else {
                state.filteredBlogs = tempData;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogs.fulfilled, (state, { payload }) => {
                state.isLoading = false;

                state.blogs = payload;
            })
            .addCase(getBlogs.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getSingleBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleBlog.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.blog = payload;
            })
            .addCase(getSingleBlog.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getBlogCommentById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogCommentById.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.comments = payload;
            })
            .addCase(getBlogCommentById.rejected, (state) => {
                state.isLoading = false;

            })
            .addCase(postBlogComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postBlogComment.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.success = true;
                toast({
                    title: "Awesome!",
                    description: "Comment successfully posted",
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                    variant: "left-accent",
                });
            })
            .addCase(postBlogComment.rejected, (state, { payload }) => {
                state.isLoading = false;
                const msg = Object.values(payload).join("\n");

                console.log(msg);
                toast({
                    title: "An error occurred",
                    description: msg,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    variant: "left-accent",
                    position: "top-right",
                });
            })
    },
});

export const {
    setBlogs,
    setIndex,
    setSearchText,
    SetFilteredBlogs,
} = blogsSlice.actions;

export default blogsSlice.reducer;
