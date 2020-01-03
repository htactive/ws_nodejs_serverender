import express from 'express';

export const aboutRouter = express.Router();

aboutRouter.get('/', (req , res , next) => {
  res.render('about-us/index');
})