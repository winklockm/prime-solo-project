
function Item({provider}) {



    return (
        <>
            <ul key={provider.id}>
                <li>{provider.name}</li>
                <li>{provider.specialty}</li>
                <li>{provider.clinic}</li>
            </ul>
        </>
    )
}

export default Item;