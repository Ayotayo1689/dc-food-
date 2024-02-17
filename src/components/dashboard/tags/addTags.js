import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    Flex,
    Image,
    Input,
    Switch,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { toast } from "react-toastify";
import endpoints from "@/features/api/endpoints";
import axiosInstance from "../../../utils/axios";

const AddTags = ({ toggleModal }) => {
    const router = useRouter();
    const [isPublished, setIsPublished] = useState(false);
    // Form Validation Schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Title/Name is required"),
        description: Yup.string().required("Description is required"),
    });

    const initialValues = {
        name: "",
        description: "",
        categoryImages: null,
    };

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        const randomID = Math.floor(Math.random() * 300000000) + 1;

        const logFormData = (formData) => {
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        };
        const data = new FormData();
        data.append("name", values.name);
        data.append("id", randomID);
        data.append("icon", values.categoryImages);
        data.append("description", values.description);
        data.append("is_active", true);
        logFormData(data);

        try {
            const resp = await axiosInstance.post(
                endpoints.postTags,
                data
            );

            console.log(resp.data);
            toast.success("Category Added");

            resetForm();
            setSubmitting(false);
        } catch (error) {
            toast.error("Something went wrong, please try again");

            console.error(error);
            setSubmitting(false);
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const handleDrop = (acceptedFiles) => {
        formik.setFieldValue("categoryImages", acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: "image/*",
        multiple: false,
    });

    return (
        <>
            <Container maxW="7xl" py={"4rem"}>
                <Box border="1px solid #000" p={8} className="box-shadow">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        mb={4}
                        maxW={"100%"}
                    >
                        <Box
                            as="h2"
                            fontSize="1.5rem"
                            fontWeight="bold"
                            fontFamily={"'Urbanist', sans-serif"}
                        >
                            Add Category
                        </Box>
                        <Box
                            bg="#fff"
                            p={1}
                            className="box-shadow"
                            borderRadius="50%"
                            cursor="pointer"
                            onClick={toggleModal}
                        >
                            <IoClose
                                style={{ fontSize: "2rem", color: "rgba(255, 0, 0, 1)" }}
                            />
                        </Box>
                    </Flex>
                    <hr
                        style={{
                            border: "1px solid rgba(255, 199, 0, 0.50)",
                            width: "100%",
                            opacity: "0.7",
                            marginBottom: "1rem",
                        }}
                    />
                    <Text
                        fontSize={{ base: "1rem", md: "1.25rem" }}
                        color="#262626"
                        fontFamily={"'Urbanist', sans-serif"}
                    >
                        Add your Product tags and necessary information from here
                    </Text>
                    <hr
                        style={{
                            border: "1px solid #000",
                            opacity: "0.3",
                            width: "100%",
                            margin: "1.5rem 0 1rem 0",
                        }}
                    />

                    {/*    /!* ADD FORM HERE *!/*/}
                    <form onSubmit={formik.handleSubmit}>
                        {/*        /!* category Name *!/*/}
                        <Flex
                            alignItems={{ base: "flex-start", md: "center" }}
                            mb={6}
                            flexDir={{ base: "column", md: "row" }}
                        >
                            <Box
                                flex={{ base: "none", md: "0.3" }}
                                mr={4}
                                pb={{ base: "1rem" }}
                                fontFamily={"'Urbanist', sans-serif"}
                            >
                                <label htmlFor="name" className={"label"}>
                                    Name:
                                </label>
                            </Box>
                            <Box
                                flex={{ base: "none", md: "0.7" }}
                                width={"100%"}
                                fontFamily={"'Urbanist', sans-serif"}
                            >
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    focusBorderColor={"#FFC700"}
                                    placeholder={"Tag Title"}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid #ccc" }}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className={"error"}>{formik.errors.name}</div>
                                ) : null}
                            </Box>
                        </Flex>

                        {/*        /!* Description *!/*/}
                        <Flex
                            alignItems={{ base: "flex-start", md: "center" }}
                            mb={6}
                            flexDir={{ base: "column", md: "row" }}
                        >
                            <Box
                                flex={{ base: "none", md: "0.3" }}
                                mr={4}
                                pb={{ base: "1rem" }}
                                fontFamily={"'Urbanist', sans-serif"}
                            >
                                <label htmlFor="description" className={"label"}>
                                    Description:
                                </label>
                            </Box>
                            <Box
                                flex={{ base: "none", md: "0.7" }}
                                width={"100%"}
                                fontFamily={"'Urbanist', sans-serif"}
                            >
                                <Textarea
                                    id="description"
                                    name="description"
                                    rows={5}
                                    focusBorderColor={"#FFC700"}
                                    placeholder={"Tag Description"}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ border: "1px solid #ccc" }}
                                />
                                {formik.touched.description && formik.errors.description ? (
                                    <div className={"error"}>{formik.errors.description}</div>
                                ) : null}
                            </Box>
                        </Flex>

                        {/* category Images */}
                        <Flex
                            alignItems={{ base: "flex-start", md: "center" }}
                            mb={6}
                            flexDir={{ base: "column", md: "row" }}
                        >
                            <Box
                                flex={{ base: "none", md: "0.3" }}
                                mr={4}
                                pb={{ base: "1rem" }}
                                fontFamily={"'Urbanist', sans-serif"}
                            >
                                <label htmlFor="categoryImages" className={"label"}>
                                    Category Image:
                                </label>
                            </Box>
                            <Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
                                <div
                                    {...getRootProps()}
                                    style={{
                                        border: "2px dashed #aaa",
                                        padding: "16px",
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input {...getInputProps()} />
                                    <BsCloudUpload
                                        style={{
                                            color: "red",
                                            fontSize: "3rem",
                                            marginBottom: "8px",
                                            margin: "0 auto",
                                        }}
                                    />
                                    <Text
                                        fontSize="1.12rem"
                                        fontWeight="500"
                                        color="#262626"
                                        py={4}
                                        fontFamily={"'Urbanist', sans-serif"}
                                    >
                                        {isDragActive
                                            ? "Drop your images here"
                                            : "Drop your images here"}
                                    </Text>
                                    <Text fontSize="0.9rem" color="#6F6F6F" fontStyle={"italic"}>
                                        (Only *.jpeg,*.webp and *.png images will be accepted)
                                    </Text>
                                </div>
                                {formik.values.categoryImages && (
                                    <Box
                                        mt={6}
                                        position="relative"
                                        padding={3}
                                        bg={"#aaa"}
                                        width={120}
                                    >
                                        <img
                                            src={URL.createObjectURL(formik.values.categoryImages)}
                                            alt="Uploaded category image"
                                            width="100px"
                                            height="100px"
                                            style={{ margin: "0 auto", display: "block" }}
                                        />
                                        <Box
                                            position="absolute"
                                            top={-2}
                                            right={-2}
                                            bg="#fff"
                                            borderRadius="50%"
                                        >
                                            <AiOutlineCloseCircle
                                                size={26}
                                                color={"red"}
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                    formik.setFieldValue("categoryImages", null)
                                                }
                                            />
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Flex>

                        {/*publish toggle*/}

                        {/* publish toggle */}
                        {/* <Flex
							alignItems={{ base: "flex-start", md: "center" }}
							mb={6}
							flexDir={{ base: "row", md: "row" }}
						>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Urbanist', sans-serif"}
							>
								<label htmlFor="parentCategory" className={"label"}>
									Published
								</label>
							</Box>
							<Box
								flex={{ base: "none", md: "0.7" }}
								fontFamily={"'Urbanist', sans-serif"}
							>
								<Switch
									id="isPublished"
									isChecked={isPublished}
									onChange={() => setIsPublished(!isPublished)}
									colorScheme="yellow"
									size="lg"
									className={"custom-switch"}
								/>
							</Box>
						</Flex> */}

                        {/* Submit Button */}
                        <Flex
                            mt={12}
                            mb={4}
                            justifyContent={"center"}
                            gap={{ base: "1rem", md: "3rem" }}
                            flexDir={{ base: "column", md: "row" }}
                        >
                            <Button
                                type="submit"
                                bg="#FFC700"
                                color="#1A202C"
                                fontWeight={600}
                                padding={" 0.9375rem 3rem"}
                                size="lg"
                            >
                                ADD TAGS
                            </Button>
                            <Button
                                onClick={toggleModal}
                                bg="#000"
                                color="#fff"
                                fontWeight={600}
                                size="lg"
                                padding={".9375rem 4.6875rem"}
                            >
                                CANCEL
                            </Button>
                        </Flex>
                    </form>
                    <Text
                        fontSize={"0.9375rem"}
                        fontWeight={"400"}
                        position={"relative"}
                        bottom={"-1rem"}
                        color={"rgba(108, 117, 125, 1)"}
                        left={"2rem"}
                    >
                        © 2023 DCFoodBank. All Rights Reserved.
                    </Text>
                </Box>
            </Container>
        </>
    );
};

export default AddTags;
