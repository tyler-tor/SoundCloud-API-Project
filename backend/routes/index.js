const express = require('express');
const { restoreUser, requireAuth } = require('../utils/auth');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/api/csrf/restore', (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});
router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
});

router.get('/hello/world', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});


module.exports = router;
