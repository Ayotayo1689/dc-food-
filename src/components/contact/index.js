import React from 'react'
import {Box, Button, Container, Divider, Flex, Image, Text} from "@chakra-ui/react";
import Header from "@/components/Header";
import Link from "next/link";
import {ImLocation2} from "react-icons/im";
import {MdOutlineEmail} from "react-icons/md";
import {FaPhoneVolume} from "react-icons/fa";
import Testimonials from "@/components/testimonials/Testimonials";
import Brands from "@/components/brands";
import ContactForm from "@/components/contact/ContactForm";



const Contact = () => {


    return (
        <Box>
            <Header title={"Contact"} href={"/"} LinkTitle={'Home'}/>
            <Box bgColor={'#fff'}>
                <Container maxW={'6xl'} py={{md: 8, base: 2}}>
                    <Box>
                        <Text fontSize={'2rem'} fontWeight={600} mb={'3rem'}
                              textAlign={{base: 'center', md: 'center', lg: 'left'}} mt={'2rem'}>Store Pickup</Text>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            flexDir={{base: 'column', md: 'column', lg: 'row'}}
                            gap={3}
                        >

                            <Box>
                                <Flex alignItems={'center'} gap={3}>
                                    <Box><FaPhoneVolume size={40}/></Box>
                                    <Box>
                                        <Text pb={1}>Give a Call</Text>
                                        <Link href={'tel: +234 806 498 3561'}><Text fontWeight={600}>
                                            +234 806 498 3561
                                        </Text></Link>
                                    </Box>
                                </Flex>
                            </Box>
                            <Divider
                                orientation={'vertical'}
                                //display={{base: 'none', md: 'block'}}
                                borderColor={'gray.500'}
                                height={'100px'}
                                mt={{base: "1rem", md: "none"}}

                            />
                            <Box>
                                <Flex alignItems={'center'} gap={3}>
                                    <Box><MdOutlineEmail size={40}/> </Box>
                                    <Box>
                                        <Text pb={1}>Email Us</Text>
                                        <Link href={'mailto:info@dcfoodbank.com'}>
                                            <Text fontWeight={600}>
                                                info@dcfoodbank.com
                                            </Text>
                                        </Link>
                                    </Box>
                                </Flex>
                            </Box>
                            <Divider
                                orientation={'vertical'}
                                //display={{base: 'none', md: 'block'}}
                                borderColor={'gray.500'}
                                height={'100px'}
                                mt={{base: "1rem", md: "none"}}

                            />
                            <Box>
                                <Flex alignItems={'center'} justify={'center'} gap={3}>
                                    <Box><ImLocation2 size={40}/></Box>
                                    <Box>
                                        <Text>We are here</Text>
                                        <Text fontWeight={600}>Shop 1 , Royal plaza complex, </Text>
                                        <Text fontWeight={600}>104 Oba Erinwole road, GRA Rd,</Text>
                                        <Text fontWeight={600}>Sagamu, Ogun State.</Text>

                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>

                        <Box mt={{lg: '8rem', base: '5rem'}}>

                            <Text fontSize={'2rem'} fontWeight={600} py={4} mt={10}>Send Us a Message</Text>
                            <Flex gap={{lg: '4rem', md: '3rem', base: '2rem'}}
                                  flexDir={{lg: 'row', md: 'row', base: 'column'}}>
                                <Box width={{lg: '50%', md: '80%', base: '100%'}}>
                                    <ContactForm/>
                                </Box>
                                <Box width={{lg: '50%', md: '50%', base: '100%'}}>
                                    <Box bgColor={'gray.50'} border={'1px solid #cdcdcd'} borderRadius={6}
                                         px={{lg: 8, md: '6', base: '2'}}
                                         mt={"1rem"} py={{lg: 3, md: '2', base: '2'}}>
                                        <Flex flexDir={'column'}>
                                            <Box display={'flex'} flexDir={'column'} alignItems={'center'} mb={2}
                                                 gap={2}>
                                                <Text fontSize={'2rem'}>Delivery Time</Text>
                                                <Text mb={'0.6rem'}>We deliver your orders within 30 mins</Text>
                                                <hr style={{width: '100%', padding: '0.5rem 0',}}/>
                                            </Box>
                                            <Flex justifyContent={'space-evenly'}>
                                                <Flex flexDir={'column'} gap={2}>
                                                    <Text fontSize={'1.2rem'} fontWeight={600}>Monday - Saturday:</Text>
                                                    <Text>7am - 8pm</Text>
                                                </Flex>
                                                <Flex flexDir={'column'} gap={2}>
                                                    <Text fontSize={'1.2rem'} fontWeight={600}>Sunday:</Text>
                                                    <Text>11am - 6pm</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Image src={'/assets/contact/delivery.jpg'} width={'100%'}
                                           height={{lg: "350px", md: '300px'}} alt={'delivery truck'}/>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box mt={{base: '3rem', md: '8rem'}}>
                        <Testimonials/>
                    </Box>
                    <Brands/>
                </Container>
            </Box>
        </Box>
    )
}
export default Contact
