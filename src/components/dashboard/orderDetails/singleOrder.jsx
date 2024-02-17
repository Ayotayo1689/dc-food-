import {
	Box,
	Divider,
	Flex,
	HStack,
	IconButton,
	Image,
	Text,
	Grid,
	Center,
	Spinner,
	Select,
	Button,
} from "@chakra-ui/react";

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";

import NoSSR from "@/utils/NoSSR";

const UserOrder = ({ orderRef }) => {
	const [deliveryStatus, setDeliveryStatus] = useState(null);
	const [procurementStatus, setProcurementStatus] = useState(null);
	const [submittingDeliveryStatus, setSubmittingDeliveryStatus] =
		useState(false);
	const [submittingProcurementStatus, setSubmittingProcurementStatus] =
		useState(false);
	const procumentStatusArray = [
		"Pending",
		"InProgress",
		"Completed",
		"Failed",
		"Inherit",
	];
	const deliveryStatusArray = [
		"Pending",
		"InProgress",
		"Completed",
		"Failed",
		"Returned",
		"Inherit",
	];
	const [isLoading, setIsLoading] = useState(true);
	const [orderInfo, setOrderInfo] = useState(null);
	const [isError, setIsError] = useState(false);
	const handleChangeDeliveryStatus = (event) => {
		setDeliveryStatus(event.target.value);
	};

	const handleChangeProcurementStatus = (event) => {
		setProcurementStatus(event.target.value);
	};
	const checkUserOder = async () => {
		try {
			setIsLoading(true);

			const { data } = await axiosInstance.get(
				`/api/orders/${orderRef}/summary`
			);
			setOrderInfo(data);

			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			toast.error("Something went wrong, please try again");
			console.log(error?.response?.data);
		}
	};

	const handleUpdateDeliveryStatus = async () => {
		if (!deliveryStatus) {
			return toast.error("Please select an option");
		}
		// Make API call here with the selected option
		console.log(`Updating payment method 1 to ${deliveryStatus}`);
		try {
			setSubmittingDeliveryStatus(true);
			const data = new FormData();
			data.append("delivery_status", deliveryStatus);

			const resp = await axiosInstance.patch(
				`/api/orders/admin/${orderInfo?.id}/update-delivery-status/`,
				data
			);
			toast.success("Order Delivery Status Updated Successfully");
			checkUserOder();
			setSubmittingDeliveryStatus(false);
		} catch (error) {
			setSubmittingDeliveryStatus(false);

			toast.error("Something went wrong, please try again");
			console.log(error?.response?.data);
		}
	};
	const handleUpdateProcurementStatus = async () => {
		if (!procurementStatus) {
			return toast.error("Please select an option");
		}
		console.log(`Updating payment method 2 to ${procurementStatus}`);
		try {
			setSubmittingProcurementStatus(true);
			const data = new FormData();
			data.append("procurement_status", procurementStatus);

			const resp = await axiosInstance.patch(
				`/api/orders/admin/${orderInfo?.id}/update-procurement-status/`,
				data
			);
			toast.success("Order Procurement Status Updated Successfully");
			checkUserOder();
			setSubmittingProcurementStatus(false);
		} catch (error) {
			setSubmittingProcurementStatus(false);

			toast.error("Something went wrong, please try again");
			console.log(error?.response?.data);
		}
	};
	console.log(orderInfo);

	function formatToNaira(amount) {
		return new Intl.NumberFormat("en-NG", {
			style: "currency",
			currency: "NGN",
		}).format(amount);
	}
	useEffect(() => {
		if (orderRef) {
			checkUserOder();
		}
	}, [orderRef]);

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
		<Box pt={8} fontSize="24px" fontWeight="500" mb={"4rem"}>
			<NoSSR>
				<Flex p={{ base: "0", md: "0", lg: "0 2rem" }} gap={10} mb={8}>
					<Flex flexDir={"column"} gap={4}>
						<Text fontSize={"1.2rem"} fontWeight={"semibold"}>
							Update Procurement Status
						</Text>
						<Select
							placeholder="Select option"
							onChange={handleChangeProcurementStatus}
						>
							{deliveryStatusArray.map((status, index) => (
								<option value={status} key={index}>
									{status}
								</option>
							))}
						</Select>
						<Button
							isLoading={submittingProcurementStatus}
							onClick={handleUpdateProcurementStatus}
						>
							Update
						</Button>
					</Flex>
					<Flex flexDir={"column"} gap={4}>
						<Text fontSize={"1.2rem"} fontWeight={"semibold"}>
							Update Delivery Status
						</Text>
						<Select
							placeholder="Select option"
							onChange={handleChangeDeliveryStatus}
						>
							{procumentStatusArray.map((status, index) => (
								<option value={status} key={index}>
									{status}
								</option>
							))}
						</Select>
						<Button
							isLoading={submittingDeliveryStatus}
							onClick={handleUpdateDeliveryStatus}
						>
							Update
						</Button>
					</Flex>
				</Flex>
				{/*Card Carousel*/}
				<Grid
					py={4}
					alignItems={"center"}
					p={{ base: "0", md: "0", lg: "0 2rem" }}
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, minmax(100px, 1fr))",
					}}
					mx="auto"
					gap={8}
				>
					{orderInfo?.items.map((product, index) => (
						<Flex
							border="1px solid #E2E8F0"
							borderRadius={"5px"}
							boxShadow="0px 1px 1px 0px rgba(0, 0, 0, 0.25)"
							key={index}
							gap={4}
							pb={3}
						>
							<Box position="relative">
								{/*Product image*/}
								<Box>
									<Image
										src={product?.product?.featured_image}
										alt={product?.name}
										mx="auto"
										objectFit="contain"
										w="100px"
										h="100px"
										borderRadius={"5px"}
									/>
								</Box>
							</Box>

							<Flex flexDir={"column"} gap={2} py={1}>
								<Text fontSize={"0.8rem"}>{product?.product?.name}</Text>
								<Text fontSize={"0.8rem"}>{formatToNaira(product?.price)}</Text>

								<Text fontSize={"0.8rem"}>
									Qty:
									{product?.quantity}
								</Text>
								<Text fontSize={"0.8rem"}>
									Total: {"   "}
									{formatToNaira(product?.total_amount)}
								</Text>
							</Flex>
						</Flex>
					))}
				</Grid>

				{/*Order details*/}
				<Box px="24px" mt="64px">
					<Flex mb="21px" justify="space-between">
						<Text fontSize={"1.2rem"}>Date</Text>

						<Text fontSize={"1.2rem"}>
							{orderInfo?.order_date.slice(0, 10)}
						</Text>
					</Flex>

					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Procurement Status</Text>
						<Text fontSize={"1.2rem"}>{orderInfo?.procurement_status}</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Delivery Status</Text>
						<Text fontSize={"1.2rem"}>{orderInfo?.delivery_status}</Text>
					</Flex>

					<Divider my="16px" color="black" />
					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Total</Text>
						<Text fontSize={"1.2rem"}>
							{formatToNaira(orderInfo?.total_amount)}
						</Text>
					</Flex>
				</Box>
			</NoSSR>
		</Box>
	);
};
export default UserOrder;
