import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';

function Appointment({provider}) {

    const date = dayjs(provider.next_appointment).format("dddd, MMMM D, YYYY");
    const time = dayjs(provider.next_appointment).format("h:mm A");
    
    return (
            <div>
            <Typography variant="h6">{date}</Typography>
            <Typography variant="h6">{time}</Typography>
            <Typography>{provider.name}</Typography>
            </div>      
    )
}
export default Appointment;