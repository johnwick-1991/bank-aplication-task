import { IsNotEmpty, MinLength, IsEmail } from "class-validator"

export class CreateUserDto{
 
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsNotEmpty()
    @MinLength(4)
    fullname: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
}