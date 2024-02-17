import React from 'react'
import AdminLayout from "@/components/layout/AdminLayout";
import StaffList from "@/components/dashboard/staff";

const StaffPage = () => {
    return <StaffList />
}
export default StaffPage

StaffPage.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}