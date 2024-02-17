import React from "react";
import {Box,  Container, Flex,  Image, Text } from "@chakra-ui/react";
import { BiHomeSmile} from "react-icons/bi";
import {MdArrowForwardIos} from "react-icons/md"
import Link from 'next/link';

const OrderDetails =() => {
    return (
        <>
            <Container maxW="7xl" py={"4rem"}>

                <Box>
                    <Flex justify='space-between'>
                        <Text className='admin-font' fontWeight={700} fontSize='26px'>Order Details</Text>
                        <Flex justifyContent='space-between'>
                            <Text color={"#FFC700"} fontSize={"1.5rem"} mr={"5px"}> <BiHomeSmile/></Text>
                            <Link href="/">
                                <Text color={"#FFC700"} fontSize={"1rem"} fontWeight={"500"} mt={"2px"} mr={"5px"}
                                      className='admin-font'>Home</Text>
                            </Link>
                            <Text color={"#FFC700"} mt={"7px"} mr={"5px"}><MdArrowForwardIos/></Text>

                            <Link href="/dashboard/orders">
                                <Text mt={"3px"} className='admin-font' fontSize={"1rem"}
                                      fontWeight={"500"}>Orders</Text>
                            </Link>
                        </Flex>
                    </Flex>

                    <Box bg={'rgba(0, 0, 0, 0.50)'} marginTop={'30px'} w={'100%'} height={'1.3px'}
                         marginBottom={'22px'}></Box>
                    <Flex justify='space-between' textAlign={"center"} mt={"2rem"}>
                        <Box>
                            <Box

                                w={"100%"}
                                height={"3rem"}
                                p={"13px 95px 13px 93px"}
                                border={"1px solid rgba(38, 38, 38, 1)"}
                                borderRadius={"8px"}
                                textAlign={"center"}
                                className={'admin-font'}
                                color={"#343330"}
                                variant={'outline'}
                                fontSize={"15px"}
                                fontWeight={"400"}>Order Number</Box>

                            <Text className={'admin-font'}
                                  mt={"1.5rem"}
                                  color={" #262626"}
                                  fontSize={"15px"}
                                  fontWeight={"400"}
                                  textAlign={"left"}
                            >1 <Text as="span" textAlign={"center"} ml={"2rem"}> Order Number 680185</Text> </Text>
                        </Box>
                        <Box>
                            <Box w={"100%"}
                                 height={"3rem"}
                                 p={"13px 95px 13px 93px"}
                                 border={"1px solid rgba(38, 38, 38, 1)"}
                                 borderRadius={"8px"}
                                 textAlign={"center"}
                                 className={'admin-font'}
                                 color={" #262626"}
                                 fontSize={"15px"}
                                 fontWeight={"400"}>Date Placed</Box>
                            <Text className={'admin-font'}
                                  mt={"1.5rem"}
                                  color={" #262626"}
                                  fontSize={"15px"}
                                  fontWeight={"400"}
                            >20-07-2023</Text>
                        </Box>
                        <Box>
                            <Box w={"100%"}
                                 height={"3rem"}
                                 p={"13px 95px 13px 93px"}
                                 border={"1px solid rgba(38, 38, 38, 1)"}
                                 borderRadius={"8px"}
                                 textAlign={"center"}
                                 className={'admin-font'}
                                 color={" #262626"}
                                 fontSize={"15px"}
                                 fontWeight={"400"}>Quantity</Box>
                            <Text className={'admin-font'}
                                  mt={"1.5rem"}
                                  color={" #262626"}
                                  fontSize={"15px"}
                                  fontWeight={"400"}
                            >1</Text>
                        </Box>
                        <Box>
                            <Box w={"100%"}
                                 height={"3rem"}
                                 p={"13px 95px 13px 93px"}
                                 border={"1px solid rgba(38, 38, 38, 1)"}
                                 borderRadius={"8px"}
                                 textAlign={"center"}
                                 className={'admin-font'}
                                 color={" #262626"}
                                 fontSize={"15px"}
                                 fontWeight={"400"}
                            >Total</Box>
                            <Text className={'admin-font'}
                                  mt={"1.5rem"}
                                  color={" #262626"}
                                  fontSize={"15px"}
                                  fontWeight={"400"}
                            >N18,000</Text>
                        </Box>
                    </Flex>

                    <Flex mt={"4rem"}>
                        <Box>
                            <Image src='/assets/orderDetailsImg.png'
                                   alt='order img'
                                   objectFit='contain'
                                   position={"relative"}
                                   left={"-2rem"}
                            />
                            <Text className={'Inter'}
                                  color={"#212121"}
                                  fontSize={"20px"}
                                  fontWeight={"600"}
                                  textTransform={"uppercase"}> Premium basmati rice</Text>
                            <Text className={'Inter'}
                                  color={"#343A40"}
                                  fontSize={"24px"}
                                  fontWeight={"500"}
                                  textTransform={"uppercase"}>N15,000</Text>
                            <Flex className={'Inter'}
                                  color={"rgba(108, 117, 125, 1)"}
                                  fontSize={"24px"}
                                  fontWeight={"500"}
                                  gap={"1rem"}
                            >
                                <Text>Qty: <Text as="span" color={"#343A40"}>1</Text></Text>
                                <Text>Kilogram: <Text as="span" color={"#343A40"}> 50kg</Text></Text>
                            </Flex>
                            <Text color={"rgba(40, 199, 111, 1)"}
                                  fontSize={"20px"}
                                  fontWeight={"600"}
                                  w={"121px"}
                                  h={"36px"}
                                  textAlign={"center"}
                                  p={"3px 5px 7px 5px"}
                                  bg={"#b9fae0"}
                                  mt={"1.5rem"}
                            > Delivered</Text>
                        </Box>
                        <Box
                            m="15px"
                            border="2px solid rgba(0, 0, 0, 0.3)"
                            borderRadius="10px"
                            h={"28rem"}
                            w={"30.3125rem"}>
                            <Text borderBottom={"2px solid rgba(0, 0, 0, 0.3)"}
                                  p="20px 15px"
                                  align={"center"} className={'admin-font'}
                                  color={"#262626"}
                                  fontSize={"1.25rem"}
                                  fontWeight={"500"}>Payment Information</Text>
                            <Box p={"1rem"} lineHeight={" 2rem"} className={'admin-font'}
                                 color={"#262626"}
                                 fontSize={"0.9375rem"}
                                 fontWeight={"400"}>
                                <Text className={'admin-font'}
                                      color={"#262626"}
                                      fontSize={"1.125rem"}
                                      fontWeight={"500"}
                                >Payment method</Text>
                                <Text className={'admin-font'}>Paid with Visa Card</Text>
                                <Text mt={"1rem"} className={'admin-font'}
                                      color={"#262626"}
                                      fontSize={"1.125rem"}
                                      fontWeight={"500"}>Payment details</Text>
                                <Text className={'admin-font'}>Items Total: N15,000 </Text>
                                <Text className={'admin-font'}>Delivery Fee: N3,000 </Text>
                                <Text className={'admin-font'}>Total: <Text as="span" color={"#262626"}
                                                                            fontSize={" 0.9375rem"}
                                                                            fontWeight={"600"}> N18,000</Text> </Text>
                            </Box>
                        </Box>


                        <Box
                            m="15px"
                            border="2px solid rgba(0, 0, 0, 0.3)"
                            borderRadius="10px"
                            h={"28rem"}
                            w={"30.3125rem"}>
                            <Text borderBottom={"2px solid rgba(0, 0, 0, 0.3)"}
                                  p="20px 15px"
                                  align={"center"} className={'admin-font'}
                                  color={"#262626"}
                                  fontSize={"1.25rem"}
                                  fontWeight={"500"}>Payment Information</Text>
                            <Box p={"1rem"} lineHeight={" 2rem"} className={'admin-font'}
                                 color={"#262626"}
                                 fontSize={"0.9375rem"}
                                 fontWeight={"400"}>
                                <Text className={'admin-font'}
                                      color={"#262626"}
                                      fontSize={"1.125rem"}
                                      fontWeight={"500"}
                                >Delivery Method</Text>
                                <Text className={'admin-font'}>Door Delivery</Text>
                                <Text mt={"1rem"} className={'admin-font'}
                                      color={"#262626"}
                                      fontSize={"1.125rem"}
                                      fontWeight={"500"}>Delivery Address</Text>
                                <Text className={'admin-font'}>Jack Smith</Text>
                                <Text className={'admin-font'}>House 5 Divine Street, Ojodu Berger, Lagos State.</Text>
                                <Text className={'admin-font'}>Ojodu Berger, Lagos State. </Text>
                                <Text className={'admin-font'}>08012345678 </Text>
                                <Text className={'admin-font'}
                                      color={"#262626"}
                                      fontSize={"1.125rem"}
                                      fontWeight={"500"}
                                      mt={"1rem"}
                                >Delivery Details</Text>
                                <Text className={'admin-font'}>Delivered by Micheal De Santa on 24-07-2023</Text>
                                <Text className={'admin-font'}>08012345678</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Text fontSize={"0.9375rem"} fontWeight={"400"} position={"relative"} bottom={"-3rem"}
                          color={"rgba(108, 117, 125, 1)"} left={"2rem"}>© 2023 DCFoodBank. All Rights Reserved.</Text>
                </Box>
            </Container>
        </>
    )
}

export default OrderDetails