if (process.env.NODE_ENV !== 'production') {
    // this will load the variables from the .env file and will import them to our process.env in our app
    require('dotenv').config()
}

const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();

// require the file that we just created
// this indexRouter variable is going to be set to the router variable in index.js
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// setting up our database
const mongoose = require('mongoose')
// setup our connection to our db
// this also takes how we want to setup mongodb inside of our application
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// check if we are connected to our db
const db = mongoose.connection
db.on('error', error => console.error(error))
// will only run once time once we connect
db.once('open', ( )=> console.log('Connected to mongoose'))

// telling our app to use that index router
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)