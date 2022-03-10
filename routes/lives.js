const { Router, request, response } = require('express');
const pool = require('../db');

const router = Router();

// Get all the monsters and habitats
router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM lives', (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

module.exports = router;