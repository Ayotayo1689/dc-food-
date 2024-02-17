import React, { useEffect, useState } from "react";
import NoSSR from "@/utils/NoSSR";
import {
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	Image,
	Spinner,
	Text,
} from "@chakra-ui/react";
import MyOrder from "@/components/payment/myorder";
import axiosInstance from "@/utils/axios";
import { clearCart } from "@/features/store/cart";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function OrderDetails() {
	const router = useRouter();
	const { ref } = router.query;

	const [isLoading, setIsLoading] = useState(true);
	const [orderInfo, setOrderInfo] = useState(null);
	const [isError, setIsError] = useState(false);

	const fetchOderDetails = async () => {
		try {
			setIsLoading(true);

			const { data } = await axiosInstance.get(`/api/orders/${ref}/summary`);
			setOrderInfo(data);

			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			toast.error("Something went wrong, please try again");
			console.log(error?.response?.data);
		}
	};
	useEffect(() => {
		if (ref) {
			fetchOderDetails();
		}
	}, [ref]);
	console.log(orderInfo);

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
			<Center h="100vh">
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
				Order made on {orderInfo?.order_date.slice(0, 10)}
			</Text>

			<Box bg={"#fff"} borderRadius={"1.25rem"} py={4}>
				{/*<Text*/}
				{/*    px={{ base: 2, md: 2, lg: 8 }}*/}
				{/*    pb={4}*/}
				{/*    fontSize={{ base: "1rem", md: "1.2rem", lg: "1.3rem" }}*/}
				{/*    fontWeight={400}*/}
				{/*>*/}
				{/*    Thank you. Your order has been received and Payment is successful.*/}
				{/*</Text>*/}
				<hr />
				<Text
					px={{ base: 2, md: 2, lg: 8 }}
					pt={4}
					fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }}
					fontWeight={500}
				>
					Order details
				</Text>

				<Text></Text>

				<MyOrder orderInfo={orderInfo} />
			</Box>
		</Box>
	);
}

export default OrderDetails;
