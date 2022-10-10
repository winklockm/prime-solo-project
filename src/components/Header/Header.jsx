import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function Header() {
  const user = useSelector((store) => store.user);

  return (
    <div className="header">
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show only logo
          <Container className='header' maxWidth="sm">
            <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0}
            >
              <h1>TakeCare</h1>
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
              <h3>Picture</h3>
              <h1>TakeCare</h1>
            </Stack>
          </Container>
        )}
       </div>
    </div>
  );
}

export default Header;
