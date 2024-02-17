import React from "react";
import {
	Box,
	Container,
	Flex,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";

const SoupHero = () => {
	const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
	return (
		<>
			{isMobile ? (
				<MobileHero />
			) : (
				<Box className={"hero-gradient"} position={"relative"} mb={"3rem"}>
					<Container maxW={"7xl"} py={{ base: "2rem", md: "7rem" }}>
						<Flex fontFamily={"Inter"}>
							<Box
								display={{ base: "flex", md: "flex", lg: "block" }}
								flexDir={"column"}
								marginTop={{ base: "0", md: "3rem", lg: "0" }}
							>
								<Text
									className={"heading"}
									lineHeight="1.26"
									fontWeight="medium"
									fontSize={{ base: "40px", md: "50px", lg: "76px" }}
									letterSpacing="-0.04em"
									mt={{ base: "1.5rem", md: "0" }}
								>
									Naija Soup
								</Text>
								<Text
									className={"heading"}
									lineHeight="0.7"
									fontWeight="medium"
									fontSize={{ base: "40px", md: "50px", lg: "76px" }}
									letterSpacing="-0.04em"
									mt={{ base: "1.5rem", md: "0" }}
									mb={4}
								>
									Ingredients
								</Text>
								<Text
									fontFamily="Inter"
									fontWeight="regular"
									fontSize="21px"
									pb={8}
									pt={4}
									mb={"2rem"}
									width={{ base: "90%", md: "50%" }}
								>
									Indulge in the rich tapestry of flavours and traditions as we
									explore the captivating world of ingredients.
								</Text>

								{/*<CustomButton text="Explore Delicacies " onClick={() => router.push('/')}/>*/}
							</Box>
						</Flex>
					</Container>

					<Box position={"absolute"} bottom={"0"} right={"0"} top={"0"}>
						<Image
							src={"/assets/hero/naija-soups.svg"}
							alt={"hero image"}
							width={"100%"}
							height={"100%"}
						/>
					</Box>
				</Box>
			)}
			{/* <SearchField/> */}
		</>
	);
};
export default SoupHero;

// MOBILE HERO COMPONENT
const MobileHero = () => {
	return (
		<Box className={"hero-gradient"} mb={"3rem"}>
			<Flex alignItems={"center"} justify={"center"} pt={6}>
				<Image
					src={"/assets/hero/naija-soups.svg"}
					alt={"hero image"}
					width={{ base: "90%", md: "50%" }}
					height={"100%"}
				/>
			</Flex>
			<Container maxW={"5xl"} py={{ base: "1.5rem", md: "2rem" }}>
				<Flex fontFamily={"Inter"} flexDir={"column"} alignItems={"center"}>
					<Box textAlign={"center"}>
						<Text
							className={"heading"}
							lineHeight="1.26"
							fontWeight="medium"
							fontSize={{ base: "40px", md: "50px", lg: "76px" }}
							letterSpacing="-0.04em"
						>
							Naija Soup Ingredients
						</Text>
						<Text
							fontFamily="Inter"
							fontWeight="regular"
							fontSize="21px"
							pb={8}
							pt={4}
							mb={"1rem"}
							width={{ base: "90%", md: "50%" }}
							textAlign={{ base: "center", md: "center", lg: "left" }}
							mx={{ base: "auto", md: "auto", lg: "0" }}
						>
							Indulge in the rich tapestry of flavours and traditions as we
							explore the captivating world of ingredients.
						</Text>
						{/*<Box px={4}>*/}
						{/*    <CustomButton width={'100%'} text="Explore Delicacies" onClick={() => router.push('/')}/>*/}
						{/*</Box>*/}
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
