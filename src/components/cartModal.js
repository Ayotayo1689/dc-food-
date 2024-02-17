import {Box, Button, Flex, IconButton, Text,} from '@chakra-ui/react'

import {cartData} from "@/components/cart/cartData";
import {GrClose} from "react-icons/gr";
import CartProductDetail from "@/components/cart/CartProductdetail";

const ProductModal = ({isOpen, onClose}) => {

    return (
        <>{isOpen ? (
            <Box minH="100vh" position="absolute">
                <Button onClick={onClose}>Close</Button>
                <Flex>
                    <Box bg="black"></Box>
                    <Box w="250px">
                        {cartData.map((name, id, price) => {
                                return (
                                    <Box key={id}>
                                        <CartProductDetail name={name} price={price}/>
                                    </Box>

                                )
                            }
                        )}
                        <IconButton borderRadius="full" aria-label="remove-product" icon={<GrClose/>}/>
                        <Flex mb={6} fontSize="21px" fontWeight="medium" justify="space-between">
                            <Text>Total</Text>
                            <Text>16,000</Text>
                        </Flex>
                        <Text mb={6} fontSize="16px">Shipping, taxes, and discounts will be calculated at
                            checkout.</Text>
                        <Button w="100%" _hover={{background: "red", transition: "all 1s"}} fontWeight="normal"
                                fontSize="18px"
                                p="27px" bg="#FBBC2F" borderRadius="full" color="white">
                            Proceed to Checkout
                        </Button>
                        <Button w="100%" _hover={{background: "red", transition: "all 1s"}} fontWeight="normal"
                                fontSize="18px"
                                p="27px" bg="#FBBC2F" borderRadius="full" color="white">
                            PView cart
                        </Button>
                    </Box>
                </Flex>
            </Box>
        ) : null}</>


    )
}

export default ProductModal