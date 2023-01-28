const express = require('express');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

router.post('/upload', requireAuth, singleMulterUpload('image'), async (req, res, next) => {
    const profileImageUrl = await singlePublicFileUpload(req.file);

    return res.json({ profileImageUrl });
});

module.exports = router;
