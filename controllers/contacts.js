// const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db('contacts').collection('contacts').find();
    result.toArray().then((lists) => {
      console.log(lists)
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
  };

  const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db('contacts')
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      console.log(lists)
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
  
//creating contact 
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb.getDb().db('contacts').collection('contacts').insertOne(contact);
  console.log(result)
  if (result.acknowledged){
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error);
  }
}

//updating the contact
const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb.getDb().db('contacts').collection('contacts').replaceOne({ _id: userId }, contact);
  if (result.acknowledged){
    res.status(204).json(result);
  } else {
    res.status(500).json(result.error);
  }

}


//deleting contact by id 
const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('contacts').collection('contacts').deleteOne({ _id: userId }, true);
  if (result.acknowledged){
    res.status(200).send();
  } else {
    res.status(500).json(result.error);
  }

}

  module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };