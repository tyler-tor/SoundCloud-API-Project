const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3');
const app = require('../../app');
const { route } = require('./my');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsey: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.post('/signup', singleMulterUpload('image'), validateSignup, async(req, res, next) => {
    const { email, password, username, firstName, lastName } = req.body;
    try{
        const profileImageUrl = await singlePublicFileUpload(req.file);
        const user = await User.signup({ email, username, password, profileImageUrl, firstName, lastName });

        user.dataValues.token = await setTokenCookie(res, user);

        return res.json(
            user
        );
    }catch(e){
        e.status = 403;
        e.message = 'User already exists'
        next(e)
    }
});


module.exports = router;
