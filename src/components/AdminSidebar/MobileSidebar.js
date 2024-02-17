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
	useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import DCFoodsLogo from "../../../public/assets/logo.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import { TbUpload } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";
import { removeFromLocalStorage } from "@/features/user/userSlice";
import { toast } from "react-toastify";

const AdminMobileSidebar = ({ data }) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = React.useState(false);
	const [isMobile] = useMediaQuery("(max-width: 992px)");
	const handleSidebarOpen = () => {
		setIsOpen(true);
	};

	const handleSidebarClose = () => {
		setIsOpen(false);
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
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<Box
					position="fixed"
					top="0"
					left={"0px"}
					transition="all 1s ease-in-out"
					zIndex="999"
					w="100%"
					py="20px"
					h={"100%"}
					minH="100vh"
					boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)"
					bg="white"
				>
					<Box>
						<Center
							display={{ base: "none", md: "none", lg: "flex" }}
							mb={"44px"}
							borderBottom="1px solid rgba(255, 199, 0, 0.50)"
						>
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
										onClick={handleLinkClick}
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
													<Link
														key={subIndex}
														href={subItem?.link}
														onClick={handleLinkClick}
													>
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
							onClick={handleSidebarClose}
						>
							Log out
						</Button>
					</Box>
				</Box>
			)}
			<Box
				position="fixed"
				top="0"
				left="0"
				zIndex="1000"
				py={4}
				bgColor={"gray.50"}
				w="100%"
				boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)"
			>
				<Flex justify={"space-between"} alignItems={"center"}>
					<Box pl={6} cursor="pointer">
						{isOpen ? (
							<FiX size={30} onClick={handleSidebarClose} />
						) : (
							<FiMenu size={30} onClick={handleSidebarOpen} />
						)}
					</Box>

					<Flex pr={8}>
						<Link href="/">
							<Image
								width={"35"}
								height={"35"}
								src={DCFoodsLogo}
								alt="DCFoods logo"
							/>
						</Link>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default AdminMobileSidebar;
