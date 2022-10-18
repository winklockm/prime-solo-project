import Grid from '@mui/material/Unstable_Grid2';
import {useHistory} from 'react-router-dom';
import './Item.css';
import Container from '@mui/material/Container';

function Item({provider}) {

    const history = useHistory();

const handleClick = () => {
    console.log('in handleClick. Provider.id is:', provider.id);
    history.push(`/medicalteam/detail/${provider.id}`);
} 

    return (
        <Container className='itemContainer' maxWidth="sm">
        <Grid
        spacing={0}
        className='itemGrid'
        container
        alignItems="stretch"
        justifyContent='center'
        key={provider.id}
        onClick={handleClick}
        >
            <Grid 
            className='itemName'
            xs={4}>
                <p>{provider.name}</p>
            </Grid>
            <Grid 
            className='itemSpecialty'
            xs={4}>
                <p>{provider.specialty}</p>
            </Grid>
            <Grid 
            className='itemClinic'
            xs={4}>
                <p>{provider.clinic}</p>
            </Grid>
        </Grid>
        </Container>
    )
}

export default Item;