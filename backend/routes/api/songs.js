const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

const router = express.Router();

const validateSongId = [
    check('songId')
        .exists({ checkFalsy: true })
        .withMessage("Song couldn't be found."),
    handleValidationErrors
];

const songCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Song couldn't be found.";
    e.status = 404;
    next(e)
}

router.put('/:songId', requireAuth, async (req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId);

    if (song) {
        await song.update({...req.body});
        return res.json(song)
    } else {
        songCouldNotBeFound(next);
    }
})

router.get('/:songId', async (req, res, next) => {
    const { songId } = req.params;


    const song = await Song.findByPk(songId, {
        include: [
            { model: Album.scope('includedAlbum') }
        ]
    });
    if (song) {
        const artist = await User.scope('includedArtist').findByPk(song.userId);
        song.dataValues.Artist = artist
        return res.json(song)
    } else {
        songCouldNotBeFound(next);
    }


})

router.get('/', async (req, res, next) => {
    const songs = await Song.findAll();

    return res.json(songs);
})

module.exports = router
