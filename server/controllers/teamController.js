
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Team = require('../models/teamModel');


const MISSING_ATTRIBUTE_TEXT = "The request object is missing at least one of the required attributes";
const NOT_FOUND_TEXT = "No team with provided team_id exists";

/* ------------- Begin Controller Functions ------------- */

/**
 * getAllTeams
 */
router.get('/', function (req, res) {
    const teams = Team.getAllTeams(req)
        .then((teams) => {
            
            if (teams) {
                // format returned teams
                teams.items = Helpers.addSelf(teams.items, req);
            }
            // return regardless if teams were found
            res.status(200).json(teams);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ "Error": err.message }).end();
        })
});



// add a team
router.post('/', async function (req, res) {
    if (req.body.name && req.body.created_by) {

        addTeam(req.body.name, req.body.created_by)
            .then(key => { res.status(201).json(key) })
            .catch((err) => {
                console.log(err);
                res.status(500).send(err.message);
            })
    } else {
        res.status(400)
            .json({ "Error": MISSING_ATTRIBUTE_TEXT })
            .end();
    }
});

/* ------------- End Controller Functions ------------- */
module.exports = router;