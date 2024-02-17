import {Box, Flex, Grid, Image, List, ListIcon, ListItem, Text, UnorderedList, VStack} from '@chakra-ui/react';
import React from 'react';
import {BsCheckCircleFill} from "react-icons/bs";
import {MdCheckCircle} from "react-icons/md";
import {listItems} from "@/components/whyus/data";

function WhyDCFoodBank() {
    return (
        <Box

            display={{base:"none",md:"none",lg:"flex"}}
            justifyContent="center"
            alignItems="center"
            alignContent={"center"}
        >
            <Box maxW="7xl" pb="60px" fontFamily="Inter">
                <Grid  px={4} templateColumns={{base: '1fr', sm: '1fr', lg: '1fr 1fr'}} gap={2} alignItems="center">
                    <Box position='relative' backgroundImage={"/assets/whydcbg.svg"}
                         backgroundPosition={"center"}
                         backgroundRepeat={"no-repeat"}
                         backgroundSize={"70%"} pt={{base: "30px", md: "100px"}} pb="100px">
                        <Image mx='auto' src="/assets/hero/hero-test.png" alt="Image" w="80%" h="400px" objectFit="contain"/>
                        <Image src="/assets/donut.png" alt="donut icon" w="auto" h="auto" position="absolute" left='0' bottom='0' />
                    </Box>
                    <Flex flexDir='column' alignItems={{base: 'center', lg: 'flex-start'}}
                          px={{base: '0px', lg: '10px'}} position={"relative"}>
                        <Box  position={"relative"}>
                        <Text className="heading" mt={{base: "1.9rem", md: "0"}} fontSize={{base: "1.9rem", sm: '2.4rem', md: "3rem", lg: "3rem"}} >Why
                            DC Food Bank ?</Text>

                            <Box mt={8}>
                                <List spacing={6}>
                                    {listItems.map((listItem, index) => {
                                        return(
                                            <ListItem key={index}>
                                                <Flex gap={".7rem"}>
                                                    <ListIcon as={BsCheckCircleFill} color="#FFA500" size={"28px"} mt={".6rem"}/>
                                                    <Text fontSize="1.2rem">{listItem}</Text>
                                                </Flex>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Box>
                        </Box>
                    </Flex>
                </Grid>
            </Box>


        </Box>
    );
}

export default WhyDCFoodBank;
