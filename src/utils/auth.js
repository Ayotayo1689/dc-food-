import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCheckoutInfo } from "@/redux/reducers/checkoutReducer";
import { getItem, setItem } from "@/utils/localStorage";
export default function withAuth(Component) {
	return function ProtectedRoute({ ...props }) {
		const router = useRouter();
		const userTokens = useSelector((state) => state.user.user);
		const checkoutInfo = useSelector((state) => state.checkoutInfo);
		const dispatch = useDispatch();
		// const userIsAuthenticated = user !== null;
		useEffect(() => {
			if (!userTokens) {
				router.push("/signin");
			} else if (!checkoutInfo && router.pathname === "/signin") {
				// User successfully logs in and there's no checkout info, redirect to home or default landing page
				router.push("/");
			} else if (checkoutInfo && router.pathname === "/signin") {
				// User successfully logs in and there's checkout info, redirect to checkout page
				router.push("/checkout");
			}

			const checkoutInfoFromStorage = getItem("checkoutInfo");

			if (checkoutInfoFromStorage && !userTokens) {
				dispatch(setCheckoutInfo(checkoutInfoFromStorage));
			}

			if (checkoutInfo && !checkoutInfoFromStorage) {
				setItem("checkoutInfo", checkoutInfo);
			}
		}, [userTokens, checkoutInfo, router]);
		return <Component {...props} />;
	};
}
