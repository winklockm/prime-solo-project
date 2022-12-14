import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Stack from '@mui/material/Stack';
import './LoginForm.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Container maxWidth="sm">
    <form className="formPanel" onSubmit={login}>
      {/* <h2>Login</h2> */}
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      

      <Stack spacing={4}>
        <div>
          <TextField
          label="username" 
          variant="outlined" 
          size="small"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <TextField
          label="password" 
          type="password"
          variant="outlined" 
          size="small"
          required
          value={password}
                onChange={(event) => setPassword(event.target.value)}
        />          
        </div>
        <div>
          <Button type="submit" size="small" name="submit" value="Log In" variant="contained">Log In</Button>
        </div>
      </Stack>
    </form>
    </Container>
  );
}

export default LoginForm;
