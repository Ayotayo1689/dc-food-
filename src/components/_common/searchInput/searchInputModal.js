import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ onClose, onSubmit }) => {
    const { isOpen, onOpen, onClose: modalOnClose } = useDisclosure();
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchKeyword);
        modalOnClose();
        setSearchKeyword('');
    };
    return (
        <>
            <AiOutlineSearch size={27} onClick={onOpen} cursor="pointer" color={'#000'}/>
            <Modal isOpen={isOpen} onClose={() => { modalOnClose(); onClose(); }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>What are you looking for?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSearchSubmit}>
                            <Input
                                placeholder="Search..."
                                value={searchKeyword}
                                required={true}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                            />
                            <ModalFooter>
                                <Button type="submit" colorScheme="red" mt={4}>
                                    Search
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    );
};

export default SearchInput;
