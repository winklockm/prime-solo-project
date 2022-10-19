import {useHistory} from 'react-router-dom';

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
            <CardContent>
            <Typography>{medication.name}</Typography>
            <Typography variant="body2" >{medication.dose}</Typography>
            <Typography variant="body2" color="text.secondary">{medication.frequency}</Typography>
            </CardContent>
        </Card>    
    )
}

export default MedicationItem;