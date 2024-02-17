import React from "react";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { BiExport, BiHomeSmile, BiImport, BiPlus } from "react-icons/bi";
import StaffTable from "@/components/dashboard/staff/StaffTable";
import DashboardHeader from "@/components/dashboard/_common/Header";

const StaffList = () => {
	return (
		<>
			<Box mt={{ base: "5rem", md: "5rem", lg: "0" }}>
				<DashboardHeader title={"Staff"} />
				{/************ CTA BUTTONS *************/}
				<Box
					bg={"rgba(0, 0, 0, 0.50)"}
					marginTop={"20px"}
					w={"100%"}
					height={"1px"}
					marginBottom={"22px"}
				></Box>
				<Flex mb={"90px"} justify="space-between">
					<HStack spacing={2} visibility={"hidden"}>
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
					</HStack>
					<HStack spacing={2}>
						{/*<Button className={'admin-font'} fontWeight='500' leftIcon={<DeleteIcon color={'white'} />}  bg='black' color={'white'}>Delete</Button>*/}
						<Button
							className={"admin-font"}
							fontWeight="500"
							leftIcon={<BiPlus color={"#1A202C"} />}
							bg={"#FFC700"}
							color={"#1A202C"}
						>
							Add Staff
						</Button>
					</HStack>
				</Flex>

				{/************ TABLE LIST *************/}
				<StaffTable />

				<Text fontSize={"0.94rem"} color={"#4B465C"} mt={"5rem"}>
					© 2023 DCFoodBank. All Rights Reserved.
				</Text>
			</Box>
		</>
	);
};
export default StaffList;
