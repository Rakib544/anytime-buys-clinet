import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import SingleProductRow from './SingleProductRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ManageProducts = () => {
    const classes = useStyles()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-chamber-51709.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    return (
        <>
            <h3>Manage Products</h3>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">Weight</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.length
                                ? (
                                    products.map(product => <SingleProductRow key={product._id} product={product} />)
                                ): (
                                    <Spinner />
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default ManageProducts;