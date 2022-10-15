import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Item from "../Item/Item";

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
                <p className="componentTitle">This is the List component</p>

                {medicalteam &&
                <ul>
                    {medicalteam.map(provider => 
                    (<div key={provider.id}><Item key={provider.id} provider={provider}/></div>)
                    )}
                </ul>
                }

                {/* OMG THIS WORKS */}
                {/* {medicalteam &&
                <ul>
                    {medicalteam.map(provider => 
                    (<li key={provider.id}>{provider.name} has a specialty of {provider.specialty} and is from {provider.clinic}</li>)
                    )}
                </ul>
                } */}


                

                <Button
                onClick={() => {history.push('/medicalteam/addnew');}} 
                variant="outlined" size="small">Add New Provider</Button>

            </Container>
        </>
    )
}

export default List;