import React, { useState, useEffect, use } from "react";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import { Box } from "@chakra-ui/react";
import { sidebarLinks } from "@/components/AdminSidebar/SidebarData";
import { useMediaQuery } from "@chakra-ui/react";
import AdminMobileSidebar from "@/components/AdminSidebar/MobileSidebar";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import NoSSR from "@/utils/NoSSR";

const AdminLayout = ({ children }) => {
	const [isMobile] = useMediaQuery("(max-width: 992px)");
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
	const userTokens = useSelector((state) => state.user.user);
	const router = useRouter();
	let decodedToken;
	if (userTokens) {
		decodedToken = jwtDecode(userTokens?.access);
	}
	const handleSidebarToggle = () => {
		setMobileSidebarOpen((prevState) => !prevState);
	};
	useEffect(() => {
		if (decodedToken?.role !== "admin") {
			router.push("/");
		}
	}, [userTokens]);
	if (decodedToken?.role !== "admin") {
		return <></>;
	}

	return (
		<NoSSR>
			<Box mx={"auto"} gap={2}>
				{!isMobile && <AdminSidebar data={sidebarLinks} />}
				{isMobile && <AdminMobileSidebar data={sidebarLinks} />}
				<Box
					marginLeft={!isMobile ? "300px" : "0"}
					marginRight="20px"
					marginBottom="20px"
					paddingTop={!isMobile ? "60px" : "0"}
					paddingRight="20px"
				>
					{children}
				</Box>
			</Box>
		</NoSSR>
	);
};
export default AdminLayout;
