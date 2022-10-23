import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
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
        setPortal('www.mayoclinichealthsystem.org/patient-online-services');
        setNextAppointment('11/12/2022');
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
                <div>
                    <TextField
                    label="name" 
                    variant="outlined" 
                    size="small"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="specialty" 
                    variant="outlined" 
                    size="small"
                    value={specialty}
                    onChange={(event) => setSpecialty(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="clinic" 
                    variant="outlined" 
                    size="small"
                    value={clinic}
                    onChange={(event) => setClinic(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="phone" 
                    variant="outlined" 
                    size="small"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="patient portal link" 
                    variant="outlined" 
                    size="small"
                    value={portal}
                    onChange={(event) => setPortal(event.target.value)}
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        value={nextAppointment}
                        onChange={handleNextAppt}
                        label="next appointment" 
                        variant="outlined" 
                        size="small"
                        renderInput={(params) => {
                            return <TextField {...params} />;
                        }}
                    />
                </LocalizationProvider>
                <div>
                    <TextField
                        label="comments" 
                        variant="outlined" 
                        size="small"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
                        />
                </div>
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