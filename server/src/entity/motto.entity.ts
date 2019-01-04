import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Motto extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 64,
    nullable: true
  })
  author: string;

  @Column({
    type: 'char',
    length: 64,
    nullable: false
  })
  text: string;

}
