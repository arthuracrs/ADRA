const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')
const config = require('./config/config')

mongoose.connect(`mongodb+srv://${config.user_database}:${config.password_database}@cluster0-hjizl.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

mongoose.set('useCreateIndex', true);

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3001)
