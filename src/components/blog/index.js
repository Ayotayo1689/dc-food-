import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Image,
	Skeleton,
	Text,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import { BsPerson } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import Pagination from "@/components/pagination";
import Link from "next/link";
import { useGetBlogsQuery } from "@/features/api/blog";
import dayjs from "dayjs";

const Blog = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 3;

	const { data, isLoading } = useGetBlogsQuery();

	console.log(data);
	const renderText = (text, maxLength) => {
		if (!text) {
			return "";
		}

		// Create a new DOMParser
		const parser = new DOMParser();

		// Parse the HTML content
		const parsedHTML = parser.parseFromString(text, "text/html");

		// Extract the text nodes from the parsed HTML content
		const textNodes = parsedHTML.querySelectorAll("body")[0].childNodes;

		let resultText = "";

		// Loop through the text nodes and concatenate their text
		for (let i = 0; i < textNodes.length; i++) {
			resultText += textNodes[i].textContent;
		}

		// Return the resultText with the maxLength limit
		if (resultText.length <= maxLength) {
			return resultText;
		}

		return resultText.slice(0, maxLength) + "...";
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	let totalPages;
	if (isLoading) {
		totalPages = 0;
	} else {
		totalPages = Math.ceil(data?.results.length / postsPerPage);
	}

	const isPrevButtonDisabled = currentPage === 1;
	const isNextButtonDisabled = currentPage === totalPages;
	return (
		<Box>
			<Header title={"News"} href={"/"} LinkTitle={"Home"} />

			<Container maxW={"8xl"} p={8}>
				<Box mt="2rem">
					<Skeleton
						isLoaded={!isLoading}
						fadeDuration={1}
						rounded={"xl"}
						w="100%"
					>
						<Flex flexWrap="wrap" gap={4} justifyContent={"center"}>
							{!isLoading &&
								data?.results?.map((subItem, subIndex) => (
									<Link key={subIndex} href={`/blogs/${subItem.id}`}>
										<Box
											borderWidth="1px"
											borderRadius="lg"
											overflow="hidden"
											bg="#fff"
											maxWidth="400px"
											minW={{ base: "90%", md: "400px" }}
											my="4"
											boxShadow="md"
											transition="all .2s ease-in-out"
											fontFamily="Inter"
											_hover={{
												transform: "scale(1.01)",
											}}
											flex="0 0 33.33%"
										>
											<Image
												src={subItem.image}
												alt={subItem.title}
												width="100%"
												height="200px"
											/>
											<Flex
												justifyContent={"space-between"}
												py={2}
												px={4}
												mt={2}
											>
												<Flex
													gap={2}
													alignItems={"center"}
													justifyContent={"center"}
												>
													<Box>
														<BsPerson size={15} color={"orange"} />
													</Box>
													<Text
														textTransform="capitalize"
														fontSize={"0.7rem"}
														pt={1}
													>
														By {subItem?.author_name}
													</Text>
												</Flex>
												<Divider
													orientation={"vertical"}
													borderColor={"gray.500"}
													height={"20px"}
													//px={1}
												/>
												<Flex
													gap={2}
													alignItems={"center"}
													justifyContent={"center"}
												>
													<Box>
														<BiCalendar size={15} color={"orange"} />
													</Box>
													<Text fontSize={"0.7rem"} pt={1}>
														{dayjs(subItem?.date_published).format(
															"DD/MM/YYYY"
														)}
													</Text>
												</Flex>
											</Flex>
											<Box p="4">
												<Box>
													<Text fontWeight="bold" fontSize="1.2rem" mb="2">
														{subItem?.title}
													</Text>
													<Text color="gray.500" fontSize="0.8rem">
														{renderText(subItem?.content, 200)}
													</Text>
												</Box>
												<Flex
													justifyContent="space-between"
													alignItems="center"
													mb={2}
												>
													<Button
														mt={2}
														bgColor={"orange.400"}
														color="#fff"
														borderRadius="2rem"
														padding={"0.5rem 1rem"}
													>
														Read More
													</Button>
												</Flex>
											</Box>
										</Box>
									</Link>
								))}
						</Flex>
					</Skeleton>

					{!isLoading && (
						<Pagination
							handleNextPage={handleNextPage}
							currentPage={currentPage}
							handlePrevPage={handlePrevPage}
							isNextButtonDisabled={isNextButtonDisabled}
							totalPages={totalPages}
							setCurrentPage={setCurrentPage}
							isPrevButtonDisabled={isPrevButtonDisabled}
						/>
					)}
				</Box>
			</Container>
		</Box>
	);
};

export default Blog;
