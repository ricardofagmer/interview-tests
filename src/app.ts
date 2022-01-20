import { TypeOrmConnection } from "./core/connection";
import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import routes from "./routes";

TypeOrmConnection.connect();

class App {
    public express;

    constructor() {
        this.express = express();
        this.express.use(express.urlencoded({ extended: true, limit: '50mb' }));
        this.express.use(express.json());

    /*     this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true })); */

        this.express.use(routes);
        this.express.listen(4000, () => console.log('...Server running on port: 4000'));

        this.express.use((error: any, req: any, res: any, next: any) => {
            res.status(error.status || 500)
            res.json({ error: error.message })
        });

        this.express.use((req: any, res: any, next: any) => {
            const error = new Error();
            error.message = 'Error';
            error.stack = 'Not Found';

            next(error)
        });
    }
}

export default new App().express;