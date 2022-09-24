import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    username:string;

    @Column({
        nullable:false,
        default:'',
    })
    fullName:string;

    @Column({
        name: 'email_Address',
        nullable :false,
        default: '',
    })
    email: string;

    @Column({
        nullable:false,
    })
     
    password: string;
}

