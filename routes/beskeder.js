// company.js
const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let beskeder = await controller.getBeskeder();
            response.send(beskeder);
        } catch (e) {
            sendStatus(e, response);
        }
    })
    .get('/:rum', async (request, response) => {
        let { rum } = request.params;
        response.json( await controller.getRum(rum));
    })
    .post('/', async (request, response) => {
        let {navn, rum, tekst, nr} = request.body;
        controller.createBesked(navn, rum, tekst, nr)
       response.status(201).json({ resultat: 'Besked gemt!' })
        })
    .delete('/:nr', async (request, response) => {
        let { nr } = request.params;
        let resultat = await Besked.deleteOne().where('nr').eq(nr).exec();
        if (resultat.deletedCount === 1)
            response.status(200).json({ resultat: 'Besked slettet!' });
        else
            response.status(404).send('Besked findes ikke!');
    });

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;