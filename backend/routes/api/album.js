const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');
const user = require('../../db/models/user');

const router = express.Router();

const validateSong = [
    check('title')
        .exists({ checkFalsey: true })
        .withMessage('Song title is required.'),
    check('url')
        .exists({ checkFalsy: true })
        .withMessage('Audio is required'),
    handleValidationErrors
];

const validateAlbum = [
    check('title')
        .exists({ checkFalsey: true })
        .withMessage('Album title is required.'),
    check('description')
        .exists({ checkFalsey: true })
        .withMessage('Album description is required.'),
    check('imageUrl')
        .exists({ checkFalsey: true })
        .withMessage('Album imageUrl is required.'),
    handleValidationErrors
];

const albumCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Album couldn't be found.";
    e.status = 404;
    next(e)
}

router.get('/:albumId', async(req, res, next) => {
    const { albumId } = req.params;


    const album = await Album.findByPk(albumId, {
        include: [
            { model: Song }
        ]
    });

    if(album){
        const artist = await User.scope('includedArtist').findByPk(album.userId);
        album.dataValues.Artist = artist
        return res.json(album)
    }else{
        albumCouldNotBeFound(next)
    }
});

router.post('/:albumId/songs', [requireAuth, validateSong], async(req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;
    const { title, description, url, imageUrl } = req.body;

    const currUser = await User.getCurrentUserById(user.id)

    const album = await Album.findByPk(albumId, {
        include: {
            model: User
        },
        where: {
            userId: currUser.id
        }
    });

    if(album){
        const song = await Song.create({
            title,
            description,
            url,
            previewImage: imageUrl,
            albumId: album.id,
            userId: currUser.id
        })
        return res.json(song)
    }else{
        const err = new Error();
        err.status = 404;
        err.message = 'Album does not exsist.';
        next(err)
    }
});

router.post('/', [requireAuth, validateAlbum], async(req, res, next) => {
    const { title, description, imageUrl } = req.body;
    const { user } = req;

    const currUser = await User.getCurrentUserById(user.id)

    const album = await Album.create({
        title,
        description,
        previewImage: imageUrl,
        userId: currUser.id
    });

    return res.json(album)
});

router.get('/', async(req, res, next) => {

    const albums = await Album.findAll();

    return res.json(albums);
})

module.exports = router
