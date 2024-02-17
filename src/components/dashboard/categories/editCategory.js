// import Router, {useRouter} from "next/router";
import {useSelector} from "react-redux";
import axiosInstance from "@/utils/axios";
import endpoints from "@/features/api/endpoints";
import {toast} from "react-toastify";
import {useDropzone} from "react-dropzone";
import {useFormik} from "formik";
import {Box, Button, Flex, Input, Text, Textarea} from "@chakra-ui/react";
import {MdClose} from "react-icons/md";
import {BsCloudUpload} from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai";
import React from "react";


const EditCategory = ({toggleModal,  productId}) => {

    // const {
    //     category,
    //     isLoading: gettingProducts,
    //     products,
    // } = useSelector((state) => state.admin);
    const { user } = useSelector((state) => state.user);


    const handleDrop = (acceptedFiles) => {
        formik.setFieldValue("categoryImages", acceptedFiles[0]);
    };
        const onSubmit = async (values ) => {


        // const data = new FormData();
        // data.append("id", productId);
        // data.append("icon", values.categoryImages);
        // data.append("name", values.name);
        // data.append("description", values.description);
        // data.append("is_active", true);
        //
        //
        //     console.log(data)
        //
        //


            const data = new FormData();

            data.append("id", productId);
            // Append fields with values to the FormData object
            if (values.name) {
                data.append("name", values.name);
            }

            if (values.description) {
                data.append("description", values.description);
            }

            if (values.categoryImages) {
                data.append("icon", values.categoryImages);
            }

            // data.append("is_active", true);

            // Log the FormData object
            console.log(data);



        try {
            const resp = await axiosInstance.patch(
                endpoints.getProductByCategoriesId(productId),
                data,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        // Authorization: `Bearer ${user?.access}`,
                    },
                }
            );

            if(resp.status === 200){
                toggleModal(null)
            }
            toast.success("Category updated successfully");
            // Router.reload();

        } catch (error) {
            toast.error("Error updating category");

            console.log(error);

        }


        //    // await console.log(data)
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: "image/*",
        multiple: false,
    });

        const initialValues = {
        name: "",
        description: null,
        categoryImages: "",
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
    });
    return (
        // <Box border="1px solid #000" p={8} className="box-shadow">
        <Box p={{ base: 2, md: 8 }} w={"100%"}>

            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Box as="h2" fontSize="1.5rem" fontWeight="bold">
                    Update Category
                </Box>
                <Box
                    bg="#fff"
                    p={1}
                    className="box-shadow"
                    borderRadius="50%"
                    cursor="pointer"
                    onClick={toggleModal}
                >
                    <MdClose style={{ fontSize: "2.1rem", color: "#333333" }} />
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
            <Text fontSize={{ base: "1rem", md: "1.25rem" }} color="#262626">

                Update categories info, combinations and extras
            </Text>
            <hr
                style={{
                    border: "1px solid #000",
                    opacity: "0.3",
                    width: "100%",
                    margin: "1.5rem 0 1rem 0",
                }}
            />
            <form onSubmit={formik.handleSubmit}>
                {/* Product Title/Name */}
                <Flex
                    alignItems={{ base: "flex-start", md: "center" }}
                    mb={6}
                    flexDir={{ base: "column", md: "row" }}
                >
                    <Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
                        <label htmlFor="name" className={"label"}>
                            Category Title/Name
                        </label>
                    </Box>
                    <Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            focusBorderColor={"#FFC700"}
                            placeholder={"Category Title/Name"}
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

                {/* Description */}
                <Flex
                    alignItems={{ base: "flex-start", md: "center" }}
                    mb={6}
                    flexDir={{ base: "column", md: "row" }}
                >
                    <Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
                        <label htmlFor="description" className={"label"}>
                            Categories Details
                        </label>
                    </Box>
                    <Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
                        <Textarea
                            id="description"
                            name="description"
                            rows={5}
                            focusBorderColor={"#FFC700"}
                            placeholder={"Categories Description"}
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

                {/* Product Images */}
                <Flex
                    alignItems={{ base: "flex-start", md: "center" }}
                    mb={6}
                    flexDir={{ base: "column", md: "row" }}
                >
                    <Box flex={{ base: "none", md: "0.3" }} mr={4} pb={{ base: "1rem" }}>
                        <label htmlFor="categoryImages" className={"label"}>
                            Category Image
                        </label>
                    </Box>
                    {/*<Box flex={{ base: "none", md: "0.7" }} width={"100%"}>*/}
                    {/*    <div*/}
                    {/*        {...getRootProps()}*/}
                    {/*        style={{*/}
                    {/*            border: "2px dashed #aaa",*/}
                    {/*            padding: "16px",*/}
                    {/*            textAlign: "center",*/}
                    {/*            borderRadius: "8px",*/}
                    {/*            cursor: "pointer",*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <input {...getInputProps()} />*/}
                    {/*        <BsCloudUpload*/}
                    {/*            style={{*/}
                    {/*                color: "red",*/}
                    {/*                fontSize: "3rem",*/}
                    {/*                marginBottom: "8px",*/}
                    {/*                margin: "0 auto",*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*        <Text fontSize="1.12rem" fontWeight="500" color="#262626" py={4}>*/}
                    {/*            {isDragActive*/}
                    {/*                ? "Drop your images here"*/}
                    {/*                : "Drag 'n' drop an image here, or click to select an image"}*/}
                    {/*        </Text>*/}
                    {/*        <Text fontSize="0.9rem" color="#6F6F6F" fontStyle={"italic"}>*/}
                    {/*            (Only *.jpeg,*.webp and *.png images will be accepted)*/}
                    {/*        </Text>*/}
                    {/*    </div>*/}
                    {/*    {formik.values.categoryImages && (*/}
                    {/*        <Box*/}
                    {/*            mt={6}*/}
                    {/*            position="relative"*/}
                    {/*            padding={3}*/}
                    {/*            bg={"#aaa"}*/}
                    {/*            width={120}*/}
                    {/*        >*/}
                    {/*            <img*/}
                    {/*                src={URL.createObjectURL(formik.values.categoryImages)}*/}
                    {/*                alt="Uploaded Category"*/}
                    {/*                width="100px"*/}
                    {/*                height="100px"*/}
                    {/*                style={{ margin: "0 auto", display: "block" }}*/}
                    {/*            />*/}
                    {/*            <Box*/}
                    {/*                position="absolute"*/}
                    {/*                top={-2}*/}
                    {/*                right={-2}*/}
                    {/*                bg="#fff"*/}
                    {/*                borderRadius="50%"*/}
                    {/*            >*/}
                    {/*                <AiOutlineCloseCircle*/}
                    {/*                    size={26}*/}
                    {/*                    color={"red"}*/}
                    {/*                    style={{*/}
                    {/*                        cursor: "pointer",*/}
                    {/*                    }}*/}
                    {/*                    onClick={() => formik.setFieldValue("categoryImages", null)}*/}
                    {/*                />*/}
                    {/*            </Box>*/}
                    {/*        </Box>*/}
                    {/*    )}*/}
                    {/*</Box>*/}

                    <Box flex={{ base: "none", md: "0.7" }} width={"100%"}>
                        <label htmlFor="categoryImages" style={{ cursor: "pointer" }}>
                            <div
                                style={{
                                    border: "2px dashed #aaa",
                                    padding: "16px",
                                    textAlign: "center",
                                    borderRadius: "8px",
                                }}
                            >
                                <input
                                    type="file"
                                    id="categoryImages"
                                    name="categoryImages"
                                    accept=".jpeg, .webp, .png" // Specify accepted file types
                                    style={{ display: "none" }} // Hide the input visually
                                    onChange={(e) => {
                                        // Handle file selection here
                                        const selectedImage = e.target.files[0];
                                        console.log(selectedImage);

                                        // You can also update formik values if needed
                                        formik.setFieldValue("categoryImages", selectedImage);
                                    }}
                                />
                                <BsCloudUpload
                                    style={{
                                        color: "red",
                                        fontSize: "3rem",
                                        marginBottom: "8px",
                                        margin: "0 auto",
                                    }}
                                />
                                <Text fontSize="1.12rem" fontWeight="500" color="#262626" py={4}>
                                    {isDragActive
                                        ? "Drop your images here"
                                        : "Drag 'n' drop an image here, or click to select an image"}
                                </Text>
                                <Text fontSize="0.9rem" color="#6F6F6F" fontStyle={"italic"}>
                                    (Only *.jpeg, *.webp and *.png images will be accepted)
                                </Text>
                            </div>
                        </label>
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
                                    alt="Uploaded Category"
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
                                        onClick={() => formik.setFieldValue("categoryImages", null)}
                                    />
                                </Box>
                            </Box>
                        )}
                    </Box>



                </Flex>

                {/* Submit Button */}
                <Flex
                    mt={12}
                    mb={4}
                    justifyContent="center"
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
                        UPDATE CATEGORY
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
                bottom={"-2rem"}
                color={"rgba(108, 117, 125, 1)"}
                left={"2rem"}
            >
                © 2023 DCFoodBank. All Rights Reserved.
            </Text>
        </Box>
    );
};
export default EditCategory;




