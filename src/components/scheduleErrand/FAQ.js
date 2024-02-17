import React from "react";
import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {FaRegCheckCircle} from "react-icons/fa";


function FAQ() {
    return(
        <Box>
            <Flex p={{base: "1rem", lg: "2rem 8rem"}} mt={"2.5rem"} justify={"center"} align={"center"}>
                <Flex direction={"column"} gap={"2rem"} fontWeight={"700"} maxW={{base: "unset", lg: "50%"}}>
                    <Heading size={"lg"} color={"#F2994A"}>
                        Frequently Asked Questions
                    </Heading>
                    <Flex direction={"column"}>
                        <Flex gap={".7rem"}>
                            <Box>
                                <FaRegCheckCircle fontSize={"1.5rem"} color={"#F2994A"}/>
                            </Box>
                            <Flex direction={"column"} gap={".5rem"}>
                                <Text
                                    fontSize={{base: "1rem", lg: "1.2rem"}}
                                    fontWeight={"700"}
                                    color={"#343330"}
                                    letterSpacing={"1px"}
                                    textTransform={"uppercase"}
                                >
                                    What are your hours?
                                </Text>
                                <Text fontWeight={"400"} fontSize={"1rem"}>
                                    Our office hours are Mondays – Saturdays (9pm – 5pm). But, deliveries
                                    by the errand service occur on Wednesdays and Saturdays Wednesdays and
                                    Saturdays.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex direction={"column"}>
                        <Flex gap={".7rem"}>
                            <Box>
                                <FaRegCheckCircle fontSize={"1.5rem"} color={"#F2994A"}/>
                            </Box>
                            <Flex direction={"column"}>
                                <Text
                                    fontSize={{base: "1rem", lg: "1.2rem"}}
                                    fontWeight={"700"}
                                    color={"#343330"}
                                    letterSpacing={"1px"}
                                    textTransform={"uppercase"}
                                >
                                    Can I make payment online?
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex direction={"column"}>
                        <Flex gap={".7rem"}>
                            <Box>
                                <FaRegCheckCircle fontSize={"1.5rem"} color={"#F2994A"}/>
                            </Box>
                            <Flex direction={"column"}>
                                <Text
                                    fontSize={{base: "1rem", lg: "1.2rem"}}
                                    fontWeight={"700"}
                                    color={"#343330"}
                                    letterSpacing={"1px"}
                                    textTransform={"uppercase"}
                                >
                                    Do I need to schedule an appointment in advance?
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
                <Box display={{base: "none", lg: "block"}}>
                    <Image src="/assets/errand/order-photo.svg" alt="Delivery man"/>
                </Box>
            </Flex>
        </Box>
    )
}

export default FAQ