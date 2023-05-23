const express = require('express')
const app = express()
const port = 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Credentials", true)
    next();
})
const route = require('./route');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})