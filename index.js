const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes');
const Config = require("./Config");
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express();
// * Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('short'))


// All Port Access

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


// * Api routes
app.use('/api', routes)

// DB Connection
let connectString = `mongodb+srv://${Config.dbUser}:${Config.dbPassword}@cluster0.1z0ee.mongodb.net/${Config.dbName}?retryWrites=true&w=majority`

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.send('Test')
})

app.listen(3000, () => console.log('Server is Listning'))