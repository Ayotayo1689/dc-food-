import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    HStack,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { BiExport, BiImport, BiPlus } from "react-icons/bi";
import { DeleteIcon } from "@chakra-ui/icons";
import CategoryTable from "@/components/dashboard/categories/CategoryTable";
import DashboardHeader from "@/components/dashboard/_common/Header";
import AddTags from "@/components/dashboard/tags/addTags";
import TagsTable from "@/components/dashboard/tags/TabsTable";

const Tags = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <>
            <DashboardHeader title={"Tags"} />
            <Box
                bg={"rgba(0, 0, 0, 0.50)"}
                marginTop={"30px"}
                w={"100%"}
                height={"1px"}
                marginBottom={"22px"}
            ></Box>
            <Flex mb={"90px"} justify="end">
                {/* <HStack spacing={2}>
					<Button
						className={"admin-font"}
						fontWeight="500"
						leftIcon={<BiExport color={"#343330"} />}
						variant={"outline"}
						color={"#343330"}
					>
						Export
					</Button>
					<Button
						className={"admin-font"}
						fontWeight="500"
						leftIcon={<BiImport color={"#343330"} />}
						variant={"outline"}
						color={"#343330"}
					>
						Import
					</Button>
				</HStack> */}
                <HStack spacing={2}>
                    <Button
                        visibility={"hidden"}
                        className={"admin-font"}
                        fontWeight="500"
                        leftIcon={<DeleteIcon color={"white"} />}
                        bg="black"
                        color={"white"}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={toggleModal}
                        className={"admin-font"}
                        fontWeight="500"
                        leftIcon={<BiPlus color={"#1A202C"} />}
                        bg={"#FFC700"}
                        color={"#1A202C"}
                    >
                        Add Tags
                    </Button>
                </HStack>
            </Flex>

            {/*Table section*/}
            <TagsTable />
            <Text
                fontSize={"0.9375rem"}
                fontWeight={"400"}
                position={"relative"}
                bottom={"-1rem"}
                color={"rgba(108, 117, 125, 1)"}
                left={"2rem"}
            >
                © 2023 DCFoodBank. All Rights Reserved.
            </Text>

            {/* MODAL */}
            <Modal isOpen={modalOpen} onClose={toggleModal}>
                <ModalOverlay />
                <ModalContent
                    maxWidth={"90%"}
                    border="1px solid #000"
                    className="box-shadow"
                >
                    <ModalBody mt={1}>
                        <Box>
                            <AddTags toggleModal={toggleModal} />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
export default Tags;
