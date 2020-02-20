const express = require('express')
const cors=require('cors')
const axios=require('axios')
const app = express()
const port = 3000


app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/lambda', (req, res) => {
    axios.get('https://sgegy8vi0k.execute-api.us-west-2.amazonaws.com/prod')
    .then(resp=>{
        console.log(resp);
        res.send(resp.data)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))