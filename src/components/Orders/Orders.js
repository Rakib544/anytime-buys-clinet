import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Orders = () => {
    const classes = useStyles()
    const [orders, setOrders] = useState([])
    const [loggedUser] = useContext(UserContext);

    const {email} = loggedUser;

    useEffect(() => {
        fetch(`http://localhost:8080/orderHistory/${email}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [email])
    return (
        <Container>
            <Typography variant="h4" color="primary">
                Your Previous Order History
            </Typography>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
};

export default Orders;