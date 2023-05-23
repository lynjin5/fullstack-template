//Declare variables and require dependecies
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//Connect to MongoDB
let db, 
    dbConnectionString = process.env.DB_STRING
    dbName = 'sample_mflix', //database name is sample_mflix
    collection = 'movies'

MongoClient.connect(dbConnectionString, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to db!')
        db = client.db(dbName)
        collection = db.collection('movies') // collection name is movies
    })

//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public')) 
app.use(express.urlencoded({extended:true}))
app.use(express.json()) // helps Express to parse json data
app.use(cors())

//create port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running!`)
})