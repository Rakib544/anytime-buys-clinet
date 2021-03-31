import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../Spinner/Spinner';
import SingleProductCart from './SingleProductCart';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-chamber-51709.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    return (
        <Container maxWidth="lg">
            <SearchBar />
            <Grid container spacing={4}>
                {
                    products.length
                        ? products.map(product => <SingleProductCart key={product._id} product={product} />)
                        : <Spinner />
                }
            </Grid>
        </Container>
    );
};

export default Home;