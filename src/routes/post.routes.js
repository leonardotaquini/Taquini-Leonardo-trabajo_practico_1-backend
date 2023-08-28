import express from 'express';
const router = express.Router();

import { getAll, getPostById, createPost, updatePost, deletePost } from '../controllers/post.controller.js';

router.get('/', getAll );
router.get('/:id', getPostById);
router.post('/', createPost );
router.put('/:id', updatePost );
router.delete('/:id', deletePost );

export default router;