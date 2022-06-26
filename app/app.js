require('dotenv').config('../.env')
const express = require('express')
const app = express()

//import modules and files
const middlewares = require('./middleware')
const { notFoundHandler, errorHandler } = require('./errors')

//import Routers
const rootRouter = require('../routes')

// invoke middleware
app.use(middlewares)

//Invoke Routers
app.use('/', rootRouter)

//invoke after middlewares & handler
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
