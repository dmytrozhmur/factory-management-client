import { Outlet } from "react-router-dom";
import AdminMenuPanel from "../components/AdminMenuPanel";
import EmployeeMenuPanel from "../components/EmployeeMenuPanel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// var Panel;

// const router = createBrowserRouter([
//     <div>Panel</div>

// ])

function AdminPageLayout({Content}) {
    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>
                <AdminMenuPanel />
                <div style={{ flex: 1, padding: '20px' }}>
                    {Content}
                </div>
            </div>
        </>
    );
}

export default AdminPageLayout;