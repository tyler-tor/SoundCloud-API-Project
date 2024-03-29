const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album, sequelize } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const artistCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Artist couldn't be found.";
    e.status = 404;
    next(e)
};

router.get('/:artistId/playlists', async(req, res, next) => {
    const { artistId } = req.params;

    const artist = await User.getCurrentUserById(artistId);

    if(artist){
        const Playlists = await artist.getPlaylists();

        return res.json({Playlists});
    }else{
        artistCouldNotBeFound(next);
    }
})

router.get('/:artistId/songs', async(req, res, next) => {
    const { artistId } = req.params;

    const artist = await User.getCurrentUserById(artistId);

    if(artist){
        const Songs = await artist.getSongs();

        return res.json({Songs});
    }else{
        artistCouldNotBeFound(next);
    }
})

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
});

router.get('/:artistId', async(req, res, next) => {
    const { artistId } = req.params;

    const Artist = await User.scope('includedArtist').findByPk(artistId);

    if(Artist){
        Artist.dataValues.totalSongs = await Song.count({
            where: {
                userId: Artist.id
            }
        });
        Artist.dataValues.totalAlbums = await Album.count({
            where: {
                userId: Artist.id
            }
        });

        return res.json(Artist)
    }else{
        artistCouldNotBeFound(next);
    }
});

router.get('/', async(req, res, next) => {
    const artists = await User.scope('includedArtist').findAll();

    if(artists){
        return res.json(artists);
    }else{
        res.status(404);
        res.message('No artists found');
        return next(res);
    }
})


module.exports = router;
