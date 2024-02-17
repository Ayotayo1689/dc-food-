import {Box, Button, Container, Flex, Image, Text} from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter()
    return (
        <Container py={{base: '0.8rem', md: '1.5rem', lg: "3rem"}}
                   my={{base: '10px', md: '15px', lg: "30px"}} maxW="7xl">
            <Box >
                <Image src='/assets/dc-404.svg' mx='auto' width={{base: '80%', lg: '40%'}}
                       height={{base: '80%', lg: '40%'}} />
                <Text mb="40px" fontSize={{base: "1.4rem", sm: '2.4rem', md: "3rem", lg: "3rem"}} textAlign="center"
                      fontWeight="semibold" color="black">Page Not Found</Text>
                <Flex justify='center'  mt="3rem">
                    <Button minW='250px' fontSize="20px" _hover={{background: 'orange.300'}} maxW="300px" borderRadius='full' py={8} size='lg' bg='red' color='white'
                                       onClick={() => {router.push('/')}}>Go Home</Button></Flex>
            </Box>

        </Container>
    )
}

export default Custom404