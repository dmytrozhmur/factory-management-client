import { Outlet } from "react-router-dom";
import AdminMenuPanel from "../components/AdminMenuPanel";
import EmployeeMenuPanel from "../components/FactoryAdminMenuPanel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// var Panel;

// const router = createBrowserRouter([
//     <div>Panel</div>

// ])

function MainPageLayout() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default MainPageLayout;