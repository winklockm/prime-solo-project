import * as React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'

// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function MedicationDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const medicationToEdit = useSelector(store => store.medication.medicationDetailReducer);
    const [readOnly, setReadOnly] = useState(true);

    // for dialog alert upon delete
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        getMedication();
    }, [params.id])

    // fetch the medication
    const getMedication = () => {
        dispatch({
            type: 'FETCH_MEDICATION_DETAIL',
            payload: params.id
          })
    }

    // toggles input fields between edit and read only
    const toggleEdit = () => {
        setReadOnly(!readOnly);
    }

    // update the medication
    const handleSave = (e) => {
        e.preventDefault();
        // dispatch updated medication object to a saga function:
        dispatch({
            type: 'UPDATE_MEDICATION',
            payload: medicationToEdit
        })
        history.push(`/medication/detail/${params.id}`)
    }

    // cancel editing of medication
    const handleCancel = (e) => {
        e.preventDefault();
        // discard changes
        getMedication();
        // make fields read only
        toggleEdit();
    }
  
    const handleDelete = () => {
        console.log('in handleDelete');
        dispatch({
            type: 'DELETE_MEDICATION',
            payload: params.id
        })
        history.push(`/medication`)
    }

        // for dialog alert upon delete
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
        };

    // return to medical team list
    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/medication`);
    }

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

                {/* show dialog box when delete is clicked */}
                <Button onClick={handleClickOpen} size="small" variant="contained">Delete</Button>

                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    {/* confirm or cancel deletion */}
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to delete?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleDelete} autoFocus>
                            Delete
                        </Button>
                        </DialogActions>
                </Dialog>

                {medicationToEdit && 
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
                            value={medicationToEdit.name || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDICATION_NAME', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="indication"
                            size="small"
                            value={medicationToEdit.indication || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDICATION_INDICATION', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="dose"
                            size="small"
                            value={medicationToEdit.dose || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDICATION_DOSE', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="frequency"
                            size="small"
                            value={medicationToEdit.frequency || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDICATION_FREQUENCY', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="route"
                            size="small"
                            value={medicationToEdit.route || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDICATION_ROUTE', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            id="outlined-read-only-input"
                            label="notes"
                            size="small"
                            value={medicationToEdit.notes || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDICATION_NOTES', payload: e.target.value})}
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
    )
}

export default MedicationDetail;