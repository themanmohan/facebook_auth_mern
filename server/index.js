const express = require("express")

const cors = require('cors')
const dbConnection = require("./config/db")
const facebookData = require("./Route/FaceBookData")
const app = express()

//connect dataBase
dbConnection()

//init midiileware

app.use(express.json({
    extended: false
}))

//cross origin
app.use(cors())

//Define Route 
app.use("/facebookdata", facebookData)

app.listen(4000, (err, data) => {
    console.log("working")
})