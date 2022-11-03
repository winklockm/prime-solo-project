import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function MedicationAdd() {
    const [name, setName] = useState('');
    const [indication, setIndication] = useState('');
    const [dose, setDose] = useState('');
    const [frequency, setFrequency] = useState('');
    const [route, setRoute] = useState('');
    const [notes, setNotes] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleAdd = () => {
        console.log('in handleClick');
        const newMedication = {
            name: name,
            indication: indication,
            dose: dose,
            frequency: frequency,
            route: route,
            notes: notes,
        }
        dispatch({
            type: 'ADD_MEDICATION',
            payload: newMedication
        })
        // clear inputs
        setName('');
        setIndication('');
        setDose('');
        setFrequency('');
        setRoute('');
        setNotes('');
        // navigate user to Medical Team List page after adding new provider
        history.push('/medication');
    }

    return (
        <Container maxWidth="sm">
            <p className="componentTitle">Add Medication</p>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
                <TextField
                    label="name" 
                    variant="outlined" 
                    fullWidth
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    label="indication" 
                    variant="outlined" 
                    fullWidth
                    value={indication}
                    onChange={(event) => setIndication(event.target.value)}
                />
                <TextField
                    label="dose" 
                    variant="outlined" 
                    fullWidth
                    value={dose}
                    onChange={(event) => setDose(event.target.value)}
                />
                <TextField
                    label="frequency" 
                    variant="outlined" 
                    fullWidth
                    value={frequency}
                    onChange={(event) => setFrequency(event.target.value)}
                />
                <TextField
                    label="route" 
                    variant="outlined" 
                    fullWidth
                    value={route}
                    onChange={(event) => setRoute(event.target.value)}
                />
                <TextField
                    label="notes" 
                    variant="outlined" 
                    fullWidth
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                />
                <Button           
                    variant="outlined" 
                    fullWidth
                    onClick={handleAdd}
                >
                    Save
                </Button>
            </Stack>
        </Container>
    )
}

export default MedicationAdd;