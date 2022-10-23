## TO DO
X date stuff in detail --> CURRENTLY DISPLAYING NEXT APPT FOR LAST DETAIL CLICKED
X ReadOnly datetime picker
- keep nav buttons highlighted
- protect routes!
- background image for login page?
- upcoming appointments on overview page
X upload profile photo and display in header
X about page
X secret button to fill out form on click
X date stuff in add
- change color around next appointment field in add / detail
- when you click the phone number it opens up phone to place call?
- click patient portal to open it in new window
- create full width text boxes


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