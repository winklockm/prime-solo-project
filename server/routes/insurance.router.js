const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET BASIC INFO ABOUT ALL INSURANCE
 */
router.get('/', (req, res) => {
  console.log('GET all from /insurance where patient id =', req.user.patient_id);
  const sqlText = `
    SELECT "id", "provider", "group", "id_number" FROM "insurance"
      WHERE "patient_id"=$1
        ORDER BY "provider";`
  ;
  const sqlValues = [req.user.patient_id]
  pool.query(sqlText, sqlValues)
    .then(dbRes => {
      console.log('dbRes.rows is:', dbRes.rows);
      res.send(dbRes.rows)
    }) .catch(dbErr => {
      console.log('Error in GET all from /insurance', dbErr);
      res.sendStatus(500)
    })
});


/**
 * GET DETAILED INFO ABOUT ONE INSURANCE
 */
 router.get('/:id', (req, res) => {
  console.log('GET one from /insurance/:id where id=', req.params.id);
  const sqlText = `
  SELECT * FROM "insurance"
	  WHERE "id"=$1; 
  `
  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
    .then(dbRes => {
      console.log('dbRes.rows[0] is:', dbRes.rows[0]);
      res.send(dbRes.rows[0])
    }) .catch(dbErr => {
      console.log('Error in GET all from /insurance/:id:', dbErr);
      res.sendStatus(500)
    })
});

/**
 * POST - ADD INSURANCE
 */
router.post('/', (req, res) => {
    console.log('POST using /insurance for patient id=', req.user.patient_id);
    let newInsurance = req.body;

    let queryText = `
    INSERT INTO "insurance" ("patient_id", "provider", "group", "id_number", "plan_name", "phone", "notes")
	    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;

    let queryValues = [req.user.patient_id, newInsurance.provider, newInsurance.group, newInsurance.id_number, newInsurance.plan_name, newInsurance.phone, newInsurance.notes];

    pool.query(queryText, queryValues)
        .then(() => {
          res.sendStatus(201);})
        .catch(dbErr => {
            console.log('Error adding insurance in POST /insurance:', dbErr);
            res.sendStatus(500);
        });
});

// PUT ROUTE - UPDATE SINGLE INSURANCE
router.put('/:id/edit', (req, res) => {
  console.log('PUT /insurance/:id/edit for id=', req.params.id);
  const idToUpdate = req.params.id;
  const sqlText = `
    UPDATE "insurance"
    SET
      "provider" = $1, 
      "group" = $2,
      "id_number" = $3,
      "plan_name" = $4,
      "phone" = $5,
      "notes" = $6
    WHERE
      "id" = $7;
  `;

const sqlValues = [req.body.provider, req.body.group, req.body.id_number, req.body.plan_name, req.body.phone, req.body.notes, idToUpdate]
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error in PUT /insurance/:id/edit:`, error);
          res.sendStatus(500);
      });
});

// DELETE ROUTE TO DELETE ONE INSURANCE
router.delete('/:id', (req, res) => {
  console.log('DELETE /insurance/:id for id=', req.params.id);
  pool.query('DELETE FROM "insurance" WHERE id=$1', [req.params.id])
  .then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error in DELETE /insurance/:id', error);
      res.sendStatus(500);
  })
});

module.exports = router;
