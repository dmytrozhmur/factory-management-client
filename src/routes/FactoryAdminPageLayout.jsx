import { Outlet } from "react-router-dom";
import AdminMenuPanel from "../components/AdminMenuPanel";
import FactoryAdminMenuPanel from "../components/FactoryAdminMenuPanel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ActivistMenuPanel from "../components/ActivistMenuPanel";

function FactoryAdminPageLayout({Content}) {
    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>
                <FactoryAdminMenuPanel />
                <div style={{ flex: 1, padding: '20px' }}>
                    {Content}
                </div>
            </div>
        </>
    );
}

export default FactoryAdminPageLayout;