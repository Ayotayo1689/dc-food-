import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Image,
	Skeleton,
	Tab,
	TabList,
	Tabs,
	Text,
	TabPanel,
	TabPanels,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/store/cart";
import Link from "next/link";
import { getProductByCategories } from "@/features/products/productSlice";
import ImgBg from "@/pages/img";
import {formatToNaira} from "@/utils/toNaira";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {A11y, Pagination, Scrollbar} from "swiper/modules";

const Favorites = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const {
		favorites,
		category,
		isLoading: loading,
	} = useSelector((store) => store.products);
	const [selectedId, setSelectedId] = useState(null);
	const dispatch = useDispatch();

	const filteredProductsByCategory = favorites?.filter(
		(product) => product?.category === selectedId
	);
	const routeSlug = category[selectedTab]?.slug;
	const featuredCategories =
		category &&
		category?.filter((category) =>
			favorites?.some((favorite) => favorite.category === category.id)
		);

	console.log(category);
	const handleTabChange = (index) => {
		setSelectedTab(index);
	};

	useEffect(() => {
		dispatch(getProductByCategories());
	}, []);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<Container maxW="container.xl" >
			<Box py="1rem" fontFamily="Inter"  position={"relative"}>
				<Box display={{base:"none",md:"none",lg:"block"}} position={"absolute"} top={"130px"} right={"-50px"}>
					<ImgBg/>
				</Box>
				<Box>
					<Text
						fontSize={{ base: "2.4rem", sm: "2.4rem", md: "3rem" }}
						mt={{ base: "1rem", md: "3rem", lg: "4rem" }}
						fontWeight={700}
						mb={6}
						className={"heading"}
					>
						Favorites
					</Text>
				</Box>
				<Box  display={{base:"block",md:"block",lg:"none"}}>
					<Box borderRadius="lg" p={"10px 0"} bg={"#FFC700"} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
						<Text borderRadius="lg" bg={"#fff"} p={"5px 0"} textAlign={"center"} minW={"100px"}>All</Text>
					</Box>


					<Swiper
						modules={[Pagination, Scrollbar, A11y]}
						pagination={{ clickable: true }}
						slidesPerView={1}
						spaceBetween={10}
						style={{
							"--swiper-pagination-color": "orange",
							"--swiper-pagination-bullet-inactive-color": "#D9D9D9",
							"--swiper-pagination-bullet-inactive-opacity": "1",
							"--swiper-pagination-bullet-size": "10px",
							" --swiper-pagination-bullet-width": "15px",
							"--swiper-pagination-bullet-height": "8px",
							"--swiper-pagination-bullet-horizontal-gap": "12px",
							"--swiper-pagination-bullet-vertical-gap": "20px",
							"--swiper-pagination-bullet-border-radius": "0px",
						}}
					>
						{favorites.slice(0, 6).map((item, index)=> (
							<SwiperSlide key={index}>
									<Box

										minW={{ base: "95%", md: "350px", lg: "280px" }}
										maxW={"280px"}
										borderWidth="1px"
										borderRadius="lg"
										overflow="hidden"
										bg="#fff"
										w={"100%"}
										// width={{
										// 	base: "100%",
										// 	md: "100%",
										// }}
										// minW={"100%"}
										// maxW={"380px"}
										mt="4"
										mb={"40px"}
										mx="auto"
										boxShadow="md"
										transition="all .2s ease-in-out"
										fontFamily="Inter"
									>
										<Link
											href={`/products/${routeSlug}/${item?.id} `}
										>
											<Image
												src={item?.featured_image}
												alt={item?.name}
												width="100%"
												objectFit="cover"
												height={{
													base: "270px",
													md: "200px",
												}}
											/>
											<Box>
												<Box h="40px" p="4" textAlign={"center"}>
													<Text
														fontWeight="bold"
														fontSize="1.2rem"
														mb="2"
													>
														{item?.name}
													</Text>
													<Text color="gray.500" fontSize="0.8rem">
														{item?.subtitle}
													</Text>
												</Box>
											</Box>
										</Link>
										<Flex
											justifyContent="space-between"
											alignItems="center"
											p="4"
											mt={12}
											mb={2}
										>
											<Text fontWeight="bold" fontSize="1.2rem">
												{formatToNaira(item?.price)}
											</Text>
											<Button
												bg="#ECC94B"
												color={"#1A202C"}
												borderRadius={"2rem"}
												onClick={() => handleAddToCart(item)}
											>
												Add to Cart
											</Button>
										</Flex>
									</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
				<Box mt="0.5rem" mb={"1.5rem"}  display={{base:"none",md:"none",lg:"block"}} >
					<Skeleton
						isLoaded={!loading}
						fadeDuration={1}
						rounded={"xl"}
						w="100%"
					>
						<Tabs
							display={{ base: "block", lg: "block" }}
							flexWrap={{ base: "wrap", lg: "nowrap" }}
							position={"relative"}
						>
							<TabList
								display="flex"
								position={{ base: "sticky", md: "sticky" }}
								flexWrap={{ base: "wrap", lg: "wrap" }}
								top={135}
								zIndex="500"
								alignItems="center"
								gap="1rem"
								width={"100%"}
								mx="auto"
								bgColor="#FFC700"
								py="1rem"
								px="0.5rem"
								borderRadius="lg"
								border="none"
								flexDir={"row"}
							>
								{!loading &&
									featuredCategories &&
									featuredCategories.map((item, index) => {
										return (
											<Tab
												key={index}
												rounded="lg"
												textTransform="capitalize"
												_selected={{
													backgroundColor: "white",
												}}
											>
												{item?.name}
											</Tab>
										);
									})}
							</TabList>
							<TabPanels>
								{category.map((singleCategory, index) => (
									<TabPanel key={index}>
										<Flex gap={"2rem"} flexWrap={"wrap"}
										>
											{favorites
												?.filter(
													(favorite) => favorite.category === singleCategory.id
												)
												.slice(0, 4)
												.map((item, index) => {
													return (
														<Box key={index} w={"fit-content"} flex={"1"} maxW={"300px"} minW={"280px"}>
															<Box

																borderWidth="1px"
																borderRadius="lg"
																overflow="hidden"
																bg="#fff"
																width={{
																	base: "100%",
																	md: "100%",
																}}
																my="4"
																mx="auto"
																boxShadow="md"
																transition="all .2s ease-in-out"
																fontFamily="Inter"
																_hover={{
																	transform: "scale(1.01)",
																}}
															>
																<Link
																	href={`/products/${routeSlug}/${item?.id} `}
																>
																	<Image
																		src={item?.featured_image}
																		alt={item?.name}
																		width="100%"
																		objectFit="cover"
																		height={{
																			base: "270px",
																			md: "200px",
																		}}
																	/>
																	<Box>
																		<Box h="40px" p="4" textAlign={"center"}>
																			<Text
																				fontWeight="bold"
																				fontSize="1.2rem"
																				mb="2"
																			>
																				{item?.name}
																			</Text>
																			<Text color="gray.500" fontSize="0.8rem">
																				{item?.subtitle}
																			</Text>
																		</Box>
																	</Box>
																</Link>
																<Flex
																	justifyContent="space-between"
																	alignItems="center"
																	p="4"
																	mt={12}
																	mb={2}
																>
																	<Text fontWeight="bold" fontSize="1.2rem">
																		{formatToNaira(item?.price)}
																	</Text>
																	<Button
																		bg="#ECC94B"
																		color={"#1A202C"}
																		borderRadius={"2rem"}
																		onClick={() => handleAddToCart(item)}
																	>
																		Add to Cart
																	</Button>
																</Flex>
															</Box>
															{/*))}*/}
														</Box>
													);
												})}
										</Flex>
									</TabPanel>
								))}
							</TabPanels>
						</Tabs>
					</Skeleton>
				</Box>
			</Box>
		</Container>
	);
};

export default Favorites;
