import React from 'react'
import About from "@/components/about";
import Head from "next/head";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | About us</title>
                <meta
                    name="description"
                    content="At DC Foods, we are passionate about bringing the authentic tastes and vibrant flavors of Nigerian cuisine to your doorstep. We provide a wide selection of high-quality Nigerian foodstuffs, sourced directly from local farmers and suppliers."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, Nigerian cuisine, Nigerian food, Nigerian foodstuffs, authentic flavors, local farmers, high-quality food, doorstep delivery"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <About />
        </>
    )
}
export default AboutPage
