import React from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import AdminDashboard from "@/components/dashboard";
import withAuth from "@/utils/auth";

const Index = () => {
	return (
		<>
			<AdminDashboard />
		</>
	);
};
const adminAuth = withAuth(Index);

adminAuth.getLayout = function getLayout(page) {
	return (
		<>
			<AdminLayout>{page}</AdminLayout>
		</>
	);
};

export default adminAuth;
