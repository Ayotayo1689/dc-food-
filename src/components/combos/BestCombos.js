import React from "react";
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
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "@/features/store/cart";
import {formatToNaira} from "@/utils/toNaira";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Pagination, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {A11y, Pagination, Scrollbar} from "swiper/modules";

const BestFoodCombos = () => {
	const dispatch = useDispatch();
	const handleAddToCart = (combo) => {
		dispatch(addToCart(combo));
	};
	const { bestCombo, isLoading: loading } = useSelector(
		(store) => store.products
	);

	return (
		<Box position={"relative"}  >
			<Image
				position="absolute"
				src="/assets/left.svg"
				w="70px"
				alt="illustration"
				display={{ base: "none", md: "none", lg: "block" }}
			/>
			<Image

				position="absolute"
				top={"-200px"}
				src="/assets/left.svg"
				w="70px"
				alt="illustration"
				display={{ base: "none", md: "none", lg: "block" }}
			/>

			<Container maxW={"7xl"} position="relative" zIndex="200">
				<Box mb={"4rem"} fontFamily={"Inter"}>
					<Text
						fontSize={{ base: "1.9rem", md: "3rem", lg: "3rem" }}
						pb="10px"
						className="heading"
						as="h3"
					>
						Best FoodStuff Combos
					</Text>
					<Skeleton
						isLoaded={!loading}
						fadeDuration={1}
						rounded={"xl"}
						w="100%"
					>
						<Box  display={{base:"block",md:"block",lg:"none"}}>


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

								{bestCombo?.slice(0, 4)?.map((combo, index) => (

									<SwiperSlide key={index}>
									<Box

										minW={{ base: "95%", md: "350px", lg: "280px" }}
										maxW={"280px"}
										key={index}
										bg="white"
										borderWidth="1px"
										borderRadius="lg"
										overflow="hidden"
										// maxWidth="300px"
										// minW={{base: '70%', md: '250px'}}
										width={{ base: "100%", md: "100%" }}
										// width={{base: '100%', md: '95%'}}
										mt="4"
										mb={"40px"}
										mx="auto"
										boxShadow="md"
										transition="all .2s ease-in-out"
										fontFamily="Inter"
										_hover={{
											transform: "scale(1.01)",
										}}
									>
										<Image
											src={combo?.featured_image}
											alt={combo?.title}
											width="100%"
											objectFit="cover"
											height={{ base: "300px", md: "200px" }}
										/>
										<Box>
											<Box p="4" textAlign={"center"}>
												<Text
													textTransform="capitalize"
													fontWeight="700"
													fontSize="1.2rem"
													mb="12px"
												>
													{combo?.name.slice(0, 70).trim() + "..."}
												</Text>
											</Box>
											<Flex
												justifyContent="space-between"
												alignItems="center"
												p="4"
												mb={2}
											>
												<Text fontWeight="bold" fontSize="1.2rem">
													{formatToNaira(combo?.price)}
													{/*₦{parseInt(combo?.price).toFixed(2)}*/}
												</Text>
												<Button
													bg="#ECC94B"
													color={"#1A202C"}
													borderRadius={"2rem"}
													py={1}
													onClick={() => handleAddToCart(combo)}
												>
													Add to Cart
												</Button>
											</Flex>
										</Box>
									</Box>
									</SwiperSlide>
								))}
							</Swiper>
						</Box>







						<Flex
							flexWrap={{ base: "no-wrap", md: "no-wrap", lg: "wrap" }}
							p={{ base: "20px" }}
							gap="1.5rem"
							overflowX={{base:"scroll",md:"scroll",lg:"hidden"}}
							display={{base:"none", md:"none", lg:"flex"}}
						>
							{bestCombo?.slice(0, 4)?.map((combo, index) => (
								<Box

									minW={{ base: "95%", md: "350px", lg: "280px" }}
									maxW={"280px"}
									key={index}
									bg="white"
									borderWidth="1px"
									borderRadius="lg"
									overflow="hidden"
									// maxWidth="300px"
									// minW={{base: '70%', md: '250px'}}
									width={{ base: "100%", md: "100%" }}
									// width={{base: '100%', md: '95%'}}
									my="4"
									// mx="auto"
									boxShadow="md"
									transition="all .2s ease-in-out"
									fontFamily="Inter"
									_hover={{
										transform: "scale(1.01)",
									}}
								>
									<Image
										src={combo?.featured_image}
										alt={combo?.title}
										width="100%"
										objectFit="cover"
										height={{ base: "300px", md: "200px" }}
									/>
									<Box>
										<Box p="4" textAlign={"center"}>
											<Text
												textTransform="capitalize"
												fontWeight="700"
												fontSize="1.2rem"
												mb="12px"
											>
												{combo?.name.slice(0, 70).trim() + "..."}
											</Text>
										</Box>
										<Flex
											justifyContent="space-between"
											alignItems="center"
											p="4"
											mb={2}
										>
											<Text fontWeight="bold" fontSize="1.2rem">
												{formatToNaira(combo?.price)}
												{/*₦{parseInt(combo?.price).toFixed(2)}*/}
											</Text>
											<Button
												bg="#ECC94B"
												color={"#1A202C"}
												borderRadius={"2rem"}
												py={1}
												onClick={() => handleAddToCart(combo)}
											>
												Add to Cart
											</Button>
										</Flex>
									</Box>
								</Box>
							))}
						</Flex>
					</Skeleton>
				</Box>
			</Container>
		</Box>
	);
};

export default BestFoodCombos;
