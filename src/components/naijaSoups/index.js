import React from 'react'
import {Box} from "@chakra-ui/react";
import SoupHero from "@/components/naijaSoups/hero";
import ProductList from "@/components/naijaSoups/productList";


const NaijaSoups = () => {
    return (
        <Box>
            <SoupHero/>
            <ProductList/>
        </Box>
    )
}
export default NaijaSoups
