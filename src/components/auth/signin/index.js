import React, { useEffect } from "react";
import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaLock, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import NoSSR from "@/utils/NoSSR";
import { loginUser, setUser } from "@/features/user/userSlice";
import { setItem } from "@/utils/localStorage";
const SignIn = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.user.loading);
	const { user } = useSelector((store) => store.user);

	// Define the validation schema using Yup
	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Username is required"),
		password: Yup.string().required("Password is required"),
	});

	// const local = () => {
	// 	if (typeof window !== "undefined") {
	// 		let user;
	// 		const result = localStorage.getItem("cartItems");
	// 		if (result === "[]") {
	// 			router.push("/");
	// 		} else {
	// 			router.push("/checkout");
	// 		}
	// 	}
	// };

	// Handle form submission
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			const response = await dispatch(loginUser(values));
			if (response.meta.requestStatus === "fulfilled") {
				console.log(response)
				// setItem("user", response.payload);
				// await local();
				router.push("/");
			}

			setSubmitting(false);
		} catch (error) {
			setSubmitting(false);
		}
		// try {
		//     await dispatch(loginUser(values));
		//     // await local()
		//
		//
		//     // console.log(getCart)
		// } catch (error) {
		//      setSubmitting(false);
		// }

		// resetForm();
	};

	// useEffect(() => {
	//     // console.log(user)
	//     if (user) {
	//             router.replace("/");
	//     }
	// }, [user]);

	return (
		<NoSSR>
			<Container maxW="7xl" mt="5rem" mb="6rem">
				<Box
					width="100%"
					display="flex"
					alignItems="center"
					justifyContent="center"
					fontFamily="Inter"
				>
					<Box
						p="10"
						borderRadius="md"
						boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
						border="1px solid rgba(0,0,0,0.1)"
						width={{ base: "90%", md: "600px" }}
					>
						<Box mb={8}>
							<Text fontSize="3xl" fontWeight="bold" pb={2} textAlign="center">
								Sign In
							</Text>
							<Box className={"yellow-underline"}></Box>
						</Box>
						<Formik
							initialValues={{ username: "", password: "", rememberMe: false }}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form>
								<Field name="username">
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.username && form.touched.username}
											mb="6"
										>
											<FormLabel htmlFor="username" color="gray.500">
												Username
											</FormLabel>
											<InputGroup>
												<InputLeftElement pointerEvents="none">
													<FaUser color="gray.300" />
												</InputLeftElement>
												<Input
													{...field}
													id="username"
													placeholder="Enter your username"
													focusBorderColor="red.200"
												/>
											</InputGroup>
											<FormErrorMessage>
												{form.errors.username}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<Field name="password">
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.password && form.touched.password}
											mb="6"
										>
											<FormLabel htmlFor="password" color="gray.500">
												Password
											</FormLabel>
											<InputGroup>
												<InputLeftElement pointerEvents="none">
													<FaLock color="gray.300" />
												</InputLeftElement>
												<Input
													{...field}
													id="password"
													type="password"
													placeholder="*******************"
													focusBorderColor="red.200"
												/>
											</InputGroup>
											<FormErrorMessage>
												{form.errors.password}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<HStack mb="4" justifyContent="space-between">
									{/*<Checkbox  name="rememberMe" size="sm">*/}
									{/*    Keep me signed in*/}
									{/*</Checkbox>*/}
									<Text>
										<Link
											color="gray.500"
											href="/forgot_password"
											sx={{ textDecoration: "underline" }}
											_hover={{
												color: "#FFC700",
											}}
										>
											Forgot Password?
										</Link>
									</Text>
								</HStack>
								{/*<HStack mb="4" justifyContent="space-between">*/}
								{/*	<Checkbox name="rememberMe" size="sm">*/}
								{/*		<Text>*/}
								{/*			Agree to our{" "}*/}
								{/*			<Link*/}
								{/*				color="gray.500"*/}
								{/*				href="/terms_and_conditions"*/}
								{/*				sx={{ textDecoration: "underline" }}*/}
								{/*				_hover={{*/}
								{/*					color: "#FFC700",*/}
								{/*				}}*/}
								{/*			>*/}
								{/*				Terms and condition?*/}
								{/*			</Link>*/}
								{/*		</Text>*/}
								{/*	</Checkbox>*/}
								{/*</HStack>*/}
								<Button
									type="submit"
									bgColor="#FFC700"
									color={"#fff"}
									fontWeight={700}
									isLoading={false}
									width="full"
									mt={4}
								>
									{loading ? "Loading..." : "Sign In"}
								</Button>
								<Text mt="4" textAlign="center" fontWeight={600}>
									{`Don't have an account?`}{" "}
									<Link
										color="#FFC700"
										fontWeight={500}
										textDecoration={"underline"}
										href="/signup"
									>
										Sign Up
									</Link>
								</Text>
							</Form>
						</Formik>
					</Box>
				</Box>
			</Container>
		</NoSSR>
	);
};

export default SignIn;
