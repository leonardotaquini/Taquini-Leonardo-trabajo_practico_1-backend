import express from 'express';
import { createComment } from '../controllers/comment.controller.js';
import { createCommentSchema } from '../models/CommentSchema.js';
import { validateCommentSchema } from '../middlewares/CommentValidateSchema.js';

const router = express.Router();

router.post('/', createCommentSchema, validateCommentSchema, createComment );

export default router;
