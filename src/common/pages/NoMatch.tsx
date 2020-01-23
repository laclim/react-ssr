import * as React from "react";
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    Box,
    Grid,
    CardActions,
    Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import theme from "common/theme";
const useStyles = makeStyles({
    card: {
        minWidth: 275,
        maxWidth: 475,
        innerHeight: 275
    },

    center: { textAlign: "center", margin: theme.spacing(2, 0, 2) }
});
const NoMatch = () => {
    const classes = useStyles({});
    return (
        <Container maxWidth="xs">
            <Card>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h6" className={classes.center}>
                            Not found
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant="body2" className={classes.center}>
                    <Link to="/">Go to homepage</Link>
                </Typography>
            </Card>
        </Container>
    );
};

export default NoMatch;
