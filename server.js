const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require('path')
const keys = require("./config/keys")


// Express app
const express = require("express")
const app = express()



// Connect mongoDB
mongoose
  .connect(
    keys.mongoURI,
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
require("./helperFunctions/passportHelper")(passport)



// Routes
const users = require('./routes/api/users')
const openings = require('./routes/api/openings')
const lists = require('./routes/api/lists')
app.use("/api/users", users)
app.use("/api/openings", openings)
app.use("/api/lists", lists)



// Production build
if(keys.env === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



// Port setup
app.listen(keys.port, () => console.log(`Server up and running on port ${keys.port} !`))