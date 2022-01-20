import express from "express";
import UserRoutes from './entity/user/user.routes'

class Router {

    public router;

    constructor(){
        this.router = express.Router();
        this.router.get('/', (req, res) => res.send('It works!'));
        this.router.use('/user', UserRoutes)

    }
}
export default new Router().router;