import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {FaLock} from 'react-icons/fa';
import {toast} from "react-toastify";
import {useRouter} from 'next/router';

const ForgotPassword = () => {
    let router = useRouter();
    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    // Handle form submission
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        toast.success('Password reset link sent to your email address');
        router.push('/reset_password');
    };

    return (
        <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center"
             fontFamily={'Inter'}>
            <Box p="10" borderRadius="md" boxShadow="0 0 10px 0 rgba(0,0,0,0.1)" border="1px solid rgba(0,0,0,0.1)"
                 width={{base: '90%', md: '600px'}}>
                <Box mb={8}>
                    <Text fontSize="3xl" fontWeight="bold" pb={2} textAlign={'center'}>
                        Forgot Password
                    </Text>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        margin={'0 auto'}
                        width={'50px'}
                        height={'2px'}
                        background={'red'}
                    ></Box>
                    <Text fontSize="md" color="gray.500" textAlign={'center'} pt={6}>
                        Enter your email address and we will send you a link to reset your password.
                    </Text>
                </Box>
                <Formik
                    initialValues={{email: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Field name="email">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email} mb="6">
                                    <HStack spacing={3} mb={6}>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none"
                                                              children={<FaLock color="gray.300"/>}/>
                                            <Input
                                                {...field}
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                focusBorderColor="red.200"
                                            />
                                        </InputGroup>
                                    </HStack>
                                    <FormErrorMessage pl={'4rem'}>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button type="submit" colorScheme="red" isLoading={false} width="full" mt={4}
                        >
                            Reset Password
                        </Button>
                    </Form>
                </Formik>
            </Box>
        </Box>
    );
};

export default ForgotPassword;
