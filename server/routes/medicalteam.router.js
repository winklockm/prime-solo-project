const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET BASIC INFO ABOUT ALL MEDICAL PROVIDERS
 */
router.get('/', (req, res) => {
  console.log('GET /medicalteam');
  const sqlText = `
  SELECT "id", "name", "specialty", "clinic" FROM "medprovider"
	ORDER BY "name"; 
  `
  pool.query(sqlText)
    .then(dbRes => {
      console.log('dbRes.rows is:', dbRes.rows);
      res.send(dbRes.rows)
    }) .catch(dbErr => {
      console.log('Error in /medicalteam', dbErr);
      res.sendStatus(500)
    })
});


/**
 * GET DETAILED INFO ABOUT ONE MEDICAL PROVIDER
 */
 router.get('/:id', (req, res) => {
  console.log('GET /medicalteam/:id');
  const sqlText = `
  SELECT * FROM "medprovider"
	  WHERE "id"=$1; 
  `
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
    .then(dbRes => {
      console.log('dbRes.rows[0] is:', dbRes.rows[0]);
      res.send(dbRes.rows[0])
    }) .catch(dbErr => {
      console.log('Error in /medicalteam/:id:', dbErr);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let newMedProvider = req.body;
    console.log('Adding new med provider. newMedProvider is:', newMedProvider);

    let queryText = `
    INSERT INTO "medprovider" ("name", "specialty", "clinic", "phone", "portal", "next_appointment", "comments")
	    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    let queryValues = [newMedProvider.name, newMedProvider.specialty, newMedProvider.clinic, newMedProvider.phone, newMedProvider.portal, newMedProvider.nextAppointment, newMedProvider.comments];

    pool.query(queryText, queryValues)
        .then(() => {res.sendStatus(201);})
        .catch(dbErr => {
            console.log('Error adding new medical provider:', dbErr);
            res.sendStatus(500);
        });
});

module.exports = router;
