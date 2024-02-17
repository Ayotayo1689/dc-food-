import React from 'react'
import {Box, Container, Flex, Image, Text} from "@chakra-ui/react";
import CustomButton from "@/components/_common/buttons/ctaButton";
import Link from "next/link";

function Hero({id}) {
    return (
        <Box
            className={'hero-gradient'}
        >
            <Container maxW={'7xl'} py={{base: '2rem', md: '7rem'}} >
                <Flex
                    direction={{base: 'column-reverse', md: 'column-reverse', lg: 'row'}}
                    justify="space-between"
                    fontFamily={'Inter'}
                    p={{base: "unset", lg: "0 4rem"}}
                >
                    <Box
                        display={{base: 'flex', md: 'flex', lg: 'block'}}
                        flexDir={'column'}
                        alignItems={{base: 'center', md: 'center', lg: 'flex-start'}}
                        justify={{base: 'center', md: 'center', lg: 'space-between'}}
                        marginTop={{base: '0', md: '3rem', lg: '0'}}
                        w={{base: "100%", lg: "50%"}}
                    >
                        <Flex direction={{base: "row", lg: "column"}} mt={{base: "1rem", lg: "unset"}}>
                            <Text
                                className={'heading'}
                                lineHeight="1.26"
                                fontWeight="medium"
                                fontSize={{base: '1.4rem', sm: "1.6rem", md: '50px', lg: '76px'}}
                                letterSpacing="-0.04em"
                            >
                                Errand Girl-
                            </Text>
                            <Text
                                className={'heading'}
                                lineHeight="1.26"
                                fontWeight="medium"
                                fontSize={{base: '1.4rem', sm: "1.6rem", md: '50px', lg: '76px'}}
                                letterSpacing="-0.04em"
                                pb={6}
                            >
                                Schedule Errand
                            </Text>
                        </Flex>
                        <Text
                            fontFamily="Inter"
                            lineHeight="1.51"
                            fontWeight="regular"
                            fontSize={{base: "1.1rem", lg: "21px"}}
                            pb={8}
                            textAlign={{base: 'center', md: 'center', lg: 'left'}}
                            width={'90%'}
                        >
                            Get high quality food stuff, beverages and more delivered directly to your doorstep
                        </Text>
                        <Link href={`#${id}`}>
                            <CustomButton text="Learn more"/>
                        </Link>
                    </Box>

                    <Box w={{base: "100%", lg: "50%"}}>
                        <Image
                            src={'/assets/errand/hero-Image.svg'}
                            alt={'hero image'}
                            width={'100%'}
                            height={{base: '220px', md: '400px'}} objectFit={'fill'}
                            // boxShadow={"linear-gradient(360deg, #EBEBEA 0%, rgba(246, 176, 92, 0.04) 99.99%, rgba(235, 235, 234, 0.00) 100%)"}
                        />

                    </Box>
                </Flex>

            </Container>
        </Box>
    )
}

export default Hero
