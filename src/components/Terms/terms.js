import React from 'react'
import {Box, Container, Text} from "@chakra-ui/react";
import {termsAndConditions} from "@/components/Terms/data";


const TermsBody = () => {
    return (
        <Container mt={"50px"} maxW={'6xl'}   >
            <Box borderBottom={"1px solid #6C757D"} mb={"100px"}></Box>
            <Box w={"90%"} borderRadius={"50px 0px 50px 0px"} border={"0.5px solid grey"} m={"0 auto 100px auto "} pb={"60px"}>
                <Text fontSize={"20px"} fontWeight={"700"} m={"20px 0 40px 0"} textAlign={"center"}>
                    Terms of Service
                </Text>
                <ol>
                    {
                        termsAndConditions.map((data, index)=>{
                            return(
                                <li key={index} style={{marginLeft:"40px",marginBottom:"10px"}}>
                                <Text fontSize={"18px"} lineHeight={"40px"}  >
                                    <Box as={"span"} fontWeight={"700"}>{data.title}</Box> {data.term}
                                </Text>
                                </li>
                            )
                        })
                    }
                </ol>

            </Box>

        </Container>
    )
}
export default TermsBody
