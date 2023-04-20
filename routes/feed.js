import express from 'express';

import * as feed from '../controllers/feed.js';

export const router = express.Router();

router.get('/posts', feed.getPosts);
