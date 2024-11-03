const cards = require('../models/cardModel');
const mongoose = require('mongoose');

//may delete later
async function createCard(req, res) { //test
    try{
        await cards.create({id: req.id, name: req.name, type: req.type, cost: req.cost, rarity: req.rarity, pack: req.pack, description: req.description});
    } catch(err) {
        res.status(404).send({error: err});
    }
}

async function getAllCard(req, res) {//test
    try{
        let cardCollect = await cards.find({});
        return res.send(cardCollect);
    } catch(err) {
        res.status(404).send({error: err});
    }
}

async function getById(req, res) {//test
    
    try{
        let cardCollect = await cards.findOne({id: req.query.id});
        return res.send(cardCollect);
    } catch(err) {
        res.status(404).send({error: err});
    }
}

async function getByType(req, res) {//test
    try{
        let cardCollect = await cards.find({type: req.type});//change to be accurate to req format
        return res.send(cardCollect);        
    } catch(err) {
        res.status(404).send({error: err});
    }
}

module.exports = {getAllCard, getById, getByType};