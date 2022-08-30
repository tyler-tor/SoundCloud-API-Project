const express = require('express');
const { restoreUser, requireAuth } = require('../utils/auth');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

if (process.env.NODE_ENV !== 'production') {
    // console.log('here')
    router.get('/api/csrf/restore', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      return res.json({});
    });
  }

if(process.env.NODE_ENV === 'production') {
    const path = require('path');

    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    router.use(express.static(path.resolve('../frontend/build')));

    router.get(/^(?!\/?api).&/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

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


module.exports = router;
