import {useHistory} from 'react-router-dom';

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
            <CardContent>
            <Typography>{plan.provider}</Typography>
            <Typography variant="body2" >{plan.group}</Typography>
            <Typography variant="body2" color="text.secondary">{plan.id_number}</Typography>
            </CardContent>
        </Card>    
    )
}

export default InsuranceItem;