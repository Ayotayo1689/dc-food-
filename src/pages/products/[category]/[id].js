import Header from "@/components/Header";
import {Box, Button, Center, Container, Flex, Grid, HStack, Image, Link, Text, VStack, Wrap} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/features/store/cart";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ViewCartBtn from "@/components/_common/buttons/ViewCart";
import {getSingleProduct} from "@/features/products/productSlice";
import BestSellers from "@/components/bestSellers";
import FlashSalesBanner from "@/components/flashSales";

const ProductDetailsPage = ({ productId }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const {product: productData, isLoading} = useSelector((state) => state.products);
    // console.log(productId, productData)

    useEffect(() => {

        dispatch(getSingleProduct(productId))
    }, [productId])
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleBuyNow = (product) => {
        dispatch(addToCart(product));
        router.push("/cart");
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        dispatch(increaseQuantity(productData)); // Update quantity in cart
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            dispatch(decreaseQuantity(productData)); // Update quantity in cart
        }
    };


    return (
        <>
            <Head>
                <title>DC Foods | {productData?.name}</title>
                <meta
                    name="description"
                    content={`Explore the details of ${productData?.name} at DC Foods. Learn more about the price, size, vendor, and type of this product. Add it to your cart or make a purchase. Contact us for any inquiries about this product.`}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content={`DC Foods, ${productData?.name}, product details, price, size, vendor, type, add to cart, buy now, inquiries`}
                />
                <meta name="author" content="DC Foods" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <Header href="/products" LinkTitle="All Products" title={productData?.name} />
            <Container my="5rem" maxW="7xl" fontFamily="Inter">
                <Grid mb={12} gap={20} templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                    <Center>
                        <Image w="70%" src={productData?.featured_image} alt={productData?.name} />
                    </Center>
                    <Box margin={{ base: "0 auto", md: "0" }}>
                        <Flex
                            w="100%"
                            flexDir="column"
                            gap={4}
                            margin={{ base: "0 auto", md: "0" }}
                        >
                            <VStack spacing='10px' align='flex-start' fontSize="20px"><Text fontWeight="700" color="#212121" textTransform='uppercase'>{productData?.name}</Text>
                            <Text color="#212121" fontWeight="600">DESCRIPTION</Text>
                            <Text color={"#454444"}>{productData?.description}</Text>
                            <HStack>
                                <Text color="#212121" fontWeight='600' fontSize='20px'>SHIPPING:</Text>
                                <Text fontWeight='400' fontSize='16px' textTransform={"uppercase"}>charges apply per destination</Text>
                            </HStack></VStack>
                            <Flex
                                pt={2}
                                gap={8}
                            >

                                <Flex  fontSize="14px" align="center">
                                    <Button
                                        borderRightRadius="0px"
                                        bg={"#F4D774"}
                                        color="#252323"
                                        _hover={{opacity: '0.7', }}
                                        onClick={handleDecreaseQuantity}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        borderRadius="0"
                                        borderColor="#FBBC2F"
                                        variant="outline"
                                        bg={"#F4D774"}
                                        _hover={{opacity: '1', cursor: 'default'}}
                                        // opacity="0.5"
                                    >
                                        {quantity}
                                    </Button>
                                    <Button
                                        borderLeftRadius="0px"
                                        bg={"#F4D774"}
                                        _hover={{opacity: '0.7', }}
                                        color="#252323"
                                        onClick={handleIncreaseQuantity}
                                    >
                                        +
                                    </Button>
                                </Flex>
                                <Text color={"#252323"} fontSize="24px" fontWeight="500">only <Text color="#FFC700" fontSize="24px" fontWeight="500" as='span'>30 bags</Text> left</Text>
                            </Flex>
                            <Flex mt={8} gap={4}>

                                <Box>
                                    <Button
                                        _hover={{ transform: "scale(1.05)", transition: "all 1s" }}
                                        fontSize="18px"
                                        px="65px"
                                        py='14px'
                                        bg="#FBBC2F"
                                        borderRadius="10px"
                                        color="#252323"
                                        fontWeight='600'
                                        onClick={() => handleBuyNow(productData)}
                                    >
                                        Buy Now
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        _hover={{ transform: "scale(1.05)", transition: "all 1s" }}
                                        fontSize="18px"
                                        px="20px"
                                        py='14px'
                                        variant='outline'
                                        borderColor='#FFC700'
                                        borderRadius="10px"
                                        color="#252323"
                                        fontWeight='600'
                                        onClick={() => handleAddToCart(productData)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Grid>

                <BestSellers />
                <FlashSalesBanner />
                <ViewCartBtn />
            </Container>
        </>
    );
};

export default ProductDetailsPage;

export async function getServerSideProps({ params }) {
    const productId = params.id

    return{
        props: {
            productId,
        },
    };
}
