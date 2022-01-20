import "reflect-metadata";
import { createConnection}  from "typeorm";
import { User } from "../entity/user/User";

export abstract class TypeOrmConnection {

    static connect() {
        return createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "lida@09",
            database: "challange",
            entities: [
                User
            ],
            synchronize: false,
            logging: true
        }).then(connection => {
            // here you can start to work with your entities
        }).catch(error => console.log(error));
    }
}

