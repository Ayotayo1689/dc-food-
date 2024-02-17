import React, { useMemo, useState, useEffect } from "react";
import {
	Box,
	Button,
	Checkbox,
	Flex,
	HStack,
	IconButton,
	Input,
	Select,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Skeleton,
} from "@chakra-ui/react";
import { mockTableData } from "@/components/dashboard/orders/mockData";
import OrderDetails from "@/components/dashboard/orderDetails";
import { getOrders } from "@/features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import UserOrder from "../orderDetails/singleOrder";

const OrdersTable = () => {
	const dispatch = useDispatch();
	const {
		isLoading: gettingOrders,
		products,
		allOrders,
	} = useSelector((state) => state.admin);
	const [currentPage, setCurrentPage] = React.useState(1);

	const perPage = 20;
	const data = allOrders;

	const count = allOrders?.length;
	const indexOfLastOrder = currentPage * perPage;
	const indexOfFirstOrder = indexOfLastOrder - perPage;

	const currentStaff = data?.slice(indexOfFirstOrder, indexOfLastOrder);

	let totalPages = Math.ceil(length / perPage);
	const pageNumbers = Array(totalPages)
		.fill()
		.map((_, i) => i + 1);

	//const length = data?.length;
	const tableHeads = [
		"USER NAME",
		"ORDER DATE",
		"TOTAL AMOUNT",
		"PROCUREMENT STATUS",
		"USER PHONE NUMBER",
		"DELIVERY STATUS",
		"NUMBER OF ITEMS",
		"ACTIONS",
	];

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null); // New state to store the selected order

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const handleShowMore = (ref) => {
		setSelectedOrder(ref);
		toggleModal();
	};

	function formatToNaira(amount) {
		return new Intl.NumberFormat("en-NG", {
			style: "currency",
			currency: "NGN",
		}).format(amount);
	}

	useEffect(() => {
		dispatch(getOrders());
	}, []);
	return (
		<>
			<Flex className="admin-font" color="#262626" mb="20px" gap={4}>
				<Input placeholder="Search" />
				<Select className="admin-font" placeholder="Category" />
				<Select className="admin-font" placeholder="Price" />
			</Flex>
			<Skeleton isLoaded={!gettingOrders} fadeDuration={1} rounded={"xl"}>
				<Table
					className="table-tiny"
					borderRadius="8px"
					border="1px solid #E8EEF8"
					variant="unstyled"
				>
					<Thead border="1px solid #E8EEF8">
						<Tr>
							<Th>
								<Checkbox colorScheme="yellow" />
							</Th>
							{tableHeads.map((head, index) => (
								<Th color="#4B465C" py="16px" key={index}>
									<Text fontSize="14px" className="admin-table-font">
										{head}
									</Text>
								</Th>
							))}
						</Tr>
					</Thead>
					<Tbody>
						{currentStaff?.map((row, index) => (
							<Tr fontWeight="500" fontSize="14px" color="#4B465C" key={index}>
								<Td className="admin-table-font">
									<Checkbox colorScheme="yellow" />
								</Td>
								<Td className="admin-table-font">{row?.delivery_fullname}</Td>
								<Td className="admin-table-font">
									{row?.order_date.slice(0, 10)}
								</Td>
								<Td
									fontWeight="600"
									color="#343330"
									className="admin-table-font"
								>
									{formatToNaira(row?._total_amount)}
								</Td>
								<Td
									fontWeight="600"
									color="#343330"
									className="admin-table-font"
								>
									<Box
										display="inline-block"
										p="5px 10px"
										textTransform="capitalize"
										fontWeight="600"
										borderRadius="4px"
									>
										<Text className="admin-table-font" textAlign={"center"}>
											{row?.procurement_status}
										</Text>
										{row?.order_date && (
											<Text textAlign={"center"}>
												{row?.order_date.slice(0, 10)}
											</Text>
										)}
									</Box>
								</Td>
								<Td className="admin-table-font">
									{row?.delivery_phone_number}
								</Td>
								<Td className="admin-table-font">
									<Box
										display="inline-block"
										p="5px 10px"
										textTransform="capitalize"
										fontWeight="600"
										borderRadius="4px"
									>
										<Text className="admin-table-font" textAlign={"center"}>
											{row?.delivery_status}
										</Text>
										{row?.order_date && (
											<Text textAlign={"center"}>
												{row?.order_date.slice(0, 10)}
											</Text>
										)}
									</Box>
								</Td>
								<Td className="admin-table-font">
									<Text
										className="admin-table-font"
										fontSize={"1.5rem"}
										textAlign={"center"}
									>
										{row?.items?.length}
									</Text>
								</Td>

								<Td>
									<button
										onClick={() => handleShowMore(row?.ref)}
										style={{ color: "#FFC700", textTransform: "uppercase" }}
									>
										View details
									</button>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Skeleton>

			<Flex mb="50px" mt="30px" align="center" justify="space-between">
				<Text className="admin-font" color="#343330" fontWeight="600">
					Showing {indexOfFirstOrder + 1} -{" "}
					{indexOfLastOrder <= count ? indexOfLastOrder : count} of {count}
				</Text>
				<HStack>
					<IconButton
						aria-label="previous page"
						isDisabled={currentPage === 1}
						onClick={() => setCurrentPage(currentPage - 1)}
						icon={
							<Text fontSize="20px" fontWeight="600" color="#4B465C">
								{"<"}
							</Text>
						}
					/>
					{pageNumbers.map((number, index) => (
						<Button
							onClick={() => setCurrentPage(number)}
							disabled={currentPage === number}
							bg={
								currentPage === number
									? "#F2994A"
									: "rgba(75, 70, 92," + " 0.08)"
							}
							color={currentPage === number ? "white" : "#4B465C"}
							key={index}
						>
							{number}
						</Button>
					))}
					<IconButton
						aria-label="next page"
						isDisabled={currentPage === totalPages}
						onClick={() => setCurrentPage(currentPage + 1)}
						icon={
							<Text fontSize="20px" fontWeight="600" color="#4B465C">
								{">"}
							</Text>
						}
					/>
				</HStack>
			</Flex>

			<Modal isOpen={modalOpen} onClose={toggleModal}>
				<ModalOverlay />
				<ModalContent maxW={"90%"} overflow="auto">
					<ModalBody alignItems={"center"}>
						{/* <OrderDetails orderRef={selectedOrder} /> */}
						<UserOrder orderRef={selectedOrder} />
					</ModalBody>
					<Button
						onClick={() => {
							toggleModal();
							dispatch(getOrders());
						}}
					>
						Close
					</Button>
				</ModalContent>
			</Modal>
		</>
	);
};
export default OrdersTable;
