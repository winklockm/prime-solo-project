import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Appointment from './Appointment';
import LogOutButton from '../LogOutButton/LogOutButton';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function Overview() {

    const user = useSelector((store) => store.user);
    const medicalTeam = useSelector((store) => store.medicalteam.medicalteamReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM'
        })
        dispatch({
            type: 'FETCH_MEDICATIONS'
        })
        dispatch({
            type: 'FETCH_INSURANCE'
        })
    }, []);

    const handleAbout = () => {
        history.push('/about');
    }

    console.log('user is', user)
    console.log('from medicalteam reducer:', medicalTeam.length);

    return (
        <Container className='componentBox' maxWidth="sm">
            <Typography color="text.secondary" variant="h5" className='welcome' onClick={handleAbout}>Welcome, {user.username}!</Typography>
            <Typography className='componentTitle'>{user.patient_name}'s Upcoming Appointments</Typography>
            <Stack
            direction="column"
            justifyContent="center"       
            spacing={2}>  
                { medicalTeam.map(provider => (
                    <Appointment key={provider.id} provider={provider}/>
                ))}
            </Stack>
                <div className='log'>
                    <LogOutButton/>
                </div>
        </Container>
    )
}

export default Overview;