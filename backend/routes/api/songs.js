const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

const router = express.Router();

router.get('/', async(req, res, next) => {
    const songs = await Song.findAll();

    return res.json(songs);
})

module.exports = router
