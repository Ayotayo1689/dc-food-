import React, { useEffect, useState } from "react";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import NoSSR from "@/utils/NoSSR";
import { getDeliveryArea } from "@/features/payment/deliverySlice";
import axiosInstance from "@/utils/axios";

const ShippingForm = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user } = useSelector((store) => store.user);
	const { cartItems } = useSelector((state) => state.cart);
	const [deliveryData, setDeliveryData] = useState([]);

	// Check if session data exists
	let existingSessionData;
	existingSessionData = JSON.parse(sessionStorage.getItem("sessionData"));

	useEffect(() => {
		dispatch(getDeliveryArea());
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get(
					"/api/delivery/delivery-axis/"
				);
				setDeliveryData(response.data);
			} catch (error) {
				console.error("Error fetching delivery data:", error);
			}
		};

		fetchData();
	}, []);
	// Handle form submission
	const handleFormSubmit = (values, actions) => {
		actions.setSubmitting(false);

		// Check window if undefined to access sessionstorage/localstorage items
		if (typeof window !== "undefined") {
			// sessionStorage.removeItem("sessionData")
			sessionStorage.setItem("sessionData", JSON.stringify(values));
		}

		router.push("/checkout");
	};

	useEffect(() => {
		if (cartItems.length === 0) {
			sessionStorage.removeItem("sessionData");
		}
	}, [cartItems]);
	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		address: Yup.string().required("Address is required"),
		city: Yup.string().required("City is required"),
		phoneNumber: Yup.string().min(10).max(14),
		email: Yup.string().email("Invalid email address"),
	});
	return (
		<>
			<Box>
				<Box mb={"3rem"}>
					<Text fontSize="3xl" fontWeight="bold" textAlign={"center"}>
						Shipping Details
					</Text>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						margin={"0 auto"}
						width={"50px"}
						height={"2px"}
						background={"#FFC700"}
					></Box>
				</Box>
				<Formik
					initialValues={
						existingSessionData || {
							firstName: "",
							lastName: "",
							phoneNumber: "",
							email: "",
							city: "",
							address: "",
						}
					}
					validationSchema={validationSchema}
					onSubmit={handleFormSubmit}
				>
					<Form>
						<Flex gap={2} flexDir="row" mb={6}>
							<Field name="firstName">
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.firstName && form.touched.firstName}
									>
										<FormLabel htmlFor="firstName" color={"gray.500"}>
											First Name
										</FormLabel>
										<InputGroup>
											<Input
												{...field}
												id="firstName"
												placeholder="Enter your first name"
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name="lastName">
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.lastName && form.touched.lastName}
									>
										<FormLabel htmlFor="lastName" color={"gray.500"}>
											Last Name
										</FormLabel>
										<InputGroup>
											<Input
												{...field}
												id="lastName"
												placeholder="Enter your last name"
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>

						<Flex
							gap={6}
							flexDir={{ base: "row", sm: "row", lg: "column" }}
							mb={6}
						>
							<Field name="phoneNumber">
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.phoneNumber && form.touched.phoneNumber
										}
									>
										<FormLabel htmlFor="phoneNumber" color={"gray.500"}>
											Phone Number
										</FormLabel>
										<InputGroup>
											<Input
												{...field}
												id="phoneNumber"
												placeholder="Enter your phone number (optional)"
											/>
										</InputGroup>
										<FormErrorMessage>
											{form.errors.phoneNumber}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Field name="email">
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.email && form.touched.email}
									>
										<FormLabel htmlFor="email" color={"gray.500"}>
											Email Address
										</FormLabel>
										<InputGroup>
											<Input
												{...field}
												id="email"
												placeholder="Enter your email address"
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.email}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
						</Flex>

						<Field name="city">
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.city && form.touched.city}>
									<FormLabel htmlFor="city" color={"gray.500"} mt={6}>
										Delivery location
									</FormLabel>
									<Accordion allowToggle>
										{deliveryData.map((deliveryAxis, axisIndex) => (
											<AccordionItem key={axisIndex}>
												<h2>
													<AccordionButton
														pl={2}
														border={"none"}
														_expanded={{
															bg: "#FFC700",
															fontWeight: 500,
															fontSize: "1.2rem",
															color: "white",
														}}
													>
														<Box flex="1" textAlign="left">
															{deliveryAxis.delivery_axis}
														</Box>
														<AccordionIcon />
													</AccordionButton>
												</h2>
												<AccordionPanel pb={4}>
													<Flex flexWrap="wrap">
														{deliveryAxis.delivery_area.map(
															(area, areaIndex) => (
																<Checkbox
																	pl={0}
																	key={areaIndex}
																	isChecked={field.value === area.delivery_area}
																	value={area.delivery_area}
																	onChange={() =>
																		form.setFieldValue(
																			field.name,
																			field.value === area.delivery_area
																				? ""
																				: area.delivery_area
																		)
																	}
																	margin="0.25rem"
																>
																	<Text as="span" pr={3}>
																		{area.delivery_area}
																	</Text>
																</Checkbox>
															)
														)}
													</Flex>
												</AccordionPanel>
											</AccordionItem>
										))}
									</Accordion>
									<FormErrorMessage>{form.errors.city}</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						<Field name="address">
							{({ field, form }) => (
								<FormControl
									isInvalid={form.errors.address && form.touched.address}
								>
									<FormLabel htmlFor="address" color={"gray.500"} mt={6}>
										Address
									</FormLabel>
									<InputGroup>
										<Input
											{...field}
											id="address"
											type="text"
											placeholder="Please enter full address"
											focusBorderColor="red.200"
										/>
									</InputGroup>
									<FormErrorMessage>{form.errors.address}</FormErrorMessage>
								</FormControl>
							)}
						</Field>

						{cartItems.length === 0 ? (
							<NoSSR>
								<button
									type="button"
									onClick={() => router.push("/products")}
									style={{
										background: "red",
										color: "white",
										fontWeight: "normal",
										fontSize: "18px",
										padding: "14px",
										borderRadius: "3rem",
										width: "100%",
										marginTop: "2rem",
										fontFamily: "Inter",
									}}
								>
									Proceed to products
								</button>
							</NoSSR>
						) : (
							<NoSSR>
								<Button
									type="submit"
									sx={{
										background: "red",
										color: "white",
										fontWeight: "normal",
										fontSize: "18px",
										padding: "14px",
										borderRadius: "3rem",
										width: "100%",
										marginTop: "2rem",
										fontFamily: "Inter",
									}}
								>
									Proceed to checkout
								</Button>
							</NoSSR>
						)}
					</Form>
				</Formik>
			</Box>
		</>
	);
};

export default ShippingForm;
