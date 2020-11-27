const { MongoClient } = require('mongodb');
const MySQL = require('mysql');
const {URI,useNewUrlParser,useUnifiedTopology,ConfigMySql} = require('../configuration/db-config');
// connect to server

	const ConnectionMongoDB = async ()	=> {
		try{
	  	const client = await MongoClient.connect(URI,useNewUrlParser,useUnifiedTopology)
		  return {client}
	  	}
	  	catch(e) {
		  	console.error(e)
	  }
	}
	const ConnectionMySQL = async() => {
		try {
			const client = await MySQL.createConnection(ConfigMySql)
			return {client}
		}
		catch(e)
		{
			console.error(e);
		}
	}
	module.exports = {ConnectionMongoDB,ConnectionMySQL}
	
 