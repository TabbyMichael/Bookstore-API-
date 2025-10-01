// Import required modules
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { readFileSync } = require('fs');
const { join } = require('path');
const cors = require('cors');
const resolvers = require('./resolvers');

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Set up basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API. Use /graphql for GraphQL endpoint.');
});

// Read the schema file
const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

// Create a new Apollo Server instance
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  introspection: true,
  playground: true
});

// Apply the Apollo GraphQL middleware and set the path to /graphql
server.applyMiddleware({ app, path: '/graphql' });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log('📚 Welcome to the Bookstore API!');
  console.log(`🔍 Try running queries at http://localhost:${PORT}${server.graphqlPath}`);
});
