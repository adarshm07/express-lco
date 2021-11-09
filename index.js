const express = require('express')
const app = express()
const format = require('date-format')

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})
app.get('/api/v4/:token', (req, res) => {
    const token = req.params.token;
    console.log({params: req.params.token});
    res.status(200).json(token)   
})

app.get('/api/v1/instagram', (req, res) => {
    let instaSocial = {
        username: "adarshm07",
        followers: "1.5M",
        follows: "1.6M",
        date: format.asString('dd-MM-yyyy', new Date())
    }
    res.status(200).json(instaSocial)
})

app.get('/api/v1/facebook', (req, res) => {
    let instaSocial = {
        username: "adarshm07",
        followers: "1.5M",
        follows: "1.6M",
        date: new Date()
    }
    res.status(200).json(instaSocial)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))