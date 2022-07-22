const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const artistCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Artist couldn't be found.";
    e.status = 404;
    next(e)
}

router.get('/:artistId/albums', async (req, res, next) => {
    const { artistId } = req.params;

    const artist = await User.getCurrentUserById(artistId);

    if(artist){
        const Albums = await artist.getAlbums({
            where: {
                userId: artist.id
            }
        })

        return res.json({Albums});
    }else{
        artistCouldNotBeFound(next);
    }
})


module.exports = router;
