const {ConnectionMongoDB,ConnectionMySQL} = require('./Database_Connect/ConnectToDatabase');
const {root} = require('./GraphQL/Root/root');
const express = require('express');
const app = express();

app.use('/graphql',root)
app.listen(4000);