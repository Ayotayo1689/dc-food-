import Hero from "../components/hero/Hero";
import Delivery from "@/components/delivery/Delivery";
import WhyDCFoodBank from "@/components/whyus/WhyDcFood";
import Favorites from "@/components/favorites";
import BestSellersCombo from "@/components/bestSellers";
import FlashSalesBanner from "@/components/flashSales";
import Testimonials from "@/components/testimonials/Testimonials";
import BestFoodCombos from "@/components/combos/BestCombos";
import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import ViewCartBtn from "@/components/_common/buttons/ViewCart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "@/features/products/productSlice";
import bg from "../../public/assets/hero/bg.svg";
import Image from "next/image";
const LandingPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<Box>
			<Head>
				<title>DC Foods | Your One-Stop FoodStuff Shop</title>
				<meta
					name="description"
					content="At DC Foods, we are your one-stop foodstuff shop. Get high-quality foodstuff, beverages, and more delivered directly to your doorstep."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="keywords"
					content="DC Foods, One-Stop FoodStuff Shop, high-quality foodstuff, beverages, doorstep delivery"
				/>
				<meta name="author" content="DC Foods" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<link rel="icon" href="/assets/favicon.ico" />
			</Head>

			<Box position={"relative"}>
				<Hero />
				<Box
					position={"absolute"}
					display={{ base: "none", md: "none", lg: "block" }}
					top={"500px"}
					bottom={0}
					zIndex={-1}
				>
					<Image src={bg} alt={""} />
				</Box>
				<Delivery />
				<Favorites />
			</Box>
			<BestSellersCombo />
			<BestFoodCombos />
			<FlashSalesBanner />
			<WhyDCFoodBank />
			<Center
				mx="auto"
				maxW="1128px"
				h="1px"
				sx={{
					background: "rgba(217, 217, 217, 0.89)",
					boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
				}}
			></Center>
			<Testimonials />
			{/* Floating Cart Button */}
			<ViewCartBtn />
		</Box>
	);
};

export default LandingPage;
