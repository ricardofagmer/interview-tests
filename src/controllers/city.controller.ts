import { Response } from "express";
import { Request } from "express";
import { CityService } from "../services/city.service";


export class CityController {

    private service = new CityService();

    index(request: Request, response: Response,): Promise<any> {
        return this.service
            .getAll(request.query)
            .then(res => response.status(200).send(res))
            .catch(err => response.status(500).send(err))
    }


    show(request: Request, response: Response): Promise<any> {
        return this.service
            .getById(+request.params.id)
            .then(res => response.status(200).send(res))
            .catch(err => response.status(404).send(err));
    }

    create(request: Request, response: Response): Promise<any> {
        console.log(request.body);
        
        return this.service
            .create(request.body)
            .then(res => response.status(201).send(res))
            .catch(err => response.status(500).send(err));
    }

    update(request: Request, response: Response): Promise<any> {
        return this.service
            .update(request.body)
            .then(res => response.status(200).send(res))
            .catch(err => response.status(500).send(err));
    }

    delete(request: Request, response: Response): Promise<any> {
        return this.service
            .delete(+request.params.id)
            .then(res => {

                const status = res.affected && res.affected > 0 ? 204 : 404

                response.status(status).send();
            })
            .catch(err => response.status(500).send(err))
    }

    count(response: Response): Promise<any> {
        return this.service
            .count()
            .then(res => response.status(200).send(res))
            .catch(err => response.status(500).send(err))
    }

    personable(request: Request, response: Response) {
         return this.service
            .personable(request.query)
            .then(res => response.status(200).send(res))
            .catch(err => response.status(500).send(err)) 
    }
}