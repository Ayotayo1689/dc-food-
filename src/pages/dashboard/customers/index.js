import AdminLayout from "@/components/layout/AdminLayout";
import AdminCustomers from "@/components/dashboard/customers";

const Index = () => {
    return (
        <>
            <AdminCustomers />
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