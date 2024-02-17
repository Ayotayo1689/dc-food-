import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	Input,
	List,
	ListIcon,
	ListItem,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import axiosInstance from "@/utils/axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Link from "next/link";
import { MdCheckCircle } from "react-icons/md";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsDash } from "react-icons/bs";
import { formatToNaira } from "@/utils/toNaira";

function OrdersDrawer() {
	const [data, setData] = useState(null);
	const success = useSelector((state) => state.user.user);
	const [isloading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchOrderData = async () => {
			try {
				setIsLoading(true);
				const token = success?.access;
				if (!token) {
					setIsLoading(false);
					return;
				}
				const response = await axiosInstance.get("api/orders/", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				// console.log("API Response:", response);
				setData(response.data);
				// console.log(data)
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchOrderData();
	}, []); // Empty dependency array to ensure the effect runs only once on mount
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button
				ref={btnRef}
				onClick={onOpen}
				borderRadius="full"
				size={{ base: "sm", md: "lg" }}
				bg={{ base: "#252323", lg: "#252323" }}
				_hover={{ bg: "#403030" }}
				color="white"
			>
				View all orders
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size={"md"}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					{/*<DrawerHeader>Create your account</DrawerHeader>*/}

					<DrawerBody pt={"4rem"}>
						<Heading size={"lg"} textAlign={"center"}>
							My Orders
						</Heading>
						<Flex direction={"column"} gap={"1.5rem"} mt={"2rem"} p={"1rem"}>
							{data?.results?.map((order, index) => {
								console.log(order);
								return (
									<Box
										key={index}
										borderBottom={"1px solid rgba(0, 0, 0, 0.25)"}
										pb={"1rem"}
										onClick={onClose}
									>
										<Link
											href={{
												pathname: "/order_details",
												query: { ref: order.ref },
											}}
										>
											<Flex
												gap={"1rem"}
												direction={{ base: "column", lg: "row" }}
												justify={"space-between"}
											>
												<Text
													rightIcon={<ArrowForwardIcon />}
													w={"50%"}
													fontSize={"1.2rem"}
													bg={"none"}
													color={"#FFA500"}
													_hover={{ color: "#FFA500" }}
													// border={"1px solid"}
												>
													{order?.order_date.slice(0, 10)}
												</Text>
												<List spacing={2} w={"100%"}>
													{order?.items.slice(0, 3).map((item, index) => {
														return (
															<ListItem display={"flex"} key={index}>
																<ListIcon as={BsDash} color="#FFA500" />
																<Text>{item?.product?.name}</Text>
															</ListItem>
														);
													})}
												</List>
											</Flex>
											<Flex flexDir={"column"} justify={"space-between"}>
												<Text
													w={"50%"}
													fontSize={"1.2rem"}
													bg={"none"}

													// border={"1px solid"}
												>
													{formatToNaira(order?.total_amount)}
												</Text>
												<Text
													w={"50%"}
													fontSize={"1.2rem"}
													bg={"none"}
													color={"#FFA500"}
													_hover={{ color: "#FFA500" }}
													// border={"1px solid"}
												>
													Click to view details
												</Text>
											</Flex>
										</Link>
									</Box>
								);
							})}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default OrdersDrawer;
