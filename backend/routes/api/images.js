const express = require('express');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3');
const router = express.Router();

router.post('/upload', singleMulterUpload('image'), async (req, res, next) => {
    try {
        const profileImageUrl = await singlePublicFileUpload(req.file);

        profileImageUrl.dataValues.token = await setTokenCookie(res, profileImageUrl);

        return res.json({profileImageUrl});

    }catch(e) {
        e.status = 400;
        e.message = 'Try another image';
        next(e);
    }
});

module.exports = router;
