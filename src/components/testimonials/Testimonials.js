import {Box, Container, Grid, Skeleton, Text, useBreakpointValue} from "@chakra-ui/react";
import CardLayout from "@/components/testimonials/CardLayout";
import Styles from "./Testimonials.module.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getTestimonial} from "@/features/testimonial/testimonialSlice";


const Testimonials = () => {
    const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
    const {testimonials, isLoading} = useSelector((state) => state.testimonials);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTestimonial())
    }, [])
    return (

        <Container  py={'1rem'} mt="30px" mb="3rem" maxW="7xl" fontFamily="Inter">
            <Text className="heading" mb="20px" fontSize={{base: "2.4rem", sm: '2.4rem', md: "3rem", lg: "3rem"}} textAlign="center"
                   color="black"> Testimonials</Text>
            {isMobile ? (
                <TestimonialsMobile/>
            ) : (
            <Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"} w="100%">
                <Grid mt={{sm: "60px", lg: "120px"}} px={{sm: "30px", lg: "10px"}}
                  templateColumns={{sm: "1fr", lg: "repeat(2, 1fr)"}}
                  gap={16}>
                {!isLoading && testimonials?.map((data) => {
                    const colors = ["#000", "#FFA500"]; //declares all color variables

                    const colorIndex = Math.floor(data.id / 1) % colors.length; // Calculate the color index
                    const starColor = colors[colorIndex];

                    return (
                        <Box key={data?.id} className={Styles.cardDetail}>
                            <CardLayout url={data?.profile_picture} content={data?.content} author={data?.full_name} company={data?.company} starColor={starColor}/>
                        </Box>
                    )
                })}
                </Grid>
            </Skeleton>
            )}

        </Container>

    )
}

export default Testimonials

//Testimonials mobile view
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsMobile = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000

    };
    const {testimonials, isLoading} = useSelector((state) => state.testimonials);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTestimonial())
    }, [])
    return (
                    <Box py={"30px"}>
                        <Slider {...settings}>
                        {!isLoading && testimonials?.map((data) => {
                            return (
                                <Box key={data?.id} className={Styles.cardDetail} mt={{base: 10, md: 10}} px={{base: 0, md: 10}}
                                     bgColor={'#FFA500'}
                                >
                                    <CardLayout url={data?.profile_picture} content={data?.content} author={data?.full_name} company={data?.company} starColor={'#000'}/>
                                </Box>
                            )
                        })}
                        </Slider>
                    </Box>
    );
}