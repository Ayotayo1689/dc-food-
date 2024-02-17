import {Box} from "@chakra-ui/react";

const CheckoutLayout = ({children}) => {
    return (
        <Box minH="100vh" bg="linear-gradient(90deg, white 50%, whitesmoke 50%)">{children}</Box>
    )
}

export default CheckoutLayout