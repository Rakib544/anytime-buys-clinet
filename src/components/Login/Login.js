import { Button, makeStyles } from '@material-ui/core';
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
        <div className={classes.div}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<FontAwesomeIcon icon={faGoogle} />}
                onClick={handleGoogleSingIn}
            >
                Continue With Google
            </Button>
        </div>
    );
};

export default Login;