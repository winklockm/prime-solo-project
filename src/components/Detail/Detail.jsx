import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';

function Detail() {

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const medicalProvider = useSelector(store => store.medicalteam.medicalteamDetailReducer)

    useEffect(() => {
        const medicalProviderId = params.id
        dispatch({
            type: 'FETCH_MEDICAL_TEAM_DETAIL',
            payload: medicalProviderId
        })
    }, [])


    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/medicalteam`);
    }

console.log('this is medicalProvider from store:', medicalProvider)
    return (
        <>
            {medicalProvider ?
                <div>
                    <p>{medicalProvider.name}</p>
                    <p>{medicalProvider.specialty}</p>
                    <p>{medicalProvider.clinic}</p>
                    <p>{medicalProvider.phone}</p>
                    <p>{medicalProvider.portal}</p>
                    <p>{medicalProvider.next_appointment}</p>
                    <p>{medicalProvider.comments}</p>
                </div>
            :
                <p>No details</p>
            }
            
            <div>
                <Button onClick={handleBack} size="small" variant="contained">Back</Button>
            </div>
        </>
    )
}

export default Detail;