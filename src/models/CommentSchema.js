import { checkSchema } from "express-validator";

const createCommentSchema = checkSchema({
    userId: {
        in: ["body"],
        notEmpty: true,
        isNumeric: true,
        errorMessage: "User id must be a number and not empty.",
    },
    postId: {
        in: ["body"],
        notEmpty: true,
        isNumeric: true,
        errorMessage: "Post id must be a number and not empty.",
    },
    content: {
        in: ["body"],
        notEmpty: true,
        isLength: {
            options: { min: 3 },
        },
        errorMessage: "Content must have at least 3 characters.",
    },
});

export { createCommentSchema };