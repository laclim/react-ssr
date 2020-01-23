import * as React from "react";
import { withStyles } from "@material-ui/core";
import * as Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import style from "./NavLinkButton.style";

interface NavLinkButtonProps extends Button.ButtonProps {
    children: any;
    to: string;
}

const NavLinkButton = (props: NavLinkButtonProps) => {
    const { children, to, ...others } = props;
    const classes = style({});
    return (
        <React.Fragment>
            <NavLink to={to} className={classes.navLink}>
                <Button.default className={classes.button} {...others}>
                    {children}
                </Button.default>
            </NavLink>
        </React.Fragment>
    );
};

export default NavLinkButton;
