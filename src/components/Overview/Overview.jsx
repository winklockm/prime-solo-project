import LogOutButton from '../LogOutButton/LogOutButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './Overview.css';

function Overview() {
    const user = useSelector((store) => store.user);
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

console.log('user is', user)
console.log('from medicalteam reducer:', medicalTeam.length);
    return (
        <>
            <p className='welcome'>Welcome, {user.username}!</p>
            <Container className='componentBox' maxWidth="sm">
                <Stack spacing={2}>
                    
                    <p className='componentTitle'>{user.patient_name} has:</p>
                    
                    { medicalTeam.length>1 || medicalTeam.length<=0 ?
                        <p>{medicalTeam.length} medical providers</p> :
                        <p>{medicalTeam.length} medical provider</p>
                    }

                    { medications.length>1 || medications.length<=0 ?
                        <p>{medications.length} medications</p> :
                        <p>{medications.length} medication</p>
                    }

                    { insurance.length>1 || insurance.length<=0 ?
                        <p>{insurance.length} insurance plans</p> :
                        <p>{insurance.length} insurance plan</p>
                    }

                    <LogOutButton />
                </Stack>
            </Container>
        </>
    )
}

export default Overview;