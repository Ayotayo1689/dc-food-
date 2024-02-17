import { Container, Grid } from "@chakra-ui/react";
import MyOrder from "@/components/payment/myorder";
import ConfirmationPage from "@/components/payment/confirmationPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import UnAuth from "@/components/auth/unauth";
import NoSSR from "@/utils/NoSSR";
import axiosInstance from "@/utils/axios";
const Payment = ({ refNum }) => {
	const success = useSelector((state) => state.user.user);

	// useEffect(() => {
	//     // console.log(success)
	//     if (!success) {
	//             router.push("/signin");
	//     }
	// }, [success]);
	return (
		<NoSSR>
			<Container
				maxW="7xl"
				my={{
					base: "2rem",
					md: "2rem",
					lg: "3rem",
					xl: "4rem",
				}}
			>
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(1, 1fr)",
					}}
					gap={2}
				>
					<ConfirmationPage />
				</Grid>
			</Container>
		</NoSSR>
	);
};
export default Payment;
