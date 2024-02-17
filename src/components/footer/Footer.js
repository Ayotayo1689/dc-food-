import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	Grid,
	GridItem,
	HStack,
	IconButton,
	Text,
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import React from "react";

import pattern from "../../../public/assets/footer.svg";
import Image from "next/image";
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<Box
			backgroundImage={"/assets/footerbg.svg"}
			backgroundPosition={"80% 20px"}
			backgroundRepeat={"no-repeat"}
			backgroundSize={"80%"}
			bgColor={"#FFC700"}
		>
			<Container maxW="100%" fontFamily="Inter" position={"relative"}>
				<Box
					position={"absolute"}
					right={"0px"}
					bottom={-6}
					display={{ base: "block", md: "block", lg: "none" }}
				>
					<Image
						src={pattern}
						alt={"hello"}
						style={{ minWidth: "500px", zIndex: "-1" }}
					/>
				</Box>
				<Center>
					<Grid
						maxW="7xl"
						gap={18}
						py={{ base: "1rem", md: "2rem", lg: " 50px" }}
						templateColumns={{
							base: "1fr",
							sm: "1fr 1fr",
							lg: "1fr 0.8fr 1.2fr 1fr 1fr",
						}}
					>
						<GridItem>
							<Button
								gap={3}
								minW="220px"
								p="18px 24px"
								borderRadius="full"
								bg="black"
								color="white"
							>
								<Link href={"tel:+234 806 498 3561"}>
									<Text fontWeight="600" fontSize="16px">
										Call & order
									</Text>
								</Link>
							</Button>
							<Flex mt="20px" align="center" gap={2}>
								<FiPhoneCall size={32} />
								<Link href={"tel:+234 806 498 3561"}>
									<Text fontSize="18px" fontWeight="400">
										+234 806 498 3561
									</Text>
								</Link>
							</Flex>

						</GridItem>
						<GridItem>
							<Text fontSize="24px" fontWeight="medium">
								Delivery Time
							</Text>
							<Box my={6}>
								<Text fontWeight="medium">Monday - Saturday</Text>
								<Text>9am -11pm</Text>
							</Box>
							<Box>
								<Text fontWeight="medium">Sunday</Text>
								<Text>11am -7pm</Text>
							</Box>
						</GridItem>
						<GridItem>
							<Text fontSize="24px" fontWeight="medium">
								Store Pickup Location
							</Text>
							<Box my={6}>
								<Text>
									Shop 1 , Royal plaza complex, 104 Oba Erinwole road, GRA Rd,
									Sagamu, Ogun State.
								</Text>
							</Box>
							<Button
								colorScheme="black"
								borderBottom="3px solid black"
								_hover={{
									color: "red",
									borderColor: "red",
									transition: "all 1s",
								}}
								variant="link"
								borderRadius={0}
								pb="3px"
								leftIcon={<ImLocation />}
							>
								<Link
									href={
										"https://www.google.ng/maps/place/DC+Foodbank/@6.8346095,3.6269765,17z/data=!4m6!3m5!1s0x103bdb36c0d27abf:0xb80786ef0b79652c!8m2!3d6.8346042!4d3.6295514!16s%2Fg%2F11px02_csr?entry=ttu"
									}
									target={"_blank"}
									rel="noopener noreferrer"
								>
									View on Map
								</Link>
							</Button>
						</GridItem>


						<GridItem>
							<Text mb={"20px"} fontSize="24px" fontWeight="medium">
								Legal
							</Text>
							<Box my={3} >
								<Link style={{textDecoration:"underline"}} href={"/terms_and_conditions"}>
									Terms and Conditions
								</Link>
								{/*<Text>9am -11pm</Text>*/}
							</Box>
							<Box my={3}>
								<Link style={{textDecoration:"underline"}} href={"/privacy_policy"}>
									Privacy Policy
								</Link>
							</Box>
							<Box my={3}>
								<Link style={{textDecoration:"underline"}} href={"/refund_and_return"}>
									Refund and Return Policy
								</Link>
							</Box>
						</GridItem>


						<GridItem zIndex={"9"}>
							<Text fontSize="24px" fontWeight="medium" >
								Contact Us
							</Text>
							<Box my={6}>
								<Link href={"tel:+234 806 498 3561"}>
									<Text>+234 806 498 3561</Text>
								</Link>
							</Box>
							<Button
								colorScheme="black"
								borderBottom="3px solid black"
								_hover={{
									color: "red",
									borderColor: "red",
									transition: "all 1s",
								}}
								borderRadius={0}
								pb="3px"
								variant="link"
							>
								{" "}
								<Link href={"mailto:info@dcfoodbank.com"}>
									info@dcfoodbank.com
								</Link>
							</Button>
							<HStack mt={4}>
								<Link
									href={"https://www.facebook.com/dcfoodbank"}
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<IconButton
										borderRadius="100%"
										color="white"
										aria-label="facebook"
										icon={<RiFacebookFill size={16} color="black" />}
									></IconButton>
								</Link>
								<Link
									href={"https://www.twitter.com/dcfoodbank"}
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<IconButton
										borderRadius="100%"
										color="white"
										aria-label="twitter page"
										icon={<RiTwitterFill size={16} color="black" />}
									></IconButton>
								</Link>
								<Link
									href={"https://www.linkedin.com/company/dcfoodbank"}
									target={"_blank"}
									rel="noopener noreferrer"
								>
									<IconButton
										borderRadius="100%"
										color="white"
										aria-label="linkedin page"
										icon={<RiLinkedinFill size={16} color="black" />}
									></IconButton>
								</Link>
							</HStack>
						</GridItem>
					</Grid>
				</Center>
			</Container>
			{/*<Container  maxW="100%" h="24px"></Container>*/}
			<Container
				borderTop="24px solid rgb(255, 255, 255, 0.9)"
				maxW="100%"
				py={6}
			>
				<Text align="center" fontSize="16px" fontWeight={700}>
					<Text as="span" color="red">
						© {year} DC Food Bank{" "}
					</Text>{" "}
					Powered By&nbsp;
					<Link
						href={"https://tantainnovatives.com"}
						target={"_blank"}
						rel="noopener noreferrer"
						style={{ textDecoration: "underline" }}
					>
						Tanta Innovative
					</Link>
				</Text>
			</Container>
		</Box>
	);
};

export default Footer;
