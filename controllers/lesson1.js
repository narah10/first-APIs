const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').find();
  
  result.toArray().then((lists) => {
    console.log(lists)
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); 
  });
};

module.exports = { getData };