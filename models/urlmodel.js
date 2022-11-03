const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const { StringDecoder } = require('string_decoder');
const ObjectId= mongoose.Schema.Types.ObjectId

const urlSchema=new mongoose.Schema({
    urlCode: {
        type:String,
        required:true,
         unique:true,
         trim:true
         },
    longUrl: {
              type:String,
              trim:true,
              required:true
            },
        shortUrl: {
            type:String,
            required:true,
             unique:true,
             trim:true
            }   
},{timestamps:true})
module.exports= mongoose.model('Url',urlSchema)