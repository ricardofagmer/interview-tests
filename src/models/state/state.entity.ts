import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import City from "../city/city.entity";

@Entity('estado')
export class State {
    
    @PrimaryGeneratedColumn({ name: 'id_estado'})
    id?: number;

    @Column('varchar', { name: 'name', nullable: false, length: 30 })
    name?: string;

    @Column('varchar', { name: 'sigla', nullable: false, length: 2 })
    sigla?: string;

    @Column('integer', { name: 'id_pais', nullable: false })
    id_pais?: number;

    @Column('integer', { name: 'co_uf', nullable: false })
    co_uf?: number;

    @Column('integer', { name: 'co_regiao', nullable: false })
    co_regiao?: number;
        
    @OneToMany(() => City, (city) => city.state)
    cities?: City[];


}
