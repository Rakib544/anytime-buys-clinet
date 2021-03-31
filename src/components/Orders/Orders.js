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
    const [loggedUser] = useContext(UserContext);

    const { email } = loggedUser;

    useEffect(() => {
        fetch(`http://localhost:8080/orderHistory?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    return (
        <Container>
            <Typography variant="h5" color="primary" style={{ margin: '20px 0' }}>
                Your Previous Order History
            </Typography>
            <div style={{ marginTop: '30px' }}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">User Email</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.length
                                ? (
                                    orders.map(order => (
                                        <TableRow key={order._id}>
                                            <TableCell component="th" scope="row">
                                                {order.productName}
                                            </TableCell>
                                            <TableCell align="center">{order.email}</TableCell>
                                            <TableCell align="center">{order.orderDate}</TableCell>
                                            <TableCell align="center">${order.price}</TableCell>
                                        </TableRow>
                                    ))
                                ) :
                                <Spinner />
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
};

export default Orders;