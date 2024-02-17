import AdminOrders from "@/components/dashboard/orders";
import AdminLayout from "@/components/layout/AdminLayout";

const Index = () => {
    return (
        <AdminOrders />
    )
}

export default Index
Index.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}