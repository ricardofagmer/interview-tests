import { getRepository } from "typeorm";
import { User } from "../entity/user/User";


export class UserService{

    getAll(params?: any){        
        return getRepository(User).find({where: params}).catch(err => console.log(err));
    }

    getById(id: number){
        return getRepository(User).findOneOrFail(id);
    }

    create(dto: User){
        return getRepository(User).save(dto);
    }

    update(dto: User){
        return getRepository(User).save({ id: dto.id, ...dto });
    }

    delete(id: number){
        return getRepository(User).delete(id);
    }
}