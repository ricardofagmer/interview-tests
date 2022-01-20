import { FindManyOptions, getRepository, ObjectLiteral } from "typeorm";
import City from "../models/city/city.entity";

export class CityService {

    getAll(params?: {
        relations?: [];
    }) {
        
        if (params?.relations) {
            return getRepository(City).find({ relations: ['state'] });
        } else {
            return getRepository(City).find();
        }
    }

    getById(id: number) {
        return getRepository(City).findOneOrFail(id);
    }

    create(dto: City) {
        return getRepository(City).save(dto);
    }

    update(dto: City) {
        return getRepository(City).save({ id: dto.id, ...dto });
    }

    delete(id: number) {
        return getRepository(City).delete(id);
    }

    count() {
        return getRepository(City).findAndCount();
    }

    personable(query: any) {
        return getRepository(City)
            .createQueryBuilder()
            .where('name = :nome', { nome: query.nome })
            .getRawMany();
    }

    upload(file: File) {
        return getRepository(City)
            .createQueryBuilder()
            .where('name = :nome')
            .getRawMany();

    }

}


