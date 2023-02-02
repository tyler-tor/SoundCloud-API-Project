const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album, Playlist, Comment, PlaylistSong } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const playlistCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Playlist couldn't be found.";
    e.status = 404;
    next(e)
};
const songCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Song couldn't be found.";
    e.status = 404;
    next(e)
};

const validatePlaylist = [
    check('name')
        .exists({ checkFalsey: true })
        .withMessage('Playlist name is required'),
    handleValidationErrors
];

router.post('/:playlistId/songs', requireAuth, async (req, res, next) => {
    const { user } = req;
    const { playlistId } = req.params;
    const { songId } = req.body;

    const playlist = await Playlist.findOne({
        where: {
            userId: user.id,
            id: playlistId
        }
    });

    const song = await Song.findByPk(songId);

    if (playlist && song) {
        const newPlaylistSong = await PlaylistSong.create({
            playlistId: playlist.id,
            songId: song.id
        });

        const playlistSong = await PlaylistSong.scope('addSongs').findOne({
            where: {
                id: newPlaylistSong.id
            }
        })

        return res.json(playlistSong)
    } else {
        if (!playlist) playlistCouldNotBeFound(next)
        if (!song) songCouldNotBeFound(next)
    }
});

// router.get('/:playlistId/songs', requireAuth, async (req, res, next) => {
//     const { user } = req;
//     const { playlistId } = req.params;

//     const playlist = await Playlist.findOne({
//         where: {
//             userId: user.id,
//             id: playlistId
//         }
//     });

//     if (playlist) {
//         const newPlaylistSong = await PlaylistSong.create({
//             playlistId: playlist.id,
//             songId: song.id
//         });

//         const playlistSong = await PlaylistSong.scope('addSongs').findOne({
//             where: {
//                 id: newPlaylistSong.id
//             }
//         })

//         return res.json(playlistSong)
//     } else {
//         if (!playlist) playlistCouldNotBeFound(next)
//     }
// })

router.put('/:playlistId', requireAuth, validatePlaylist, async(req, res, next) => {
    const { playlistId } = req.params;
    const { user } = req;

    const playlist = await Playlist.findOne({
        where: {
            id: playlistId,
            userId: user.id
        }
    });

    if(playlist){
        await playlist.update({...req.body});
        return res.json(playlist)
    }else{
        playlistCouldNotBeFound(next)
    }
})

router.get('/:playlistId', async (req, res, next) => {
    const { playlistId } = req.params;

    const playlist = await PlaylistSong.findOne({
        where: {
            playlistId
        }
    })

    if (playlist) {

        const playlistSongs = await Playlist.findOne({
            where: {
                id: playlist.playlistId
            },
            include: {
                model: Song,
                through: {attributes: []}
            }
        });
        console.log(playlistSongs)
        return res.json(playlistSongs)
    } else {
        playlistCouldNotBeFound(next)
    }
});

router.delete('/:playlistId', requireAuth, async(req, res, next) => {
    const { user } = req;
    const { playlistId } = req.params;

    const playlist = await Playlist.findOne({
        where: {
            id: playlistId,
            userId: user.id
        }
    });

    if(playlist){
        await playlist.destroy();

        res.status(200)
        return res.json({
            message: "Successfully deleted.",
            statusCode: 200
        })
    }else {
        playlistCouldNotBeFound(next)
    }
})

router.post('/', requireAuth, validatePlaylist, async (req, res, next) => {
    const { user } = req;
    const { name, imageUrl } = req.body;

    const playlist = await Playlist.create({
        name,
        previewImage: imageUrl,
        userId: user.id
    });

    if (playlist) {
        res.status(201);
        return res.json(playlist)
    } else {
        playlistCouldNotBeFound(next)
    }
});

router.get('/', requireAuth, async (req, res, next) => {
    const playlists = await Playlist.findAll();

    return res.json(playlists);
})


module.exports = router;
