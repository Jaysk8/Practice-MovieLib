const express = require('express')
// we can create our routes with this router var
const router = express.Router()
// using the get action to get a route
router.get('/', (req, res) => {
    // we want to render our view by passing its name index.ejs
    res.render('index')
})

// we want to export this router that we created
module.exports = router