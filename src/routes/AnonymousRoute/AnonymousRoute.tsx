import {IRoutes} from "models/interfaces/routes.interfaces";
import {FC} from "react";
import {Route, RouteComponentProps} from "react-router-dom";

const AnonymousRoute: FC<IRoutes> = ({
  Component,
  layout,
  ...otherProps
}) => {

    /** Layout */
    const Layout = layout;

    return (
        <Route
            {...otherProps}
            render={(props: RouteComponentProps) => {
                return layout ? (<Layout>
                    <Component {...props}/>
                </Layout>) : <Component {...props} />
            }}
        />
    )
}

export default AnonymousRoute;