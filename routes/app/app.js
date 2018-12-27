const express = require('express')
const router = express.Router()

const util = require('../../middleware/utilities')

// Home page
router.get('/', util.async(async (req, res, next) => {
	res.send('Portfolio API Home page')
}))

// Route to serve public json on API server
router.get('/info/:name', util.async(async (req, res, next) => {
	res.json(require(`../../public/mock/${req.params.name}.json`))
}))

module.exports = router
