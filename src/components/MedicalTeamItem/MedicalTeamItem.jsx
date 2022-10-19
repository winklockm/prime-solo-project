import {useHistory} from 'react-router-dom';
import './MedicalTeamItem.css';

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function MedicalTeamItem({provider}) {
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

export default MedicalTeamItem;