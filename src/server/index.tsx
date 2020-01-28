import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as Redux from "redux";

import { StaticRouter as Router } from "react-router-dom";
import { JssProvider } from "react-jss";
import {
    ThemeProvider,
    createGenerateClassName,
    ServerStyleSheets
} from "@material-ui/core/styles";

import App from "common/App";
import theme from "common/theme";
import { DispatchContext, StateContext } from "context/contextStore";

declare const module: any;

function main() {
    const express = Express();
    const port = 8080;

    express.use(Express.static("build"));

    express.get("/*", (req, res, next) => {
        const sheetsRegistry = new ServerStyleSheets();

        const appHTML = ReactDOM.renderToString(
            sheetsRegistry.collect(
                <DispatchContext.Provider value={null}>
                    <StateContext.Provider value={{ userStore: { userId: "das", auth: false }, taskStore: { title: "", content: "", email: "" } }}>
                        <Router location={req.path} context={{}}>
                            <JssProvider
                                generateClassName={createGenerateClassName()}
                            >
                                <ThemeProvider theme={theme}>
                                    <App />
                                </ThemeProvider>
                            </JssProvider>
                        </Router>
                    </StateContext.Provider>
                </DispatchContext.Provider>
            )
        );
        const appInitialState = JSON.stringify({}).replace(/</g, "\\u003c");

        const appCSS = sheetsRegistry.toString();

        res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
/>
                    <title>TypeScript ReactJS SSR App</title>
                    <style>
                        body {
                            margin: 0px;
                            padding: 0px;
                        }
                    </style>
                    <style id="jss-server-side">${appCSS}</style>
                </head>
                <body>
                    <main id="root">${appHTML}</main>
                    <script>
                        window["__PRELOADED_STATE__"] = ${appInitialState}
                    </script>
                    <script type="application/javascript" src="bundle.js"></script>
                </body>
            </html>
        `);
        res.end();
        next();
    });

    const server = express.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();
