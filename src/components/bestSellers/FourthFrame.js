import {Box, Button, Image, Text} from '@chakra-ui/react';
import Link from "next/link";

const FourthFrame = () => {
    return (
        <Box
            className="first-frame"
            bg="#EDE8DE"
            borderRadius="20px"
            pl="20px"
            pr="0px"
            h="500px"
            w={{base: '100%', md: "500px", lg: "700px", xl: "500px"}}
            fontFamily="Inter"
            position="relative"
            overflow='hidden'
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
            <Box pr="20px" pt="40px" fontWeight={600}>
                <Text mb="6px" fontSize="25px">
                    We have all types of Flour
                </Text>
                <Text mb="30px" fontSize="17px" fontWeight={600}>
                    You can’t miss it, have your flour of any quantity delivered at your
                    door step
                </Text>
               <Link href='/products/flour'><Button
                    borderRadius="0px"
                    fontWeight="600"
                    color="#ffffff"
                    bg="#005308"
                    fontSize="22px"
                    p="15px 24px"
                    zIndex={1000}
                >
                    Order Flour
                </Button></Link>
            </Box>
            <Image
                src={'/assets/bestSellers/4.png'}
                position="absolute"

                right="0px"
                bottom="0px"
                h={{base: '200px', sm: '200px', md: '320px', lg: '320px'}}
                w={{base: '200px', sm: '200px', md: '320px', lg: '320px'}}
                alt={'best sellers'}

            />
        </Box>
    );
};

export default FourthFrame;