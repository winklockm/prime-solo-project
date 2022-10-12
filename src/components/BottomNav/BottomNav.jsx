import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';

function BottomNav() {
    const [value, setValue] = React.useState();
    // const ref = React.useRef(null);
    const history = useHistory();
    const user = useSelector((store) => store.user);
  
    // React.useEffect(() => {
    //   ref.current.ownerDocument.body.scrollTop = 0;
    // }, [value]);
  
      const changePage = (value) => {
      console.log('in changePage and value is:', value);
      if(value === 0) {
        history.push('/home');
      }
      else if(value === 1) {
        history.push('/medicalteam')
      }
      else if(value === 2) {
        history.push('/medication')
      }
      else if(value === 3) {
        history.push('/insurance')
      }
    }

    return (
      <div className="BottomNav">
        <div>
          {/* If no user is logged in, don't show BottomNav */}
          {!user.id && (
            // If there's no user, don't show BottomNav
            <Container className='blah' maxWidth="sm">

            </Container>
          )}

          {/* If a user is logged in, show BottomNav */}
          {user.id && (
            <Box sx={{ pb: 7 }} 
            // ref={ref}
            >
              <CssBaseline />
              <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    console.log('in onChange. newValue is:', newValue);
                    setValue(newValue);
                    changePage(newValue);
                  }}
                  >
                  <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                  <BottomNavigationAction label="Med Team" icon={<FavoriteIcon />} />
                  <BottomNavigationAction label="Medication" icon={<ArchiveIcon />} />
                  <BottomNavigationAction label="Insurance" icon={<ArchiveIcon />} />
                </BottomNavigation>
              </Paper>
            </Box>
          )}
        </div>
      </div>
    );
}

export default BottomNav;