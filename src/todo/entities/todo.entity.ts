import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { STATUS } from '../constant';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: STATUS.PROCESS })
  status: STATUS;
}
