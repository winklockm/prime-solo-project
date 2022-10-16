import Grid from '@mui/material/Unstable_Grid2';
import {useHistory} from 'react-router-dom';

function Item({provider}) {

    const history = useHistory();

const handleClick = () => {
    console.log('in handleClick. Provider.id is:', provider.id);
    history.push(`/medicalteam/detail/${provider.id}`);
}

    return (
        <>
        <Grid
        container
        justifyContent='center'
        className='thumbnailPoster'
        key={provider.id}
        onClick={handleClick}
        >
            <Grid xs={4}>
                <p>{provider.name}</p>
            </Grid>
            <Grid xs={4}>
                <p>{provider.specialty}</p>
            </Grid>
            <Grid xs={4}>
                <p>{provider.clinic}</p>
            </Grid>
        </Grid>
        </>
    )
}

export default Item;