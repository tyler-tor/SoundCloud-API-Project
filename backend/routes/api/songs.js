const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album, Comment } = require('../../db/models');
const { check, query, condition } = require('express-validator');
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
    check('size')
        .custom(async (value, { req }) => {
            if(req.query){
                const {size} = req.query
                if(size < 0 ){
                    return await Promise.reject("Size must be greater than or equal to 0")
                }
            }
        }),
    check('page')
        .custom(async (value, { req }) => {
            if(req.query){
                const{ page} = req.query
                if(page < 0) {
                    return await Promise.reject("Page must be greater than or equal to 0")
                }
            }
        }),
    check('createdAt')
        .isDate( {dateOnly: false})
        .optional({nullable: true})
        .withMessage("CreatedAt is invalid"),
    handleValidationErrors
];

const songCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Song couldn't be found.";
    e.status = 404;
    next(e)
}

router.post('/:songId/comments', requireAuth, validateComment, async(req, res, next) => {
    const { songId } = req.params;
    const { user } = req;
    const { body } = req.body

    const song = await Song.findOne({
        where: {
            id: songId,
            userId: user.id
        }
    })

    if(song){
        const comment = await Comment.create({
            body,
            songId: song.id,
            userId: user.id
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
        where: {
            id: songId,
            userId: user.id
        }
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

router.get('/', validateQueryParams, async (req, res, next) => {
    let { page, size, title, createdAt } = req.query;
    let pagination = {};
    let where = {};

    if(page) parseInt(page);
    if(size) parseInt(size);
    if(page < 0 || page > 10) page = 0;
    if(size < 0 || size > 20) size = 20;
    if(!size && page) size = 20;
    if(!page && size) page = 0;
    if(title && !page) page = 0;
    if(title && !size) size = 20;
    if(createdAt && !page) page = 0;
    if(createdAt && !size) size = 20;


    pagination.limit = parseInt(size);
    pagination.offset = parseInt(size) * (parseInt(page) - 1);
    if(title) where.title = title;
    if(createdAt) where.createdAt = createdAt

    let Songs;

    if(!page && !size && !title && !createdAt){
            Songs = await Song.findAll();
            return res.json({Songs});
    }

    if(title && !createdAt){
        Songs = await Song.findAll({
            where: {
                ...where
            },
            pagination
        });
        return res.json({
            Songs,
            page,
            size
        })
    }
    if(!title && createdAt){
        Songs = await Song.findAll({
            where: {
                ...where
            },
            pagination
        });
        return res.json({
            Songs,
            page,
            size
        })
    }

    Songs = await Song.findAll({
        ...where,
        ...pagination
    });

    return res.json({
        Songs,
        page,
        size
});
})

module.exports = router
