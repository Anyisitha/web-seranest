import {IRoutes} from "models/interfaces/routes.interfaces";
import {FC} from "react";
import {Route, RouteComponentProps} from "react-router-dom";

const AnonymousRoute: FC<IRoutes> = ({
  Component,
  layout,
  ...otherProps
}) => {
    return (
        <Route
            {...otherProps}
            render={(props: RouteComponentProps) => <Component {...props} />}
        />
    )
}

export default AnonymousRoute;