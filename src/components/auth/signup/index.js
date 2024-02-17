import React, {useState} from 'react';
import {
    Box,
    Button, Checkbox,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from '@chakra-ui/react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {FaLock, FaUser} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';

import {useRouter} from 'next/router';
import {MdEmail} from "react-icons/md";
import {toast} from "react-toastify";
import {registerUser} from "@/features/user/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);

    const router = useRouter();
    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required('Full Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/,
                'Password must be at least 8 characters long and contain at least one letter and one number'
            )
            .required('Password is required!'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords do not match!')
            .required('Confirm Password is required'),
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (values, {setSubmitting, resetForm}) => {

       if(isChecked === true){
           try {

               const response =     await    dispatch(registerUser(values))
               if( response.meta.requestStatus === "fulfilled"){
                 await router.push("/signin");
               }

           } catch (error) {
               console.error(error);
               setSubmitting(false);
           }
           // resetForm();
       }else{

           toast.error('Please agree to our Terms and Conditions',
               {
                   position: "top-right",
                   autoClose: 2500,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
               }
           );
       }


    };


        // try {

            // await dispatch(registerUser(values));
            //
            // toast.success('Account created successfully!',
            //     {
            //         position: "top-center",
            //         autoClose: 2500,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //     }
            // );
            //
            // setTimeout(() => {
            //     setIsModalOpen(true);
            // }, 4000);
        // } catch (error) {
            // console.log(error.response);

        // }
        // setSubmitting(false);
        // resetForm();
    // };


    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <Container maxW={'7xl'}>
            {/*div*/}
            <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt={'5rem'}
                mb={'6rem'}
                fontFamily={'Inter'}
            >
                <Box
                    p="10"
                    borderRadius="md"
                    boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
                    border="1px solid rgba(0,0,0,0.1)"
                    width={{base: '90%', md: '65%'}}
                >
                    <Box mb={8}>
                        <Text fontSize="3xl" fontWeight="bold" pb={2} textAlign={'center'}>
                            Sign Up
                        </Text>
                        <Box className={'yellow-underline'}></Box>
                    </Box>
                    <Formik
                        initialValues={{
                            full_name: '',
                            username: '',
                            // phoneNumber: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}

                    >
                        <Form>
                            <Stack spacing={6} mb={6} direction={{base: 'column', md: 'row'}}>
                                <Field name="full_name">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.full_name && form.touched.full_name}>
                                            <FormLabel htmlFor="full_name" color={'gray.500'}>Full Name</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none"
                                                                  children={<FaUser color="gray.200"/>}/>
                                                <Input {...field} id="full_name" placeholder="Enter your full name"/>
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.full_name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="username">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.username && form.touched.username}>
                                            <FormLabel htmlFor="username" color={'gray.500'}>Username</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none"
                                                                  children={<FaUser color="gray.300"/>}/>
                                                <Input {...field} id="username" placeholder="Enter your username"/>
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Stack>
                            <Stack spacing={6} mb={6} direction={{base: 'column', md: 'row'}}>
                                <Field name="email">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                                            <FormLabel htmlFor="email" color={'gray.500'}>Email Address</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none"
                                                                  children={<MdEmail color="gray.300" size={20}/>}/>
                                                <Input {...field} id="email" placeholder="Enter your email address"/>
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Stack>
                            <Stack spacing={6} mb={6} direction={{base: 'column', md: 'row'}}>
                                <Field name="password">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                            <FormLabel htmlFor="password" color={'gray.500'}>Choose Password</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none"
                                                                  children={<FaLock color="gray.300"/>}/>
                                                <Input
                                                    {...field}
                                                    id="password"
                                                    type="password"
                                                    placeholder="Choose a password"
                                                    focusBorderColor="red.200"
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="confirmPassword">
                                    {({field, form}) => (
                                        <FormControl
                                            isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                                            <FormLabel htmlFor="confirmPassword" color={'gray.500'}>Confirm
                                                Password</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents="none"
                                                                  children={<FaLock color="gray.300"/>}/>
                                                <Input
                                                    {...field}
                                                    id="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm your password"
                                                    focusBorderColor="red.200"
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Stack>
                            <Checkbox name="rememberMe" size="sm"  isChecked={isChecked}
                                      onChange={handleCheckboxChange}>
                                <Text>
                                    Agree to our{" "}
                                    <Link
                                        color="gray.500"
                                        href="/terms_and_conditions"
                                        sx={{ textDecoration: "underline" }}
                                        _hover={{
                                            color: "#FFC700",
                                        }}
                                    >
                                         Terms and condition?
                                    </Link>
                                </Text>
                            </Checkbox>
                            <Button type="submit" bgColor="#FFC700" color={'#fff'} fontWeight={700} width="full" mt={4}>
                                {loading ? 'Loading... ' : 'Sign Up'}
                            </Button>
                            <Text mt="4" textAlign="center" fontWeight={600}>
                                Already have an account?{' '}
                                <Link color="#FFC700" fontWeight={500} textDecoration={'underline'} href="/signin">
                                    Sign In
                                </Link>
                            </Text>
                        </Form>
                    </Formik>
                </Box>
            </Box>
            {/* Confirmation Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Account Created</ModalHeader>
                    <ModalBody>
                        <Text>Account created successfully! Proceed to login?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="green" mr={3} onClick={() => router.push('/signin')}>
                            Login
                        </Button>
                        <Button variant="ghost" onClick={closeModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default SignUp;
