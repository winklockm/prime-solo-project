const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let newMedProvider = req.body;
    console.log('Adding new med provider. newMedProvider is:', newMedProvider);

    let queryText = `
    INSERT INTO "medprovider" ("name", "specialty", "clinic", "phone", "next_appointment", "portal")
	    VALUES ($1, $2, $3, $4, $5, $6);
    `;

    let queryValues = [newMedProvider.name, newMedProvider.specialty, newMedProvider.clinic, newMedProvider.phone, newMedProvider.nextAppointment, newMedProvider.portal];

    pool.query(queryText, queryValues)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new medical provider:', error);
            res.sendStatus(500);
        });
});

module.exports = router;
