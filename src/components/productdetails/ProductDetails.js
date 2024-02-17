import {Box, Button, Center, Container, Flex, Grid, Image, Link, Text} from "@chakra-ui/react";
import ProductTabs from "@/components/productdetails/ProductTabs";
import NextLink from "next/link";
import {GrContact} from "react-icons/gr";

const ProductDetails = (data) => {
    return (
        <Container my="5rem" maxW="7xl">
            {data.map(({name, id, imgUrl,}) => {
                return (
                    <Grid key={id} mb={12} gap={20} templateColumns={{base: "1fr", md: "1fr 1fr"}}>
                        <Center>
                            <Image w="70%" src={imgUrl} alt={name}/>
                        </Center>
                        <Flex w={{base: "100%", md: "50%"}} flexDir="column" gap={4}>
                            <Text fontWeight="bold" fontSize="3rem">{name}</Text>
                                <Flex flexDir={'column'}>
                                    <Text>DESCRIPTION</Text>
                                </Flex>
                                <Flex fontSize="14px" align="center">
                                    <Button borderRightRadius="0px" bg="#FBBC2F" color="white">+</Button>
                                    <Button borderRadius="0" borderColor="#FBBC2F" variant="outline">1</Button>
                                    <Button borderLeftRadius="0px" bg="#FBBC2F" color="white">-</Button>
                                </Flex>

                            <Flex mt={8} gap={4}>
                                <Box>
                                    <Button _hover={{background: "red", transition: "all 1s"}} fontWeight="normal"
                                            fontSize="18px"
                                            p="27px" bg="#FBBC2F" borderRadius="full" color="white">Add to Cart</Button>
                                </Box>
                                <Box>
                                    <Button _hover={{background: "red", transition: "all 1s"}} fontWeight="normal"
                                            fontSize="18px"
                                            p="27px" bg="#FBBC2F" borderRadius="full" color="white">Buy it Now</Button>
                                </Box>

                            </Flex>
                            <Box>
                                <Button _hover={{background: "red", transition: "all 1s"}} fontWeight="normal"
                                        fontSize="18px"
                                        p="27px" bg="#FBBC2F" borderRadius="full" color="white">Add to Wishlist</Button>
                            </Box>
                        </Flex>
                    </Grid>
                )

            })}

            <ProductTabs/>
            <Center mt={6}>
                <Flex align="center" gap={2}>
                    <GrContact size={22}/>

                    <Link fontSize="22px" fontWeight="500" textDecor="none" _hover={{color: "red"}} as={NextLink}
                          href="/contact"> Enquiry about product?</Link>
                </Flex>
            </Center>
            {/*<Recommended/>*/}
        </Container>
    )
}

export default ProductDetails