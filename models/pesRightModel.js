const mongoose = require('mongoose');

let pesRightSchema = new mongoose.Schema({
    location: String,
    color: String,
    level: String,
    name: String
});

let PesRight = mongoose.model('PesRight', pesRightSchema);

module.exports = PesRight;