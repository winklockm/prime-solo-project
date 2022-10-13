import Item from "../Item/Item";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function List() {

    const history = useHistory();

    return (
        <>
            <Container maxWidth="sm">
                <p className="componentTitle">This is the List component</p>
                <Item />
                <Item />
                <Item />

                <Button
                onClick={() => {history.push('/medicalteam/addnew');}} 
                variant="outlined" size="small">Add New Provider</Button>

            </Container>
        </>
    )
}

export default List;