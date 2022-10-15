## TO DO

-Need location reducer

Reducers:
-User reducer
-Patient reducer


X Create medical team router
X From medicalteam saga POST to medical team router (on save)
X Add /medprovider/detail/:id to App
- Send back the ID that was just created
- Send user to details page FOR THE ITEM THAT WAS JUST CREATED!
- Details page uses a saga to get what was just created and renders on load





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