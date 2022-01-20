import express, { response } from "express";
import cityRoutes from './models/city/city.routes'

class Router {
      public router;

      constructor() {
            this.router = express.Router();
            this.router.get('/', (req, res) => res.send('It Works!'))            
            this.router.use('/city', cityRoutes);

      }
}
export default new Router().router