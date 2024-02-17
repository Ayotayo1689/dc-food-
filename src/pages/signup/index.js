import React from 'react'
import SignUp from "@/components/auth/signup";
import {useToast} from "@chakra-ui/react";
import Head from "next/head";

const SignupPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | Sign Up</title>
                <meta
                    name="description"
                    content="Sign up for a DC Foods account and enjoy a personalized shopping experience. Create your account to access exclusive offers, manage your orders, and receive updates on the latest products."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, sign up, user registration, personalized shopping experience, exclusive offers, order management, latest products"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <SignUp />
        </>
    )
}
export default SignupPage
