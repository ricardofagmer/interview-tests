import express from "express";
import { UserController } from "../../controllers/user.controller";


class UserRoutes{
    public router;

    constructor(){

        this.router = express.Router( { mergeParams: true });
        
        this.router.get('/', (req, res) => new UserController().index(req, res));
        this.router.post('/', (req, res) => new UserController().create(req, res));
        this.router.patch('/', (req, res) => new UserController().update(req, res));

        this.router.get('/:id/item', (req, res) => new UserController().show(req, res));
        this.router.delete('/:id/item', (req, res) => new UserController().delete(req, res));

    }
}

export default new UserRoutes().router;