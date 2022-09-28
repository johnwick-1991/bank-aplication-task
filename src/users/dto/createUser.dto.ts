import { IsNotEmpty, MinLength, IsEmail, MaxLength } from "class-validator"

export class CreateUserDto{
 
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsNotEmpty()
    
    fullname: string;

    @IsNotEmpty()
    @MaxLength(11)
    Id: Number

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
}

export class UserLoginDto{
    @IsNotEmpty()
    @MinLength(6)
    username: string;
  
    @IsNotEmpty()
    @MinLength(8)
    password: string;

}