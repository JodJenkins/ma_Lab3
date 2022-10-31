require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
//npm run dev
const PORT = process.env.PORT || 27017

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()