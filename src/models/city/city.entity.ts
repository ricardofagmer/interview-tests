import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { State } from "../state/state.entity";

@Entity()
export default class City {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({ name: 'state_id' })
    stateId?: number;

    @ManyToOne(() => State, (state) => state.cities, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete'
    })
    @JoinColumn([{ name: 'state_id', referencedColumnName: 'id'}])
    state?: State;

   /*  @ManyToMany(() => Evento)
    @JoinTable({
      name: 'usuario_evento',
      joinColumns: [{ name: 'usuario_id', referencedColumnName: 'id' }],
      inverseJoinColumns: [{ name: 'evento_id', referencedColumnName: 'id' }],
    })
    @ApiProperty({ required: false, type: 'Evento[]' })
    @IsArray()
    @IsOptional()
    eventosConfirmados?: Evento[]; */
}