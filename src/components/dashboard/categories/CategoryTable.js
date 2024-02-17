import React, { useMemo, useEffect, useState } from "react";

import {
	Button,
	Checkbox,
	Flex,
	HStack,
	IconButton,
	Image,
	Input,
	Select,
	Switch,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	Skeleton,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Box,
	Modal,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { mockTableData } from "@/components/dashboard/categories/mockData";
import {
	getProductByCategories,
	getProducts,
} from "@/features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axios";
import endpoints from "@/features/api/endpoints";
import Router from "next/router";
import AddCategory from "@/components/dashboard/categories/add-category";
import EditCategory from "@/components/dashboard/categories/editCategory";
import UpdateProducts from "@/components/dashboard/products/update-products";

const CategoryTable = () => {
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	const [searchText, setSearchText] = useState("");

	const {
		category,
		isLoading: gettingProducts,
		products,
	} = useSelector((state) => state.admin);

	const [currentPage, setCurrentPage] = React.useState(1);
	const perPage = 20;
	const data = category;
	const tableHeads = [
		"ID",
		"ICON",
		"NAME",
		"DESCRIPTION",
		"PUBLISHED",
		"ACTIONS",
	];

	// const length = data?.length;
	// const indexOfLastCategory = currentPage * perPage;
	// const indexOfFirstCategory = indexOfLastCategory - perPage;
	const filteredCategories = category.filter(
		(row) =>
			row.id.toString().includes(searchText) ||
			row.name.toLowerCase().includes(searchText.toLowerCase())
	);

	const count = filteredCategories?.length;
	const indexOfLastCategory = currentPage * perPage;
	const indexOfFirstCategory = indexOfLastCategory - perPage;
	const currentCategories = filteredCategories?.slice(
		indexOfFirstCategory,
		indexOfLastCategory
	);

	const { user } = useSelector((state) => state.user);

	let totalPages = Math.ceil(count / perPage);
	const pageNumbers = Array(totalPages)
		.fill()
		.map((_, i) => i + 1);

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	// const [modalOpen, setModalOpen] = useState(null); // Changed to null initially

	// const toggleModal = (id) => {
	// 	setModalOpen(id === modalOpen ? null : id);
	// };

	const toggleModal = (productId) => {
		setSelectedProductId(productId);
		setModalOpen(!modalOpen);
	};

	const deleteQoute = async (id) => {
		setIsLoading(true);
		try {
			const resp = await axiosInstance.delete(
				`${endpoints.getProductByCategories}${id}`,
				{
					headers: {
						Authorization: `Bearer ${user?.access}`,
					},
				}
			);
			toast.success("Category deleted");
			// setTimeout(() => {
			// 	dispatch(getProductByCategories());
			// }, 1000);
			Router.reload();
		} catch (error) {
			toast.error("Something went wrong");
		}
		setIsLoading(false);
	};
	useEffect(() => {
		dispatch(getProductByCategories());
		// dispatch(getProducts());
	}, []);
	return (
		<>
			<Flex color="#262626" mb="20px" gap={4}>
				<Input
					className="admin-font"
					placeholder="Search"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</Flex>
			<Skeleton isLoaded={!gettingProducts} fadeDuration={1} rounded={"xl"}>
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
						{currentCategories.map((row, index) => (
							<Tr fontWeight="500" fontSize="14px" color="#4B465C" key={index}>
								<Td className="admin-table-font">
									<Checkbox colorScheme="yellow" />
								</Td>
								<Td className="admin-table-font">{row?.id}</Td>
								<Td className="admin-table-font">
									{" "}
									<Image width={"2.5rem"} src={row.icon}></Image>
								</Td>
								<Td
									fontWeight="600"
									color="#343330"
									className="admin-table-font"
								>
									{row?.name}
								</Td>
								<Td
									fontWeight="600"
									color="#343330"
									className="admin-table-font"
								>
									{row?.description.slice(0, 50)}
								</Td>
								<Td className="admin-table-font">
									<Switch
										colorScheme="yellow"
										isChecked={row?.is_active === true}
									/>
								</Td>

								<Td>
									<HStack spacing={2}>
										<IconButton
											variant="ghost"
											aria-label="edit icon"
											fontWeight="500"
											onClick={() => toggleModal(row?.id)}
											icon={<EditIcon color={"#4B465C"} />}
										/>

										<IconButton
											variant="ghost"
											aria-label="Delete icon"
											fontWeight="500"
											isLoading={isLoading}
											icon={<DeleteIcon color={"#4B465C"} />}
											onClick={() => deleteQoute(row?.id)}
										/>
									</HStack>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Skeleton>

			<Flex mb="50px" mt="30px" align="center" justify="space-between">
				<Text className="admin-font" color="#343330" fontWeight="600">
					Showing {indexOfFirstCategory + 1} -{" "}
					{indexOfLastCategory <= count ? indexOfLastCategory : count} of{" "}
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
			<Modal isOpen={modalOpen} onClose={toggleModal}>
				<ModalOverlay />
				<ModalContent
					maxWidth={"90%"}
					border="1px solid #000"
					className="box-shadow"
				>
					<ModalBody mt={1}>
						<Box>
							<EditCategory
								toggleModal={toggleModal}
								productId={selectedProductId}
							/>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>

		</>
	);
};
export default CategoryTable;
