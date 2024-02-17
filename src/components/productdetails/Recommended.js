import React from 'react'
import {Box, Button, Container, Flex, Grid, Image, Text} from "@chakra-ui/react";
import {combodata} from "@/components/combos/data";
import {useDispatch} from "react-redux";
// import {addToCart} from "@/redux/actions/cartActions";
import {addToCart} from "@/features/store/cart";
const Recommended = () => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <Container maxW={'7xl'}>
            <Box mb={'4rem'}>
                <Text fontSize={{base: "2.4rem", sm: '2.4rem', md: "3rem", lg: "3rem"}} mt="3rem" textAlign="center"
                      fontWeight={500} mb={10}>
                    Recommended Products
                </Text>
                <Grid templateColumns={{base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)'}} gap="1rem"
                      flexWrap={"wrap"}>
                    {combodata.map((combo, index) => (
                        <Box
                            key={index}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            bg="#fff"
                            maxWidth="300px"
                            minW={{base: '70%', md: '80%'}}
                            width={{base: '100%', md: '90%', lg: '100%'}}
                            my="4"
                            mx="auto"
                            boxShadow="md"
                            transition="all .2s ease-in-out"
                            fontFamily="Inter"
                            _hover={{
                                transform: 'scale(1.01)',
                            }}
                        >
                            <Image src={combo?.image} alt={combo?.title} width="100%"
                                   height={{base: '300px', sm: '285px', md: '290px', lg: '250px'}}/>
                            <Box>
                                <Box p="4" textAlign={'center'}>
                                    <Text fontWeight="bold" fontSize="1.2rem" mb="2">
                                        {combo?.title}
                                    </Text>
                                    <Text color="gray.500"
                                          fontSize="0.8rem">{combo?.subtitle}</Text>
                                </Box>
                                <Flex justifyContent="space-between" alignItems="center" p="4" mb={2}>
                                    <Text fontWeight="bold"
                                          fontSize="1.2rem">${combo?.price.toFixed(2)}</Text>
                                    <Button href colorScheme="yellow" color={'#fff'}
                                            borderRadius={'2rem'} py={1}
                                            onClick={() => handleAddToCart(combo)}
                                    >Add to Cart</Button>

                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Grid>

            </Box>
        </Container>
    )
}
export default Recommended
