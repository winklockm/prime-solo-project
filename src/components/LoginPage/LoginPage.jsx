import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function LoginPage() {
  const history = useHistory();

  return (
    <Stack direction="column"
    justifyContent="space-between"
    alignItems="center"
    spacing={7}>
    {/* <div> */}
      <LoginForm />
      <center>
        <p>New here?</p>
        <Button
        onClick={() => {history.push('/registration');}} 
        variant="outlined" size="small">Create Account</Button>
      </center>
    {/* </div> */}
    </Stack>
  );
}

export default LoginPage;
