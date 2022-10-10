import LogOutButton from '../LogOutButton/LogOutButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function Overview() {



    return (
        <>

            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <p>This is the Overview component</p>
                    <p>You have:</p>
                    <p># medical providers</p>
                    <p># medications</p>
                    <p># insurance plans</p>
                    <LogOutButton className="navLink" />
                </Stack>


            </Container>

        </>
    )
}

export default Overview;