const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')

const express = require("express");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// Connect mongoDB
const db = require("./config/keys").mongoURI;
mongoose.connect(
    db,
    {   useNewUrlParser: true,
        useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err))


// Production build
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`));