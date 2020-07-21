const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require('path')


// Express app
const express = require("express")
const app = express()



// Connect mongoDB
const db = require("./config/keys").mongoURI
mongoose.connect(
    db,
    {   useNewUrlParser: true,
        useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err))



// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Passport middleware
const passport = require("passport")
app.use(passport.initialize())
require("./config/passport")(passport)



// Routes
const users = require('./routes/api/users')
const openings = require('./routes/api/openings')
const lists = require('./routes/api/lists')
app.use("/api/users", users)
app.use("/api/openings", openings)
app.use("/api/lists", lists)



// Production build
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



// Port setup
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))