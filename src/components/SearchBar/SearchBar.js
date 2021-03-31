import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        display: 'block',
        margin: '20px 0',
        textAlign: 'center'
    },
    input: {
        padding: '10px',
        width: '40%',
        borderRadius: '10px 0 0 10px',
        border: '1px solid deepSkyBlue',
        outline: 'none',
        "@media(max-width: 900px)": {
            width: '70%'
        },
    },
    button: {
        padding: '11px 12px',
        backgroundColor: '#1B4F72',
        color: '#fff',
        borderRadius: '1px 10px 10px 1px',
        border: '1px solid #1B4F72',
        outline: 'none',
        cursor: 'pointer'
    }
}))

const SearchBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.container} >
            <div>
                <input className={classes.input} type="search" placeholder="search..." />
                <button className={classes.button} type="button">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;