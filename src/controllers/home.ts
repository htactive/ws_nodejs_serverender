import express from 'express';

export const homeRouter = express.Router();

homeRouter.get('/', (req , res , next) => {
  // get data from service
  const homeData = {
    name: 'Huan',
    gender: 'Male',
    showGender: false,
    favorites: ['Girl', 'Smoke']
  }

  res.render('index', {homeData});
})

homeRouter.get('/login', (req , res , next) => {
  res.render('auth/login', {'layout': 'l1'});
})