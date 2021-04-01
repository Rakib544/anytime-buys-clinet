import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import EditProducts from './EditProducts';


const useStyles = makeStyles(theme => ({
    leftSight: {
        height: '100vh',
        "@media (max-width: 900px)": {
            height: '30vh'
        },
        backgroundColor: '#1B4F72'
    },
    container: {
        paddingTop: '20px'
    },
    shopName: {
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonContainer: {
        margin: '20px',
    },
    button: {
        margin: '5px',
        color: '#fff',
        "@media (max-width: 900px)" : {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '30px'
        }
    }
}))

const Admin = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory()
    const classes = useStyles()
    const goToManagePage = () => {
        history.push(`${url}/manageProducts`)
    }
    const goToAddProductPage = () => {
        history.push(`${url}/addProducts`)
    }
    const goToEditProductPage = () => {
        history.push(`${url}/editProducts`)
    }
    return (
        <>
            <Grid container>
                <Grid item lg={3} md={3} sm={6} xs={12} className={classes.leftSight}>
                    <Container className={classes.container}>
                        <Typography variant="h4" align="center" className={classes.shopName}>
                            Anytime Buys
                    </Typography>
                        <div className={classes.buttonContainer}>
                            <Button onClick={goToManagePage} startIcon={<AppsIcon />} className={classes.button}>Manage Product</Button>
                            <Button onClick={goToAddProductPage} startIcon={<AddIcon />} className={classes.button}>Add Product</Button>
                            <Button onClick={goToEditProductPage} startIcon={<CreateIcon />} className={classes.button}>Edit Product</Button>
                        </div>
                    </Container>
                </Grid>
                <Grid item lg={9} md={9} sm={6} xs={12}>
                    <Container>
                        <Switch>
                            <Route exact path={path}>
                               <ManageProducts />
                            </Route>
                            <Route path={`${path}/addProducts`}>
                                <AddProduct />
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts />
                            </Route>
                            <Route path={`${path}/editProducts`}>
                                <EditProducts />
                            </Route>
                        </Switch>
                    </Container>
                </Grid>
            </Grid>

        </>
    );
};

export default Admin;