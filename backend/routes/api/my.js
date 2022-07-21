const express = require('express');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/albums', requireAuth, async(req, res, next) => {
    const { user } = req;

    const currUser = await User.getCurrentUserById(user.id);

    const Albums = await Album.findAll({
        where: {
            userId: currUser.id
        }
    });

    return res.json({
        Albums
    });
});

router.get('/songs', requireAuth, async(req, res, next) => {
    const { user } = req;

    if(user){
        const currUser = await User.getCurrentUserById(user.id);

        const Songs = await Song.findAll({
            where: {
                userId: currUser.id
            }
        })
        return res.json({
            Songs
        })
    }
})

router.get('/', restoreUser, async (req, res) => {
    const { user } = req;
    if(user) {
        const currUser = await User.getCurrentUserById(user.id);
        return res.json({
            currUser,
            token: setTokenCookie(res, currUser)
        })
    }else {
        return res.json({})
    }
})

module.exports = router;
