import React, { useMemo, useEffect } from "react";

import {
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
	Skeleton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { mockTableData } from "@/components/dashboard/customers/mockData";
import { getUsers } from "@/features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";

const CustomersTable = () => {
	const dispatch = useDispatch();
	const {
		category,
		isLoading: gettingStaff,
		products,
		allUsers,
	} = useSelector((state) => state.admin);

	const [currentPage, setCurrentPage] = React.useState(1);
	const perPage = 20;
	const data = allUsers;
	const tableHeads = [
		"CUSTOMER NAME",
		"DELIVERY ADDRESS",
		"EMAIL ADDRESS",
		"PHONE NUMBER",
		"ACTIONS",
	];

	const count = data?.length;
	const indexOfLastCustomer = currentPage * perPage;
	const indexOfFirstCustomer = indexOfLastCustomer - perPage;
	const currentCustomers = data?.slice(
		indexOfFirstCustomer,
		indexOfLastCustomer
	);

	let totalPages = Math.ceil(length / perPage);
	const pageNumbers = Array(totalPages)
		.fill()
		.map((_, i) => i + 1);
	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<>
			<Flex color="#262626" mb="20px" gap={4}>
				<Select className="admin-font" placeholder="search by" />
				<Input className="admin-font" placeholder="Search" />
			</Flex>
			<Skeleton isLoaded={!gettingStaff} fadeDuration={1} rounded={"xl"}>
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
					<Tbody color="#4B465C">
						{currentCustomers.map((row, index) => {
							return (
								<Tr
									fontWeight="500"
									fontSize="14px"
									color="#4B465C"
									key={index}
								>
									<Td className="admin-table-font">
										<Checkbox colorScheme="yellow" />
									</Td>
									<Td className="admin-table-font">{row?.customer_name}</Td>
									<Td className="admin-table-font">
										{`${row?.delivery_addresses[0]?.street}, ${row?.delivery_addresses[0]?.city}, ${row?.delivery_addresses[0]?.state}, ${row?.delivery_addresses[0]?.country}`}
										{/* {row?.delivery_addresses[0]} */}
									</Td>

									<Td
										fontWeight="600"
										color="#343330"
										className="admin-table-font"
									>
										{row?.customer_email}
									</Td>
									<Td
										fontWeight="600"
										color="#343330"
										className="admin-table-font"
									>
										{row?.phone_number}
									</Td>
									<Td>
										<HStack spacing={2}>
											<IconButton
												variant="ghost"
												aria-label="Delete icon"
												icon={<DeleteIcon color={"#4B465C"} />}
											/>
										</HStack>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Skeleton>

			<Flex mb="50px" mt="30px" align="center" justify="space-between">
				<Text className="admin-font" color="#343330" fontWeight="600">
					Showing {indexOfFirstCustomer + 1} -{" "}
					{indexOfLastCustomer <= count
						? indexOfLastCustomer
						: count}{" "}
					of {count}
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
		</>
	);
};
export default CustomersTable;
