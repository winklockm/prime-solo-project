import React from 'react';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './RegisterPage.css'

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      <Stack
      className='backToLogin'
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      >
        <Typography variant="caption">Already have an account?</Typography>
        <Button
          variant="text"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </Stack>
    </div>
  );
}

export default RegisterPage;
