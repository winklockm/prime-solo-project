import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Item from "../Item/Item";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

function List() {
    const dispatch = useDispatch();
    const history = useHistory();
    const medicalteam = useSelector(store => store.medicalteam);

    useEffect(() => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM'
        })
    }, [])

    console.log('this is medicalteam from store:', medicalteam);

    return (
        <Container maxWidth="sm">
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <p className="componentTitle">This is the List component</p>

                {/* {
                    medicalteam.length > 0 ?
                        <ul>
                            {medicalteam.map(provider => (
                                <Item key={provider.id} provider={provider}/>)
                            )}
                        </ul>
                    :
                        <p>No medical providers</p>
                } */}



{
                    medicalteam.length > 0 ?
                        <Grid container spacing={2}>
                            {medicalteam.map(provider => (
                                <Item key={provider.id} provider={provider}/>)
                            )}
                        </Grid>
                    :
                        <p>No medical providers</p>
                }
                
                <Button
                    onClick={() => {history.push('/medicalteam/addnew')}} 
                    variant="outlined" 
                    size="small"
                >
                    Add New Provider
                </Button>
            </Stack>



            
        </Container>
    )
}

export default List;