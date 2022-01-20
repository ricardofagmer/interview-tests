import { response, Response } from "express";
import { Request } from "express";
import { UserService } from "../services/user.service";


export class UserController {
    private service = new UserService();

    index(req: Request, res: Response): Promise<any> {
        return this.service
                   .getAll(req.query)
                   .then(data => res.status(200).send(data))
                   .catch(err => res.status(500).send(err));
    }

    show(req: Request, res: Response): Promise<any>{
        return this.service
                   .getById(+req.params.id)
                   .then(data => res.status(200).send(data))
                   .catch(err => res.status(500).send(err));
    }

    create(req: Request, res: Response): Promise<any>{
        return this.service
                   .create(req.body)
                   .then(data => res.status(202).send(data))
                   .catch(err => res.status(500).send(err));
    }

    update(req: Request, res:Response): Promise<any>{
        return this.service
                   .update(req.body)
                   .then(data => res.status(200).send(data))
                   .catch(err => res.status(500).send(err));
    }

    delete(req: Request, res:Response): Promise<any>{
       
        return this.service
                   .delete(+req.params.id)
                   .then(data => {
                        const status = data.affected && data.affected > 0 ? 204 : 404;

                        res.status(status).send({ message: 'Item not found'});
                   })
                   .catch(err => res.status(500).send(err));
    }
}