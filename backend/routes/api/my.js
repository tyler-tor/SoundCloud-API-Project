const express = require('express');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song, Album, Playlist, PlaylistSong } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/playlists', requireAuth, async(req, res, next) => {
    const { user } = req;

    const Playlists = await Playlist.findAll({
        where: {
            userId: user.id
        }
    });

    return res.json({
        Playlists
    })
})

router.get('/albums', requireAuth, async(req, res, next) => {
    const { user } = req;

    const Albums = await Album.findAll({
        where: {
            userId: user.id
        }
    });

    return res.json({
        Albums
    });
});

router.get('/songs', requireAuth, async(req, res, next) => {
    const { user } = req;

    if(user){
        const Songs = await Song.findAll({
            where: {
                userId: user.id
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
        currUser.dataValues.Token = await setTokenCookie(res, currUser)
        return res.json({
            currUser
        })
    }else {
        return res.json({})
    }
})

module.exports = router;
