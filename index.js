// express backend setup is below

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'jade');

// middleware to handle scripts and favicon

app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')))

app.use(express.static('stylesheets'))
app.use(express.static('javascripts'))
app.use(express.static('bower_components/ng-lodash/build'))
app.use(express.static('bower_components/angular-osd-form'))

// route to manage intial page load from jade template 'index'


app.get('/', function (req, res) {
    res.render('index');
});

// route to handle login data

app.post('/logon', function(request, response) {
    console.log(request.body, 'heres our output');
})

app.listen(3001, function () {
    console.log('App listening on port 3001!')
})