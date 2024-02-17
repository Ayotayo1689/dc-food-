import {Box, Image, Text} from '@chakra-ui/react'

const FirstFrame = () => {
    return (
        <Box
            className="first-frame"
            bg="#FFC700"
            borderRadius="20px"
            pl="20px"
            pr="0"
            h="250px"
            maxW={'600px'}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="relative"
            w={{base: '100%', md: "500px", lg: "330px"}}
            overflow="hidden"
            fontFamily="Inter"
            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        >
            <Box fontWeight={600} zIndex={999}>
                <Box mb={2}>
                    <Text fontSize="18px">
                        Premium Taste
                    </Text>
                    <Text mb="0px" fontSize="18px">
                        Over Million
                    </Text>
                </Box>
                <Text w="55%" lineHeight="38px" fontSize="36px">
                    1 million people
                </Text>
            </Box>

            <Image src={'/assets/bestSellers/1.png'} h="100%" width={'150px'} position="absolute" right="00px"
                   alt={'best sellers'}/>

        </Box>
    );
}

export default FirstFrame