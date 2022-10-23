import LogOutButton from '../LogOutButton/LogOutButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './Overview.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import dayjs from 'dayjs';
import Appointment from './Appointment';
import Box from '@mui/material/Box';

function Overview() {
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const medicalTeam = useSelector((store) => store.medicalteam.medicalteamReducer);
    const medications = useSelector((store) => store.medication.medicationReducer);
    const insurance = useSelector((store) => store.insurance.insuranceReducer);
    const dispatch = useDispatch();

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
            <Typography variant="h5" className='welcome' onClick={handleAbout}>Welcome, {user.username}!</Typography>
            
                    <Typography variant="h6" className='componentTitle'>{user.patient_name} has:</Typography>
                    <Stack
                    direction="column"
                    justifyContent="center"       
                    spacing={2}>  
                    
                    <Typography>Upcoming Appointments:</Typography>
                    {/* { medicalTeam.length>1 || medicalTeam.length<=0 ?
                        <Typography>{medicalTeam.length} medical providers</Typography> :
                        <Typography>{medicalTeam.length} medical provider</Typography>
                    } */}
     
                    { medicalTeam.map(provider => (
                        <Appointment key={provider.id} provider={provider}/>
                    ))}

                    {/* { medications.length>1 || medications.length<=0 ?
                        <Typography>{medications.length} medications</Typography> :
                        <Typography>{medications.length} medication</Typography>
                    } */}

                    {/* { insurance.length>1 || insurance.length<=0 ?
                        <Typography>{insurance.length} insurance plans</Typography> :
                        <Typography>{insurance.length} insurance plan</Typography>
                    } */}

                </Stack>
           
                <LogOutButton />
            </Container>
    )
}

export default Overview;