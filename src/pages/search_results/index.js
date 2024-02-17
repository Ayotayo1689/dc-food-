import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Box, Button, Container, Flex, IconButton, Input, Skeleton, Stack, Text,} from "@chakra-ui/react";
import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai";
import axiosInstance from "@/utils/axios";

const SearchResultsPage = () => {
    const router = useRouter();
    const {query} = router.query;
    const [searchKeyword, setSearchKeyword] = useState(query || "");
    const [searchResults, setSearchResults] = useState({
        products: [],
        categories: [],
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (query) {
            const fetchData = async () => {
                try {
                    setIsLoading(true); // Start loading
                    const response = await axiosInstance.get(`/api/search/${query}`);
                    const fetchedResults = response.data;
                    setSearchResults(fetchedResults);
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                    setIsLoading(false);
                }
            };

            fetchData();
        }
    }, [query]);
    const handleSearch = () => {
        if (searchKeyword) {
            router.push(`/search_results?query=${searchKeyword}`);
        }
    };

    const clearSearch = () => {
        setSearchKeyword("");
    };

    return (
        <Container maxW="8xl" mb={8} >

                <Flex
                    alignItems={"center"}
                    bg="#fff"
                    borderColor="gray.300"
                    borderRadius="4rem"
                    p={1}
                    mt={8}
                    boxShadow={"0 6px 5px 0 rgba(0, 0, 0, 0.25)"}
                >
                    <IconButton
                        aria-label="Search"
                        icon={<AiOutlineSearch/>}
                        cursor={"default"}
                        bg="transparent"
                        _hover={{bg: "transparent"}}
                        _active={{bg: "transparent"}}
                        color="gray.400"
                        px={4}
                        fontSize="2rem"
                    />

                    <Input
                        placeholder="Search..."
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        required={true}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleSearch();
                            }
                        }}
                        focusBorderColor={"none"}
                        pr="2rem"
                        borderWidth="0"
                        borderRadius="4rem"
                        py={6}
                        fontSize={"1.5rem"}
                        width={"100%"}
                    />

                    {searchKeyword && (
                        <IconButton
                            aria-label="Clear Search"
                            icon={<AiOutlineClose/>}
                            onClick={clearSearch}
                            bg="transparent"
                            _hover={{bg: "transparent"}}
                            _active={{bg: "transparent"}}
                            color="gray.400"
                            fontSize="1.5rem"
                            mr={2}
                        />
                    )}
                </Flex>


            <Box pb={8}  mt={8}>
                <Skeleton isLoaded={!isLoading}>
                    {searchResults.products.length > 0 || searchResults.categories.length > 0 ? (
                        <Stack spacing={4} mt={8}>
                            <Text fontSize="xl">
                                Search results for:{" "}
                                <span style={{fontWeight: 600}}>{query}</span>
                            </Text>
                            {searchResults.categories.map((category) => (
                                <Flex flexDir={'column'} key={category.id} p={4} borderWidth="1px" borderRadius="md"
                                      boxShadow="md" gap={4} justifyContent={{base: "center", md: "space-between"}}
                                      alignItems={{base: "flex-start", md: "flex-start"}}>
                                    <Box>
                                        <Text fontWeight="semibold" fontSize={'1.3rem'}>{category?.name}</Text>
                                        <Text color="gray.600" pt={4}>{category?.description}</Text>
                                    </Box>
                                    <Button bg={'transparent'} border={'2px solid orange'}
                                            color={'orange'} fontSize={'1.12rem'} px={4} py={4}
                                            transition={'all .3s ease-in-out'}
                                            _hover={{bg: "orange", color: "white"}}
                                            onClick={() => router.push(`/products/${category?.slug}`)}>View
                                        Details</Button>
                                </Flex>
                            ))}
                            {searchResults.products.map((product) => (
                                <Flex flexDir={'column'} key={product.id} p={4} borderWidth="1px" borderRadius="md"
                                      boxShadow="md" gap={4} justifyContent={{base: "center", md: "space-between"}}
                                      alignItems={{base: "flex-start", md: "flex-start"}}>
                                    <Box>
                                        <Text fontWeight="semibold" fontSize={'1.3rem'}>{product?.name}</Text>
                                        <Text color="gray.600" pt={4}>{product?.description}</Text>
                                        <Text color="gray.600" fontWeight="semibold" pt={4}>Price:
                                            ₦{product?.price}</Text>
                                    </Box>
                                    <Button bg={'transparent'} border={'2px solid orange'}
                                            color={'orange'} fontSize={'1.12rem'} px={4} py={4}
                                            transition={'all .3s ease-in-out'}
                                            _hover={{bg: "orange", color: "white"}}
                                            onClick={() => router.push(`/products/${product?.category}/${product?.id}`)}>View
                                        Details</Button>
                                </Flex>
                            ))}

                        </Stack>
                    ) : (
                        <Text mt={4} fontSize="xl">
                            No results found for: <span style={{fontWeight: 600}}>{query}</span>
                        </Text>
                    )}
                </Skeleton>

            </Box>
        </Container>

    );
};

export default SearchResultsPage;
