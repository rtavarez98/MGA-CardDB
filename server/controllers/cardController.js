const cards = require('../models/cardModel');
const mongoose = require('mongoose');

async function getAllCard(req, res) {
    try{
        //let cards = await 
    } catch(err) {
        res.status(404).send({error: err});
    }
}

async function getById(req, res) {
    try{

    } catch(err) {
        res.status(404).send({error: err});
    }
}

async function getByType(req, res) {
    try{

    } catch(err) {
        res.status(404).send({error: err});
    }
}

module.exports = {getAllCard, getById, getByType};