import Products from "@/components/products";
import {Box, Button} from "@chakra-ui/react";
import {FiShoppingCart} from "react-icons/fi";
import React from "react";
import { useRouter } from 'next/router';
import {CartItemsCheck} from "@/components/navbar/NavBar";
import Head from "next/head";
import ViewCartBtn from "@/components/_common/buttons/ViewCart";

const ProductsPage = () => {
    const router = useRouter();

    const handleOpenCart = () => {
        router.push('/cart');
    };
    return (
        <>
            <Head>
                <title>DC Foods | Products</title>
                <meta
                    name="description"
                    content="Explore a wide range of products at DC Foods. We offer beverages, canned foods, cooking oils, flour, grains, legumes, pasta, and noodles. Find high-quality ingredients for your meals and culinary needs."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="DC Foods, Products, beverages, canned foods, cooking oils, flour, grains, legumes, pasta, noodles, high-quality ingredients"
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <Products />
           <ViewCartBtn />
        </>
    )
}

export default ProductsPage