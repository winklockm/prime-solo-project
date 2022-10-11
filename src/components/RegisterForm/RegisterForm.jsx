import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [patientName, setPatientName] = useState('');
  const [image, setImage] = useState('');
  const [patientPhoto, setPatientPhoto] = useState('');
  const errors = useSelector((store) => store.errors);
  
  const dispatch = useDispatch();

  const uploadImage = () => {
    console.log('in uploadImage. here is image:', image);
    setPatientPhoto(image);
}

  const registerUser = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        patientName: patientName,
        patientPhoto: patientPhoto
      },
    });
  }; // end registerUser

  return (
    <Container maxWidth="sm">
      <form className="formPanel" onSubmit={registerUser}>

        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}

        <Stack spacing={4}>
          <div>
            <TextField
            label="username" 
            variant="filled" 
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <TextField
            label="password" 
            variant="filled" 
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
          </div>

        {/* about the patient */}
          <div>
            <TextField
            label="who are you caring for?" 
            variant="filled" 
            required
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            />
          </div>
          
          <div>
            <TextField
            label="their photo" 
            variant="filled" 
            onChange={(event) => setImage(event.target.value)}
            />
                
            <Button onClick={uploadImage} variant="contained">Image Preview</Button>
      
            {/* show image only if there is a patientPhoto set */}
            {patientPhoto && (
              <img src={patientPhoto} className='imagePreview'></img>
            )} 
          </div>

          <div>
            <input className="btn" type="submit" name="submit" value="Register" />
          </div>
        </Stack>
      </form>
    </Container>
  );
}

export default RegisterForm;
