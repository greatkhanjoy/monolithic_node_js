const Router = require('express').Router()
const { health } = require('../controllers')

Router.route('/health').get(health)

module.exports = Router
