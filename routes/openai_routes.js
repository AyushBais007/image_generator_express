const express = require('express');
const router = express.Router();
const {generateImage} = require('../services/openAi_service')

router.post('/generateImage',generateImage)
module.exports= router