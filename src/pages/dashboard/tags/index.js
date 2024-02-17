import React from 'react'
import AdminLayout from "@/components/layout/AdminLayout";
import Tags from "@/components/dashboard/tags";

const Index = () => {
    return (
        <Tags />
    )
}
export default Index

Index.getLayout = function getLayout(page) {
    return (
        <>
            <AdminLayout>
                {page}
            </AdminLayout>
        </>
    )
}
