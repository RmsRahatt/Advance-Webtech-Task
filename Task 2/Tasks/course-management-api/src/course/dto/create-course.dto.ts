import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  instructor: string;

  @IsInt()
  @Min(1)
  @Max(6)
  @IsNotEmpty()
  @Type(() => Number)
  credits: number;

  @IsString()
  @IsOptional()
  description: string;
}