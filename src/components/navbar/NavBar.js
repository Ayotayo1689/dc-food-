import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Icon,
	IconButton,
	Image,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Slide,
	Text,
	Tooltip,
	useMediaQuery,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { MdPhoneInTalk } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import NoSSR from "../../utils/NoSSR";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavigation from "@/components/navbar/MobileNavigation";
import { useRouter } from "next/router";
import { getProductByCategories } from "@/features/products/productSlice";
import { removeFromLocalStorage } from "@/features/user/userSlice";
import SearchInput from "@/components/_common/searchInput/searchInputModal";
import DrawerExample from "@/components/test";
import OrdersDrawer from "@/components/allOrders/OrdersDrawer";
import { toast } from "react-toastify";

export const CartItemsCheck = () => {
	const { cartItems } = useSelector((state) => state.cart);

	if (cartItems.length === 0) {
		return (
			<NoSSR>
				<Box
					position="absolute"
					top="5px"
					left="-20px"
					transform="translate(50%,-50%)"
					borderRadius="50%"
					w="20px"
					h="20px"
					bg="#fff"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Text fontSize="13px" color="#000">
						0
					</Text>
				</Box>
			</NoSSR>
		);
	} else {
		return (
			<NoSSR>
				<Box
					position="absolute"
					top="5px"
					left="-20px"
					transform="translate(50%,-50%)"
					borderRadius="50%"
					w="20px"
					h="20px"
					bg="#fff"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Text fontSize="13px" color="#000">
						{cartItems.length}
					</Text>
				</Box>
			</NoSSR>
		);
	}
};
const Navbar = () => {
	const router = useRouter();
	const [log, setLog] = useState(false);
	const dispatch = useDispatch();
	const [isLessThan968] = useMediaQuery("(max-width: 968px)");
	const [isOpen, setIsOpen] = useState(false);
	const [showSearchInput, setShowSearchInput] = useState(false);
	const [showCloseIcon, setShowCloseIcon] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const toggleSearchInput = () => {
		setShowSearchInput(!showSearchInput);
		setShowCloseIcon(!showCloseIcon);
	};
	const onSearchSubmit = (keyword) => {
		toggleSearchInput();
		router.push(`/search_results?query=${keyword}`);
	};
	const toggleMobileNav = () => {
		setIsOpen((prev) => !prev);
	};

	const { user } = useSelector((store) => store.user);
	const { cartItems } = useSelector((state) => state.cart);
	const { category, isLoading: loading } = useSelector(
		(store) => store.products
	);

	useEffect(() => {
		dispatch(getProductByCategories());
	}, []);
	const onOpenLog = () => {
		setLog(true);
	};
	const onCloseLog = () => {
		setLog(false);
	};
	const logOut = () => {
		setIsLoading(true);

		setTimeout(() => {
			removeFromLocalStorage();
			onCloseLog();
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

			setIsLoading(false);
		}, 2000);
		// removeFromLocalStorage();
		// onCloseLog();
		// router.push("/signin");
		// const reloadPage = () => {
		// 	router.reload();
		// };
		//
		// const timeout = setTimeout(reloadPage, 1000);
		//
		// return () => clearTimeout(timeout);
	};

	return (
		<Box
			position="sticky"
			top="0"
			zIndex="1001"
			borderBottom="1px solid #3a3a3a"
			boxShadow="0px 0px 10px rgba(0,0,0,0.5)"
		>
			<Box bgColor={"#FFC700"}>
				<Container maxW={"7xl"}>
					<Flex
						className={styles.top}
						justifyContent={"flex-end"}
						py={1}
						fontFamily={"Inter"}
					>
						{/* 						
						<Text textAlign="center" color={"#252323"}>
							<span>Free delivery</span> for orders above ₦350,000.00
						</Text> */}
						<Box className={styles.cartContainer} pt={3} pb={1}>
							<Box display={{ base: "block", md: "none" }}>
								<OrdersDrawer />
							</Box>
							<SearchInput
								onSubmit={onSearchSubmit}
								onClose={toggleSearchInput}
							/>

							<Tooltip label={`${cartItems.length} items in cart`} hasArrow>
								<Box position="relative">
									<Link href="/cart" mr={2}>
										<Icon
											as={BsCart4}
											boxSize={isLessThan968 ? 5 : 6}
											color={"#252323"}
										/>
									</Link>
									<CartItemsCheck />
								</Box>
							</Tooltip>

							<NoSSR>
								<Box className={styles.signinBtn}>
									{user ? (
										<Flex gap={"1rem"} align={"center"}>
											<OrdersDrawer />
											<Button
												w="140px"
												borderRadius="full"
												size="lg"
												bg="#252323"
												_hover={{ bg: "#403030" }}
												color="white"
												onClick={onOpenLog}
											>
												Logout
											</Button>
										</Flex>
									) : (
										<Button
											w="140px"
											borderRadius="full"
											size="lg"
											bg="#252323"
											_hover={{ bg: "#403030" }}
											color="white"
											onClick={() => {
												router.push("/signin");
											}}
										>
											Sign In
										</Button>
									)}
								</Box>
							</NoSSR>
						</Box>
					</Flex>
				</Container>
			</Box>

			<Box bgColor={"#fff"}>
				<Container maxW={"7xl"}>
					<Box className={styles.bottom}>
						<Box className={styles.logoBox}>
							<Link href={"/"}>
								<Image
									src={"/assets/logo.webp"}
									alt={"logo"}
									width={50}
									height="auto"
								/>
							</Link>
						</Box>

						{isLessThan968 ? (
							<>
								<IconButton
									onClick={toggleMobileNav}
									aria-label={"Open mobile nav"}
									icon={<RxHamburgerMenu />}
								/>
								<Slide direction="right" in={isOpen}>
									{isOpen ? (
										<MobileNavigation onClose={toggleMobileNav} />
									) : null}
								</Slide>
							</>
						) : (
							<Box className={styles.navlinks}>
								<ul>
									<li>
										<Menu boxShadow="base" p="8" rounded="md">
											<Link
												className={router.pathname === "/" ? styles.active : ""}
												href={"/"}
											>
												<MenuButton
													fontWeight="bold"
													outline={"none"}
													border={"none"}
													bgColor={"transparent"}
													cursor={"pointer"}
													fontFamily={"Inter"}
												>
													Home
												</MenuButton>
											</Link>
										</Menu>
									</li>
									<li>
										<Menu closeOnSelect={true}>
											<MenuButton
												as={Button}
												fontWeight="bold"
												rightIcon={<AiFillCaretDown />}
												outline={"none"}
												border={"none"}
												bgColor={"transparent"}
												cursor={"pointer"}
												display={"flex"}
												_hover={{
													color: "red",
												}}
												_active={{
													outline: "none",
													bgColor: "transparent",
													borderRadius: "0",
												}}
											>
												Products
											</MenuButton>
											<MenuList
												display={"grid"}
												gridTemplateColumns="1fr 1fr 1fr"
												flexWrap="wrap"
												my={"2rem"}
												mx="20px"
												gap="8px"
												transition={"all 0.3s ease-in-out"}
												boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
												paddingInline={"1rem"}
												bgColor={"#fff"}
												padding={"1rem"}
												mt={"0.9rem"}
												borderRadius={"6px"}
											>
												{!loading &&
													category &&
													category.map((item, index) => {
														const shouldRedirect = item.id === 9;
														return (
															<Box key={index} className={styles.categoryList}>
																<MenuItem
																	bgColor={"transparent"}
																	_hover={{
																		color: "red",
																		bgColor: "transparent",
																	}}
																>
																	<Link
																		href={
																			shouldRedirect
																				? "/naija_soup_ingredients"
																				: `/products/${item?.slug}`
																		}
																	>
																		<Box
																			mb={"0.5rem"}
																			fontWeight="bold"
																			borderBottom={"1px solid"}
																			bgColor={"transparent"}
																			fontFamily={"Inter"}
																			borderColor={"orange"}
																		>
																			{item?.name}
																		</Box>
																	</Link>
																</MenuItem>
															</Box>
														);
													})}
											</MenuList>
										</Menu>
									</li>
									<li>
										<Menu>
											<Link
												className={
													router.pathname === "/about" ? styles.active : ""
												}
												href={"/about"}
											>
												<MenuButton
													outline={"none"}
													border={"none"}
													bgColor={"transparent"}
													cursor={"pointer"}
													_hover={{
														color: "red",
													}}
												>
													About Us
												</MenuButton>
											</Link>
										</Menu>
									</li>
									<li>
										<Menu>
											<Link
												className={
													router.pathname === "/blogs" ? styles.active : ""
												}
												href={"/blogs"}
											>
												<MenuButton
													border={"none"}
													bgColor={"transparent"}
													cursor={"pointer"}
													fontWeight="bold"
													_hover={{
														color: "red",
													}}
												>
													Blogs
												</MenuButton>
											</Link>
										</Menu>
									</li>

									<li>
										<Menu>
											<Link
												className={
													router.pathname === "/schedule_errand"
														? styles.active
														: ""
												}
												href={"/schedule_errand"}
											>
												<MenuButton
													outline={"none"}
													border={"none"}
													bgColor={"transparent"}
													cursor={"pointer"}
													_hover={{
														color: "red",
													}}
												>
													Schedule Errand
												</MenuButton>
											</Link>
										</Menu>
									</li>

									<li>
										<Menu>
											<Link
												className={
													router.pathname === "/contact" ? styles.active : ""
												}
												href={"/contact"}
											>
												<MenuButton
													outline={"none"}
													border={"none"}
													bgColor={"transparent"}
													cursor={"pointer"}
													_hover={{
														color: "red",
													}}
												>
													Contact Us
												</MenuButton>
											</Link>
										</Menu>
									</li>
								</ul>
							</Box>
						)}

						{/*....... This will only display on mobile .........*/}
						<Box className={styles.desktopLogo}>
							<Link href={"/"}>
								<Image
									src={"/assets/logo.webp"}
									alt={"logo"}
									width={50}
									height="auto"
								/>
							</Link>
						</Box>

						{/*......................................... .........*/}
						<Box className={styles.contactUsBox}>
							<Box>
								<MdPhoneInTalk />
							</Box>
							<Box className={styles.contactUs} fontFamily={"Inter"}>
								<Text fontSize={"1rem"} fontWeight={600}>
									Call & Order
								</Text>
								<Link href={"tel:+234 806 498 3561"}>
									<Text fontSize={"0.8rem"}>+234 806 498 3561</Text>
								</Link>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
			{log ? (
				<Box
					top={"0"}
					display={"flex"}
					background={"#25252550"}
					justifyContent={"center"}
					alignItems={"center"}
					w={"100%"}
					h={"100vh"}
					position={"absolute"}
				>
					<Flex flexDir={"column"} p={"20px"} background={"#fff"}>
						<Text fontSize={"20px"} m={"10px auto"} fontWeight={"500"}>
							Confirm Logout
						</Text>
						<Flex gap={"20px"}>
							<Button onClick={onCloseLog}>Cancel</Button>
							<Button bg={"red"} color={"white"} onClick={logOut}>
								Logout
							</Button>
						</Flex>
					</Flex>
				</Box>
			) : null}
		</Box>
	);
};
export default Navbar;
