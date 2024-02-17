import React from 'react'
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import BigSale from "../../../public/assets/bigsale.png"


const FlashSalesBanner = () => {

    return (
        <Box
            className="two-color"
            mb={'3rem'}
py={12}

        >
            <Box backgroundImage={"/assets/flashsalebg.svg"}
                 backgroundPosition={"right top"}
                 backgroundRepeat={"no-repeat"}
                 backgroundSize={"100%"}>
                <Box
                    // maxW={'7xl'}
                    pb={{base: "0", md: '56px', lg: "56px"}}>
                    <Container
                        display={"flex"}
                        maxW={'7xl'}
                        overflow="hidden"
                        flexDir={{base: "row", md: 'row'}}
                        align="center"
                        justify="space-between"
                        p={4}
                        fontFamily="Inter"
                        position={"relative"}
                    >
                        <Box flex="1" mr={4} ml={{base: "0", md: "0", lg: "5rem"}} >
                            <Box  mx={{base: 'auto', md: '0'}} w={{base: "100%", sm: '100%', md: "100%", lg: '60%'}} mt={{base: "10px", md: "110px"}}>
                                <Image src={BigSale} alt="big sale" h="auto" w="200px"/>
                            </Box>

                            <Text fontSize="1.5rem" display={{base: "none", md: "none", lg: "block"}}>
                                Save up to <span
                                style={{
                                    color: 'red',
                                    fontWeight: '600',
                                    fontSize: '3rem',
                                    borderBottom: '3px solid'
                                }}>25% </span> off
                                on selected items.
                            </Text>
                            <Text fontSize="1.5rem" mt={2} display={{base: "none", md: "none", lg: "block"}}>
                                Don&apos;t miss out on this amazing offer.
                            </Text>
                        </Box>
                        <Box pt={{base: "0", md: '150px', lg: "150px"}} flex="1"
                             // border={"2px solid blue"}
                             // position={"relative"}
                             // right={{base: "0", md: '-50px', lg: "-50px"}}
                        >
                            {/*<Box display={{base: "none", md: "none", lg: "block"}}>*/}
                            {/*    <img*/}
                            {/*        src="/assets/flashSales/topLine.png"*/}
                            {/*        alt="Image"*/}
                            {/*        style={{position: 'absolute', top: '-5px', right: '30px', height: "30rem",}}*/}
                            {/*    /></Box>*/}
                            <img
                                src="/assets/hero-image.webp"
                                alt="Flash Sale"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    // position: "relative",
                                    right: "30px",
                                    overflow: "visible",
                                    margin: "0",
                                    zIndex: "1"
                                }}
                            />
                        </Box>
                    </Container>
                </Box></Box>
        </Box>
    )
}
export default FlashSalesBanner
