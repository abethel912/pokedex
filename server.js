require('dotenv').config()
const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon.js')


// Allows you to use data from the URL
// URLencoded - is the data in the URL
// Need this to use the request.params and request.query
app.use(express.urlencoded({ extended: true }))

// Landing - GET /
// app.get("/", (req, res) => {
//   res.render("landing.ejs")
// })

// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});

// New - GET /pokemon/new




// Create-POST /pokemon



// Destroy - DELETE /pokemon/:id

// SHOW // GET /pokemon/:id
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    data: Pokemon[req.params.id]
  })
})
// Edit - GET /pokemon/:id/edit



//Update - PUT /pokemon/:id

const PORT = process.env.PORT || 3011
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
