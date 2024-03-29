const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');
const user = require('../../db/models/user');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

const router = express.Router();

const validateSong = [
    check('title')
        .exists({ checkFalsey: true })
        .withMessage('Song title is required.'),
    // check('url')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Audio is required'),
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

router.post('/:albumId/songs', requireAuth, singleMulterUpload('url'), validateSong, async(req, res, next) => {
    // console.log('body', req.file);
    const { albumId } = req.params;
    const { user } = req;
    const { title, description } = req.body;
    const url = await singlePublicFileUpload(req.file);
    const album = await Album.findOne({
        include: {
            model: User
        },
        where: {
            userId: user.id,
            id: albumId
        }
    });

    if(album){
        const song = await Song.create({
            title,
            description,
            url,
            previewImage: album.previewImage,
            albumId,
            userId: user.id
        })
        return res.json(song)
    }else{
        const err = new Error();
        err.status = 404;
        err.message = 'Album does not exsist.';
        next(err)
    }
});

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

router.put('/:albumId', [requireAuth, validateAlbum], async(req, res, next) => {
    const { albumId } = req.params;

    const album = await Album.findByPk(albumId);

    if(album){
        await album.update({...req.body});

        return res.json(album)
    }else{
        albumCouldNotBeFound(next)
    }
});

router.delete('/:albumId', requireAuth, async(req, res, next) => {
    const { user } = req;
    const { albumId } = req.params;

    const album = await Album.findOne({
        where: {
            userId: user.id,
            id: albumId
        }
    });

    if(album){
        await album.destroy();

        res.status(200);
        return res.json({
            message: "Successfully deleted.",
            statusCode: 200
        })
    }else {
        albumCouldNotBeFound(next)
    }
})

router.post('/', [requireAuth, validateAlbum], async(req, res, next) => {
    const { title, description, imageUrl } = req.body;
    const { user } = req;

    const album = await Album.create({
        title,
        description,
        previewImage: imageUrl,
        userId: user.id
    });

    return res.json(album)
});

router.get('/', async(req, res, next) => {

    const albums = await Album.findAll();

    return res.json(albums);
})

module.exports = router
