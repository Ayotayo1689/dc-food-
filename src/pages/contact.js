import React from 'react'
import Contact from "@/components/contact";
import Head from "next/head";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | Contact Us</title>
                <meta
                    name="description"
                    content="Contact DC Foods for inquiries, feedback, or to place an order. We provide delivery services to Lagos state, Ogun state, and Oyo state, bringing authentic Nigerian cuisine to your doorstep."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, Contact Us, Nigerian cuisine, Nigerian food, Lagos state, Ogun state, Oyo state, doorstep delivery, order inquiries"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <Contact />
        </>
    )
}
export default ContactPage

