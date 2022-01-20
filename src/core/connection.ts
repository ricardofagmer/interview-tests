import "reflect-metadata";
import { createConnection } from "typeorm";
import City from "../models/city/city.entity";
import { State } from "../models/state/state.entity";

export abstract class TypeOrmConnection {

    static connect() {
        return createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "lida@09",
            database: "typeorm",
            entities: [
                State,
                City,
            ],
            synchronize: false,
            logging: true
        }).then(connection => {
            // here you can start to work with your entities
        }).catch(error => console.log(error));
    }
}

