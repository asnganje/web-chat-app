const express = require('express')
const config = require('./config/app')
const app = express()

app.get('/Home', (req, res) => {
    return res.send('Home screen')
})

app.get('/Login', (req, res) => {
    return res.send('This is the login screen')
})

const port = config.appPort

app.listen(port, ()=> {
    console.log(`Server is listening to port ${port}`)
})