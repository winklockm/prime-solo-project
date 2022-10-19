import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import MedicalTeamItem from "../MedicalTeamItem/MedicalTeamItem";
import './MedicalTeamList.css';

// MUI Imports
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function MedicalTeamList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const medicalteam = useSelector(store => store.medicalteam.medicalteamReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM'
        })
    }, [])

    console.log('this is medicalteam from store:', medicalteam);

    return (
        <Container className='listContainer' maxWidth="sm">
            <Stack
                className='listStack'
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography>Medical Providers</Typography>
                {
                    medicalteam.length > 0 ?
                        <Stack spacing={2}>
                            {medicalteam.map(provider => (
                                <MedicalTeamItem 
                                className='listItem'
                                key={provider.id} 
                                provider={provider}/>)
                            )}
                        </Stack>
                    :
                        <p>No medical providers</p>
                }
                
                <Button
                    onClick={() => {history.push('/medicalteam/addnew')}} 
                    variant="outlined" 
                    size="small"
                ><AddIcon/>
                    Add
                </Button>
            </Stack>
        </Container>
    )
}

export default MedicalTeamList;