const { buildSchema } = require('graphql');
const Schema = buildSchema(`
type Query {
	getUsers(id: Int): Int! 
}
`); //Initial Config
module.exports = {Schema}