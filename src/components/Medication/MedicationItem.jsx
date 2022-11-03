import {useHistory} from 'react-router-dom';

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MedicationIcon from '@mui/icons-material/Medication';
import Stack from '@mui/material/Stack';
function MedicationItem({medication}) {
    const history = useHistory();

    const handleClick = () => {
        console.log('in handleClick. Provider.id is:', medication.id);
        history.push(`/medication/detail/${medication.id}`);
    } 

    return (
        <Card 
        sx={{ minWidth: 300 }} 
        key={medication.id}
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
                        <MedicationIcon />
                    
                    <div>
            <CardContent>
            <Typography>{medication.name}</Typography>
            <Typography variant="body2" >{medication.dose}</Typography>
            <Typography variant="body2" color="text.secondary">{medication.frequency}</Typography>
            </CardContent>
            </div>
            </Stack>
                <ArrowForwardIosIcon color="secondary"/>
                </Stack>
        </Card>    
    )
}

export default MedicationItem;