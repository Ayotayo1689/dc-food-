import {Box, Button, Container, Flex, Image, Text} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import CustomButton from "@/components/_common/buttons/ctaButton";

const Hero = () => {
    const router = useRouter();
    return (
        <Box
            className={'hero-gradient'}
        >
            <Container maxW={'7xl'} py={{base: '2rem', md: '7rem'}}>
                <Flex
                    direction={{base: 'column-reverse', md: 'column-reverse', lg: 'row'}}
                    justify="space-between"
                    fontFamily={'Inter'}
                    position={'relative'}
                >
                    <Box
                        display={{base: 'flex', md: 'flex', lg: 'block'}}
                        flexDir={'column'}
                        alignItems={{base: 'center', md: 'center', lg: 'flex-start'}}
                        justify={{base: 'center', md: 'center', lg: 'space-between'}}
                        marginTop={{base: '0', md: '3rem', lg: '0'}}>

                        <Text
                            className={'heading'}
                            lineHeight="1.26"
                            fontWeight="medium"
                            fontSize={{base: '40px', md: '50px', lg: '76px'}}
                            letterSpacing="-0.04em"
                        >
                            Your One-Stop
                        </Text>
                        <Text
                            className={'heading'}
                            lineHeight="1.26"
                            fontWeight="medium"
                            fontSize={{base: '40px', md: '50px', lg: '76px'}}
                            letterSpacing="-0.04em"
                            pb={6}
                        >
                            FoodStuff Shop
                        </Text>
                        <Text
                            fontFamily="Inter"
                            lineHeight="1.51"
                            fontWeight="regular"
                            fontSize="21px"
                            pb={8}
                            textAlign={{base: 'center', md: 'center', lg: 'left'}}
                            width={'90%'}
                        >
                            Get high quality food stuff, beverages and more delivered directly to your doorstep
                        </Text>
                        <CustomButton text="Start Shopping" onClick={() => router.push('/products')} />
                    </Box>

                    <Box zIndex={100}>
                        <Box
                            display={{
                                base: 'none',
                                md: 'none',
                                lg: 'block'
                            }}
                        >
                            <Image src={'/assets/hero/dcfood-hero.webp'}
                                   alt={'hero image'} width={'100%'}
                                   height={{base: '220px', md: '400px'}} objectFit={'fill'}/>
                        </Box>
                        <Box
                            display={{
                                base: 'block',
                                md: 'block',
                                lg: 'none'
                                }}
                        >
                            <Image src={'/assets/hero/hero-mb.svg'}
                                   alt={'hero image'} width={'100%'}
                                   height={{base: '220px', md: '400px'}} objectFit={'fill'}/>
                        </Box>

                    </Box>
                    <Box
                        position={'absolute'}
                        bottom={'-65px'}
                        right={'0'}
                        display={{
                            base: 'none',
                            md: 'none',
                            lg: 'block'
                        }}
                    >
                        <Image src={'/assets/hero/hero-shadow.png'} alt={'shadow image'} width={'100%'}
                               height={'auto'} objectFit={'fill'}/>

                    </Box>
                </Flex>

            </Container>

        </Box>
    );
};

export default Hero;
