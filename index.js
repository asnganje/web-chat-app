const express = require('express')
const config = require('./config/app')
const app = express()

app.get('/Home', (req, res) => {
    return res.send('Home screen')
})

const port = config.appPort

app.listen(port, ()=> {
    console.log(`Server is listening to port ${port}`)
})