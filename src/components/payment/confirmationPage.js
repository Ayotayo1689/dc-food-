import { Box, Text, Grid, Center, Spinner } from "@chakra-ui/react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import MyOrder from "./myorder";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/features/store/cart";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/router";

const ConfirmationPage = () => {
	const [selected, setSelected] = useState(-1);
	const router = useRouter();
	const dispatch = useDispatch();
	const { ref } = router.query;

	const [isLoading, setIsLoading] = useState(true);
	const [orderInfo, setOrderInfo] = useState(null);
	const [isError, setIsError] = useState(false);
	const checkUserOder = async () => {
		try {
			setIsLoading(true);

			const { data } = await axiosInstance.get(`/api/orders/${ref}/summary`);
			setOrderInfo(data);

			setIsLoading(false);
			dispatch(clearCart());
			localStorage.setItem("cartItems", JSON.stringify([]));
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			toast.error("Something went wrong, please try again");
			console.log(error?.response?.data);
		}
	};
	useEffect(() => {
		if (ref) {
			checkUserOder();
		}
	}, [ref]);
	console.log({ orderInfo });
	if (isLoading) {
		return (
			<Center h="100vh">
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="#FFC700"
					size="xl"
				/>
			</Center>
		);
	}
	if (isError) {
		return (
			<Center h="100vh" w="100vw">
				<Text>Something went wrong, please try again</Text>
			</Center>
		);
	}

	return (
		<Box bg={"#f8efd5"} p={8} className={"Inter"}>
			<Box
				bg={"#FFC700"}
				height={"3px"}
				ml={{ base: 2, md: 2, lg: 8 }}
				width={"7rem"}
			></Box>
			<Text
				fontSize={{ base: "1.1rem", md: "1.4rem", lg: "1.5rem" }}
				fontWeight={600}
				mb={3}
				px={{ base: 2, md: 2, lg: 8 }}
			>
				Order confirmation
			</Text>

			<Box bg={"#fff"} borderRadius={"1.25rem"} py={4}>
				<Text
					px={{ base: 2, md: 2, lg: 8 }}
					pb={4}
					fontSize={{ base: "1rem", md: "1.2rem", lg: "1.3rem" }}
					fontWeight={400}
				>
					Thank you. Your order has been received and Payment is successful.
				</Text>
				<hr />
				<Text
					px={{ base: 2, md: 2, lg: 8 }}
					pt={4}
					fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
					fontWeight={500}
				>
					Order details
				</Text>

				<MyOrder orderInfo={orderInfo} />
			</Box>
		</Box>
	);
};
export default ConfirmationPage;
const Payment = styled.div`
	border: 2px solid ${(props) => (props.isSelected ? "#FFC700" : "#ADB5BD")};
	border-radius: 10px;
	display: flex;
	justify-content: center;

	@media (max-width: 600px) {
		flex-direction: column;
		border-radius: 4px;
		justify-content: center;
	}
`;
