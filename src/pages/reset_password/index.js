import React from 'react'
import ResetPassword from "@/components/auth/resetPassword";
import Head from "next/head";

const ResetPasswordPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | Reset Password</title>
                <meta
                    name="description"
                    content="Reset or change your password for your DC Foods account. Follow the instructions to securely reset your password and regain access to your account."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, reset password, change password, password reset, password change, account security, password recovery"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <ResetPassword />
        </>
    )
}
export default ResetPasswordPage
