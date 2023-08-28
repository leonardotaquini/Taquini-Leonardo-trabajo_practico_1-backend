import { checkSchema } from "express-validator";

const createUserSchema = checkSchema({
    name: {
        in: ['body'],
        notEmpty: true,
        isLength: {
            options: {min: 3}
        },
        errorMessage: 'Name must have at least 3 characters.'
    },
    email: {
        in: ['body'],
        notEmpty: true,
        isEmail: true,
        errorMessage: 'Email must be a valid email.'
    },
    password: {
        in: ['body'],
        notEmpty: true,
        isLength: {
            options: {min: 6}
        },
        errorMessage: 'Password must have at least 6 characters.'
    }
});

export default createUserSchema;