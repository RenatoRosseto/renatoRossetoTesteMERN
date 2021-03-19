const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://renatoteste:renatoteste@cluster0.zuoer.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,  
  useUnifiedTopology: true,
})

app.use(express.json())

app.get('/', (request, response) => {
  return response.send({message: 'Hello World'})
})

app.listen(3333)