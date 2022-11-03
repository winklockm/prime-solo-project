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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';

function InsuranceDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const insuranceToEdit = useSelector(store => store.insurance.insuranceDetailReducer);
    const [readOnly, setReadOnly] = useState(true);

    // for dialog alert upon delete
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        getInsurance(); 
    }, [params.id])

    const getInsurance=() =>{
        dispatch({
            type: 'FETCH_INSURANCE_DETAIL',
            payload: params.id
          })
          return () => {
            dispatch({
              type: 'CLEAR_INSURANCE_DETAIL'
            })
          }
    }

     // toggles input fields between edit and read only
     const toggleEdit = () => {
        setReadOnly(!readOnly);
    }

    // update the insurance
    const handleSave = (e) => {
        e.preventDefault();
        // dispatch updated insurance object to a saga function:
        dispatch({
            type: 'UPDATE_INSURANCE',
            payload: insuranceToEdit
        })
        history.push(`/insurance/detail/${params.id}`)
    }

        // cancel editing of insurance
        const handleCancel = (e) => {
            e.preventDefault();
            // discard changes
            getInsurance()
            // make fields read only
            toggleEdit();
        }
      
        const handleDelete = () => {
            console.log('in handleDelete');
            dispatch({
                type: 'DELETE_INSURANCE',
                payload: params.id
            })
            history.push(`/insurance`)
        }

         // for dialog alert upon delete
        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };


    // return to insurance list
    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/insurance`);
    }

    return (
        <Container className='thisOne' maxWidth="sm">
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        >

{/* disable delete button while editing */}
{ readOnly ?
                    <Button onClick={handleClickOpen} size="small" variant="text"><DeleteForeverIcon sx={{ color: red[500] }}/></Button>
                :
                    <Button disabled onClick={handleClickOpen} size="small" variant="text"><DeleteForeverIcon sx={{ color: red[500] }}/></Button>
                }
                {/* show dialog box when delete is clicked */}
                
                {/* show edit button while in read only mode, otherwise show save and cancel buttons while editing */}
                { readOnly ?
                    <Button onClick={toggleEdit} size="small" variant="text"><EditIcon sx={{ color: blue[500] }}/></Button>
                :
                <div>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </div>
                }
                </Stack>
                {/* show dialog box when delete is clicked */}
                <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
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

            {insuranceToEdit && 
                <Container className='thisOne' maxWidth="sm" >
                    <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    >
                        {/* text fields toggle between read only and edit */}
                        <TextField
                        multiline
                        fullWidth
                        id="outlined-read-only-input"
                        label="insurance provider"
                        value={insuranceToEdit.provider || ''}
                        InputProps={{readOnly: readOnly}}
                        onChange={(e) => dispatch({type: 'EDIT_INSURANCE_PROVIDER', payload: e.target.value})}
                        />
                        <TextField
                        multiline
                        fullWidth
                        id="outlined-read-only-input"
                        label="group number"
                        value={insuranceToEdit.group || ''}
                        InputProps={{readOnly: readOnly}}
                        onChange={(e) => dispatch({type: 'EDIT_INSURANCE_GROUP', payload: e.target.value})}
                        />
                        <TextField
                        multiline
                        id="outlined-read-only-input"
                        label="id number"
                        fullWidth
                        value={insuranceToEdit.id_number || ''}
                        InputProps={{readOnly: readOnly}}
                        onChange={(e) => dispatch({type: 'EDIT_INSURANCE_ID_NUMBER', payload: e.target.value})}
                        />
                        <TextField
                        multiline
                        id="outlined-read-only-input"
                        label="plan name"
                        fullWidth
                        value={insuranceToEdit.plan_name || ''}
                        InputProps={{readOnly: readOnly}}
                        onChange={(e) => dispatch({type: 'EDIT_INSURANCE_PLAN_NAME', payload: e.target.value})}
                        />
                        <TextField
                        multiline
                        id="outlined-read-only-input"
                        label="phone number"
                        fullWidth
                        value={insuranceToEdit.phone || ''}
                        InputProps={{readOnly: readOnly}}
                        onChange={(e) => dispatch({type: 'EDIT_INSURANCE_PHONE', payload: e.target.value})}
                        />
                        <TextField
                        multiline
                        id="outlined-read-only-input"
                        label="notes"
                        fullWidth
                        value={insuranceToEdit.notes || ''}
                        InputProps={{readOnly: readOnly}}
                        onChange={(e) => dispatch({type: 'EDIT_INSURANCE_NOTES', payload: e.target.value})}
                        />
                    </Stack>
                </Container>
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

export default InsuranceDetail;