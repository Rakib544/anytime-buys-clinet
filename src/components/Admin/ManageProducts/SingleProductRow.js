import React from 'react';
import { IconButton, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const SingleProductRow = ({ product }) => {
    const { productName, weight, price, _id } = product;

    const handleDeleteProduct = (id) => {
        const obj = {id}
        console.log(id)
        fetch('https://cryptic-chamber-51709.herokuapp.com/deleteProduct', {
            method: "DELETE",
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(obj)
        })
    }
    return (
        <TableRow >
            <TableCell component="th" scope="row">
                {productName}
            </TableCell>
            <TableCell align="center">{weight}</TableCell>
            <TableCell align="center">{price}</TableCell>
            <TableCell align="center">
                <IconButton aria-label="delete" color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="edit" color="secondary" onClick={() => handleDeleteProduct(_id)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default SingleProductRow;