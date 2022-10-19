const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET BASIC INFO ABOUT ALL MEDICATIONS
 */
router.get('/', (req, res) => {
  console.log('GET /medication');
  console.log('this is req.user.patient_id:', req.user.patient_id);
  const sqlText = `
    SELECT "id", "name", "dose", "frequency" FROM "medication"
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
 * GET DETAILED INFO ABOUT ONE MEDICATION
 */
 router.get('/:id', (req, res) => {
  console.log('GET /:id');
  const sqlText = `
  SELECT * FROM "medication"
	  WHERE "id"=$1; 
  `
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
    .then(dbRes => {
      console.log('dbRes.rows[0] is:', dbRes.rows[0]);
      res.send(dbRes.rows[0])
    }) .catch(dbErr => {
      console.log('Error in /:id:', dbErr);
      res.sendStatus(500)
    })
});

/**
 * POST - ADD MEDICATION
 */
router.post('/', (req, res) => {
    console.log('this is req.user.patient_id:', req.user.patient_id);
    let newMedication = req.body;
    console.log('Adding new medication. newMedication is:', newMedication);

    let queryText = `
    INSERT INTO "medication" ("patient_id", "name", "indication", "dose", "frequency", "route", "notes")
	    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    let queryValues = [req.user.patient_id, newMedication.name, newMedication.indication, newMedication.dose, newMedication.frequency, newMedication.route, newMedication.notes];

    pool.query(queryText, queryValues)
        .then(() => {
          res.sendStatus(201);})
        .catch(dbErr => {
            console.log('Error adding new medication:', dbErr);
            res.sendStatus(500);
        });
});

// PUT ROUTE - UPDATE SINGLE MEDICATION
router.put('/:id/edit', (req, res) => {
  console.log('PUT /medicalteam/:id');
  console.log('this is req.body:', req.body);
  console.log('this is the id to update:', req.params.id);
  const idToUpdate = req.params.id;
  const sqlText = `
    UPDATE "medication"
    SET
      "name" = $1, 
      "indication" = $2,
      "dose" = $3,
      "frequency" = $4,
      "route" = $5,
      "notes" = $6
    WHERE
      "id" = $7;
  `;

const sqlValues = [req.body.name, req.body.indication, req.body.dose, req.body.frequency, req.body.route, req.body.notes, idToUpdate]
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

// DELETE ROUTE TO DELETE ONE MEDICATION
router.delete('/:id', (req, res) => {
  pool.query('DELETE FROM "medication" WHERE id=$1', [req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /medication', error);
      res.sendStatus(500);
  })
});

module.exports = router;
