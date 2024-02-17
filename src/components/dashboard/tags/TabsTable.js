import React, {useEffect, useState} from "react";
import {mockTableData} from "@/components/dashboard/products/mockData";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    HStack,
    IconButton, Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Select,
    Skeleton,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import UpdateProducts from "@/components/dashboard/products/update-products";
import {useDispatch, useSelector} from "react-redux";
import {getProductByCategories, getProducts, getProductTags,} from "@/features/admin/adminSlice";
import {toast} from "react-toastify";
import axiosInstance from "../../../utils/axios";
import endpoints from "@/features/api/endpoints";
import Router from "next/router";
import ProductSearchField from "@/components/dashboard/products/ProductSearch";

const TagsTable = () => {
    const {
        isLoading: loadingProducts,
        products,
        category: categories,
        tags
    } = useSelector((state) => state.admin);
    const {user} = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const toggleModal = (productId) => {
        setSelectedProductId(productId);
        setModalOpen(!modalOpen);
    };
    const [currentPage, setCurrentPage] = React.useState(1);
    const perPage = 20;

    const tableHeads = [
        "ID",
        "ICONS",
        "NAME",
        "DESCRIPTION",
        "ACTIONS",
    ];

    const count = products?.length;
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    const currentProduct = products?.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    let totalPages = Math.ceil(length / perPage);
    const pageNumbers = Array(totalPages)
        .fill()
        .map((_, i) => i + 1);

    const findCategory = (id) => {
        const category = categories.find((category) => category.id === id);
        return category?.name;
    };

    const [isLoading, setIsLoading] = useState(false);

    const deleteQoute = async (id) => {
        setIsLoading(true);

        try {
            const resp = await axiosInstance.delete(
                `${endpoints.getProducts}${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${user?.access}`,
                    },
                }
            );
            toast.success("Product deleted");
            Router.reload();
        } catch (error) {
            toast("error deleting product");
        }
        setIsLoading(false);
    };
    useEffect(() => {
        dispatch(getProductTags());
        dispatch(getProducts());
    }, []);


    const [searchKeyword, setSearchKeyword] = useState('');

    const clearSearch = () => {
        setSearchKeyword('');
    };
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        if (searchKeyword === "") {
            setFilteredProducts(currentProduct);
        } else {
            const filtered = currentProduct.filter((product) =>
                product.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchKeyword]);
    return (
        <>
            <Flex color="#262626" mb="20px" gap={4}>
                <Box width={'100%'} pb={8}>
                    <ProductSearchField searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
                                        clearSearch={clearSearch}/>
                </Box>
                <Box width={'50%'}>
                    <Select className="admin-font" placeholder="Category"/>
                </Box>
                <Box width={'50%'}>
                    <Select className="admin-font" placeholder="Price"/>
                </Box>
            </Flex>
            <Skeleton isLoaded={!loadingProducts} fadeDuration={1} rounded={"xl"}>
                <Table
                    className="table-tiny"
                    borderRadius="8px"
                    border="1px solid #E8EEF8"
                    variant="unstyled"
                >
                    <Thead border="1px solid #E8EEF8">
                        <Tr>
                            <Th>
                                <Checkbox colorScheme="yellow"/>
                            </Th>
                            {tableHeads?.map((head, index) => (
                                <Th color="#4B465C" py="16px" key={index}>
                                    <Text fontSize="14px" className="admin-table-font">
                                        {head}
                                    </Text>
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tags?.map((row, index) => (
                            <Tr fontWeight="500" fontSize="14px" color="#4B465C" key={index}>
                                <Td className="admin-table-font">
                                    <Checkbox colorScheme="yellow"/>
                                </Td>
                                <Td className="admin-table-font"> {row?.id}</Td>
                                <Td className="admin-table-font">
                                    <Image width={"2.5rem"} src={row.icon}></Image>
                                </Td>
                                <Td
                                    fontWeight="600"
                                    color="#343330"
                                    className="admin-table-font"
                                >
                                    {row.name}
                                </Td>
                                <Td
                                    fontWeight="600"
                                    color="#343330"
                                    className="admin-table-font"
                                >
                                    {row?.description}
                                </Td>

                                <Td>
                                    <HStack spacing={2}>
                                        <IconButton
                                            onClick={() => toggleModal(row.id)}
                                            variant="ghost"
                                            aria-label="edit icon"
                                            fontWeight="500"
                                            icon={<EditIcon color={"#4B465C"}/>}
                                        />
                                        <IconButton
                                            variant="ghost"
                                            aria-label="Delete icon"
                                            fontWeight="500"
                                            onClick={() => deleteQoute(row?.id)}
                                            icon={<DeleteIcon color={"#4B465C"}/>}
                                            isLoading={isLoading}
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
                    {pageNumbers?.map((number, index) => (
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
            {/* MODAL */}
            <Modal isOpen={modalOpen} onClose={toggleModal}>
                <ModalOverlay/>
                <ModalContent
                    maxWidth={"90%"}
                    border="1px solid #000"
                    className="box-shadow"
                >
                    <ModalBody mt={1}>
                        <Box>
                            {/*<Ed toggleModal={toggleModal} productId={selectedProductId}/>*/}
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
export default TagsTable;
