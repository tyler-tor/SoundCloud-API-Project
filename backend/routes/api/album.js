const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

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

router.post('/:albumId', [requireAuth, validateSong], async(req, res, next) => {
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
        res.status = 404;
        return res.json({
            message: "Album couldn't be found",
            statusCode: res.status
        })
    }
})

module.exports = router
