import {useHistory} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
                        <PersonIcon />
                    
                    <div>
                <CardContent>
                <Typography>{provider.name}</Typography>
                <Typography variant="body2" >{provider.specialty}</Typography>
                <Typography variant="body2" color="text.secondary">{provider.clinic}</Typography>
                </CardContent>
                </div>
                </Stack>
                <ArrowForwardIosIcon color="secondary"/>
                </Stack>
            </Card>    
    )
}

export default MedicalTeamItem;