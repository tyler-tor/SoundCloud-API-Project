const router = require('express').Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const sessionRouter = require('./session');
const usersRouter = require('./users');
const songsRouter = require('./songs');
const myRouter = require('./my');
const albumRouter = require('./album');
const artistRouter = require('./artist');
const commentRouter = require('./comment');
const playlistRouter = require('./playlist');
const imagesRouter = require('./images');

router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/my', myRouter);
router.use('/albums', albumRouter);
router.use('/artists', artistRouter);
router.use('/comments', commentRouter);
router.use('/playlists', playlistRouter);
router.use('/images', imagesRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
})

router.get('/restore-user', (req, res) => {
    return res.json(req.user);
})

router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
});

router.post('/test', (req, res) => {
    res.json({
        requestBody: req.body
    });
});

module.exports = router;
