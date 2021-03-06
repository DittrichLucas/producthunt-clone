const express = require('express')
const mongoose = require('mongoose')

// Iniciando o app
const app = express()

app.use(express.json())

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/producthunt', 
    { useNewUrlParser: true }
)
require('./src/models/product')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3000)
