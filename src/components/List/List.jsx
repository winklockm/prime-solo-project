import Item from "../Item/Item";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

function List() {

    const history = useHistory();
    const dispatch = useDispatch();
    const medicalteam = useSelector(store => store.medicalteam);

    // TO DO:
    // on page load, dispatch GET_MED_TEAM to saga
    // in saga, run fetch all med providers function that sends GET to /medicalteam router
    // yield put SET_MED_TEAM to medicalteam reducer
    // subscribe this component to that reducer

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

                {medicalteam.map(provider => (
                        <Item key={provider.id} provider={provider} />                   
                    ))}



                {/* {medicalteam.map(provider => (
                    {provider.id}
                ))
                } */}



                {/* {medicalteam.map(provider => (
                    <Item key={provider.id}/>
                ))
            } */}

                    {/* {movies.map(movie => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={movie.id}>
                            <MovieItem key={movie.id} movie={movie} />
                        </Grid> 
                    ))} */}



                <Button
                onClick={() => {history.push('/medicalteam/addnew');}} 
                variant="outlined" size="small">Add New Provider</Button>

            </Container>
        </>
    )
}

export default List;