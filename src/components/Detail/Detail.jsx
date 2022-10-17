
// Below is NOT working:

// import { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector} from 'react-redux';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// function Detail() {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const medicalProvider = useSelector(store => store.medicalteam.medicalteamDetailReducer)

//     // const [readOnly, setReadOnly] = useState(true);

//     useEffect(() => {
//         dispatch({
//             type: 'FETCH_MEDICAL_TEAM_DETAIL',
//             payload: params.id
//         })
//     }, [params.id])

//     // const toggleEdit = () => {
//     //     console.log('clicked button');
//     //     // set state
//     //     setReadOnly(!readOnly);
//     // }

//     return (
//         <>            
//             <p>TRYING SOMETHING:</p>

//             {readOnly ?

//             <input type="text"
//             readOnly
//             value={medicalProvider.comments || ''}
//             // onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
//             />
//                 // <TextField
//                 //     id="outlined-read-only-input"
//                 //     label="Comments"
//                 //     size="small"
//                 //     value={medicalProvider.comments || ''}
//                 //     InputProps={{
//                 //         readOnly: true,
//                 //     }}
//                 //     // onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NAME', payload: e.target.value})}
//                 // />
//             :
//                 // <TextField
//                 //     id="outlined-read-only-input"
//                 //     label="Comments"
//                 //     size="small"
//                 //     value={medicalProvider.comments || ''}
//                 //     InputProps={{
//                 //         readOnly: false,
//                 //     }}
//                 //     onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
//                 // />
//                 <input type="text"
//                 value={medicalProvider.comments || ''}
//                 onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
//                 />
//             }          

//             <Button onClick={toggleEdit} size="small" variant="contained">
//                 {readOnly ?
//                     <p>Make it Editable</p>
//                 :
//                 <p>Make it ReadOnly</p>
//                 }
//             </Button>

//         </>
//     )
// }

// export default Detail;














// BELOW WORKS

import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Detail() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const medicalProvider = useSelector(store => store.medicalteam.medicalteamDetailReducer)
    const medicalProviderId = params.id

    const comments = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM_DETAIL',
            payload: medicalProviderId
        })
    }, [])

    const handleEdit = () => {
        console.log('in handleEdit');
        history.push(`/medicalteam/detail/${medicalProviderId}/edit`);
    }

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


            {/* Button to navigate to edit page */}
            <div>
                <Button onClick={handleEdit} size="small" variant="contained">Edit</Button>
            </div>

            <div>
                <Button onClick={handleBack} size="small" variant="contained">Back</Button>
            </div>
        </>
    )
}

export default Detail;