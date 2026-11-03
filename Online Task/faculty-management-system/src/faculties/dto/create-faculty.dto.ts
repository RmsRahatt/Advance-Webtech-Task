import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateFacultyDto {
  @IsNotEmpty()
  @IsString()
  Id: string;

  @IsNotEmpty()
  @IsString()
  Name: string;

  @IsNotEmpty()
  @IsString()
  expertise: string;

  @IsNotEmpty()
  @IsNumber()
  noOfPublication: number;
}