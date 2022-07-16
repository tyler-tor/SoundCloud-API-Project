const { validationResult } = require('express-validator');

//middleware for formatting errors from express-validator middleware
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()) {
        const errors = validationErrors
        .array()
        .map((error) => `${error.msg}`);

        const err = Error('Bad request.');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

const forbiddenErr = (next) => {
    const err = new Error('Forbidden');
    err.title = 'Forbidden';
    err.status = 403;
    return next(err);
}

// const validateSignUpBody = [
//     check('email')

// ]

module.exports = {
    handleValidationErrors,
    forbiddenErr
}
