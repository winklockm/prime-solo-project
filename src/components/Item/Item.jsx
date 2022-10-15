import Grid from '@mui/material/Unstable_Grid2';

function Item({provider}) {



    return (
        <>
        {/* {provider.name} {provider.specialty} {provider.clinic} */}
        <Grid xs={4}>
            <p>{provider.name}</p>
        </Grid>
        <Grid xs={4}>
            <p>{provider.specialty}</p>
        </Grid>
        <Grid xs={4}>
            <p>{provider.clinic}</p>
        </Grid>
        </>
    )
}

export default Item;