import AdminLayout from "./AdminLayout";
import DashboardLayout from "./DashboardLayout";
import LoginAdminLayout from "./LoginAdminLayout";
import LoginLayout from "./LoginLayout";

const useLayouts = () => {
    return {
        LoginLayout,
        DashboardLayout,
        LoginAdminLayout,
        AdminLayout
    };
}

export default useLayouts;