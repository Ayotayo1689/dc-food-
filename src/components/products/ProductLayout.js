import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Image,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { menudata } from "@/components/favorites/data";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/pagination";
import ProductHeader from "@/components/ProductHeader";
import { useDispatch, useSelector } from "react-redux";
// import {addToCart} from "@/redux/actions/cartActions";
import { addToCart } from "@/features/store/cart";
import Link from "next/link";
import {
	getProductByCategories,
	getProducts,
} from "@/features/products/productSlice";
import {formatToNaira} from "@/utils/toNaira";

const ProductLayout = () => {
	const dispatch = useDispatch();
	const perPage = 4;
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedTab, setSelectedTab] = useState(0);
	const [selectedId, setSelectedId] = useState(1);

	useEffect(() => {
		dispatch(getProductByCategories());
		dispatch(getProducts());
	}, []);

	const {
		products: data,
		category,
		isLoading: loading,
	} = useSelector((store) => store.products);
	const filteredProductsByCategory = data?.filter(
		(product) => product?.category === selectedId
	);
	const routeSlug = category[selectedTab]?.slug;
	// Function to change tab and set new product category
	const handleTabChange = (index) => {
		setSelectedTab(index);
	};

	const isBrowser = () => typeof window !== "undefined";

	const scrollToTop = () => {
		setTimeout(() => {
			if (!isBrowser()) return;
			window.scrollTo({
				top: 0,
				behavior: "smooth",
				inline: "start",
				block: "nearest",
			});
		}, 400);
	};

	// Get Current Product
	const length = filteredProductsByCategory?.length;
	const indexOfLastProduct = currentPage * perPage;
	const indexOfFirstProduct = indexOfLastProduct - perPage;
	const currentProduct = filteredProductsByCategory?.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	let totalPages = Math.ceil(length / perPage);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
		scrollToTop();
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
		scrollToTop();
	};

	const isPrevButtonDisabled = currentPage === 1;
	const isNextButtonDisabled = currentPage === totalPages;

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<>
			<ProductHeader
				href={"/"}
				LinkTitle={"Home"}
				title={category[selectedTab]?.name}
				imgUrl={category[selectedTab]?.icon}
			/>
			<Container py={"3rem"} mt="50px" maxW="7xl">
				<Tabs
					// orientation={{base: 'horizontal', lg: 'vertical'}}
					index={selectedTab}
					onChange={handleTabChange}
					display={"grid"}
					gap={2}
					gridTemplateColumns={{ base: "1fr", sm: "1fr", lg: "150px 1fr" }}
					fontFamily={"Inter"}
				>
					<TabList
						display={{ base: "flex", lg: "block" }}
						flexWrap="wrap"
						py="1rem"
						pr={2}
						borderRadius="lg"
						border="none"
						textAlign={"left"}
						position="sticky"
						top="0px"
						left="0px"
						bg="white"
						zIndex={900}
					>
						{category.map((item, index) => (
							<Tab
								key={index}
								textTransform="capitalize"
								fontWeight="500"
								_hover={{
									color: "#c1c1c1",
								}}
								_selected={{
									color: "#f70723",
								}}
								fontSize="md"
								onClick={() => {
									setSelectedId(item?.id);
									setCurrentPage(1);
								}}
							>
								<Text align="left">{item?.name}</Text>
							</Tab>
						))}
					</TabList>

					<Grid gap={8} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
						{currentProduct.map((subItem, subIndex) => (
							<Flex
								key={subIndex}
								borderWidth="1px"
								borderRadius="lg"
								flexDir={{ base: "column", xl: "row" }}
								gap={2}
								minW={{ base: "90%", md: "100%" }}
								alignItems="center"
								bg="#fff"
								overflow="hidden"
								mx="auto"
								boxShadow="md"
								transition="all .2s ease-in-out"
								fontFamily="Inter"
								_hover={{
									transform: "scale(1.01)",
								}}
							>
								<Box bg={"#f5f5f5"} w={{ base: "100%", xl: "45%" }}>
									<Link
										href={`/products/${routeSlug}/${subItem.id} `}
										key={subIndex}
									>
										<Image
											style={{ objectFit: "cover" }}
											src={subItem?.featured_image}
											alt={subItem?.name}
											objectFit={"contain"}
											width="100%"
											height="300px"
										/>
									</Link>
								</Box>
								<Box w={{ base: "100%", xl: "55%" }}>
									<Box p="2">
										<Text fontWeight="bold" fontSize="1.2rem" mb="2">
											{subItem?.name}
										</Text>
										<Text color="gray.500" fontSize="0.8rem">
											{subItem?.subtitle}
										</Text>
									</Box>
									<Flex alignItems="center" gap={2} p={4} mb={2}>
										<Text fontWeight="bold" fontSize="1.0rem">
											{formatToNaira(subItem?.price)}
										</Text>
										<Button
											colorScheme="yellow"
											color={"#fff"}
											borderRadius={"2rem"}
											py={1}
											onClick={() => handleAddToCart(subItem)}
										>
											Add to Cart
										</Button>
									</Flex>
								</Box>
							</Flex>
						))}
					</Grid>

					{/*Pagination Buttons*/}
				</Tabs>
				<Pagination
					handleNextPage={handleNextPage}
					goToTop={scrollToTop}
					currentPage={currentPage}
					handlePrevPage={handlePrevPage}
					isNextButtonDisabled={isNextButtonDisabled}
					totalPages={totalPages}
					setCurrentPage={setCurrentPage}
					isPrevButtonDisabled={isPrevButtonDisabled}
				/>
			</Container>
		</>
	);
};

export default ProductLayout;
