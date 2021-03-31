import { Button, ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2)
    },
    img: {
        width: '100%'
    },
    priceText: {
        color: '#1B4F72'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px'
    }
}))

const SingleProductCart = ({ product }) => {
    const classes = useStyles()
    const { productName, imageURL, weight, price, _id } = product;

    const history = useHistory();
    const handleOrderItem = (id) => {
        history.push(`/checkout/${id}`)
    }
    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>
                <ButtonBase>
                    <img src={imageURL} alt={productName} className={classes.img} />
                </ButtonBase>
                <Typography variant="subtitle1">
                    {productName} - {weight}
                </Typography>
                <div className={classes.buttonContainer}>
                    <Typography variant="h6" className={classes.priceText}>
                        ${price}
                    </Typography>
                    <Button color="primary" variant="contained" onClick={() => handleOrderItem(_id)}>Buy Now</Button>
                </div>
            </Paper>
        </Grid>
    );
};

export default SingleProductCart;