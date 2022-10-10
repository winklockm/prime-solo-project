import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ImageUpload.css'
import Stack from '@mui/material/Stack';


function ImageUpload() {
    // const [image, setImage] = useState('');
    // const dispatch = useDispatch();
    // const patientImage = useSelector((store) => store.patient);

    // const uploadImage = () => {
    //     console.log('in uploadImage. here is image:', image);
    //     dispatch({
    //         type: 'SET_PATIENT_IMAGE',
    //         payload: image
    //     })
    // }


    //above is working
    const [image, setImage] = useState('');
    const [url, setURL] = useState('');
    // const dispatch = useDispatch();
    // const patientImage = useSelector((store) => store.patient);

    const previewImage = event => {
        event.preventDefault();
        console.log('in previewImage. here is image:', image);
        setImage(url)
    }


    return (
        <Stack spacing={2} 
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        
            <TextField
            id="filled-basic" 
            label="url" 
            variant="filled" 
            required
            onChange={(event) => setURL(event.target.value)}
            />
            <Button onClick={previewImage} variant="contained">Image Preview</Button>

            {/* show image only if there is an image set */}
            {image && (
            <img src={image} className='imagePreview'></img>
            )}



        {/* <TextField
        id="filled-basic" 
        label="url" 
        variant="filled" 
        required
        onChange={(event) => setImage(event.target.value)}
        />
            <Button onClick={uploadImage} variant="contained">Image Preview</Button>
            <img src={patientImage}></img> */}
        </Stack>
    )
}

export default ImageUpload;