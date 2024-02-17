import React from 'react'
import {Flex, Text} from "@chakra-ui/react";
import {BiHomeSmile} from "react-icons/bi";
import Link from "next/link";
import {MdArrowForwardIos} from "react-icons/md";

const DashboardHeader = ({title}) => {
    return (
        <Flex justify='space-between'>
            <Text className='admin-font' fontWeight={700} fontSize={'1.5625rem'}>{title}</Text>
            <Flex justifyContent='space-between'>
                <Text color={"#FFC700"} fontSize={"1.5rem"} mr={"5px"}> <BiHomeSmile/></Text>
                <Link href="/">
                    <Text color={"#FFC700"} fontSize={"1rem"} fontWeight={"500"} mt={"2px"} mr={"5px"}
                          className='admin-font'>Home</Text>
                </Link>
                <Text color={"#FFC700"} mt={"7px"} mr={"5px"}><MdArrowForwardIos/></Text>
                <Text mt={"3px"} className='admin-font' fontSize={"1rem"}
                      fontWeight={"500"}>{title}</Text>
            </Flex>
        </Flex>
    )
}
export default DashboardHeader
