const express = require('express');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User, Song } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


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

router.get('/', restoreUser, (req, res) => {
    const { user } = req;
    if(user) {
        return res.json({
            user: user.toSafeObject()
        })
    }else {
        return res.json({})
    }
})

module.exports = router;
