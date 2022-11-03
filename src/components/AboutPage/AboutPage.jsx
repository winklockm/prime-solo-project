import Container from '@mui/material/Container';

function AboutPage() {


    return (
        <Container maxWidth="sm">
        <div>
        <p>Technologies Used:</p>
        <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Saga</li>
            <li>Javascript</li>
            <li>Material UI</li>
            <li>HTML / CSS</li>
            <li>Node</li>
            <li>Sql</li>
            <li>Cloudinary</li>
        </ul>
        </div>
        <div>
        <p>Next Steps:</p>
        <ul>Allow multiple users to be tied to one patient account</ul>
        </div>
        <div>
        <p>Thanks To:</p>  
            <ul>My mom, who inspired this project and who continues to make an amazing recovery</ul>
            <ul>My sister, who took on additional caregiving while I completed the Prime program</ul>
            <ul>My husband, for too many things to list</ul>
            <ul>Prime Academy and especially the L'Engle cohort for all the support</ul>
        </div>
        </Container>
    )
}

export default AboutPage;