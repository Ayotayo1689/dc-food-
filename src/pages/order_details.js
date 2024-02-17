import Payment from "@/components/payment";
import withAuth from "@/utils/auth";
import { useRouter } from "next/router";
import OrderDetails from "@/components/allOrders/OrderDetails";
const OrderDetailsPage = () => {
    const router = useRouter();
    return <OrderDetails />;
};
export default OrderDetailsPage;