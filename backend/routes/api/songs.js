const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

const router = express.Router();

const validateSongId = [
    check('songId')
    .exists({checkFalsy: true })
    .withMessage("Song couldn't be found."),
    handleValidationErrors
]

router.get('/:songId', validateSongId, async(req, res, next) => {
    const { songId } = req.params;


        const song = await Song.findByPk(songId, {
            include: [
                { model: User.scope('includedArtist'), as: 'Artist' },
                { model: Album.scope('includedAlbum')}
            ]
        });
        if(song){
            return res.json(song)
        }else{
            const e = new Error();
            e.message = "Song couldn't be found.";
            e.status = 404;
            next(e)
        }


})

router.get('/', async(req, res, next) => {
    const songs = await Song.findAll();

    return res.json(songs);
})

module.exports = router
