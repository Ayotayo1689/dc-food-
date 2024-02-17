import React, {useEffect, useState} from "react";
import {Box, Flex, Heading, Image} from "@chakra-ui/react";
import {productImages} from "@/components/scheduleErrand/data";




function ProductsWeDeliver() {
    return(
        <Box>
            <Flex direction={"column"} mt={"2rem"}>
                <Heading
                    textAlign={"center"}
                    size={"xl"}
                    fontWeight={"700"}
                    color={"#F2994A"}
                    letterSpacing={"1px"}
                >
                    Products We Deliver
                </Heading>
                <Box>
                    <Image src="/assets/errand/products.svg"/>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProductsWeDeliver