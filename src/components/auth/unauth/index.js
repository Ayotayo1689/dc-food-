import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FaLock, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/features/user/userThunk';
import { useRouter } from 'next/router';
import NoSSR from "@/utils/NoSSR";

const UnAuth = () => {

    return ( <NoSSR>
        <Container maxW={'7xl'}>

          <Box fontSize={"50px"} fontWeight={"500"} display={"flex"} justifyContent={"center"} gap={"30px"} flexDir={"column"} alignItems={"center"}>
             <Box fontSize={"20px"} fontWeight={"400"}>You are not authorized to view this page </Box>
              Redirecting to Login...
          </Box>


        </Container>
        </NoSSR>
    );
};

export default UnAuth;
