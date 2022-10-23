// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory, useParams } from 'react-router';
// import './MedicalTeamDetail.css';
// // MUI Imports
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import dayjs from 'dayjs';
// import Typography from '@mui/material/Typography';
// // MUI Icons
// import PersonIcon from '@mui/icons-material/Person';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EditIcon from '@mui/icons-material/Edit';
// import ClearIcon from '@mui/icons-material/Clear';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// function MedicalTeamDetail() {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const provider = useSelector(store => store.medicalteam.medicalteamDetailReducer);
//     // for dialog alert upon delete
//     const [open, setOpen] = React.useState(false);
//     const badDate = provider.next_appointment
//     const badTime = provider.next_appointment
//     const goodDate = dayjs(badDate).format("dddd, MMMM D, YYYY");
//     const goodTime = dayjs(badTime).format("h:mm A");

//     useEffect(() => {
//         dispatch({
//             type: 'FETCH_MEDICAL_TEAM_DETAIL',
//             payload: params.id
//           })
//     }, [params.id])

//     // toggles input fields between edit and read only
//     const toggleEdit = () => {
//       console.log('nav to edit')
//       history.push(`/medicalteam/detail/${params.id}/edit`)
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
//         <Card>
//             <Dialog
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
//                 <CardContent>

//                     <div className='one'>
//                         <Typography variant="h6">{provider.name}</Typography>
    
//                     <Typography variant="body1" color="text.secondary">{provider.specialty}</Typography>
//                     <Typography variant="body2" color="text.secondary">{provider.clinic}</Typography>
//                     </div>
//                     <div className='one'>
//                     <Typography variant="body1">{provider.phone}</Typography>
//                     <a href={provider.portal} target="_blank"> {provider.portal}</a>
//                     </div>
//                     <div className='one'>
//                     <Typography variant="subtitle1">Notes:</Typography>
//                     <Typography variant="body1" color="text.secondary">{provider.comments}</Typography>
//                     </div>
//                     <div className='one'>
//                     <Typography variant="subtitle1">Next Appointment:</Typography>
//                     <Typography variant="body1" color="text.secondary">{goodDate}</Typography>
//                     <Typography variant="body1" color="text.secondary">{goodTime}</Typography>
//                     </div>
                   
//                 </CardContent>
                
//                 <CardActions>
//                     <Button onClick={toggleEdit} size="small" variant="outlined"><EditIcon /></Button>
//                     <Button onClick={handleClickOpen} size="small" variant="outlined"><ClearIcon /></Button>
//                 </CardActions>
//              </Card>
//              <div className='medteamback' >
//             <Button  onClick={handleBack} size="small" variant="contained">Back</Button>
//             </div>
//          </Container>
//     );
// }

// export default MedicalTeamDetail;





















import * as React from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
// MUI Imports
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
// import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { blue } from '@mui/material/colors';

import './MedicalTeamDetail.css';

function MedicalTeamDetail() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const medteamToEdit = useSelector(store => store.medicalteam.medicalteamDetailReducer);
    const [readOnly, setReadOnly] = useState(true);
    // for dialog alert upon delete
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        getMedTeam()
    }, [params.id])

    const getMedTeam = () => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM_DETAIL',
            payload: params.id
          })
          return () => {
            dispatch({
              type: 'CLEAR_MEDICAL_TEAM_DETAIL'
            })
          }
    }

    // toggles input fields between edit and read only
    const toggleEdit = () => {
      setReadOnly(!readOnly);
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
        history.push(`/medicalteam`);
    }

    return (
        <Container className='listContainer' maxWidth="sm">
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

                {medteamToEdit && 
                <Container maxWidth="sm" className='thisOne'>
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
                            label="name"
                            value={medteamToEdit.name || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_NAME', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="specialty"
                            value={medteamToEdit.specialty || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_SPECIALTY', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="clinic"
                            value={medteamToEdit.clinic || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_CLINIC', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="phone"
                            value={medteamToEdit.phone || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PHONE', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="patient portal"
                            value={medteamToEdit.portal || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_PORTAL', payload: e.target.value})}
                            />
                            <TextField
                            multiline
                            fullWidth
                            id="outlined-read-only-input"
                            label="comments"
                            value={medteamToEdit.comments || ''}
                            InputProps={{readOnly: readOnly}}
                            onChange={(e) => dispatch({type: 'EDIT_MEDTEAM_COMMENTS', payload: e.target.value})}
                            />
                            { readOnly ?
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        readOnly
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
                            :
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
                        }
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
             <Stack
             direction="row"
             justifyContent="flex-start"
             alignItems="center"
             spacing={2}>
          
                
             </Stack>
        </Container>
    );
}

export default MedicalTeamDetail;