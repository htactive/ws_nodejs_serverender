import express from 'express';
import hbs from 'hbs';
import { router } from './controllers';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    this.app.use(express.static('public'));
    this.app.set('view engine', 'hbs');
    this.app.set('views', 'views');

    this.app.use('/', router);
    hbs.registerPartials('views/partials', function () {
      console.log('Render partials success');
    })

    hbs.registerHelper('joinArr', function(arr, option) {
      if (arr.length == 0) return '';
      return arr.join(', ');
    })


    // this.app.get('/', (req , res , next) => {
    //   res.setHeader('Content-Type', 'text/html');
    //   res.send(
    //     `<html lang="en">
    //     <head>
    //     <meta charset="utf-8">
    //     <title>Document</title>
    //     </head>
    //     <body>
    //     <h1>Server rendering here updated</h1>
    //     </body>
    //     </html>`
    //   )
    // })
  }
}

export default new App().app;