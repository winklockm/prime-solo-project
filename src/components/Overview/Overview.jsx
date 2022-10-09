import LogOutButton from '../LogOutButton/LogOutButton';

function Overview() {



    return (
        <>
            <p>This is the Overview component</p>
            <p>You have:</p>
            <p># medical providers</p>
            <p># medications</p>
            <p># insurance plans</p>
            <LogOutButton className="navLink" />
        </>
    )
}

export default Overview;