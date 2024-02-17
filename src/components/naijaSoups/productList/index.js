import {useEffect} from 'react';
import {Box, Button, Container, Flex, Grid, Image, Skeleton, Text,} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from "@/features/store/cart";
import Link from "next/link";
import {getProductByCategories, getProducts} from "@/features/products/productSlice";
import ImgBg from "@/pages/img";
import {formatToNaira} from "@/utils/toNaira";

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getProductByCategories());
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const {products: data, category, isLoading} = useSelector((store) => store.products);
    const filteredProductsByCategory = data?.filter((product) => product?.category === 9);
    const routeSlug = category.find((item) => item?.id === 9)?.slug;

    return (
        <Container maxW={'8xl'} position={"relative"}>
            <Box position={"absolute"} display={{base: "none", md: "none", lg: "block"}} top={"100px"} right={"30px"}>
                <ImgBg/>
            </Box>
            <Box p={{base: "0 1em 3em 1em", lg: "0 5em 3em 5em"}} fontFamily="Inter">
                <Box>
                    <Text fontSize={{base: "2.4rem", sm: '2.4rem', md: "3rem"}}
                          mt={{base: '1rem', md: '3rem', lg: '4rem'}}
                          fontWeight={700} mb={1}
                          className={'heading'}
                    >
                        Product list
                    </Text>
                </Box>
                <Box>
                    <Box display={"block"} mt="2rem" mb={'1.5rem'}>
                        <Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"} w="100%">
                            <Grid
                                style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridGap: '1rem'}}>
                                {
                                    filteredProductsByCategory?.map((item, index) => (
                                        <Box pt={2} key={index} boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
                                             borderRadius={'0 0 0.625rem 0.625rem'}>
                                            <Box>
                                                <Box>
                                                    <Link href={`/products/${routeSlug}/${item?.id} `}>
                                                        <Image src={item?.featured_image} alt={item?.name}
                                                               width="100%" objectFit="cover"
                                                               height={{base: '270px', md: "250px"}}/>
                                                    </Link>
                                                </Box>
                                                <Box p="4" textAlign={'left'}>
                                                    <Text fontWeight="bold" fontSize="1.2rem">
                                                        {item?.name}
                                                    </Text>
                                                    <Text color="gray.500" fontSize="0.8rem">
                                                        {item?.subtitle}
                                                    </Text>
                                                </Box>
                                            </Box>
                                            <Flex justifyContent="space-between" alignItems="center" p="4" mt={1}
                                                  mb={2}>
                                                <Text fontWeight="bold" fontSize="1.2rem">
                                                    {formatToNaira(item?.price)}
                                                    {/*₦{parseInt(item?.price).toFixed(2)}*/}
                                                </Text>
                                                <Button
                                                    bg="#ECC94B"
                                                    color={'#1A202C'}
                                                    borderRadius={'2rem'}
                                                    onClick={() => handleAddToCart(item)}
                                                >
                                                    Add to Cart
                                                </Button>
                                            </Flex>
                                        </Box>
                                    ))}
                            </Grid>
                        </Skeleton>
                    </Box>

                </Box>
            </Box>
        </Container>
    );
};

export default ProductList;

