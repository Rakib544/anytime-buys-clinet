import { Button, Container, Grid, makeStyles, Paper, TableCell, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/fontawesome-free-brands';
import { applicationFrameWorkInitialized, googleSignIn } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const useStyles = makeStyles(theme => ({
    div: {
        margin: '50px auto',
        display: 'block',
        textAlign: 'center'
    },
    typography: {
        padding: '20px 0'
    },
    paper: {
        padding: theme.spacing(3)
    }
}))

const Login = () => {
    const classes = useStyles()

    const [loggedUser, setLoggedUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    applicationFrameWorkInitialized()
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(res => {
                setLoggedUser(res)
                history.replace(from);
            })
    }

    return (

        <Container maxWidth="md">
            <Grid item lg={6} md={8} sm={10} xs={12} className={classes.div}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" color="primary" className={classes.typography}>Login Here</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FontAwesomeIcon icon={faGoogle} />}
                        onClick={handleGoogleSingIn}
                    >
                        Continue With Google
            </Button>
                </Paper>
            </Grid>
        </Container>

    );
};

export default Login;