import { Outlet } from "react-router-dom";
import AdminMenuPanel from "../components/AdminMenuPanel";
import EmployeeMenuPanel from "../components/EmployeeMenuPanel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ActivistMenuPanel from "../components/ActivistMenuPanel";

// var Panel;

// const router = createBrowserRouter([
//     <div>Panel</div>

// ])

function EmployeePageLayout({Content}) {
    return (
        <>
            <EmployeeMenuPanel />
            <div style={left}>{Content}</div>
        </>
    );
}

export default EmployeePageLayout;