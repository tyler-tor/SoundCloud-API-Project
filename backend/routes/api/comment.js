const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Song, User, Album, Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const app = require('../../app');

const router = express.Router();

const validateComment = [
    check('body')
        .exists({ checkFalsey: true })
        .withMessage('Comment body text is required'),
    handleValidationErrors
];

const commentCouldNotBeFound = (next) => {
    const e = new Error();
    e.message = "Comment couldn't be found";
    e.status = 404;
    next(e)
}

router.put('/:commentId', requireAuth, validateComment, async(req, res, next) => {
    const { commentId } = req.params;
    const { user } = req;

    const comment = await Comment.findOne({
        where: {
            id: commentId,
            userId: user.id
        }
    })

    if(comment){
        await comment.update({...req.body});

        return res.json(comment)
    }else{
        commentCouldNotBeFound(next)
    }
});

router.delete('/:commentId', requireAuth, async(req, res, next) => {
    const { commentId } = req.params;
    const { user } = req;

    const comment = await Comment.findOne({
        where: {
            id: commentId,
            userId: user.id
        }
    });

    if(comment){
        await comment.destroy();

        res.status = 200;
        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        })
    }else{
        commentCouldNotBeFound(next)
    }
})


module.exports = router
