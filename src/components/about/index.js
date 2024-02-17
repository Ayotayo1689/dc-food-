import React from 'react'
import {Box, Container, Image, Text} from "@chakra-ui/react";

import Hero from "@/components/hero/Hero";
import Delivery from "@/components/delivery/Delivery";


const About = () => {
    return (
        <Box>
            <Box position={"relative"}>
                <Hero/>
                <Box
                    position={"absolute"}
                    display={{base: "none", md: "none", lg: "block"}}
                    top={"500px"}
                    bottom={0}
                    zIndex={-1}
                >
                    <Image src={'/assets/hero/bg.svg'} alt={""}/>
                </Box>
                <Delivery/>
            </Box>
            <Container maxW={'7xl'} pt="3rem" pb={'5rem'} px={{base: 4, md: 4}}>
                <Text
                    className={'heading'}
                    lineHeight="1.26"
                    fontWeight="400"
                    textAlign={{base: 'center', md: 'center', lg: 'left'}}
                    fontSize={{base: '2rem', md: '2.5rem', lg: '3rem'}}>
                    About DC Foods
                </Text>
                <Text
                    className={'Inter'}
                    lineHeight="2.6875rem"
                    fontWeight="400"
                    fontSize={{base: '1.12rem', md: '1.3rem'}}
                    mx={{base: '0', md: '0', lg: '4.5rem'}}
                    pt={6}
                >
                    DC foods is an online and offline food store located in Lagos and Ogun state Nigeria. Founded in
                    September 2020, we have grown to serve not just individuals but also companies and restaurants. Born
                    out of passion to serve the busy world we have found ourselves, where workers must struggle through
                    the day’s work and traffic just to shop to make a meal (exhausting right?), we decided to take the
                    burden off the people to provide safer, healthier and hygienically handle and package raw
                    foodstuff while providing them the option of shopping from their homes. With our current categories
                    of food and beverages as well as other services such as the errand girl where you get to make the
                    market list yourself, and looking to more expansion, we are committed to serving you and bringing
                    the market to your door step as your one stop food shop that we are.
                </Text>
            </Container>
        </Box>
    )
}
export default About