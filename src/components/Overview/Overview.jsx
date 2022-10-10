import LogOutButton from '../LogOutButton/LogOutButton';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import './Overview.css';

function Overview() {
    const user = useSelector((store) => store.user);

console.log('user is', user)
    return (
        <>
            <p className='welcome'>Welcome, {user.username}!</p>
            <Container className='componentBox' maxWidth="sm">
                <Stack spacing={2}>
                    <p className='componentTitle'>This is the Overview component</p>
                    <p>You have:</p>
                    <p># medical providers</p>
                    <p># medications</p>
                    <p># insurance plans</p>
                    <LogOutButton />
                </Stack>
            </Container>
        </>
    )
}

export default Overview;