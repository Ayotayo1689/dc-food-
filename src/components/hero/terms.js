import {Box, Button, Container, Flex, Image, Text} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import CustomButton from "@/components/_common/buttons/ctaButton";

const TermsHero = ({text, heading,}) => {
    const router = useRouter();
    return (
        <Box
            className={'hero-gradient'}
            position={"relative"}
            h={"fit-content"}


        >
            <Container maxW={'6xl'}   py={{base: '2rem', md: '6rem'}}  overflowY={"hidden"} h={"fit-content"}  position={"relative"} >
                <Box  position={"absolute"} bottom={"0px"} zIndex={"1"}  >
                <Image   src={'/assets/hero/blur.svg'} alt={'hero image'}  objectFit={'fill'}/>
                </Box>
                <Flex
                    direction={{base: 'column-reverse', md: 'column-reverse', lg: 'row'}}
                    justify="space-between"
                    fontFamily={'Inter'}
                >
                    <Box
                        display={{base: 'flex', md: 'flex', lg: 'block'}}
                        flexDir={'column'}
                        alignItems={{base: 'center', md: 'center', lg: 'center'}}
                        justify={{base: 'center', md: 'center', lg: 'space-between'}}
                        marginTop={{base: '0', md: '3rem', lg: '0'}}

                    >

                        <Text
                            className={'heading'}
                            lineHeight="1.26"
                            fontWeight="medium"
                            fontSize={{base: '40px', md: '50px', lg: '76px'}}
                            letterSpacing="-0.04em"
                            maxW={"450px"}
                        >
                            {heading}

                        </Text>

                        <Text
                            fontFamily="Inter"
                            lineHeight="1.51"
                            fontWeight="regular"
                            fontSize="21px"
                            pb={8}
                            textAlign={{base: 'center', md: 'center', lg: 'left'}}
                            maxW={'450px'}
                        >
                            {text}
                            {/*Get high quality food stuff, beverages and more delivered directly to your doorstep    */}
                        </Text>
                    </Box>

                    {/*<Box border={"2px solid red"} position={"absolute"} top={"0px"} right={"0px"}>*/}
                        <Image className={"terms-image"} src={'/assets/hero/termshero.svg'} alt={'hero image'}
                               height={{base: '220px', md: '500px'}} objectFit={'fill'}/>
                    {/*</Box>*/}
                </Flex>

            </Container>

        </Box>
    );
};

export default TermsHero;
