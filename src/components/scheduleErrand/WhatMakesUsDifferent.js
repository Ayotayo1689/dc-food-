import {
    Box, 
    Flex, 
    Heading,
    Tab, 
    TabList, 
    TabPanel, 
    TabPanels, 
    Tabs, 
    Text, 
    VStack,
    Button,
    Container,
} from '@chakra-ui/react'
import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import {whatMakesUsDifferentData} from "@/components/scheduleErrand/data";

function WhatMakesUsDifferent() {
  return (
    <Box m={"0 auto"} display={{base: "none", lg: "block"}} mb={"8rem"}>
        <Flex width={{base: "100%", lg: "90%"}} m={"0 auto"} >
            {/*<Flex direction={"column"} >*/}
                <Tabs variant='unstyled'>
                    <Box
                        w={"90%"} h={"2px"}
                        bg={"#6C757D"}
                        m={"0 auto"}
                        mb={"4rem"}
                    >
                    </Box>
                    <Flex
                        w={"90%"}
                        m={"0 auto"}
                        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                        // borderTop={"1px solid #6C757D"}
                    >
                        <Box w={"80%"}>
                            <Flex direction={"column"} align={"center"} p={"20px 0"} bg={"#F00"}>
                                <Box>
                                    <Text
                                        fontSize={".8rem"}
                                        fontWeight={"400"}
                                        letterSpacing={"1px"}
                                        color={"#FFF"}
                                        textTransform={"uppercase"}
                                    >
                                        Why choose us
                                    </Text>
                                    <Text
                                        fontSize={{base: "1rem", lg: "1.2rem"}}
                                        fontWeight={"700"}
                                        letterSpacing={"1px"}
                                        color={"#FFF"}
                                        textTransform={"capitalize"}
                                        mt={".7rem"}
                                    >
                                        What Makes Us Different
                                    </Text>
                                    <Box
                                        w={"33px"}
                                        border={"1px solid #FFF"}
                                        mt={".5rem"}
                                    ></Box>
                                </Box>
                            </Flex>
                            <TabList flexDirection={"column"} alignItems={"start"} bg={"rgba(246, 173, 85, 0.40)"}>
                                {whatMakesUsDifferentData.map((item) => {
                                    return(
                                        // <Flex  >
                                            <Tab
                                                key={item.id}
                                                w={"100%"}
                                                _selected={{
                                                    backgroundColor: "#FFF",
                                                }}
                                            >
                                                <Flex w={"100%"} p={".5rem 0"} align={"center"}>
                                                    <Box><BiChevronRight fontSize={"1.5rem"}/></Box>
                                                    <Text fontSize={".96rem"}>{item.title}</Text>
                                                </Flex>
                                            </Tab>
                                        // </Flex>
                                    )
                                })}
                            </TabList>
                            </Box>
                            <TabPanels flexDirection={"column"}>

                                {whatMakesUsDifferentData.map((item) => {
                                    return(
                                        <Flex key={item.id} direction={"column"}>

                                            <TabPanel>
                                                <Flex direction={"column"} gap={"1rem"} p={"2.5rem 2rem 0 2rem"}>
                                                    <Text fontSize={".9rem"} fontWeight={"400"} color={"#000"}>
                                                        WHY CUSTOMERS LOVE US
                                                    </Text>
                                                    <Text fontSize={"1.3rem"} fontWeight={"600"}>
                                                        {item.title}
                                                    </Text>
                                                    <Text fontSize={".9rem"} fontWeight={"400"}>
                                                        {item.description}
                                                    </Text>
                                                </Flex>
                                            </TabPanel>
                                        </Flex>
                                    )
                                })}
                            </TabPanels>
                    </Flex>
                </Tabs>
            {/*</Flex>*/}
        </Flex>
    </Box>
  )
}

export default WhatMakesUsDifferent