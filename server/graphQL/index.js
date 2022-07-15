const { buildSchema } = require('graphql');
const data = require('../../dummy.js');

const schema = buildSchema (`
    type Query {
        question(id: Int!): Question,
        questions: [Question]
    }
    type Question {
        id: Int,
        prompt: String,
        response: String,
        tags: [String],
        priority: Int
    }
`);

const getQuestions = (args) => {
    return data;
}

const root = {
    questions: getQuestions
}

module.exports = {
    schema,
    root
}
