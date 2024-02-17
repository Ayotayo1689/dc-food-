import React from 'react'
import Blog from "@/components/blog"
import Head from "next/head";
const BlogPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | Blogs</title>
                <meta
                    name="description"
                    content="Explore the DC Foods blog for interesting articles, recipes, and insights about Nigerian cuisine. Discover the rich flavors, cultural significance, and cooking techniques behind traditional Nigerian dishes."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, Nigerian cuisine, Nigerian food, Nigerian recipes, Nigerian dishes, Nigerian cooking, Nigerian culture, traditional food, Nigerian flavors, Nigerian insights"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>


            <Blog />
        </>
    )
}
export default BlogPage
