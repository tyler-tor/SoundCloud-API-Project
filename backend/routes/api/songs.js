const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album, Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

const router = express.Router();

const validateComment = [
    check('body')
        .exists({ checkFalsey: true })
        .withMessage('Comment body text is required'),
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


})

router.get('/', async (req, res, next) => {
    const songs = await Song.findAll();

    return res.json(songs);
})

module.exports = router
