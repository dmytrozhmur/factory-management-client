import { Outlet } from "react-router-dom";
import AdminMenuPanel from "../components/AdminMenuPanel";
import EmployeeMenuPanel from "../components/FactoryAdminMenuPanel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ActivistMenuPanel from "../components/ActivistMenuPanel";

// var Panel;

// const router = createBrowserRouter([
//     <div>Panel</div>

// ])

function ActivistPageLayout({Content}) {
    return (
        <>
            <ActivistMenuPanel />
            <div>{Content}</div>
        </>
    );
}

export default ActivistPageLayout;