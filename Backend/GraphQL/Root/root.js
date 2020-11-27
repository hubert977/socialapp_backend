const {Schema} = require('../Schema/schema');
const {resolvers} = require('../Resolvers/resolvers')
const { graphqlHTTP } = require('express-graphql');
const root = graphqlHTTP({
	schema: Schema,
	rootValue: resolvers,
	graphiql: true
})
module.exports = {root}