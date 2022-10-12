import Item from "../Item/Item";
import Container from '@mui/material/Container';

function List() {



    return (
        <>
            <Container maxWidth="sm">
                <p className="componentTitle">This is the List component</p>
                <Item />
                <Item />
                <Item />
            </Container>
        </>
    )
}

export default List;