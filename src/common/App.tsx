import * as React from "react";
import { Switch, Route, RouteProps, Redirect } from "react-router-dom";

import Home from "common/pages/Home";
import Login from "common/pages/Login/Login";
import AppBar from "common/containers/AppBar/AppBar.component";
import NoMatch from "./pages/NoMatch";
import { useContext, useEffect } from "react";
import { StateContext } from "context/contextStore";

const App = () => {
    return (
        <React.Fragment>
            <AppBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <UnauthenticatedRoute exact path="/test" component={Login} />
                {/* <PrivateRoute exact path="/" component={Welcome}></PrivateRoute> */}
                <Route component={NoMatch} />
            </Switch>
        </React.Fragment>
    );
};
export default App;

// const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
//     const state = useContext(StateContext);
//     const { userStore } = state;
//     const authenticated = userStore.auth;

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 authenticated ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: props.location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// };

const UnauthenticatedRoute = ({
    component: Component,
    ...rest
}: RouteProps) => {
    const state = useContext(StateContext);

    const { userStore } = state;

    let authenticated: boolean;
    authenticated = userStore.auth;


    return (
        <Route
            {...rest}
            render={(props) =>
                !authenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: "/", state: { from: props.location } }}
                        />
                    )
            }
        />
    );
};
