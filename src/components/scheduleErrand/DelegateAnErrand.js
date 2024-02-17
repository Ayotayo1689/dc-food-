import React from 'react'
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react";
import {deligateOrderData} from "@/components/scheduleErrand/data";
import {FaRegCheckCircle} from "react-icons/fa";


function DelegateAnErrand({id}) {
    const phoneNumber = '+2348064983561 ';

    const openWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };
    return(
        <Box id={id} scrollMarginTop={"6rem"}>
            <Flex mt={"3rem"} p={{base: "1rem", lg: "3rem"}} direction={{base: "column", lg: "row"}}>
                <Flex
                    w={{base: "100%", lg: "50%"}}
                    justify={{base: "center", lg: "end"}}
                    display={{base: "none", lg: "flex"}}
                >
                    <Image src="/assets/errand/errand-photo.svg" />
                </Flex>
                <Flex
                    direction={"column"}
                    w={{base: "100%", lg: "50%"}}
                    align={"center"}
                    gap={"2rem"}
                    bg={"rgba(246, 173, 85, 0.40)"}
                    borderRadius={"50px 0"}
                    p={"2rem"}
                >
                    <Flex direction={"column"} gap={"1.5rem"}>
                        <Text fontSize={{base: "1.2rem", lg: "1.7rem"}}
                              fontWeight={"700"}
                              letterSpcing={"1px"}
                              color={"#343330"}
                              textAlign={"center"}
                        >
                            Delegate an Errand
                        </Text>
                        <Text
                            textAlign={"center"}
                            fontSize={"1rem"}
                            fontWeight={"400"}
                            color={"#000"}
                        >
                            Call us on <span style={{fontWeight: "700"}}>+234 806 498 3561</span> or Chat us via Whatsapp
                        </Text>
                        <Button
                            onClick={openWhatsApp}
                            w={"fit-content"}
                            align={"center"}
                            bg={"#33864A"}
                            fontSize={"1rem"}
                            fontWeight={"400"}
                            color={"#FFF"}
                            m={"0 auto"}
                            borderRadius={"500px"}
                        >
                            Continue to chat
                        </Button>
                    </Flex>
                    <Flex direction={"column"}>
                        <Text
                            textAlign={"center"}
                            fontSize={{base: "1rem", lg: "1.3rem"}}
                            fontWeight={"700"}
                            color={"#343330"}
                        >
                            Terms of Service
                        </Text>
                        <Box mt={"1.5rem"}>
                            {deligateOrderData.map((item, index) => {
                                return(
                                    <Flex gap={"1rem"} key={index} mt={".6rem"}>
                                        <Box mt={".4rem"}>
                                            <FaRegCheckCircle fontSize={"1.5rem"}/>
                                        </Box>
                                        <Text
                                            fontSize={"1rem"}
                                            fontWeight={"400"}
                                            color={"#343330"}
                                        >
                                            {item}
                                        </Text>
                                    </Flex>
                                )
                            })}
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default DelegateAnErrand