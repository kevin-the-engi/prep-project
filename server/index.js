require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { root, schema } = require('./graphQL/index.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use('/graphql', graphqlHTTP({
	  schema,
	  graphiql: true,
	  rootValue: root
	}),
  );

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

app.listen(port, () => {
	console.log(`Example app listening on http://localhost:${port}`);
});
