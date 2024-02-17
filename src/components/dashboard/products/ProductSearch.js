import React from 'react';
import {Container, Flex, IconButton, Input,} from '@chakra-ui/react';
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai';

const ProductSearchField = (
    {
        searchKeyword,
        setSearchKeyword,
        handleSearch,
        clearSearch,
    }
) => {

    return (
        <Container maxW="7xl">
            <Flex alignItems={'center'} bg="#fff" borderColor="gray.300" border={'1px solid #e2e8f0'}
                  borderRadius={'0.5rem'}
            >
                <IconButton
                    aria-label="Search"
                    icon={<AiOutlineSearch/>}
                    cursor={'default'}
                    bg="transparent"
                    _hover={{bg: 'transparent'}}
                    _active={{bg: 'transparent'}}
                    color="gray.400"
                    px={0}
                    fontSize="1.5rem"

                />

                <Input
                    placeholder="Search for products..."
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
        </Container>
    );
};

export default ProductSearchField;
