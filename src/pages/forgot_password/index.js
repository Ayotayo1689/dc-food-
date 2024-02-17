import React from 'react'
import ForgotPassword from "@/components/auth/forgotPassword";
import Head from "next/head";

const ForgotPasswordPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | Forgot Password</title>
                <meta
                    name="description"
                    content="Forgot your password? No worries! Retrieve or reset your password for your DC Foods account. Follow the instructions to regain access to your account and continue enjoying our services."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, forgot password, password recovery, password reset, account access, password retrieval, account security"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <ForgotPassword />
        </>
    )
}
export default ForgotPasswordPage
