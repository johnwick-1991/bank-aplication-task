import { IsNotEmpty, MinLength } from "class-validator";


export class CreateOperatorDto{
    @IsNotEmpty()
    fullname:string;

    @IsNotEmpty()
    @MinLength(6)
    username:string;

    @IsNotEmpty()
    @MinLength(8)
    password:string;

}