require('dotenv').config()
const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon.js')
const data = require('./models/pokemon.js')
const methodOverride = require('method-override')

// Allows you to use data from the URL
// URLencoded - is the data in the URL
// Need this to use the request.params and request.query
app.use(express.urlencoded({ extended: true }))
// To use the public folder, with /public in the URL we need to use the express.static middleware
app.use("/public", express.static("public"))

// INDEX
app.get('/pokemon', (req, res) => {
  
res.render('index.ejs', { data: Pokemon });
});

// New - GET /pokemon/new
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
})

// Destroy - DELETE /pokemon/:id
app.delete("/pokemon/:id", (req, res) => {
  res.render("new.ejs")
})

// SHOW // GET /pokemon/:id
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    data: Pokemon[req.params.id]
  })
})
// Edit - GET /pokemon/:id/edit
app.put("/pokemon/:id", (req, res) => {
  res.render(edit.ejs, {
    data: Pokemon[req.params.id],
    index:req.params.id,
  })
})

// Create-POST /pokemon
app.post("/pokemon", (req, res) => {
  // req.body.type = [req.body.type]
  data.push(req.body),
  res.redirect("/pokemon")
})
//Update - PUT /pokemon/:id

app.put('/pokemon/:id', (req, res) => {
  data.update(req.params.id, req.body)
  res.redirect("/pokemon")
})

// Listener

const PORT = process.env.PORT || 3011
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
