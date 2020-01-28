import * as React from "react";

import { Typography } from "@material-ui/core";

import { useEffect } from "react";
import { StateContext } from "context/contextStore";

interface HomeProps {
    title: string;
    updateTitle: any;
}

const Home = (props: HomeProps, titleList: string[]) => {
    const state = React.useContext(StateContext);
    const { userStore } = state;
    console.log(userStore.userId);
    // const authenticated = userStore.auth;
    return (
        <React.Fragment>
            <Typography>{"Hello world"}</Typography>
        </React.Fragment>
    );
};

export default Home;
