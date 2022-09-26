import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Operator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  fullname: string;

  @Column({
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
