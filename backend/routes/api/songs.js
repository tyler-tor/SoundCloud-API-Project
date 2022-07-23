const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album, Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');
const song = require('../../db/models/song');

const router = express.Router();

const validateComment = [
    check('body')
        .exists({ checkFalsey: true })
        .withMessage('Comment body text is required'),
    handleValidationErrors
];

const validateQueryParams = [
    check('page')
        .exists({ checkFalsey: true })
        .toInt()
        // .if('page' < 0)
        .withMessage("Page must be greater than or equal to 0"),
    check('size')
        .exists({ checkFalsey: true })
        .toInt()
        // .if('size' < 0)
        .withMessage("Size must be greater than or equal to 0"),
    // check('createdAt')
    //     .isDate()
    //     .withMessage("CreatedAt is invalid"),
    handleValidationErrors
];

const songCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Song couldn't be found.";
    e.status = 404;
    next(e)
}

router.post('/:songId/comments', [requireAuth, validateComment], async(req, res, next) => {
    const { songId } = req.params;
    const { user } = req;

    const currUser = await User.getCurrentUserById(user.id)

    const song = await Song.findByPk(songId)

    if(song){
        const comment = await Comment.create({
            ...req.body,
            songId: song.id,
            userId: currUser.id
        });

        return res.json(comment)
    }else{
        songCouldNotBeFound(next)
    }
});

router.get('/:songId/comments', async(req, res, next) => {
    const { songId } = req.params;

    const song = await Song.findByPk(songId);

    if(song){
        const Comments = await Comment.findAll({
            where: {
                songId: song.id
            },
            include: {
                model: User.scope('includedInComment')
            }
        })

        return res.json({Comments})
    }else{
        songCouldNotBeFound(next)
    }
})

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


});

router.delete('/:songId', requireAuth, async(req, res, next) => {
    const { user } = req;
    const { songId } = req.params;

    const song = await Song.findOne({
        id: songId,
        userId: user.id
    });

    if(song){
        await song.destroy();

        res.status(200)
        return res.json({
            message: "Successfully deleted.",
            statusCode: 200
        })
    }else{
        songCouldNotBeFound(next);
    }
})

router.get('/', async (req, res, next) => {
    // let { page, size, title, createdAt } = req.query;
    // let pagination = {};

    // parseInt(page);
    // parseInt(size);
    // if(page < 0 || page > 10) page = 0;
    // if(size < 0 || size > 20) size = 20;

    // pagination.limit = size;
    // pagination.offset = size * (page - 1);

    let Songs = await Song.findAll(
        // ...pagination
    );

    return res.json(
        Songs,
        // page,
        // size
    );
})

module.exports = router
