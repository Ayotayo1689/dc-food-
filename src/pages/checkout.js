import ProductCheckout from "@/components/checkout/Checkout";
import { Box } from "@chakra-ui/react";
import withAuth from "@/utils/auth";

const Checkout = () => {
	return (
		<Box my={{ base: "1rem", md: "3rem" }}>
			<ProductCheckout />
		</Box>
	);
};

export default Checkout;
