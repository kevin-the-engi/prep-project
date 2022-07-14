const { buildSchema } = require('graphql');

const schema = buildSchema (`
    type Query {
        question(id: Int!): Question,
        questions(prompt: String): [Question]
    }
    type Question {
        id: Int,
        prompt: String,
        response: String,
        tags: [String],
        priority: Int
    }
`);

module.exports = {
    schema
}