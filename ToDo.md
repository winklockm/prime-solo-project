## TO DO

- keep nav buttons highlighted
- protect routes!
- background image for login page?
- upload profile photo and display in header
- about page
- secret button to fill out form on click

***** FOR STRETCH GOALS *****
- Create patient table
- Create join table between user and patient tables
- in server module folder do a function to get the patientID using the userID:
    function getPatientID(userId) {
      pool.query('SELECT patient_id FROM user_patient WHERE user_id = $1', [userId])
        .then((dbRes) => {
          return dbRes.rows[0].patient_id
        })
    }
- In the router files in the router functions can call the above function from the server module folder



-installed:
npm install @mui/x-date-pickers
npm install moment
npm install dayjs