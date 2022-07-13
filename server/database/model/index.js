const mongoose = require('mongoose');
const { Schema } = mongoose;

const interviewSchema = new Schema({
    id: String,
	prompt: String,
    response: String,
    tags: [String],
})

const Interviews = mongoose.model('interviews', interviewSchema);

module.exports = Interviews;