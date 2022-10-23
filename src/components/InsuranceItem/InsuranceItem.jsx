import {useHistory} from 'react-router-dom';

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NoteIcon from '@mui/icons-material/Note';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function InsuranceItem({plan}) {
    console.log('in insuranceItem and here it the prop passed in:', plan);
    const history = useHistory();

    const handleClick = () => {
        console.log('in handleClick. item.id is:', plan.id);
        history.push(`/insurance/detail/${plan.id}`);
    } 
    return (
        <Card 
        sx={{ minWidth: 300 }} 
        key={plan.id}
        onClick={handleClick}
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
                <NoteIcon />
            
            <div>
            <CardContent>
            <Typography>{plan.provider}</Typography>
            <Typography variant="body2">Group #: {plan.group}</Typography>
            <Typography variant="body2" color="text.secondary">ID #: {plan.id_number}</Typography>
            </CardContent>
            </div>
            </Stack>
                <ArrowForwardIosIcon color="secondary"/>
            </Stack>
        </Card>    
    )
}

export default InsuranceItem;