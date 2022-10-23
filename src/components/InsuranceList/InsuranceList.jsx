import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import InsuranceItem from "../InsuranceItem/InsuranceItem";

// MUI Imports
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function InsuranceList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const insurance = useSelector(store => store.insurance.insuranceReducer);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({
            type: 'FETCH_INSURANCE'
        })
    }, [])

    console.log('in InsuranceList and insurance from store is:', insurance);
    return (
        <>
        <Container maxWidth="sm">
        <Typography variant="h6" className='componentTitle'>{user.patient_name}'s Insurance</Typography>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
              
                {
                    insurance.length > 0 ?
                        <Stack spacing={2}>
                            {insurance.map(plan => (
                                <InsuranceItem
                                key={plan.id} 
                                plan={plan}/>)
                            )}
                        </Stack>
                    :
                        <p>No insurance</p>
                }
                
                <Button
                    onClick={() => {history.push('/insurance/add')}} 
                    variant="outlined" 
                    size="small"
                ><AddIcon/>
                    Add
                </Button>
            </Stack>
        </Container>
        </>
    )
}

export default InsuranceList;