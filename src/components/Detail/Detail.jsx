import {useParams, useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';

function Detail() {

    const params = useParams();
    const history = useHistory();

    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/medicalteam`);
    }

    return (
        <>
            <p>This is the Detail component</p>
            <div>
                <Button onClick={handleBack} size="small" variant="contained">Back</Button>
            </div>
        </>
    )
}

export default Detail;