const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

const router = express.Router();

const validateSignup = [
    check('email')
    .exists({ checkFalsey: true})
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// router.use(validateSignup, (err, _req, _res, next) => {
//     if(!validateSignup){
//         err.message('Authentication required');
//         err.status(401);
//         next(err)
//     }
//     next()
// });
=======
router.get('/my', )
>>>>>>> modify-user-scopes
=======
// router.get('/my', requireAuth, async(req, res, next) => {
//     // const user = await User.findOne({
//     //     where: req.user
//     // });
//     console.log(req.user)
=======
>>>>>>> dev


router.get('/login', async(req, res, next) => {
    const { email, password } = req.body;

    const checkedUser = await User.login({credential: email, password});

    setTokenCookie(res, checkedUser)
    return res.json(checkedUser)
})

router.get('/my', requireAuth, async(req, res, next) => {
        const user = await User.findByPk(req.user.id);

        return res.json(user);
})

// router.post('/signup', )
>>>>>>> dev

router.post('/', validateSignup, async(req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
        user
    });
});


module.exports = router;
