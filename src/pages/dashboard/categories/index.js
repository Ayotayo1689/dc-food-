import React from 'react'
import CatalogueCategory from "@/components/dashboard/categories";
import AdminLayout from "@/components/layout/AdminLayout";

const Index = () => {
    return (
        <CatalogueCategory />
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
