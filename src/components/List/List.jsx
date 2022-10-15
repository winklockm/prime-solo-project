import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Item from "../Item/Item";
import Stack from '@mui/material/Stack';

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
        <>
            <Container maxWidth="sm">
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <p className="componentTitle">This is the List component</p>

                    {medicalteam &&
                    <ul>
                        {medicalteam.map(provider => 
                        (<div key={provider.id}><Item key={provider.id} provider={provider}/></div>)
                        )}
                    </ul>
                    }

                    <Button
                    onClick={() => {history.push('/medicalteam/addnew');}} 
                    variant="outlined" size="small">Add New Provider</Button>
                </Stack>
            </Container>
        </>
    )
}

export default List;