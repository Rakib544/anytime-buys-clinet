import React, { useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import { useForm } from "react-hook-form";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-around',
        "@media (max-width: 900px)" : {
            display: 'block'
        }
    },
    testField: {
        width: '100%',
        margin: '10px 0'
    },
    button: {
        display: 'block',
        marginLeft: 'auto',
        marginTop: '10px',
        backgroundColor: '#1B4F72',
        color: '#fff',
        "&:hover": {
            backgroundColor: '#1B4F72'
        }
    },
    input: {
        display: 'none'
    }
}))

const AddProduct = () => {
    const classes = useStyles()
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log(err))
    }
    const onSubmit = data => {
        if (imageURL !== null) {
            let productData = { imageURL, ...data }
            fetch('https://cryptic-chamber-51709.herokuapp.com/addProduct', {
                method: "POST",
                headers: { "Content-type": 'application/json' },
                body: JSON.stringify(productData)
            })
        }
    };
    return (
        <>
            <div>
                <h2> Add Product</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={classes.paper}>
                    <div>
                        <TextField
                            className={classes.testField}
                            variant="outlined"
                            label="Enter Product Name"
                            name="productName"
                            inputRef={register}
                        />
                        <TextField
                            className={classes.testField}
                            variant="outlined"
                            label="Enter Product Price"
                            name="price"
                            inputRef={register}
                        />
                    </div>
                    <div>
                        <TextField
                            className={classes.testField}
                            variant="outlined"
                            label="Enter Product Weight"
                            name="weight"
                            inputRef={register}
                        />

                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="contained-button-file">
                            <Button
                                startIcon={<CloudUploadIcon />}
                                variant="outlined"
                                component="span"
                            >
                                Upload photo
                            </Button>
                        </label>
                    </div>
                </Paper>
                {
                   imageURL === null 
                   ? <Button type="submit" disabled className={classes.button}>save</Button>
                   :<Button type="submit" className={classes.button}>save</Button>
                }
            </form>

        </>
    );
};

export default AddProduct;