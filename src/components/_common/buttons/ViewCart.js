import React from 'react';
import { Box, Button, Container } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { CartItemsCheck } from "@/components/navbar/NavBar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import NoSSR from "@/utils/NoSSR";

const ViewCartBtn = () => {
    const router = useRouter();
    const { cartItems } = useSelector((state) => state.cart);
    const handleOpenCart = () => {
        router.push('/cart');
    };

    // Hide the component if cartItems is 0
    if (cartItems.length === 0) {
        return null;
    }

    // Show the component if cartItems is 1 or more
    return (
        <NoSSR>
        <Container maxW={"7xl"}>
            <Box
                position="fixed"
                bottom="4rem"
                right={{ base: '1rem', md: '2rem' }}
                zIndex="999"
                onClick={handleOpenCart}
            >
                <Button
                    size="lg"
                    fontSize={{ base: '1rem', md: '1rem' }}
                    padding={{ base: '1.5rem', md: '1.5rem' }}
                    bg={'#252323'}
                    color={'white'}
                    leftIcon={<FiShoppingCart />}
                    borderRadius="full"
                    fontFamily={'Inter'}
                    position={'relative'}
                    _hover={{bg: '#595757'}}

                >
                    My Cart
                    <Box
                        position={'absolute'}
                        top={'0.8rem'}
                        left={{ base: '1.2rem', md: '1.2rem' }}
                        background={'white'}
                    >
                        <CartItemsCheck />
                    </Box>
                </Button>
            </Box>
        </Container>
        </NoSSR>
    );
};

export default ViewCartBtn;
