import express from 'express';
const router = express.Router();
import createPostSchema from '../models/PostSchema.js';
import { validatePostSchema } from '../middlewares/PostValidateSchema.js';
import { getAll, getPostById, createPost, updatePost, deletePost, restorePost} from '../controllers/post.controller.js';

router.get('/', getAll );
router.get('/:id', getPostById);
router.post('/', createPostSchema, validatePostSchema, createPost );
router.put('/:id', createPostSchema , validatePostSchema, updatePost );
router.delete('/:id', deletePost );
router.get('/restore/:id', restorePost);

export default router;