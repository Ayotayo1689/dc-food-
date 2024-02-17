import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {Box, Container, Flex, IconButton, Input,} from '@chakra-ui/react';
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai';

const SearchField = () => {
    const router = useRouter();
    const {keyword} = router.query;

    const [searchKeyword, setSearchKeyword] = useState(keyword || '');

    const handleSearch = () => {
        if (searchKeyword) {
            router.push(`/search_results?keyword=${searchKeyword}`);
        }
    };

    const clearSearch = () => {
        setSearchKeyword('');
    };

    // Check if there are search results
    //const hasSearchResults = mockSearchResults.length > 0;

    return (
        <Container maxW="7xl">
            <Box pb={8}>

                <Flex alignItems={'center'} bg="#fff" borderColor="gray.300" borderRadius="4rem" p={1}
                      boxShadow={"0 6px 5px 0 rgba(0, 0, 0, 0.25)"}>
                    <IconButton
                        aria-label="Search"
                        icon={<AiOutlineSearch/>}
                        cursor={'default'}
                        bg="transparent"
                        _hover={{bg: 'transparent'}}
                        _active={{bg: 'transparent'}}
                        color="gray.400"
                        px={4}
                        fontSize="2rem"

                    />

                    <Input
                        placeholder="Search for Ingredients..."
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        required={true}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSearch();
                            }
                        }}
                        focusBorderColor={'none'}
                        pr="2rem"
                        borderWidth="0"
                        borderRadius="4rem"
                        py={6}
                        fontSize={'1.5rem'}
                        width={'100%'}
                    />

                    {searchKeyword && (
                        <IconButton
                            aria-label="Clear Search"
                            icon={<AiOutlineClose/>}
                            onClick={clearSearch}
                            bg="transparent"
                            _hover={{bg: 'transparent'}}
                            _active={{bg: 'transparent'}}
                            color="gray.400"
                            fontSize="1.5rem"
                            mr={2}
                        />

                    )}
                </Flex>
                {/*{hasSearchResults ? (*/}
                {/*    <>*/}
                {/*        <Text mt={4} fontSize="xl">*/}
                {/*            Search results for: <span style={{fontWeight: 600}}>{keyword}</span>*/}
                {/*        </Text>*/}
                {/*        <Stack spacing={4} mt={12}>*/}
                {/*            {mockSearchResults.map((result) => (*/}
                {/*                <Flex*/}
                {/*                    key={result.id}*/}
                {/*                    p={4}*/}
                {/*                    borderWidth="1px"*/}
                {/*                    borderRadius="md"*/}
                {/*                    boxShadow="md"*/}
                {/*                    gap={4}*/}
                {/*                    justifyContent={{base: 'center', md: 'space-between'}}*/}
                {/*                    alignItems={{base: 'flex-start', md: 'flex-start'}}*/}
                {/*                    flexDir={{base: 'column', md: 'row'}}*/}
                {/*                >*/}
                {/*                    <Box>*/}
                {/*                        <Text fontWeight="semibold">{result.title}</Text>*/}
                {/*                        <Text color="gray.600">{result.description}</Text>*/}
                {/*                    </Box>*/}
                {/*                    <Button colorScheme="blue">View Details</Button>*/}
                {/*                </Flex>*/}
                {/*            ))}*/}
                {/*        </Stack>*/}
                {/*    </>*/}
                {/*) : (*/}
                {/*    <Text mt={4} fontSize="xl">*/}
                {/*        No results found for: {keyword}*/}
                {/*    </Text>*/}
                {/*)}*/}
            </Box>
        </Container>
    );
};

export default SearchField;
