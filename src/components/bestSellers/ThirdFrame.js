import {Box, Image, Text} from "@chakra-ui/react";

const ThirdFrame = () => {
    return (
        <Box
            className="first-frame"
            bg="#EDE8DE"
            borderRadius="20px"
            pl="20px"
            pr="0px"
            h="500px"
            maxW={'600px'}
            position="relative"
            overflow="hidden"
            w={{base: '100%', md: "500px", lg: "370px"}}
            fontFamily="Inter"
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
            <Box w="70%" mt="40px" fontWeight={600}>
                <Text mb="10px" fontSize="24px">
                    Premium Taste
                </Text>
                <Text
                    pb="20px"
                    mb="20px"
                    borderBottom="1px solid black"
                    fontSize="18px"
                >
                    Enjoy your dish with best deals
                </Text>

                <Text fontSize="18px">Starts from ₦13,000</Text>
            </Box>
            <Image
                src={'/assets/bestSellers/3.png'}
                position="absolute"
                right="0px"
                bottom="0px"
                height={{base: '280px', md: '320px'}}
                w={{base: '190px', md: '230px'}}
                alt={'best sellers'}
            />
        </Box>
    );
};

export default ThirdFrame;
