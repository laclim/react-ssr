import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { JssProvider } from "react-jss";
import {
    MuiThemeProvider,
    createGenerateClassName
} from "@material-ui/core/styles";

import App from "common/App";
import theme from "common/theme";
import { StateContext, DispatchContext } from "context/contextStore";
import { useState, useMemo, useReducer } from "react";
import { userReducer, taskReducer } from "context/reducer";
import useCombinedReducers from "use-combined-reducers";
import { AllContext } from "../context/initialState";

const Main = () => {
    const preloadedState = (window as any)["__PRELOADED_STATE__"];
    delete (window as any)["__PRELOADED_STATE__"];

    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <AllContext>
            <Router>
                <JssProvider generateClassName={createGenerateClassName()}>
                    <MuiThemeProvider theme={theme}>
                        <App />
                    </MuiThemeProvider>
                </JssProvider>
            </Router>
        </AllContext>
    );
};

ReactDOM.hydrate(<Main />, document.getElementById("root"));
