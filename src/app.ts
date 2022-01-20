import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { TypeOrmConnection } from "./core/connection";
import routes from "./routes";

TypeOrmConnection.connect();

export class App {

      public express;
      public slash;
      public port;

      constructor(public _port: number){
            this.port = _port;
            this.slash = 
            this.express = express();
            //this.express.use(express.urlencoded({ extended: true, limit: '50mb' }));
            //this.express.use(express.json());

            this.express.use(bodyParser.json());
            this.express.use(bodyParser.urlencoded({ extended: true }));
            this.express.use(routes);
            this.express.use(express.static('public'));      
            this.express.listen(this.port, () => console.log('...Servidor rodando na porta: ' +  `${this.port}`));

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
export default new App(6000).express;







