import { menudata } from "@/components/favorites/data";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Image,
	Skeleton,
	Text,
} from "@chakra-ui/react";
import Pagination from "@/components/pagination";
import React, { useEffect, useState } from "react";
import ProductHeader from "@/components/ProductHeader";

import { addToCart } from "@/features/store/cart";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import ViewCartBtn from "@/components/_common/buttons/ViewCart";

import {
	getProductByCategories,
	getProducts,
} from "@/features/products/productSlice";
import ScrollToTop from "react-scroll-to-top";
import {formatToNaira} from "@/utils/toNaira";

const ProductCategory = ({ decodedCategory }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
		dispatch(getProductByCategories());
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [decodedCategory]);

	const {
		products: data,
		filteredProducts,
		category: cat,
		categoryId,
		isLoading,
	} = useSelector((state) => state.products);
	const selectedCategory = cat?.find((cat) => cat?.slug === decodedCategory);
	const selectedID = selectedCategory?.id;
	const filteredProductsByCategory = data?.filter(
		(product) => product?.category === selectedID
	);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	const perPage = 4;
	const [currentPage, setCurrentPage] = useState(1);

	// Pagination
	// Get Current Product
	const length = filteredProductsByCategory?.length;
	const indexOfLastProduct = currentPage * perPage;
	const indexOfFirstProduct = indexOfLastProduct - perPage;
	const currentProduct = filteredProductsByCategory?.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);
	const category = selectedCategory?.name;
	let totalPages = Math.ceil(length / perPage);
	const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

	const scrollToTop = () => {
		setTimeout(() => {
			if (!isBrowser()) return;
			window.scrollTo({ top: 350});
		}, 400);
	};

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

	return (
		<>
			<Head>
				<title>DC Foods | {category}</title>
				<meta
					name="description"
					content={`Explore the ${category} category at DC Foods. Browse through a variety of high-quality products in the ${category} category and add them to your cart. Enjoy convenient doorstep delivery of your favorite ${category}.`}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="keywords"
					content={`DC Foods, ${category}, high-quality products, ${category} category, doorstep delivery`}
				/>
				<meta name="author" content="DC Foods" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<link rel="icon" href="/assets/favicon.ico" />
			</Head>
			<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"} w="100%">
				<ProductHeader
					href="/"
					LinkTitle="Home"
					title={category}
					imgUrl={selectedCategory?.icon}
				/>
				<Container my="5rem" maxW="7xl">
					<Grid gap={4} templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}>
						{currentProduct.map((subItem) => (
							<Grid
								key={subItem.id}
								borderWidth="1px"
								borderRadius="lg"
								templateColumns={{ base: "1fr 1fr" }}
								gap={2}
								alignItems="center"
								bg="#fff"
								my="4"
								mx="auto"
								h={{ base: "300px", md: "300px" }}
								boxShadow="md"
								transition="all .2s ease-in-out"
								fontFamily="Inter"
								_hover={{
									transform: "scale(1.01)",
								}}
							>
								<Image
									src={subItem?.featured_image}
									alt={subItem?.name}
									objectFit={"contain"}
									width="100%"
									height="300px"
								/>
								<Box>
									<Box p="2">
										<Text fontWeight="bold" fontSize="1.2rem" mb="2">
											{subItem?.name}
										</Text>
										<Text color="gray.500" fontSize="0.8rem">
											{subItem?.subtitle}
										</Text>
									</Box>
									<Flex alignItems="center" gap={2} p={4} mb={2}>
										<Text fontWeight="bold" fontSize="1.2rem">
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
							</Grid>
						))}
					</Grid>

					{/*/!*Pagination Buttons*!/*/}

					<Pagination
						handleNextPage={handleNextPage}
						// goToTop={scrollToTop}
						currentPage={currentPage}
						handlePrevPage={handlePrevPage}
						isNextButtonDisabled={isNextButtonDisabled}
						totalPages={totalPages}
						setCurrentPage={setCurrentPage}
						isPrevButtonDisabled={isPrevButtonDisabled}
					/>
					{/*Cart Button*/}
					<ViewCartBtn />
				</Container>
			</Skeleton>
		</>
	);
};

export default ProductCategory;

export async function getServerSideProps({ params }) {
	// Decode the url param to remove special characters
	const decodedCategory = decodeURIComponent(params.category);
	return {
		props: {
			decodedCategory,
		},
	};
}
