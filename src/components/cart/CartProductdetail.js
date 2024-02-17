import {Box, Button, Flex, Text} from "@chakra-ui/react";

const CartProductDetail = ({
                               name,
                               price
                           }) => {
    return (

        <Box>
            <Text
                mb={6}
                fontSize="21px"
                fontWeight="medium">{name} </Text>
            <Text
                mb={6}
                fontSize="18px"
                fontWeight="medium">₦{price} </Text>
            <Flex
                mb={2}
                align="center">

                <Button
                    borderRightRadius="0px"
                    bg="#FBBC2F"
                    color="white">+</Button>
                <Button
                    borderRadius="0"
                    borderColor="#FBBC2F"
                    variant="outline">1</Button>
                <Button
                    borderLeftRadius="0px"
                    bg="#FBBC2F"
                    color="white">-</Button>
            </Flex>
        </Box>

    )
}

export default CartProductDetail