import React from 'react'
import SignIn from "@/components/auth/signin";
import Head from "next/head";

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | SignIn</title>
                <meta
                    name="description"
                    content="Login to your DC Foods account and access your personalized dashboard. Enjoy a seamless shopping experience and manage your orders with ease."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, login, user login, account login, personalized dashboard, shopping experience, order management"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <SignIn />
        </>
    )
}
export default LoginPage

