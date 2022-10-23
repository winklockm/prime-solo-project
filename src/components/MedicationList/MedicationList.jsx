import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import MedicationItem from "../MedicationItem/MedicationItem";

// MUI Imports
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function MedicationList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const medications = useSelector(store => store.medication.medicationReducer);
    const user = useSelector((store) => store.user);
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_MEDICATIONS'
        })
    }, [])

    return (
        <Container maxWidth="sm">
            <Typography variant="h6" className='componentTitle'>{user.patient_name}'s Medications</Typography>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {
                    medications.length > 0 ?
                        <Stack spacing={2}>
                            {medications.map(medication => (
                                <MedicationItem
                                key={medication.id} 
                                medication={medication}/>)
                            )}
                        </Stack>
                    :
                        <p>No medications</p>
                }
                
                <Button
                    onClick={() => {history.push('/medication/add')}} 
                    variant="outlined" 
                    size="small"
                ><AddIcon/>
                    Add
                </Button>
            </Stack>
        </Container>
    )
}

export default MedicationList;