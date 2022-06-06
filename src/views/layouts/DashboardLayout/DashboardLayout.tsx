import * as React from "react";
import useViews from "views";
import { IDashboardLayoutProps } from "./Dashboard.interfaces";

const DashboardLayout = ({
    children
} : IDashboardLayoutProps): JSX.Element => {
    /** Components */
    const { useComponents } = useViews();
    const { HeaderDashboard } = useComponents();

    return (
        <React.Fragment>
            <HeaderDashboard/>
            <main>{children}</main>
        </React.Fragment>
        
    );
}

export default DashboardLayout;