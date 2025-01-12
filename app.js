const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { db } = require('./db/db')
const { readdirSync } = require('fs')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World')
})

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
const server = () => {
    db()
    console.log("You are listening to port:", PORT)
    app.listen(PORT, () => {
        console.log('listening to PORT:', PORT)
    })
}
server()