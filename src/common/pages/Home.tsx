import * as React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

import { Store } from "common/redux/store";
import { changeTitle } from "common/redux/action";
import { useEffect } from "react";

interface HomeProps {
    title: string;
    updateTitle: any;
}

const Home = (props: HomeProps, titleList: string[]) => {
    titleList = ["Hello World!", "High five from React", "Wow. Much skills."];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "CHANGE_TITLE", data: "new version" });
    }, []);
    // const setRandomTitle = () => {
    //     let titleIndex = this.titleList.indexOf(props.title) + 1;
    //     if (titleIndex >= this.titleList.length) {
    //         titleIndex = 0;
    //     }

    //     const newTitle = this.titleList[titleIndex];
    //     props.updateTitle(newTitle);
    // };

    const title = useSelector((state: HomeProps) => state.title);
    return (
        <React.Fragment>
            <Typography>{title}</Typography>
        </React.Fragment>
    );
};

export default Home;
