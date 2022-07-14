const mongoose = require('mongoose');
const { Schema } = mongoose;

const interviewSchema = new Schema({
    id: Number,
	prompt: String,
    response: String,
    type: String,
    tags: [String],
    priority: Number
})

const Interviews = mongoose.model('interviews', interviewSchema);

module.exports = Interviews;