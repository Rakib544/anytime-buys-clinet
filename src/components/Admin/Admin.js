import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import AddProduct from './AddProduct';


const useStyles = makeStyles(theme => ({
    leftSight: {
        height: '100vh',
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
        color: '#fff'
    }
}))

const Admin = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item lg={3} className={classes.leftSight}>
                <Container className={classes.container}>
                    <Typography variant="h4" align="center" className={classes.shopName}>
                        Anytime Buys
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button startIcon={<AppsIcon />} className={classes.button}>Manage Product</Button>
                        <Button startIcon={<AddIcon />} className={classes.button}>Add Product</Button>
                        <Button startIcon={<CreateIcon />} className={classes.button}>Edit Product</Button>
                    </div>
                </Container>
            </Grid>
            <Grid item lg={9}>
                <Container>
                    <AddProduct />
                </Container>
            </Grid>
        </Grid>
    );
};

export default Admin;