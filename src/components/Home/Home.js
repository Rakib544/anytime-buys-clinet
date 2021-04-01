import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../Spinner/Spinner';
import SingleProductCart from './SingleProductCart';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true)
    useEffect(() => {
        fetch('https://cryptic-chamber-51709.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    setTimeout(() => {
        setShowSpinner(false)
    }, 20000)
    return (
        <Container maxWidth="lg">
            <SearchBar />
            <Grid container spacing={4}>
                {
                    products.length
                        ? products.map(product => <SingleProductCart key={product._id} product={product} />)
                        : (
                            showSpinner ? <Spinner /> : <Typography style={{margin:'50px'}} variant="subtitle1" align="center">Products not found</Typography>
                        )
                }
            </Grid>
        </Container>
    );
};

export default Home;