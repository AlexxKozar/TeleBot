import express from 'express';
import {getPosts, addPost, removePost} from '../controllers/posts.controller';

const router = express.Router();

/* GET users listing. */
router.get('/', getPosts);
router.put('/', addPost);
router.delete('/:id', removePost);

export default router;
