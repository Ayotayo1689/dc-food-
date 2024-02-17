import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
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

const ResetPassword = () => {
    const router = useRouter()

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/,
                'Password must be at least 8 characters long and contain at least one letter and one number'
            )
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords do not match')
            .required('Confirm Password is required'),
    });
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        toast('Password reset successful', {
            type: 'success',
        })
        router.push('/signin');
    };

    return (
        <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center">
            <Box p="10" borderRadius="md" boxShadow="0 0 10px 0 rgba(0,0,0,0.1)" border="1px solid rgba(0,0,0,0.1)"
                 width={{base: '90%', md: '600px'}}>
                <Box mb={8}>
                    <Text fontSize="3xl" fontWeight="bold" pb={2} textAlign={'center'}>
                        Reset Password
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
                </Box>
                <Formik
                    initialValues={{password: '', confirmPassword: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Field name="password">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password} mb="6">
                                    <FormLabel htmlFor="password">New Password</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300"/>}/>
                                        <Input
                                            {...field}
                                            id="password"
                                            type="password"
                                            placeholder="Enter your new password"
                                            focusBorderColor="red.200"
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="confirmPassword">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}
                                             mb="6">
                                    <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300"/>}/>
                                        <Input
                                            {...field}
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm your new password"
                                            focusBorderColor="red.200"
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button type="submit" colorScheme="red" isLoading={false} width="full" mt={4}>
                            Reset Password
                        </Button>
                    </Form>
                </Formik>
            </Box>
        </Box>
    );
};

export default ResetPassword;
