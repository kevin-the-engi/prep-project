const { buildSchema } = require('graphql');

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

module.exports = schema;
