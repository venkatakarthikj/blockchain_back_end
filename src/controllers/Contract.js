const mangoose = require('mongoose');
const { contractSchema }= require('../models/contract')

const contractConnect = mangoose.model('contract', contractSchema)


const addContract = (req, res) => {
      
  let newContract = new contractConnect(req.body);
  newContract.save((err, contract) => {
      if (err) {
          res.send(err);
      }
      res.json(contract);
  });
}
const getContract = (req, res) => {
  contractConnect.find((err, contract) => {
      if (err) {
          res.send(err);
      }
      res.json(contract);
  });
}
const updateContract= (req, res) => {
    const { _id } = req.body;
    contractConnect.findOneAndUpdate({ _id }, {...req.body},(err, contract) => {
        if (err) {
            res.send({'error':err});
        }
        res.json({ "success": contract});
    });
}

const deleteContract = (req, res) => {
  const { _id } = req.body;
    contractConnect.deleteOne({ _id },(err, contract) => {
        if (err) {
            res.send({'error':err});
        }
        res.json({ "success": contract});
    });
}

module.exports = { addContract, getContract, updateContract, deleteContract };