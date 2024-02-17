import Payment from "@/components/payment";
import withAuth from "@/utils/auth";
import { useRouter } from "next/router";
const PaymentPage = () => {
	const router = useRouter();
	return <Payment refNum={router?.query?.ref || ""} />;
};
export default PaymentPage;
