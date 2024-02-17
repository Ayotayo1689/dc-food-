import {Box, Container, Flex, Grid, Text, useBreakpointValue} from "@chakra-ui/react";
import {data} from "@/components/delivery/data";
import Image from "next/image";

const Delivery = () => {
    const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
    return (
        <Container maxW={"7xl"}>
            {isMobile ? (
                <DeliveryMobile/>
            ) : (
            <Grid
                templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}}
                templateRows='max-content'
                align="center"
                marginTop={"5rem"}
                gap={3}
                fontFamily={'Inter'}
            >
                {data.map((item) => {
                    const {id, icon, title, description} = item;
                    return (
                        <Box
                            key={id}
                            border="2px solid #FFA500"
                            borderRadius="md"
                            p={6}
                            mb={{base: 8, md: 0}}
                        >
                            <Flex direction="column" align="center" gap={1}>
                                <Image src={icon} alt={title} w={200} h={200}/>
                                <Text fontSize="lg" fontWeight="semibold" color="black">
                                    {title}
                                </Text>
                                <Text fontSize="md" color="black"
                                      textAlign='center'
                                >
                                    {description}
                                </Text>
                            </Flex>
                        </Box>
                    );
                })}
            </Grid>
            )}
        </Container>
    );
};

export default Delivery;


// Mobile view
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const DeliveryMobile = () => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
    <Box py={"30px"}>
        <Slider {...settings}>

            {data.map((item) => {
                const {id, icon, title, description} = item;
                return (
                    <Box
                        key={id}
                        border="2px solid #FFA500"
                        borderRadius="md"
                        p={6}
                        mb={{base: 8, md: 0}}
                    >
                        <Flex direction="column" align="center" gap={1}>
                            <Image src={icon} alt={title} w={200} h={200}/>
                            <Text fontSize="lg" fontWeight="semibold" color="black">
                                {title}
                            </Text>
                            <Text fontSize="md" color="black"
                                  textAlign='center'
                            >
                                {description}
                            </Text>
                        </Flex>
                    </Box>
                );
            })}
        </Slider>
    </Box>
    );
}