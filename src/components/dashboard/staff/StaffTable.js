import React, { useMemo, useEffect, useState } from "react";
import {
	Button,
	Checkbox,
	Flex,
	HStack,
	IconButton,
	Input,
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
import { staffData } from "@/components/dashboard/staff/data";
import { getStaffs } from "@/features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axios";
import endpoints from "@/features/api/endpoints";
const StaffTable = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);

	const {
		category,
		isLoading: gettingStaff,
		products,
		allStaffs,
	} = useSelector((state) => state.admin);
	const [currentPage, setCurrentPage] = React.useState(1);
	const perPage = 5;
	const data = allStaffs;
	const tableHeads = [
		"STAFF NAME",
		"ROLE",
		"ADDRESS",
		"PHONE NUMBER",
		"WORK STATUS",
		"ACTIONS",
	];

	const count = data?.length;
	const indexOfLastProduct = currentPage * perPage;
	const indexOfFirstProduct = indexOfLastProduct - perPage;
	const currentProduct = data?.slice(indexOfFirstProduct, indexOfLastProduct);

	let totalPages = Math.ceil(length / perPage);
	const pageNumbers = Array(totalPages)
		.fill()
		.map((_, i) => i + 1);
	useEffect(() => {
		dispatch(getStaffs());
	}, []);

	const [isLoading, setIsLoading] = useState(false);

	const deleteQoute = async (id) => {
		setIsLoading(true);
		console.log("hi");
		try {
			const resp = await axiosInstance.delete(`${endpoints.staffs}/${id}`, {
				headers: {
					Authorization: `Bearer ${user?.access}`,
				},
			});
			toast.success("staff deleted");
			// setTimeout(() => {
			// 	dispatch(getProductByCategories());
			// }, 1000);
			Router.reload();
		} catch (error) {
			toast("error deleting product");
		}
		setIsLoading(false);
	};
	return (
		<>
			<Flex color="#262626" mb="20px" gap={4} w={"50%"}>
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
									<Text fontSize="0.8rem" className="admin-table-font">
										{head}
									</Text>
								</Th>
							))}
						</Tr>
					</Thead>
					<Tbody>
						{currentProduct.map((row, index) => {
							console.log(row);

							return (
								<Tr color="#4B465C" key={index}>
									<Td className="admin-table-font">
										<Checkbox colorScheme="yellow" />
									</Td>
									<Td
										className="admin-table-font"
										fontWeight="500"
										color="#4B465C"
										fontSize={"0.86rem"}
									>
										{row?.staff_name}
									</Td>
									<Td
										className="admin-table-font"
										fontWeight="500"
										color="#4B465C"
										fontSize={"0.9rem"}
									>
										{row?.job_role}
									</Td>
									<Td
										fontWeight="500"
										color="#4B465C"
										fontSize={"0.9rem"}
										className="admin-table-font"
									>
										{row?.address}
									</Td>
									<Td
										className="admin-table-font"
										fontSize={"0.86rem"}
										fontWeight={600}
									>
										{row?.phone_number}
									</Td>
									<Td className="admin-table-font">
										<Text
											className="admin-table-font"
											display="inline-block"
											p="5px 15px"
											w={"100px"}
											textAlign={"center"}
											textTransform="capitalize"
											fontWeight="600"
											fontSize={"0.8rem"}
											borderRadius="4px"
											bg={
												row?.work_status === "Remote"
													? "rgba(40, 199, 111, 0.16)"
													: row.status === "Hybrid"
													? "rgba(255, 165, 0, 0.28)"
													: "rgba(26, 32, 44, 0.28)"
											}
											color={
												row?.work_status === "Remote"
													? "#28C76F"
													: row.status === "Hybrid"
													? "#FFA500"
													: "#1A202C"
											}
										>
											{row?.work_status}
										</Text>
									</Td>

									<Td>
										<HStack spacing={2}>
											<IconButton
												variant="ghost"
												aria-label="edit icon"
												fontWeight="500"
												icon={<EditIcon color={"#4B465C"} />}
											/>
											<IconButton
												variant="ghost"
												aria-label="Delete icon"
												fontWeight="500"
												onClick={() => deleteQoute(row?.id)}
												isLoading={isLoading}
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
					Showing {indexOfFirstProduct + 1} - {indexOfLastProduct} of{" "}
					{count}
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
export default StaffTable;
