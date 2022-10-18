import Grid from '@mui/material/Unstable_Grid2';
import {useHistory} from 'react-router-dom';
import './Item.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item({provider}) {

    const history = useHistory();

    const handleClick = () => {
    console.log('in handleClick. Provider.id is:', provider.id);
    history.push(`/medicalteam/detail/${provider.id}`);
} 

    return (
            <Card 
            sx={{ minWidth: 300 }} 
            key={provider.id}
            onClick={handleClick}
            >
                <CardContent>
                <Typography>{provider.name}</Typography>
                <Typography variant="body2" >{provider.specialty}</Typography>
                <Typography variant="body2" color="text.secondary">{provider.clinic}</Typography>
                </CardContent>
            </Card>
       
    )
}

export default Item;