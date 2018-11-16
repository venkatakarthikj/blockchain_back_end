var  mongoose= require("mongoose");
const Schema = mongoose.Schema;
 
 const contractSchema = new Schema({
  user: {
     name: String,
     surname: String
  },
  amountInUsd: String,
  currency: String,
  date: String  
})

module.exports = { contractSchema };