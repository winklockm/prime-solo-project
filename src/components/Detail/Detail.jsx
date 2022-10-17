import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function EditDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const medteamToEdit = useSelector(store => store.medicalteam.medicalteamDetailReducer);
    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
      dispatch({
        type: 'FETCH_MEDICAL_TEAM_DETAIL',
        payload: params.id
      })
    }, [params.id])
  
  
    const handleConfirm = (e) => {
      e.preventDefault();
      // dispatch updated medical team object to a saga function:
      dispatch({
        type: 'UPDATE_MEDTEAM',
        payload: medteamToEdit
      })
      history.push(`/medicalteam/detail/${params.id}`)
    }
  
    const handleCancel = (e) => {
      e.preventDefault();
      history.push('/')
    }

    const toggleEdit = () => {
      // set state
      setReadOnly(!readOnly);
    }

console.log('here is medteamToEdit:', medteamToEdit);

    return (

        <>
        <Button onClick={toggleEdit} size="small" variant="contained">
          {readOnly ?
            <p>Make it Editable</p>
          :
            <p>Make it ReadOnly</p>
          }
        </Button>

        {medteamToEdit && 
        
        <form>

        <TextField
          id="outlined-read-only-input"
          label="name"
          size="small"
          value={medteamToEdit.name || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NAME', payload: e.target.value})}
        />
      
        <div>
        <TextField
          id="outlined-read-only-input"
          label="specialty"
          size="small"
          value={medteamToEdit.specialty || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_SPECIALTY', payload: e.target.value})}
        />
        </div>
        <TextField
          id="outlined-read-only-input"
          label="clinic"
          size="small"
          value={medteamToEdit.clinic || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_CLINIC', payload: e.target.value})}
        />
        <TextField
          id="outlined-read-only-input"
          label="phone"
          size="small"
          value={medteamToEdit.phone || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PHONE', payload: e.target.value})}
        />
        <TextField
          id="outlined-read-only-input"
          label="patient portal"
          size="small"
          value={medteamToEdit.portal || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PORTAL', payload: e.target.value})}
        />
        <TextField type="text"
          id="outlined-read-only-input"
          label="next appointment"
          size="small"
          value={medteamToEdit.next_appointment || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NEXT_APPOINTMENT', payload: e.target.value})}
        />
        <TextField type="text"
          id="outlined-read-only-input"
          label="comments"
          size="small"
          value={medteamToEdit.comments || ''}
          InputProps={{readOnly: readOnly}}
          onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
        />
        <button onClick={handleConfirm}>Confirm Changes</button>
        <button onClick={handleCancel}>Cancel</button>
        </form>
        }
        </>
    );
}

export default EditDetail;








// BELOW WORKS

// import { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector} from 'react-redux';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// function Detail() {
//     const params = useParams();
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const medicalProvider = useSelector(store => store.medicalteam.medicalteamDetailReducer)
//     const medicalProviderId = params.id

//     const comments = useState('');

//     useEffect(() => {
//         dispatch({
//             type: 'FETCH_MEDICAL_TEAM_DETAIL',
//             payload: medicalProviderId
//         })
//     }, [])

//     const handleEdit = () => {
//         console.log('in handleEdit');
//         history.push(`/medicalteam/detail/${medicalProviderId}/edit`);
//     }

//     const handleBack = () => {
//         console.log('in handleBack');
//         history.push(`/medicalteam`);
//     }

// console.log('this is medicalProvider from store:', medicalProvider)
//     return (
//         <>
//             {medicalProvider ?
//                 <div>
//                     <p>{medicalProvider.name}</p>
//                     <p>{medicalProvider.specialty}</p>
//                     <p>{medicalProvider.clinic}</p>
//                     <p>{medicalProvider.phone}</p>
//                     <p>{medicalProvider.portal}</p>
//                     <p>{medicalProvider.next_appointment}</p>
//                     <p>{medicalProvider.comments}</p>
//                 </div>
//             :
//                 <p>No details</p>
//             }


//             {/* Button to navigate to edit page
//             <div>
//                 <Button onClick={handleEdit} size="small" variant="contained">Edit</Button>
//             </div> */}

//             <div>
//                 <Button onClick={handleBack} size="small" variant="contained">Back</Button>
//             </div>
//         </>
//     )
// }

// export default Detail;