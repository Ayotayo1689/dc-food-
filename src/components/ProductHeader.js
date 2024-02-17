import {Box, Container, Flex, HStack, Image, Link, Text} from '@chakra-ui/react';
import NextLink from 'next/link'
// product header
const ProductHeader = ({title, href, LinkTitle, imgUrl}) => {
    return (

        <Box
            bgColor={'orange.300'}
        >
            <Container maxW={'7xl'} py={{base: '1rem', md: '1rem'}}>
                <Flex
                    fontFamily={'Inter'}
                    alignItems="center"
                    justify="space-between"
                    direction={{base: 'column-reverse', md: 'column-reverse', lg: 'row'}}

                >
                    <Box
                        display={{base: 'flex', md: 'flex', lg: 'block'}}
                        flexDir={'column'}
                        alignItems={{base: 'center', md: 'center', lg: 'flex-start'}}
                        justify={{base: 'center', md: 'center', lg: 'space-between'}}
                        marginTop={{base: '0', md: '3rem', lg: '0'}}>

                        <Text
                            lineHeight="1.26"
                            fontWeight="medium"
                            fontSize={{base: '40px', md: '50px', lg: '76px'}}
                            letterSpacing="-0.04em"

                        >
                            {title}
                        </Text>
                        <HStack fontSize="18px" spacing={4} justifyContent={'left'} pt={8}>
                            <Link as={NextLink} href={href || '/'} fontWeight={600} borderBottom={'1px solid'}
                                  _hover={{color: "red", transition: "all 0.5s"}}>{LinkTitle}</Link>
                            <Text>{title}</Text>
                        </HStack>


                    </Box>

                    <Box>
                        <Image src={imgUrl} alt={'hero image'} width={'100%'}
                               height={'250px'}/>
                    </Box>
                </Flex>

            </Container>

        </Box>

    );
};

export default ProductHeader;

