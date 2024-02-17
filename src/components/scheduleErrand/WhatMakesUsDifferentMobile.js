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
    Container, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'
import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import {whatMakesUsDifferentData} from "@/components/scheduleErrand/data";

function WhatMakesUsDifferent() {
    return (
        <Box m={"4rem auto"} display={{base: "block", lg: "none"}}>
           <Flex p={"1rem"} direction={"column"}>
               <Flex direction={"column"} align={"center"} p={"20px 0"} bg={"#F00"} w={"100%"}>
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
               <Accordion bg={"rgba(246, 173, 85, 0.40);"} allowToggle>
                   {whatMakesUsDifferentData.map((item) => {
                       return(
                           <AccordionItem>
                               <h2>
                                   <AccordionButton _expanded={{ bg: '#FFF', border: "1px solid rgba(0, 0, 0, 0.30)"}} border={"none"} gap={".6rem"}>
                                       <AccordionIcon/>
                                       <Box as="span" flex='1' textAlign='left'>
                                           {item.title}
                                       </Box>
                                   </AccordionButton>
                               </h2>
                               <AccordionPanel border={"1px solid rgba(0, 0, 0, 0.30)"} pb={4} color={"#565656"} p={"1rem 1.8rem"} bg={"#FFF"}>
                                   <Flex direction={"column"} gap={".5rem"} >
                                       <Text fontSize={".83rem"} fontWeight={"400"} color={"#000"}>
                                           WHY CUSTOMERS LOVE US
                                       </Text>
                                       <Text fontSize={"1.2rem"} fontWeight={"600"}>
                                           {item.title}
                                       </Text>
                                       <Text fontSize={".9rem"} fontWeight={"400"}>
                                           {item.description}
                                       </Text>
                                   </Flex>
                               </AccordionPanel>
                           </AccordionItem>
                       )
                   })}
               </Accordion>
           </Flex>
        </Box>
    )
}

export default WhatMakesUsDifferent