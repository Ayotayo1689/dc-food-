import AdminSettings from "@/components/dashboard/settings/index";
import AdminLayout from "@/components/layout/AdminLayout";

const Index = () => {
    return (
        <AdminSettings/>
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