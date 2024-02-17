
import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import TermsHero from "@/components/hero/terms";
import TermsBody from "@/components/Terms/terms";

const TermsAndConditions = () => {

    return (
        <Box>
            <Head>
                <title>DC Foods | Your One-Stop FoodStuff Shop</title>
                <meta
                    name="description"
                    content="At DC Foods, we are your one-stop foodstuff shop. Get high-quality foodstuff, beverages, and more delivered directly to your doorstep."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, One-Stop FoodStuff Shop, high-quality foodstuff, beverages, doorstep delivery"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>

            <Box position={"relative"}>
                <TermsHero text={"Get high quality food stuff, beverages and more delivered directly to your doorstep"} heading={"Terms  and Conditions of Service"} />
                <TermsBody/>
            </Box>

        </Box>
    );
};

export default TermsAndConditions;
