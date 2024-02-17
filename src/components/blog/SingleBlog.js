import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage, FormLabel, HStack,
    Image, Input, InputGroup, InputLeftElement, Link,
    Text,
    Textarea,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import React  from "react";
import {BsPerson} from "react-icons/bs";
import {BiCalendar, BiCommentDetail} from "react-icons/bi";
import CommentSection from "@/components/blog/CommentSection";
import {useDispatch} from "react-redux";
import { postBlogComment } from "@/features/api/blog/blogSlice";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


const SingleBlogPage = ({
                            image,
                            name,
                            title,
                            description,
                            date_created,
                            comments,
                            id,
                        }) => {
    const blogId = parseInt(id);
    const dispatch = useDispatch();


    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required("enter full name"),
        comment: Yup.string().required("drop a comment"),
    });





    const handleSubmit = async (values) => {
        try {

            const response = await dispatch(postBlogComment(values));
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };






    return (
        <Box>
            <Header title={'News'} LinkTitle={'Home'}/>
            <Container maxW={'7xl'} py={{base: '2rem', md: '5rem'}} mb={"2rem"}>

                <Flex gap={8} fontFamily={'Inter'}
                      flexDir={{base: 'column', md: 'column', lg: 'row'}}
                >
                    <Box
                        width={{base: '100%', md: '100%', lg: '40%'}}
                    >
                        <Image src={image} alt={'image'} width="100%" height="400px" borderRadius={"10px"}/>
                    </Box>

                    <Flex flexDir={'column'} textAlign={'center'}
                          width={{base: '100%', md: '100%', lg: '60%'}}
                    >
                        <Box fontWeight="bold" fontSize="22px" mb="2" mt={"1.5rem"}>
                            {title}
                        </Box>
                        <Flex gap={16} py={2} px={4} mt={2} justifyContent={'center'}>
                            <Flex gap={2} alignItems={'center'}>
                                <Box pt={1}>
                                    <BsPerson size={15} color={'orange'}/>
                                </Box>
                                <Text textTransform='capitalize' fontSize={'0.8rem'} pt={1}>
                                    {name}
                                </Text>
                            </Flex>
                            <Divider orientation={'vertical'} borderColor={'gray.500'} height={'20px'}/>
                            <Flex gap={2} alignItems={'center'}>
                                <Box pt={1}>
                                    <BiCalendar size={15} color={'orange'}/>
                                </Box>
                                <Text fontSize={'0.8rem'} pt={1}>
                                    {date_created}
                                </Text>
                            </Flex>
                        </Flex>

                        <Flex py="3" textAlign="left" p={"1rem 2rem"}>
                            {description ? (
                                <Text
                                    color="gray.500"
                                    fontSize="1rem"
                                    lineHeight="2"
                                    dangerouslySetInnerHTML={{
                                        __html: description.replace(/pre/g, "p"),
                                    }}
                                />
                            ) : null}
                        </Flex>


                        {/*COMMENTS SECTION*/}
                        <Flex borderRadius={"10px"} border={"1px solid #BABABA"} p={5} flexDir={"column"} mt={'3rem'}>
                            <Box display={"flex"} py={"auto"} gap={2}>
                                <Box pt={1.5}>
                                    <BiCommentDetail size={20} color={'orange'}/>
                                </Box>
                                <Text fontWeight={"600"} fontSize={'1.3rem'}>{comments?.length} Comments</Text>
                            </Box>
                            {comments?.map((item, index) => {
                                return (
                                    <Box key={index}>
                                        <CommentSection comment={item?.comment}
                                                        date={item?.time_commented}
                                                        fname={item?.full_name}
                                        />
                                    </Box>)
                            })}
                            <Box mt={"2.5rem"}>
                                <Text fontWeight={"600"} textAlign={'left'} fontSize={"1.3rem"}>Leave a comment</Text>

                                <Formik
                                    initialValues={{ "blog_post": blogId, "full_name": "", "comment": "" }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    <Form>
                                        <Field name="full_name">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={form.errors.full_name && form.touched.full_name}
                                                    mb="6"
                                                >
                                                    <InputGroup>
                                                        <Input
                                                            {...field}
                                                            id="full_name"
                                                            placeholder="Full Name"
                                                            focusBorderColor="red.200"
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>
                                                        {form.errors.full_name}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name="comment">
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={form.errors.comment && form.touched.comment}
                                                    mb="6"
                                                >
                                                    <InputGroup>
                                                        <Textarea  {...field}     id="comment" resize={"none"} rows={6} mt={"2rem"} fontSize={"0.9rem"}
                                                                  placeholder={"Comment..."} outline="1px solid #BABABA"
                                                                  focusBorderColor={"orange"} style={{border: "none"}}
                                                                  ></Textarea>
                                                    </InputGroup>
                                                    <FormErrorMessage>
                                                        {form.errors.comment}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Button mt={2} bgColor={'orange.400'} color="#fff" borderRadius="2rem"
                                                padding={'0.5rem 1rem'}
                                                type="submit"
                                                >
                                            Post comment
                                        </Button>
                                    </Form>
                                </Formik>

                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}
export default SingleBlogPage
