import React from "react";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Center,
	Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import DCFoodsLogo from "../../../public/assets/logo.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import { TbUpload } from "react-icons/tb";
import { removeFromLocalStorage } from "@/features/user/userSlice";
import { toast } from "react-toastify";

const AdminSidebar = ({ data }) => {
	const router = useRouter();

	return (
		<>
			<Flex
				position="fixed"
				flexDir="column"
				justify="space-between"
				className="admin-font"
				w="260px"
				py={"20px"}
				minH="100vh"
				boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)"
			>
				<Box>
					<Center mb={"44px"} borderBottom="1px solid rgba(255, 199, 0, 0.50)">
						<Link href="/">
							<Image
								width={"50"}
								height={"50"}
								src={DCFoodsLogo}
								alt="DCFoods logo"
							/>
						</Link>
					</Center>
					<Flex align={"flex-start"} flexDir={"column"} gap={4} p={2}>
						{data?.map((link, index) =>
							link?.name !== "Catalogue" ? (
								<Link
									style={{
										background: "rgba(75, 70, 92, 0.04)",
										width: "100%",
										padding: "2px",
										borderRadius: "4px",
										color: router.pathname === link?.link ? "yellow" : "blue",
									}}
									key={index}
									href={link?.link}
								>
									<Button
										color={
											router.pathname === link?.link ? "#F2994A" : "#343330"
										}
										variant={"ghost"}
										width={"100%"}
										display={"block"}
										textAlign={"left"}
										leftIcon={link?.icon}
										className="admin-font"
									>
										{link?.name}
									</Button>
								</Link>
							) : (
								// According to the sidebarLinks array, the Catalogue link has subItems
								<Accordion
									bg={"rgba(75, 70, 92, 0.04)"}
									allowToggle
									key={index}
									w="100%"
								>
									<AccordionItem border={"none"}>
										<AccordionButton>
											<Flex
												p={"2px"}
												gap={2}
												align={"center"}
												className={"admin-font"}
												fontWeight={"600"}
												as="span"
												flex="1"
												textAlign="left"
											>
												{link?.icon} {link?.name}
											</Flex>
											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel
											marginLeft="20px"
											display="flex"
											flexDir={"column"}
											justifyContent={"flex-start"}
											w={"100%"}
										>
											{link?.subItems.map((subItem, subIndex) => (
												<Link key={subIndex} href={subItem?.link}>
													<Button
														color={
															router.pathname === subItem?.link
																? "#F2994A"
																: "#343330"
														}
														variant={"ghost"}
														leftIcon={subItem?.icon}
														className="admin-font"
														sx={{
															width: "100%",
															textAlign: "left",
															padding: "2px 10px",
															display: "block",
															borderRadius: "4px",
														}}
													>
														{subItem?.name}
													</Button>
												</Link>
											))}
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							)
						)}
					</Flex>
				</Box>
				<Box mb={"36px"} mx={"33px"}>
					<Button
						disabled={true}
						leftIcon={<TbUpload />}
						width={"100%"}
						color={"white"}
						bg={"#F2994A"}
						onClick={() => {
							setTimeout(() => {
								removeFromLocalStorage();

								toast.success("Logged out successfully!", {
									position: "top-center",
									autoClose: 2500,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									onClose: () => {
										window.location.href = "/";
									},
								});
							}, 500);
						}}
					>
						Log out
					</Button>
				</Box>
			</Flex>
		</>
	);
};
export default AdminSidebar;
