import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Item from "../Item/Item";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import './MedicalTeamList.css';

function MedicalTeamList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const medicalteam = useSelector(store => store.medicalteam.medicalteamReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_MEDICAL_TEAM'
        })
    }, [])

    console.log('this is medicalteam from store:', medicalteam);

    return (
        <Container className='listContainer' maxWidth="sm">
            <Stack
                className='listStack'
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography>Medical Providers</Typography>
                {
                    medicalteam.length > 0 ?
                        <Stack spacing={2}>
                            {medicalteam.map(provider => (
                                <Item 
                                className='listItem'
                                key={provider.id} 
                                provider={provider}/>)
                            )}
                        </Stack>
                    :
                        <p>No medical providers</p>
                }
                
                <Button
                    onClick={() => {history.push('/medicalteam/addnew')}} 
                    variant="outlined" 
                    size="small"
                ><AddIcon/>
                    Add
                </Button>
            </Stack>
        </Container>
    )
}

export default MedicalTeamList;






// below works!
// import { useEffect } from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Item from "../Item/Item";
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Unstable_Grid2';
// import './List.css';

// function List() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const medicalteam = useSelector(store => store.medicalteam.medicalteamReducer);

//     useEffect(() => {
//         dispatch({
//             type: 'FETCH_MEDICAL_TEAM'
//         })
//     }, [])

//     console.log('this is medicalteam from store:', medicalteam);

//     return (
//         <Container className='listContainer' maxWidth="sm">
//             <Stack
//                 className='listStack'
//                 direction="column"
//                 justifyContent="center"
//                 alignItems="center"
//                 spacing={2}
//             >
//                 <p className="listComponentTitle">Medical Providers</p>

//                 {
//                     medicalteam.length > 0 ?
//                         <Grid 
//                         className='listGrid'
//                         container 
//                         alignItems="stretch"
//                         spacing={2}>
//                             {medicalteam.map(provider => (
//                                 <Item 
//                                 className='listItem'
//                                 key={provider.id} 
//                                 provider={provider}/>)
//                             )}
//                         </Grid>
//                     :
//                         <p>No medical providers</p>
//                 }
                
//                 <Button
//                     onClick={() => {history.push('/medicalteam/addnew')}} 
//                     variant="outlined" 
//                     size="small"
//                 >
//                     Add New Provider
//                 </Button>
//             </Stack>
//         </Container>
//     )
// }

// export default List;