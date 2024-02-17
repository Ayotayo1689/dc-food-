import React from 'react'
import AdminLayout from "@/components/layout/AdminLayout";
import CatalogueProducts from "@/components/dashboard/products";

const Index = () => {
    return (
        <>
            <CatalogueProducts />
        </>
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