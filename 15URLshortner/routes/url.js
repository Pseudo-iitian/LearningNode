const express = require('express');
const {handleGenerateNewShortURL, handleGetUserByShortId, handleGetAnalytics} = require('../controllers/url');

const router = express.Router();

router
.route('/')
.post(handleGenerateNewShortURL); // used to generate short url

router
.route('/:shortId')
.get(handleGetUserByShortId);

router
.route('/analytics/:shortId')
.get(handleGetAnalytics);

module.exports = router;    