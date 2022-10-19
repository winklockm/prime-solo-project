import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function InsuranceAdd() {
    const [provider, setProvider] = useState('');
    const [group, setGroup] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [plan, setPlan] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleAdd = () => {
        console.log('in handleAdd');
        const newInsurance = {
            provider: provider,
            group: group,
            id_number: idNumber,
            plan_name: plan,
            phone: phone,
            notes: notes,
        }
        dispatch({
            type: 'ADD_INSURANCE',
            payload: newInsurance
        })
        // clear inputs
        setProvider('');
        setGroup('');
        setIdNumber('');
        setPlan('');
        setPhone('');
        setNotes('');
        // navigate user to Insurance List page after adding new plan
        history.push('/insurance');
    }

    return (
        <Container maxWidth="sm">
            <p className="componentTitle">Add Insurance</p>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
                <div>
                    <TextField
                    label="provider" 
                    variant="outlined" 
                    size="small"
                    required
                    value={provider}
                    onChange={(event) => setProvider(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="group number" 
                    variant="outlined" 
                    size="small"
                    value={group}
                    onChange={(event) => setGroup(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="id number" 
                    variant="outlined" 
                    size="small"
                    value={idNumber}
                    onChange={(event) => setIdNumber(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="plan name" 
                    variant="outlined" 
                    size="small"
                    value={plan}
                    onChange={(event) => setPlan(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                    label="phone number" 
                    variant="outlined" 
                    size="small"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
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

export default InsuranceAdd;