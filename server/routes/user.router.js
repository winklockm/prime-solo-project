const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const patient = req.body.patientName;
  const photo = req.body.patientPhoto;
// FIRST QUERY ADDS PATIENT
  const patientQueryText = `INSERT INTO "patient" ("name", "photo")
    VALUES ($1, $2) RETURNING id;`;
    pool
      .query(patientQueryText, [patient, photo])
      .then(result => {
        console.log('patient id is:', result.rows[0].id)

        const createdPatientId = result.rows[0].id

        // SECOND QUERY ADDS USER
        const userQueryText = `INSERT INTO "user" (username, password, patient_id)
        VALUES ($1, $2, $3);`;

        pool.query(userQueryText, [username, password, createdPatientId])
        .then(result => {
          res.sendStatus(201)
        }).catch(error => {
          // catch for second query
          console.log('error in add user query:', error);
          res.sendStatus(500)
        })
      }).catch(error => {
        console.log('error in add patient query:', error);
          res.sendStatus(500)
      })






  // FIRST QUERY ADDS USER
  // const userQueryText = `INSERT INTO "user" (username, password)
  //   VALUES ($1, $2) RETURNING id`;
  // pool
  //   .query(userQueryText, [username, password])
  //   // .then(() => res.sendStatus(201))
  //   .then(result => {
  //     console.log('New user id is:', result.rows[0].id) // USER ID RECEIVED

  //     const createdUserId = result.rows[0].id

  //   // SECOND QUERY ADDS PATIENT
  //   const patientQueryText = `INSERT INTO "patient" ("name", "photo")
  //     VALUES ($1, $2);`
  //     pool
  //       .query(patientQueryText, )
  //   })
  

    // .catch((err) => {
    //   console.log('User registration failed: ', err);
    //   res.sendStatus(500);
    // });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
