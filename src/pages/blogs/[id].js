import React, {useEffect} from "react";
import SingleBlogPage from "../../components/blog/SingleBlog";

import Head from "next/head";
import {useGetBlogByIdQuery} from "@/features/api/blog";

import {useRouter} from "next/router";
import dayjs from "dayjs";
import {getBlogCommentById} from "@/features/api/blog/blogSlice";
import {useDispatch, useSelector} from "react-redux";
import { Skeleton} from "@chakra-ui/react";


const SingleBlog = ({blog}) => {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useDispatch()
    const {comments, isLoading} = useSelector((store) => store.blogs)


    const linkId = parseInt(id)
    console.log(typeof(linkId))
    let data
    if (linkId !== undefined || true) {
        const {data: blogData} = useGetBlogByIdQuery(linkId)
        data = blogData
    }
    console.log(data)
    useEffect(() => {
        if (linkId !== undefined || true) {
            dispatch(getBlogCommentById(linkId))
        }
    }, [linkId])

    return (
    <>
        <Head>
            <meta
                name="description"
                content={data?.content}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="keywords"
                content={blog?.keywords}
            />
            <meta name="author" content={data?.author_name} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="icon" href="/assets/favicon.ico" />
        </Head>

        <Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"} w="100%">
        <SingleBlogPage title={data?.title} name={data?.author_name}
                           date_created={dayjs(data?.date_created).format('DD/MM/YYYY')}
                           description={data?.content}
                        image={data?.image} comments={comments?.comments} id={id} /></Skeleton>
    </>
    )
};
export default SingleBlog
//
