require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()
app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db connected')
}).catch(err => console.log(err))

app.get(`/api/inventory`, controller.getInventory)
app.post(`/api/product`, controller.addProduct)


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`)
})