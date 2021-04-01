import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Spinner from '../Spinner/Spinner';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Orders = () => {
    const classes = useStyles()
    const [orders, setOrders] = useState([])
    const [showSpinner, setShowSpinner] = useState(true);
    const [loggedUser] = useContext(UserContext);

    const { email } = loggedUser;

    useEffect(() => {
        fetch(`https://cryptic-chamber-51709.herokuapp.com/orderHistory?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])

    setTimeout(() => {
        setShowSpinner(false)
    }, 5000);
    return (
        <Container>
            <Typography variant="h5" style={{ margin: '20px 0' }}>
                Your Previous Order History
            </Typography>
            <div style={{ marginTop: '30px' }}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Image</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">User Email</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.length
                                ? (
                                    orders.map(order => {
                                        const {imageURL, productName, orderDate, price, email} = order;
                                        return(
                                       
                                        <TableRow key={order._id}>
                                            <TableCell component="th" scope="row">
                                                <img src={imageURL} alt={productName} style={{height: '50px'}} />
                                            </TableCell>
                                            <TableCell align="center">{productName}</TableCell>
                                            <TableCell align="center">{email}</TableCell>
                                            <TableCell align="center">{orderDate}</TableCell>
                                            <TableCell align="center">${price}</TableCell>
                                        </TableRow>
                                    )})
                                ) : (
                                showSpinner ? <Spinner /> : <Typography style={{margin: '20px'}} align="center" variant="subtitle1">No products added</Typography>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
};

export default Orders;