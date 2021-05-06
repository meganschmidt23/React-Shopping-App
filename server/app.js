const express = require('express');
const {graphqlHTTP} = require('express-graphql'); //Name does not equal package for thi
const schema = require('./schema/schema');

const app = express(); //create app

//Middleware
app.use('/graphql', graphqlHTTP({
    schema
})) //everything to this path is handled by graphqlhttp

app.listen(4000,() => {
    console.log('Now listening for requests on port 4000');
}) // listen to this port