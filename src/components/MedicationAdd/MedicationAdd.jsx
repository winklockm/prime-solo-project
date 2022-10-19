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
                    label="indication" 
                    variant="outlined" 
                    size="small"
                    value={indication}
                    onChange={(event) => setIndication(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="dose" 
                    variant="outlined" 
                    size="small"
                    value={dose}
                    onChange={(event) => setDose(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="frequency" 
                    variant="outlined" 
                    size="small"
                    value={frequency}
                    onChange={(event) => setFrequency(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="route" 
                    variant="outlined" 
                    size="small"
                    value={route}
                    onChange={(event) => setRoute(event.target.value)}
                    />
                </div>

                <div>
                    <TextField
                    label="notes" 
                    variant="outlined" 
                    size="small"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
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

export default MedicationAdd;