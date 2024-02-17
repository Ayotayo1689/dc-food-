import React from 'react'
import {Box, Container, Flex, Grid, Heading, Image, Text} from "@chakra-ui/react";
import {advantagesData} from "@/components/scheduleErrand/data";

function Advantages() {
    return (
        <Container maxWidth={"8xl"} p={{base: " 1rem 2rem", lg: "0 8rem"}} fontFamily={"inter"}>
            <Box display={{base: "none", md: "block"}}>
                <Grid
                    templateColumns={{base: "auto", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                    gap={{ base: "1rem", lg: "6rem"}}
                    // display={"flex"}
                    // wrap={{ base: "no-wrap", md: "no-wrap", lg: "wrap" }}
                    // overflowX={{base:"scroll",md:"scroll",lg:"hidden"}}
                >
                    {advantagesData.map((card) => {
                        return(
                            <Flex
                                key={card.id}
                                direction={"column"}
                                gap={"1rem"}
                                p={"2rem 1rem"}
                                border={"1px solid #FFA500"}
                                borderRadius={"10px"}
                                align={{base: "center", lg: "unset"}}
                                // w={{base: "100%", lg: "unset"}}
                                // overflow="hidden"
                                transition="all .2s ease-in-out"
                                _hover={{
                                    transform: "scale(1.01)",
                                }}
                            >
                                <Box>
                                    <Image src={card.image} alt={card.title}/>
                                </Box>
                                <Box maxW={"10rem"}>
                                    <Text
                                        fontSize={{base: "1.1rem", lg: "1.5rem"}}
                                        fontWeight={"600"}
                                        color={"#000"}
                                        textAlign={{base: "center", lg: "unset"}}
                                    >
                                        {card.title}
                                    </Text>
                                </Box>
                                <Box>
                                    <Text
                                        fontSize={{base: ".9rem", lg: "1rem"}}
                                        fontWeight={"400"}
                                        color={"#000"}
                                        textAlign={{base: "center", lg: "unset"}}
                                    >
                                        {card.description}
                                    </Text>
                                </Box>
                            </Flex>
                        )
                    })}
                </Grid>
            </Box>

            <Box display={{base: "block", md: "none"}}>
                <Flex
                    flexWrap={{ base: "no-wrap", md: "no-wrap", lg: "wrap" }}
                    p={{ base: "20px 20px 20px 0" }}
                    gap="1.5rem"
                    overflowX={{base:"scroll", md:"scroll", lg:"hidden"}}
                >
                    {advantagesData.map((card) => {
                        return(
                            <Flex
                                key={card.id}
                                minW={{ base: "95%", md: "350px", lg: "280px" }}
                                maxW={"280px"}
                                direction={"column"}
                                gap={"1rem"}
                                p={"2rem 1rem"}
                                border={"1px solid #FFA500"}
                                borderRadius={"10px"}
                                align={{base: "center", lg: "unset"}}
                                w={"100%"}
                                overflow="hidden"
                                transition="all .2s ease-in-out"
                                _hover={{
                                    transform: "scale(1.01)",
                                }}
                            >
                                <Box>
                                    <Image src={card.image} alt={card.title}/>
                                </Box>
                                <Box maxW={"10rem"}>
                                    <Text
                                        fontSize={{base: "1.1rem", lg: "1.5rem"}}
                                        fontWeight={"600"}
                                        color={"#000"}
                                        textAlign={{base: "center", lg: "unset"}}
                                    >
                                        {card.title}
                                    </Text>
                                </Box>
                                <Box>
                                    <Text
                                        fontSize={{base: ".9rem", lg: "1rem"}}
                                        fontWeight={"400"}
                                        color={"#000"}
                                        textAlign={{base: "center", lg: "unset"}}
                                    >
                                        {card.description}
                                    </Text>
                                </Box>
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>
        </Container>
    )
}

export default Advantages