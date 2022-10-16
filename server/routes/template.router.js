const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `
    SELECT * FROM "medprovider"
      WHERE "patient_id" = $1
  `
  const sqlValues = [req.user.id]
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

// 
// function getPatientID(userId) {
//   pool.query('SELECT patient_id FROM user_patient WHERE user_id = $1', [userId])
//     .then((dbRes) => {
//       return dbRes.rows[0].patient_id
//     })

// }
