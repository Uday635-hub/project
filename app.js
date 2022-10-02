const express = require('express')
const app = express()

app.get('/', (eeq, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server ready'))
