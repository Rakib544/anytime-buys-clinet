import { Button, Container, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    button: {
        display: 'block',
        marginLeft: 'auto',
        marginTop: '20px'
    }
});

const CheckOut = () => {
    const classes = useStyles();
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:8080/checkout/${id}`)
            .then(res => res.json())
            .then(product => setProduct(product))

    }, [id])

    const { productName, price } = product;
    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>
            <h1>Checkout</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {productName}
                            </TableCell>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="right">$ {price}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Total
                                </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="right">$ {price}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" className={classes.button}>
                Checkout
            </Button>
        </Container>
    );
};

export default CheckOut;