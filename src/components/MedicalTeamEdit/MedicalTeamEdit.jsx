import * as React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function MedicalTeamEdit() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const medteamToEdit = useSelector(store => store.medicalteam.medicalteamDetailReducer);

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

    const handleChangeAppointment = (value) => {
        console.log('here is the date I am changing the appt to:', value);
        dispatch({
            type: 'EDIT_MEDTEAM_NEXT_APPOINTMENT', 
            payload: value})
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
  
    // return to medical team list
    const handleBack = () => {
        console.log('in handleBack');
        history.push(`/medicalteam`);
    }

    return (
        <Container maxWidth="sm">
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                {medteamToEdit && 
                <Container maxWidth="sm" className='thisOne'>
                        <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        >
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="name"
                            value={medteamToEdit.name || ''}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NAME', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="specialty"
                            value={medteamToEdit.specialty || ''}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_SPECIALTY', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="clinic"
                            value={medteamToEdit.clinic || ''}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_CLINIC', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="phone"
                            value={medteamToEdit.phone || ''}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PHONE', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="patient portal"
                            value={medteamToEdit.portal || ''}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PORTAL', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="comments"
                            value={medteamToEdit.comments || ''}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
                            />
                    
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    fullWidth
                                    value={medteamToEdit.next_appointment}
                                    onChange={handleChangeAppointment}
                                    label="next appointment"
                                    size="small"
                                    renderInput={(params) => {
                                        return <TextField {...params} />;
                                    }}
                                />
                            </LocalizationProvider>
                        </Stack>
                    </Container>
                }

                <div>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleBack}>Cancel</Button>
                </div>
               
             </Stack>
        </Container>
    );
}

export default MedicalTeamEdit;








// import * as React from 'react';
// import { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useHistory, useParams } from 'react-router'
// // MUI Imports
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import EditIcon from '@mui/icons-material/Edit';
// import ClearIcon from '@mui/icons-material/Clear';
// // import dayjs from 'dayjs';
// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// // import './MedicalTeamDetail.css';

// function MedicalTeamEdit() {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const medteamToEdit = useSelector(store => store.medicalteam.medicalteamDetailReducer);
//     const [readOnly, setReadOnly] = useState(true);
//     // for dialog alert upon delete
//     const [open, setOpen] = React.useState(false);

//     useEffect(() => {
//         getMedTeam();
//     }, [params.id])

//     // fetch the medical provider
//     const getMedTeam = () => {
//         dispatch({
//             type: 'FETCH_MEDICAL_TEAM_DETAIL',
//             payload: params.id
//           })
//     }

//     // toggles input fields between edit and read only
//     const toggleEdit = () => {
//       setReadOnly(!readOnly);
//     }

//     const handleChangeAppointment = (value) => {
//         console.log('here is the date I am changing the appt to:', value);
//         dispatch({
//             type: 'EDIT_MEDTEAM_NEXT_APPOINTMENT', 
//             payload: value})
//         } 

//     // update the medical provider
//     const handleSave = (e) => {
//       e.preventDefault();
//       // dispatch updated medical team object to a saga function:
//       dispatch({
//         type: 'UPDATE_MEDTEAM',
//         payload: medteamToEdit
//       })
//       history.push(`/medicalteam/detail/${params.id}`)
//     }
  
//     // cancel editing of medical provider
//     const handleCancel = (e) => {
//       e.preventDefault();
//         // discard changes
//         getMedTeam();
//         // make fields read only
//         toggleEdit();
//     }

//     const handleDelete = () => {
//         console.log('in handleDelete');
//         dispatch({
//             type: 'DELETE_MED_TEAM',
//             payload: params.id
//         })
//         history.push(`/medicalteam`)
//     }

//     // for dialog alert upon delete
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     // return to medical team list
//     const handleBack = () => {
//         console.log('in handleBack');
//         history.push(`/medicalteam`);
//     }

//     return (
//         <Container maxWidth="sm">
//             <Stack
//             direction="row"
//             justifyContent="flex-end"
//             alignItems="center"
//             spacing={2}
//             >
//             {/* show edit button while in read only mode, otherwise show save and cancel buttons while editing */}
//                 { readOnly ?
//                     <Button onClick={toggleEdit} size="small" variant="contained"><EditIcon /></Button>
//                 :
//                 <div>
//                     <Button onClick={handleSave}>Save</Button>
//                     <Button onClick={handleCancel}>Cancel</Button>
//                 </div>
//                 }

//                 </Stack>
//             <Stack
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             spacing={2}
//             >
                

//                 <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//                 >
//                     {/* confirm or cancel deletion */}
//                     <DialogTitle id="alert-dialog-title">
//                         {"Are you sure you want to delete?"}
//                     </DialogTitle>
//                     <DialogActions>
//                         <Button onClick={handleClose}>Cancel</Button>
//                         <Button onClick={handleDelete} autoFocus>
//                             Delete
//                         </Button>
//                         </DialogActions>
//                 </Dialog>

//                 {medteamToEdit && 
//                 <Container maxWidth="sm" className='thisOne'>
//                         <Stack
//                         direction="column"
//                         justifyContent="center"
//                         alignItems="center"
//                         spacing={2}
//                         >
//                             {/* text fields toggle between read only and edit */}
//                             <TextField
//                             multiline
//                             fullWidth
//                             id="outlined-read-only-input"
//                             label="name"
//                             value={medteamToEdit.name || ''}
//                             InputProps={{readOnly: readOnly}}
//                             onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NAME', payload: e.target.value})}
//                             />
//                             <TextField
//                             multiline
//                             fullWidth
//                             id="outlined-read-only-input"
//                             label="specialty"
//                             value={medteamToEdit.specialty || ''}
//                             InputProps={{readOnly: readOnly}}
//                             onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_SPECIALTY', payload: e.target.value})}
//                             />
//                             <TextField
//                             multiline
//                             fullWidth
//                             id="outlined-read-only-input"
//                             label="clinic"
//                             value={medteamToEdit.clinic || ''}
//                             InputProps={{readOnly: readOnly}}
//                             onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_CLINIC', payload: e.target.value})}
//                             />
//                             <TextField
//                             multiline
//                             fullWidth
//                             id="outlined-read-only-input"
//                             label="phone"
//                             value={medteamToEdit.phone || ''}
//                             InputProps={{readOnly: readOnly}}
//                             onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PHONE', payload: e.target.value})}
//                             />
//                             <TextField
//                             multiline
//                             fullWidth
//                             id="outlined-read-only-input"
//                             label="patient portal"
//                             value={medteamToEdit.portal || ''}
//                             InputProps={{readOnly: readOnly}}
//                             onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PORTAL', payload: e.target.value})}
//                             />
//                             <TextField
//                             multiline
//                             fullWidth
//                             id="outlined-read-only-input"
//                             label="comments"
//                             value={medteamToEdit.comments || ''}
//                             InputProps={{readOnly: readOnly}}
//                             onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
//                             />
//                             { readOnly ?
//                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DateTimePicker
//                                         readOnly
//                                         fullWidth
//                                         value={medteamToEdit.next_appointment}
//                                         onChange={handleChangeAppointment}
//                                         label="next appointment"
//                                         size="small"
//                                         renderInput={(params) => {
//                                             return <TextField {...params} />;
//                                         }}
//                                     />
//                                 </LocalizationProvider>
//                             :
//                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DateTimePicker
//                                     fullWidth
//                                     value={medteamToEdit.next_appointment}
//                                     onChange={handleChangeAppointment}
//                                     label="next appointment"
//                                     size="small"
//                                     renderInput={(params) => {
//                                         return <TextField {...params} />;
//                                     }}
//                                     />
//                                 </LocalizationProvider>                      
//                         }
//                         </Stack>
//                     </Container>
//                 }

//                 {/* disable back button while editing */}
//                 { readOnly ?
//                     <Button onClick={handleBack} size="small" variant="contained">Back</Button>
//                 :
//                 <Button onClick={handleBack} size="small" variant="contained" disabled>Back</Button>
//                 }

                 

//              </Stack>
//              <Stack
//              direction="row"
//              justifyContent="flex-start"
//              alignItems="center"
//              spacing={2}>
//                 {/* disable delete button while editing */}
//                 { readOnly ?
//                     <Button onClick={handleClickOpen} size="small" variant="contained"><ClearIcon /></Button>
//                 :
//                 <Button disabled onClick={handleClickOpen} size="small" variant="contained"><ClearIcon /></Button>
//                 }
//                 {/* show dialog box when delete is clicked */}
                
//              </Stack>
//         </Container>
//     );
// }

// export default MedicalTeamEdit;