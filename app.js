const express = require('express')
const app = express()
const { json } = require('express')
const PORT = process.env.PORT || 6060


app.use(express.json())

app.use(require('./routes/server'))

if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log("server is running on", PORT)
})