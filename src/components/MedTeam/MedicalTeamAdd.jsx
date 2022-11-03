import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function MedicalTeamAdd() {

    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [clinic, setClinic] = useState('');
    const [phone, setPhone] = useState('');
    const [portal, setPortal] = useState('');
    const [nextAppointment, setNextAppointment] = useState('');
    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();


    const handleNextAppt = (value) => {
        console.log('in handleNextAppt. Value is:', value.$d)
        setNextAppointment(value)
    } 

    const fillForm = () => {
        setName('Dr. Singh');
        setSpecialty('Neurology');
        setClinic('Mayo Clinic');
        setPhone('314-227-8489');
        setPortal('https://www.mayoclinichealthsystem.org/patient-online-services');
        setNextAppointment('10/25/2022 12:20 PM');
        setComments('Second opinion');
    }

    const handleAdd = () => {
        console.log('in handleClick');
        const newMedProvider = {
            name: name,
            specialty: specialty,
            clinic: clinic,
            phone: phone,
            portal: portal,
            nextAppointment: nextAppointment,
            comments: comments
        }
        dispatch({
            type: 'ADD_NEW_MED_PROVIDER',
            payload: newMedProvider
        })
        // clear inputs
        setName('');
        setSpecialty('');
        setClinic('');
        setPhone('');
        setPortal('');
        setNextAppointment('');
        setComments('');
        // navigate user to Medical Team List page after adding new provider
        history.push('/medicalteam');
    }

    return (
        <Container maxWidth="sm">
            <div onClick={fillForm}>
                <p className="componentTitle">Add Medical Provider</p>
            </div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
                <TextField
                    label="name" 
                    variant="outlined" 
                    required
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    label="specialty" 
                    variant="outlined" 
                    fullWidth
                    value={specialty}
                    onChange={(event) => setSpecialty(event.target.value)}
                />
                <TextField
                    label="clinic" 
                    variant="outlined" 
                    fullWidth
                    value={clinic}
                    onChange={(event) => setClinic(event.target.value)}
                />
                <TextField
                    label="phone" 
                    variant="outlined" 
                    fullWidth
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
               
                <TextField
                    label="patient portal link" 
                    variant="outlined" 
                    fullWidth
                    value={portal}
                    onChange={(event) => setPortal(event.target.value)}
                />
               
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        value={nextAppointment}
                        onChange={handleNextAppt}
                        label="next appointment" 
                        variant="outlined" 
                        fullWidth
                        renderInput={(params) => {
                            return <TextField {...params} />;
                        }}
                    />
                </LocalizationProvider>
                <TextField
                    label="comments" 
                    variant="outlined" 
                    fullWidth
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                
                <Button           
                    variant="outlined" 
                    size="small"
                    onClick={handleAdd}
                >
                    Save
                </Button>
            </Stack>
        </Container>
    )
}

export default MedicalTeamAdd;