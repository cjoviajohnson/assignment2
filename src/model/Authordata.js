const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://joviaj:joviaj@cluster0.kwshtdz.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    book: String,
    dob: String,
    image: String
 });
 
 var Authordata = mongoose.model('authordata',AuthorSchema);
 
 module.exports = Authordata;
 