import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useHistory } from 'react-router-dom';
import './Appointment.css';

function Appointment({provider}) {

    const date = dayjs(provider.next_appointment).format("dddd, MMMM D, YYYY");
    const time = dayjs(provider.next_appointment).format("h:mm A");
    const history = useHistory();

    const handleClick = () => {
        console.log('in handleClick. Provider.id is:', provider.id);
        history.push(`/medicalteam/detail/${provider.id}`);
    } 
    return (
            <Card
            key={provider.id}
            // removing onClick for presentation
            // onClick={handleClick}
            >
                <Stack
                className='apptCard'
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
                    <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}>
                        <CalendarMonthIcon/> 
                        <div >
                            <Typography color="text.secondary">{date}</Typography>
                            <Typography color="text.secondary">{time}</Typography>
                            <Typography color="text.secondary">{provider.name}</Typography>
                        </div>
                     </Stack>  
                     {/* REMOVING FOR PRESENTATION
                     <ArrowForwardIosIcon color="secondary"/> */}
                    </Stack>
            </Card>
    )
}
export default Appointment;