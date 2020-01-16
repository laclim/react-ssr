import * as React from "react";
import { Typography } from "@material-ui/core";

interface TestProps {}

const Test = (props: TestProps) => {
    return (
        <React.Fragment>
            <Typography>Test page</Typography>
        </React.Fragment>
    );
};

export default Test;
