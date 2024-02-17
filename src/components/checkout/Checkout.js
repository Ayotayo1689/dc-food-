import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";
import { useDispatch, useSelector } from "react-redux";
import NoSSR from "@/utils/NoSSR";
import NextLink from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UnAuth from "@/components/auth/unauth";
import axiosInstance from "@/utils/axios";
import {
	getDeliveryArea,
	getDeliveryFee,
} from "@/features/payment/deliverySlice";
import { toast } from "react-toastify";
import { formatToNaira } from "@/utils/toNaira";

const ProductCheckout = () => {
	const success = useSelector((state) => state.user.user);
	const { cartItems } = useSelector((state) => state.cart);
	const [isloading, setIsLoading] = useState(false);
	const [axisId, setAxisId] = useState("");

	const { deliveryArea, deliveryPrice } = useSelector(
		(state) => state.delivery
	);
	let deliveryAxisId;

	let sessionData;
	const router = useRouter();
	const dispatch = useDispatch();
	if (typeof window !== "undefined") {
		sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
	}
	const cart = cartItems.map((item) => {
		return {
			product: item.id,
			quantity: item.qty,
		};
	});

	const handlePayment = async () => {
		const deliveryInfo = {
			contact_email: sessionData?.email,
			contact_phone_number: sessionData?.phoneNumber,
			delivery_address: `${sessionData?.address}, ${sessionData?.city}`,
			delivery_fullname: `${sessionData?.firstName} ${sessionData?.lastName}`,
			delivery_email: sessionData?.email,
			delivery_phone_number: sessionData?.phoneNumber,
			items: cart,
			delivery_amount: deliveryPrice,
			delivery_axis: axisId,
			callback_url: `${
				process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
			}/payment`,
		};

		try {
			setIsLoading(true);
			const token = success?.access;
			if (token) {
				const { data } = await axiosInstance.post(
					"api/orders/initialize",
					deliveryInfo,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				router.push(data?.continuation_link);
			} else {
				const { data } = await axiosInstance.post(
					"api/orders/initialize",
					deliveryInfo
				);
				router.push(data?.continuation_link);
			}

			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			toast.error("Something went wrong, please try again");
			console.log(error?.response);
		}
	};

	useEffect(() => {
		// Check window if undefined to access sessionstorage/localstorage items
		// Check if sessionData is not null
		if (sessionData) {
			deliveryAxisId = deliveryArea?.find(
				(area) => area.delivery_area === sessionData?.city
			);
		}

		// Check if deliveryAxisId is not null
		if (deliveryAxisId) {
			dispatch(getDeliveryFee(deliveryAxisId?.delivery_axis));
			setAxisId(deliveryAxisId?.delivery_axis);
		}
	}, [deliveryArea]);

	// Edge case to get delivery area again if page is refreshed
	useEffect(() => {
		dispatch(getDeliveryArea());
	}, []);

	// Save delivery price to session storage
	const handleDeliveryPrice = () => {
		// Check if window is not undefined
		if (typeof window !== "undefined") {
			// Check if deliveryPrice is already in session storage and remove
			if (sessionStorage.getItem("deliveryPrice") !== null) {
				sessionStorage.removeItem("deliveryPrice");
			}
			// Save deliveryPrice to session storage
			sessionStorage.setItem("deliveryPrice", JSON.stringify(deliveryPrice));
		}
	};

	const calculateSingleProductTotal = (product) => {
		return product.qty * product.price;
	};

	const calculateSubtotal = () => {
		return cartItems.reduce(
			(subtotal, product) => subtotal + calculateSingleProductTotal(product),
			0
		);
	};

	const calculateOverallTotal = () => {
		return calculateSubtotal() + deliveryPrice;
	};

	const goBackToCart = () => {
		router.push("/cart");
	};
	//
	// useEffect(() => {
	//     console.log(success)
	//     if (!success) {
	//             router.push("/signin");
	//     }
	// }, [success]);

	return (
		<NoSSR>
			<Container maxW="7xl">
				<Grid
					templateColumns={{ sm: "1fr", md: "1fr", lg: "1fr 1fr" }}
					bg={"#fff"}
				>
					<NoSSR>
						<Box py="4rem" px={{ base: "10px", md: "40px" }}>
							<Box
								borderRadius={"1rem"}
								border={"1px solid rgba(0,0,0,0.1)"}
								py={8}
								px={4}
								mb={12}
							>
								<Text
									textAlign={"center"}
									fontSize={{ base: "24px", md: "30px", lg: "36px" }}
									mb="20px"
									fontWeight="500"
								>
									Shipping Details
								</Text>
								<hr />
								<Flex flexDir="column" gap={2} pt={4}>
									{sessionData?.firstName && sessionData?.lastName && (
										<Box textTransform="capitalize">
											<Text color="grey" fontSize="16px">
												Full Name
											</Text>
											<Text
												fontWeight="medium"
												fontSize={{
													base: "18px",
													md: "20px",
													lg: "24px",
												}}
											>{`${sessionData?.firstName} ${sessionData?.lastName}`}</Text>
										</Box>
									)}
									<hr />
									{sessionData?.phoneNumber && (
										<Box textTransform="capitalize">
											<Text fontSize="16px" color="grey">
												Contact No.
											</Text>
											<Flex justifyContent={"space-between"}>
												<Text
													fontWeight="medium"
													fontSize={{
														base: "18px",
														md: "20px",
														lg: "24px",
													}}
												>
													{sessionData?.phoneNumber}
												</Text>
												<Box>
													<Button
														onClick={goBackToCart}
														variant="link"
														href={"/cart"}
														ml={2}
														color="orange.600"
														fontWeight={500}
														fontSize={"1.1rem"}
														textDecoration={"underline"}
													>
														Edit
													</Button>
												</Box>
											</Flex>
										</Box>
									)}
									<hr />
									{sessionData?.city && (
										<Box textTransform="capitalize">
											<Text color="grey" fontSize="16px">
												Address
											</Text>
											<Flex justifyContent={"space-between"}>
												<Text
													fontWeight="medium"
													fontSize={{
														base: "18px",
														md: "20px",
														lg: "24px",
													}}
												>{`${sessionData?.address}, ${sessionData?.city}`}</Text>
												<Box>
													<Button
														onClick={goBackToCart}
														variant="link"
														href={"/cart"}
														ml={2}
														color="orange.600"
														fontWeight={500}
														fontSize={"1.1rem"}
														textDecoration={"underline"}
													>
														Edit
													</Button>
												</Box>
											</Flex>
										</Box>
									)}
								</Flex>
							</Box>
							<Flex align="center" mt={6} justify="space-between">
								<Link
									display={"flex"}
									alignItems={"center"}
									gap={1}
									color="orange.600"
									fontWeight={500}
									fontSize={"1.1rem"}
									textDecoration="none"
									_hover={{ color: "red" }}
									as={NextLink}
									href="/cart"
								>
									<IoChevronBackOutline /> Return to Cart
								</Link>
								<Button
									py="1rem"
									color="white"
									bg="orange.300"
									isLoading={isloading}
									onClick={() => {
										handleDeliveryPrice();
										handlePayment();
										// router.push('/payment')
									}}
								>
									Proceed to Pay
								</Button>
							</Flex>
						</Box>
					</NoSSR>

					<Box
						bg="whitesmoke"
						px={{ base: "6px", md: "40px" }}
						py="4rem"
						border={"1px solid rgba(0,0,0,0.1)"}
						borderRadius={"0.5rem"}
					>
						<Flex pr={{ base: "10px", md: "40px" }} flexDir="column" gap={2}>
							<NoSSR>
								{cartItems.map((product, index) => {
									return (
										<Flex
											py={2}
											align="center"
											justify="space-between"
											key={index}
											borderBottom="1px solid #e2e2e2"
										>
											<Flex align="center" gap={4}>
												<Box
													border="1px solid grey"
													position="relative"
													w={{ base: "50px", md: "60px" }}
													h={{ base: "50px", md: "70px" }}
													minW={{ base: "50px" }}
													minH={{ base: "50px" }}
													p="2px"
													bg="white"
													borderRadius="10px"
													fontFamily={"Inter"}
												>
													<Image
														w="100%"
														h="100%"
														objectFit="contain"
														src={
															product?.featured_image || product?.combo_image
														}
														alt={product?.name}
													/>
													<Box
														display="flex"
														justifyContent="center"
														alignItems="center"
														color="white"
														bg="#eb5234"
														w="22px"
														h="22px"
														borderRadius="full"
														position="absolute"
														right="-8px"
														top="-8px"
													>
														{product?.qty}
													</Box>
												</Box>
												<Box>
													<Text fontWeight="medium" fontSize="16px">
														{product?.name}
													</Text>
												</Box>
											</Flex>
											<Text fontSize="16px">
												{formatToNaira(
													calculateSingleProductTotal(product).toFixed(2)
												)}
											</Text>
										</Flex>
									);
								})}
							</NoSSR>
							<NoSSR>
								<Flex flexDir={"column"} gap={4} mt={"3rem"}>
									<Flex pt={2} fontSize="16px" justify="space-between">
										<Text fontWeight={500}>Subtotal:</Text>
										<Text fontWeight="medium">
											{formatToNaira(calculateSubtotal().toFixed(2))}
										</Text>
									</Flex>
									<Flex justify="space-between">
										<Text fontWeight={500} fontSize="16px">
											Shipping:
										</Text>
										<Text fontSize="14px">{formatToNaira(deliveryPrice)}</Text>
									</Flex>
									<Flex
										fontSize="18px"
										fontWeight="medium"
										justify="space-between"
									>
										<Text>Total:</Text>
										<Text>
											{formatToNaira(calculateOverallTotal().toFixed(2))}
										</Text>
									</Flex>
								</Flex>
							</NoSSR>
						</Flex>
					</Box>
				</Grid>
			</Container>
		</NoSSR>
	);
};

ProductCheckout.PageLayout = CheckoutLayout;

export default ProductCheckout;
