import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './ImageUpload.css'
function ImageUpload() {

    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState();
  
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }
  
    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      }
    }
  
    const handleSubmitFile = (e) => {
      console.log('submitting');
      e.preventDefault();
      if(!previewSource) return;
      uploadImage(previewSource);
    }
  
    const uploadImage = (base64EncodedImage) => {
        console.log('here is base64EncodedImage:', base64EncodedImage);
        dispatch({
            type: 'SET_PATIENT_PHOTO',
            payload: {patient_photo: base64EncodedImage},
            headers: {'Content-type': 'application/json'}
    })
    }

    return(
        <div className='photoUpload'>
            <Typography>their photo</Typography>
            
            <form onSubmit={handleSubmitFile}>
                <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                >
                    <input 
                    type="file" 
                    hidden
                    name="image" 
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    ref={fileInputRef}
                    className="form-input"
                    />
                    <Avatar onClick={()=>fileInputRef.current.click()} sx={{ width: 150, height: 150 }}>
                        { previewSource ?
                            <Avatar src={previewSource} sx={{width: 150, height: 150}} />
                        :
                            <AddAPhotoIcon />
                        }
                    </Avatar>
                    
                    {/* enable confirm photo button if there is an image preview, 
                    otherwise button is disabled */}

                    { previewSource ?
                    <Button type="submit" size="small" variant="outlined">Confirm</Button>
                    :
                    <Button disabled type="submit" size="small" variant="outlined">Confirm</Button>
                    }
                    
                </Stack>
            </form>
        </div>
    )
}

export default ImageUpload;
