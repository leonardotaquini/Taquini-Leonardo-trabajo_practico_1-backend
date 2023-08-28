import { checkSchema } from "express-validator";

const createPostSchema = checkSchema({
  title: {
    in: ["body"],
    notEmpty: true,
    isLength: {
      options: { min: 3 },
    },
    errorMessage: "Title must have at least 3 characters.",
  },
  content: {
    in: ["body"],
    notEmpty: true,
    isLength: {
      options: { min: 3 },
    },
    errorMessage: "Content must have at least 3 characters.",
  },
  userId: {
    in: ["body"],
    notEmpty: true,
    isNumeric: true,
    errorMessage: "User id must be a number and not empty.",
  },
});

export default createPostSchema;