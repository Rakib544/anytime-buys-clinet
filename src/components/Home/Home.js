import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SingleProductCart from './SingleProductCart';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/allProducts')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    return (
        <Container maxWidth="lg">
            <div style={{padding: '20px 0'}}>
                Search bar goes here
            </div>
            <Grid container spacing={4}>
                {
                    products.map(product => <SingleProductCart key={product._id} product={product} />)
                }
            </Grid>
        </Container>
    );
};

export default Home;