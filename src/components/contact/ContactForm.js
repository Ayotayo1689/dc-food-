import { Box, Button, Flex, FormControl, Input, Textarea, useToast } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import axiosInstance from "@/utils/axios";

const ContactUsSchema = Yup.object().shape({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

function ContactUsForm() {
    const toast = useToast();

    const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await axiosInstance.post("/api/contact_us/", values);
            toast({
                title: "Thank you!",
                description: "We will be in touch with you shortly",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
            });
            setSubmitting(false);
        } catch (error) {
            console.error(error);
            setSubmitting(false);
            toast({
                title: "An error occurred",
                description: "There was an error submitting your response. Please try again.",
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true,
            });
        }
        console.log(values);
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                full_name: "",
                email: "",
                phone_number: "",
                subject: "",
                message: "",
            }}
            validationSchema={ContactUsSchema}
            onSubmit={handleFormSubmit}
        >
            {({ errors, touched }) => (
                <Box mt={"1rem"} bgColor={"orange.300"} p={8} borderRadius={6}>
                    <Form>
                        <Flex flexDir={"column"} gap={"1.5rem"} bgColor={"#fff"} p={10} borderRadius={6}>
                            <Field name="full_name">
                                {({ field }) => (
                                    <FormControl>
                                        <Input {...field} id="full_name" placeholder="Full Name" />
                                        {errors.full_name && touched.full_name && <Box color={"red"} ml={4} pt={1}>{errors.full_name}</Box>}
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="email">
                                {({ field }) => (
                                    <FormControl>
                                        <Input {...field} id="email" placeholder="Email" />
                                        {errors.email && touched.email && <Box color={"red"} ml={4} pt={1}>{errors.email}</Box>}
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="phone_number">
                                {({ field }) => (
                                    <FormControl>
                                        <Input {...field} id="phone_number" placeholder="Phone Number" />
                                        {errors.phone_number && touched.phone_number && (
                                            <Box color={"red"} ml={4} pt={1}>{errors.phone_number}</Box>
                                        )}
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="subject">
                                {({ field }) => (
                                    <FormControl>
                                        <Input {...field} id="subject" placeholder="Subject" />
                                        {errors.subject && touched.subject && <Box color={"red"} ml={4} pt={1}>{errors.subject}</Box>}

                                    </FormControl>
                                    )}
                            </Field>

                            <Field name="message">
                                {({ field }) => (
                                    <FormControl>
                                        <Textarea {...field} id="message" placeholder="Message" />
                                        {errors.message && touched.message && <Box color={"red"} ml={4} pt={1}>{errors.message}</Box>}
                                    </FormControl>
                                )}
                            </Field>

                            <Button bg={"#000"} color={"#FFFFFF"} borderRadius={"1rem"} mt={"1.5rem"} type="submit">
                                SEND MESSAGE
                            </Button>
                        </Flex>
                    </Form>
                </Box>
            )}
        </Formik>
    );
}

export default ContactUsForm;
