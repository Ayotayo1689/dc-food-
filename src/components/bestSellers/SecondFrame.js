import {Box, Image, Text} from '@chakra-ui/react';

const SecondFrame = () => {
    return (
        <Box
            className="first-frame"
            bg="#EDE8DE"
            borderRadius="20px"
            pl="20px"
            pr="0px"
            h="250px"
            maxW={'600px'}
            w={{base: '100%', md: "500px", lg: "330px"}}
            display="flex"
            overflow="hidden"
            position="relative"
            fontFamily="Inter"
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
            <Box fontWeight={600} zIndex={999} mt={'3rem'}>
                <Text mb="5px" fontSize="25px">
                    Delicious Wraps
                </Text>
                <Text pb="10px" mb={'10px'} fontSize="18px" width={"55%"} borderBottom={'1px solid gray'}>Enjoy your
                    dish with
                    best deals</Text>
                <Text fontSize="18px">Starts from ₦13,000</Text>
            </Box>
            <Image src={'/assets/bestSellers/2.png'}
                   h="100%" width={'150px'} alt={'best sellers'} position="absolute" right={"0px"} bottom={'0px'}/>
        </Box>
    );
};

export default SecondFrame;