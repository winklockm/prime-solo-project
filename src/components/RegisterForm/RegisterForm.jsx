import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ImageUpload from '../ImageUpload/ImageUpload';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [patient, setPatient] = useState('');
  const [patientPhoto, setPatientPhoto] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        patient: patient,
        patientPhoto: patientPhoto
      },
    });
  }; // end registerUser

  return (
    <Container maxWidth="sm">
    <form className="formPanel" onSubmit={registerUser}>
      {/* <h2>Register User</h2> */}
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

    <Stack spacing={4}>
      <div>
        <TextField
        id="filled-basic" 
        label="username" 
        variant="filled" 
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        />
    
      </div>
      <div>
        <TextField
        id="filled-basic" 
        label="password" 
        variant="filled" 
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <TextField
        id="filled-basic" 
        label="who are you caring for?" 
        variant="filled" 
        required
        value={patient}
        onChange={(event) => setPatient(event.target.value)}
        />
      </div>

      <div>
        <TextField
        id="filled-basic" 
        label="their photo" 
        variant="filled" 
        required
        value={patientPhoto}
        onChange={(event) => setPatientPhoto(event.target.value)}
        />
      </div>

        <ImageUpload />

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
      </Stack>
    </form>
    </Container>
  );
}

export default RegisterForm;
