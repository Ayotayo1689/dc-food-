import DashboardHeader from "@/components/dashboard/_common/Header";
import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import {
	getProductByCategories,
	getProducts,
} from "@/features/admin/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AdminDashboard = () => {
	const dispatch = useDispatch();

	const AnalyticsData = [
		{
			analytic: "Total products",
			metric: "5680",
			color: "#FFEFE2",
		},
		{
			analytic: "Total products sold",
			metric: "1231",
			color: "#EFFCEF",
		},
		{
			analytic: "Average daily sale",
			metric: "₦1.8m",
			color: "#E6F5F9",
		},
		{
			analytic: "Revenue generated",
			metric: "₦21.5m",
			color: "#F4F6FA",
		},
	];
	useEffect(() => {
		dispatch(getProductByCategories());
		dispatch(getProducts());
	}, []);
	return (
		<>
			<DashboardHeader title={"Dashboard"} />
			<Box
				bg={"rgba(0, 0, 0, 0.50)"}
				marginTop={"30px"}
				w={"100%"}
				height={"1px"}
				marginBottom={"22px"}
			></Box>
			<Text
				mb={"30px"}
				fontWeight="700"
				fontSize={"1.4rem"}
				className={"admin-font"}
			>
				Analytics Overview
			</Text>
			<Grid
				gap={"20px"}
				templateColumns={{
					base: "1fr, 1fr",
					md: "repeat(2, 1fr)",
					xl: "repeat(2, 1fr)",
				}}
			>
				{AnalyticsData.map((item, index) => (
					<Flex
						key={index}
						bg={item?.color}
						borderRadius="18px"
						p="27px 18px"
						align="center"
						flexDir="column"
					>
						<Text
							textAlign="center"
							className="admin-font"
							fontWeight={"700"}
							fontSize="2.1rem"
						>
							{item?.metric}
						</Text>
						<Text textAlign="center" className="admin-font">
							{item?.analytic}
						</Text>
					</Flex>
				))}
			</Grid>
		</>
	);
};

export default AdminDashboard;
