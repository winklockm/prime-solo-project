import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { DateTime } from 'luxon';

// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function MedicalTeamDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const medteamToEdit = useSelector(store => store.medicalteam.medicalteamDetailReducer);
    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        getMedTeam();
    }, [params.id])

    // fetch the medical provider
    const getMedTeam = () => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM_DETAIL',
            payload: params.id
          })
    }
    
    // toggles input fields between edit and read only
    const toggleEdit = () => {
      setReadOnly(!readOnly);
    }

    // update the medical provider
    const handleSave = (e) => {
      e.preventDefault();
      // dispatch updated medical team object to a saga function:
      dispatch({
        type: 'UPDATE_MEDTEAM',
        payload: medteamToEdit
      })
      history.push(`/medicalteam/detail/${params.id}`)
    }
  
    // cancel editing of medical provider
    const handleCancel = (e) => {
      e.preventDefault();
        // discard changes
        getMedTeam();
        // make fields read only
        toggleEdit();
    }

    const handleDelete = () => {
        console.log('in handleDelete');
        dispatch({
            type: 'DELETE_MED_TEAM',
            payload: params.id
        })
        history.push(`/medicalteam`)
    }

    // return to medical team list
    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/medicalteam`);
    }

    console.log('here is medteamToEdit:', medteamToEdit);

    return (
        <Container maxWidth="sm">
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >

                {/* show edit button while in read only mode, otherwise show save and cancel buttons while editing */}
                { readOnly ?
                    <Button onClick={toggleEdit} size="small" variant="contained">Edit</Button>
                :
                <div>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </div>
                }

                <Button onClick={handleDelete} size="small" variant="contained">Delete</Button>

                {medteamToEdit && 
                    <form>
                        <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        >
                            {/* text fields toggle between read only and edit */}
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="name"
                            size="small"
                            value={medteamToEdit.name || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NAME', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="specialty"
                            size="small"
                            value={medteamToEdit.specialty || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_SPECIALTY', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="clinic"
                            size="small"
                            value={medteamToEdit.clinic || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_CLINIC', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="phone"
                            size="small"
                            value={medteamToEdit.phone || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PHONE', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="patient portal"
                            size="small"
                            value={medteamToEdit.portal || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PORTAL', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="next appointment"
                            size="small"
                            value={medteamToEdit.next_appointment || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NEXT_APPOINTMENT', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="comments"
                            size="small"
                            value={medteamToEdit.comments || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
                            />
                        </Stack>
                    </form>
                }

                {/* disable back button while editing */}
                { readOnly ?
                    <Button onClick={handleBack} size="small" variant="contained">Back</Button>
                :
                <Button onClick={handleBack} size="small" variant="contained" disabled>Back</Button>
                }
                 
             </Stack>
        </Container>
    );
}

export default MedicalTeamDetail;