import { Box, Container, Flex, Text } from "@chakra-ui/react";
import FirstFrame from "@/components/bestSellers/FirstFrame";
import SecondFrame from "@/components/bestSellers/SecondFrame";
import ThirdFrame from "@/components/bestSellers/ThirdFrame";
import FourthFrame from "@/components/bestSellers/FourthFrame";

const BestSellersCombo = () => {
	return (
		<Box sx={{ background: "rgba(254, 235, 200, 0.25)" }}>
			<Container pt={{ base: "40px", md: "80px" }} maxW="container.xl">
				<Text
					fontSize={{ base: "2.4rem", sm: "2.4rem", md: "3rem", lg: "3rem" }}
					pb="10px"
					className="heading"
					as="h3"
				>
					Latest Deals
				</Text>
				<Box
					display="flex"
					// justifyContent="center"
					// alignItems="center"
					// alignContent={"center"}
					flexDir={{ base: "column-reverse", sm: "column-reverse", xl: "row" }}
					gap={4}
					pb={{ base: "40px", md: "80px" }}
					mb={"3rem"}
				>
					<Flex
						gap={4}
						alignItems="center"
						justifyContent="center"
						flexDir={{ base: "column", sm: "column", lg: "row" }}
					>
						<Flex
							px={{ base: "0", lg: "0px" }}
							width={{ base: "100%", md: "100%" }}
							height="500px"
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
							gap={4}
						>
							<FirstFrame />
							<SecondFrame />
						</Flex>
						<Flex
							px={{ base: "0", lg: "0px" }}
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
							width={{ base: "100%", md: "100%" }}
						>
							<ThirdFrame />
						</Flex>
					</Flex>
					<Flex
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
					>
						<FourthFrame />
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default BestSellersCombo;
