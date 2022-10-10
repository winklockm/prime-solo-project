import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ImageUpload.css'
import Stack from '@mui/material/Stack';


function ImageUpload() {
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
    const patientImage = useSelector((store) => store.patient);

    const uploadImage = () => {
        console.log('in uploadImage. here is image:', image);
        dispatch({
            type: 'SET_PATIENT_IMAGE',
            payload: image
        })
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
            onChange={(event) => setImage(event.target.value)}
            />
            
            <Button onClick={uploadImage} variant="contained">Image Preview</Button>
  
            {/* show image only if there is an patientImage set */}
            {patientImage && (
            <img src={patientImage} className='imagePreview'></img>
            )} 
        </Stack>
    )
}

export default ImageUpload;