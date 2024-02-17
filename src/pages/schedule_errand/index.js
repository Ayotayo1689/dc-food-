import React from 'react'
import Head from "next/head";
import ScheduleErrand from "@/components/scheduleErrand";

const ScheduleErrandPage = () => {
    return (
        <>
            <Head>
                <title>DC Foods | Schedule errand</title>
                <meta
                    name="description"
                    content="Get high quality food stuff, beverages and more delivered directly to your doorstep"
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
            <ScheduleErrand/>
        </>
    )
}
export default ScheduleErrandPage

