import express from 'express';
import { homeRouter } from './home';
import { aboutRouter } from './about';

export const router = express.Router();

router.use('/', homeRouter);
router.use('/about-us', aboutRouter);