import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useDispatch } from 'react-redux';

function AddNew() {

    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [clinic, setClinic] = useState('');
    const [phone, setPhone] = useState('');
    const [nextAppointment, setNextAppointment] = useState('');
    const [portal, setPortal] = useState('');

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('in handleClick');
        const newMedProvider = {
            name: name,
            specialty: specialty,
            clinic: clinic,
            phone: phone,
            nextAppointment: nextAppointment,
            portal: portal
        }
        dispatch({
            type: 'ADD_NEW_MED_PROVIDER',
            payload: newMedProvider
        })
    }

    // use for mobile date picker
    // const handleChange = (newDate) => {
    //     setNextAppointment(newDate);
    // }

    return (

        <>
        <Container maxWidth="sm">
            <p className="componentTitle">Add Medical Provider</p>
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
                    label="next appointment" 
                    variant="outlined" 
                    size="small"
                    value={nextAppointment}
                    onChange={(event) => setNextAppointment(event.target.value)}
                    />


                    {/* Get this to work later
                    <MobileDatePicker
                    label="next appointment"
                    inputFormat="MM/DD/YYYY"
                    value={nextAppointment}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    /> */}
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

                {/* // BUTTON NEEDS TO POST */}
                <Button           
                variant="outlined" 
                size="small"
                onClick={handleClick}
                >
                    Save
                </Button>

            </Stack>
        </Container>
        </>
    )
}

export default AddNew;