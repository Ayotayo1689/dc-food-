import React from "react"
import {Box, Center, Checkbox, Container, Divider, Flex, Text} from "@chakra-ui/react";
import Link from "next/link";
import DashboardHeader from "@/components/dashboard/_common/Header";

const AdminSettings = () => {
    return (
        <>
            <Container maxW="7xl" pb={"4rem"}>
                <Box>
                    <DashboardHeader title={'Settings'}/>
                    <Box bg={'rgba(0, 0, 0, 0.50)'} marginTop={'30px'} w={'100%'} height={'1.3px'}
                         marginBottom={'22px'}></Box>

                    <Text className='admin-font' fontWeight={300} fontSize={'1.85575rem'} mt={"3rem"}>Account
                        Information</Text>
                    <Box bg={'#D9D9D9'} marginTop={'20px'} w={'90%'} height={'0.125rem'}
                         marginBottom={'22px'}></Box>

                    <Text className='admin-font' fontWeight={400} fontSize={'1.25rem'} color={"#262626"}>DC Food</Text>
                    <Text className='admin-font' fontWeight={400} fontSize={'1.25rem'}
                          color={"#262626"} pb={2}>DC.Food@gmail.com</Text>
                    <Flex gap={"1rem"}>
                        <Link href="/reset_password">
                            <Text className='admin-font' fontWeight={400} fontSize={'1rem'}
                                  color={"#0D5292"}>Edit</Text>
                        </Link>
                        <Center height='0.9375rem'  mt={"6px"} >
                            <Divider orientation='vertical' borderWidth="0.08rem" bgColor={'#505050'}/>
                        </Center>
                        <Text className='admin-font' fontWeight={400} fontSize={'1rem'} color={"#262626"}>Change
                            Password</Text>
                    </Flex>

                    <Flex gap={"2rem"} alignItems={"center"}>
                        <Text className='admin-font' fontWeight={300} fontSize={'1.85575rem'} color={"#262626"}
                              mt={"3rem"}>Staff</Text>
                        <Link href="/dashboard/staff">
                            <Text className='admin-font' fontWeight={400} fontSize={'1rem'} color={"#0D5292"}
                                  mt={"3rem"}
                            >Manage staff</Text>
                        </Link>
                    </Flex>
                    <Box bg={'#D9D9D9'} marginTop={'20px'} w={'90%'} height={'0.125rem'}
                         marginBottom={'22px'}></Box>

                    <Flex gap={"2rem"} alignItems={"center"}>
                        <Text className='admin-font' fontWeight={300} fontSize={'1.85575rem'} color={"#262626"}>Customer
                            base</Text>
                        <Link href="/dashboard/customers">
                            <Text className='admin-font' fontWeight={400} fontSize={'1rem'} color={"#0D5292"}
                                  mt={"0.6rem"}>Manage customers</Text>
                        </Link>
                    </Flex>
                    <Box bg={'#D9D9D9'} marginTop={'20px'} w={'90%'} height={'0.125rem'}
                         marginBottom={'22px'}></Box>

                    <Flex gap={"2rem"} alignItems={"center"}>
                        <Text className='admin-font' fontWeight={300} fontSize={'1.85575rem'}
                              color={"#262626"}>Orders</Text>
                        <Link href="/dashboard/orders">
                            <Text className='admin-font' fontWeight={400} fontSize={'1rem'} color={"#0D5292"}
                                  mt={"0.6rem"}>Manage orders</Text>
                        </Link>
                    </Flex>
                    <Box bg={'#D9D9D9'} marginTop={'20px'} w={'90%'} height={'0.125rem'}
                         marginBottom={'22px'}></Box>

                    <Flex>
                        <Box mr={"3rem"}><Checkbox size='lg'>
                            <Text className='admin-font' fontWeight={600} fontSize={'1.375rem'} color={"#262626"}>Show
                                Phone number</Text></Checkbox></Box>
                        <Box><Checkbox size='lg'>
                            <Text className='admin-font' fontWeight={600} fontSize={'1.375rem'} color={"#262626"}>Show
                                Shipping Address</Text></Checkbox></Box>
                    </Flex>

                    <Text fontSize={"0.9375rem"} fontWeight={"400"} position={"relative"} bottom={"-6rem"}
                          color={"rgba(108, 117, 125, 1)"} left={"2rem"}>© 2023 DCFoodBank. All Rights Reserved.</Text>

                </Box>
            </Container>
        </>
    )
}
export default AdminSettings

