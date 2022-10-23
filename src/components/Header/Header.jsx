import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function Header() {
  const user = useSelector((store) => store.user);

  return (
    <div className="header">
      <div>
        {/* If no user is logged in, show logo and subtitle */}
        {!user.id && (
          // If there's no user, show only logo
          <Container className='header-large' maxWidth="sm">
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            >
              {/* <h1 className='title'>TakeCare</h1> */}
              <h1 className='large'><span className='takeLarge'>take</span ><span className='careLarge'>care</span></h1>
              <h2 className='subtitle'>caregiving. centralized.</h2>
            </Stack>
          </Container>
        )}

        {/* If a user is logged in, show logo and image */}
        {user.id && (
          <Container className='header' maxWidth="sm">
            <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}>
              {/* <h2 className='subtitle'>Picture</h2> */}
              <Avatar className='thumbnail' src={user.patient_photo} sx={{width: 60, height: 60}} />
              {/* <h1 className='title'>TakeCare</h1> */}
              <h1><span className='take'>take</span ><span className='care'>care</span></h1>
            </Stack>
          </Container>
        )}
       </div>
    </div>
  );
}

export default Header;
