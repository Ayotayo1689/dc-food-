import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { BiExport, BiImport } from "react-icons/bi";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import CustomersTable from "@/components/dashboard/customers/CustomersTable";
import DashboardHeader from "@/components/dashboard/_common/Header";

const AdminCustomers = () => {
	return (
		<>
			<DashboardHeader title={"Customers"} />
			<Box
				bg={"rgba(0, 0, 0, 0.50)"}
				marginTop={"30px"}
				w={"100%"}
				height={"1px"}
				marginBottom={"22px"}
			></Box>
			<Flex mb={"90px"} justify="space-between" visibility={"hidden"}>
				<HStack spacing={2}>
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
					<Button
						className={"admin-font"}
						fontWeight="500"
						leftIcon={<DeleteIcon color={"white"} />}
						bg="black"
						color={"white"}
					>
						Delete
					</Button>
				</HStack>
			</Flex>

			{/*Table section*/}
			<CustomersTable />
			<Text
				fontSize={"0.9375rem"}
				fontWeight={"400"}
				position={"relative"}
				bottom={"-2rem"}
				color={"rgba(108, 117, 125, 1)"}
				left={"2rem"}
			>
				© 2023 DCFoodBank. All Rights Reserved.
			</Text>
		</>
	);
};

export default AdminCustomers;
