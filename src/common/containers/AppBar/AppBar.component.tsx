import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles
} from "@material-ui/core";

import NavLinkButton from "common/components/NavLinkButton/NavLinkButton.component";
import style from "./AppBar.style";

interface AppBarProps {
    classes: any;
}

const AppBar = () => {
    const classes = style({});
    return (
        <React.Fragment>
            <BaseAppBar position="static">
                <Toolbar>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs className={classes.menuButtonContainer}>
                            <NavLinkButton
                                color="secondary"
                                variant="contained"
                                to="/"
                            >
                                Home page
                            </NavLinkButton>
                        </Grid>
                        <Grid item container xs>
                            <Typography variant="h6" className={classes.title}>
                                Hello World!
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            xs
                            className={classes.loginButtonContainer}
                        >
                            <NavLinkButton
                                className={classes.loginButton}
                                color="secondary"
                                variant="contained"
                                to="/test"
                            >
                                Login
                            </NavLinkButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </BaseAppBar>
        </React.Fragment>
    );
};

export default AppBar;
