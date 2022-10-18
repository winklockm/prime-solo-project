const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET BASIC INFO ABOUT ALL MEDICAL PROVIDERS
 */
router.get('/', (req, res) => {
  console.log('GET /medicalteam');
  console.log('this is req.user.patient_id:', req.user.patient_id);
  const sqlText = `
    SELECT "id", "name", "specialty", "clinic" FROM "medprovider"
      WHERE "patient_id"=$1
        ORDER BY "name";`
  ;
  const sqlValues = [req.user.patient_id]
  pool.query(sqlText, sqlValues)
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
 * POST - ADD MEDICAL PROVIDER
 */
router.post('/', (req, res) => {
    console.log('this is req.user.patient_id:', req.user.patient_id);
    let newMedProvider = req.body;
    console.log('Adding new med provider. newMedProvider is:', newMedProvider);

    let queryText = `
    INSERT INTO "medprovider" ("patient_id", "name", "specialty", "clinic", "phone", "portal", "next_appointment", "comments")
	    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
    `;

    let queryValues = [req.user.patient_id, newMedProvider.name, newMedProvider.specialty, newMedProvider.clinic, newMedProvider.phone, newMedProvider.portal, newMedProvider.nextAppointment, newMedProvider.comments];

    pool.query(queryText, queryValues)
        .then(() => {
          res.sendStatus(201);})
        .catch(dbErr => {
            console.log('Error adding new medical provider:', dbErr);
            res.sendStatus(500);
        });
});

// PUT ROUTE - UPDATE SINGLE MEDICAL PROVIDER
router.put('/:id/edit', (req, res) => {
  console.log('PUT /medicalteam/:id');
  console.log('this is req.body:', req.body);
  console.log('this is the id to update:', req.params.id);
  const idToUpdate = req.params.id;
  const sqlText = `
    UPDATE "medprovider"
    SET
      "name" = $1, 
      "specialty" = $2,
      "clinic" = $3,
      "phone" = $4,
      "portal" = $5,
      "next_appointment" = $6,
      "comments" = $7
    WHERE
      "id" = $8;
  `;

const sqlValues = [req.body.name, req.body.specialty, req.body.clinic, req.body.phone, req.body.portal, req.body.next_appointment, req.body.comments, idToUpdate]
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

// DELETE ROUTE TO DELETE ONE MEDICAL PROVIDER
router.delete('/:id', (req, res) => {
  pool.query('DELETE FROM "medprovider" WHERE id=$1', [req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /medicalteam', error);
      res.sendStatus(500);
  })
});

module.exports = router;
