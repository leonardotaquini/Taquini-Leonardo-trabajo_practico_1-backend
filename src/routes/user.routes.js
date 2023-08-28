import express from 'express';
import { createUser } from '../controllers/user.controller.js'
import createUserSchema from '../models/UserSchema.js';
import { validateUserSchema } from '../middlewares/UserValidateSchema.js';
const router = express.Router();


router.post('/', createUserSchema, validateUserSchema, createUser );

export default router;